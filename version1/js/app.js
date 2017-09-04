(function(window) {
	'use strict';

	// Your starting point. Enjoy the ride!

	// 添加代办事项
	$('.new-todo').on('keydown', (e) => {

		if (e.keyCode == 13) {
			let inputValue = e.target.value;

			let tpl = `
				<li>
					<div class="view">
						<input class="toggle" type="checkbox">
						<label>${inputValue}</label>
						<button class="destroy"></button>
					</div>
					<input class="edit" value="${inputValue}">
				</li>

			`;

			// 去除首尾空格后，如果是空字符串，则不添加
			if (inputValue.trim() == '') {
				return false;
			}

			// 添加代办事项时默认 footer 中选项切换至 all
			$('.selected').removeClass('selected');
			$('.filters li').first().children().addClass('selected');

			$('.todo-list').append(tpl);
			e.target.value = '';
			countItems();
			$('.footer').show();
		}
	})

	// 删除代办事项,用事件代理
	$('.todo-list').on('click', '.destroy', (e) => {
		let item = e.target.closest('li');
		$(item).remove();

		countItems();
	})

	// 完成未完成状态 切换
	$('.todo-list').on('click', '.toggle', (e) => {
		let isChecked = $(e.target).prop('checked');

		if (isChecked) {
			$(e.target).closest('li').addClass('completed');
		} else {
			$(e.target).closest('li').removeClass('completed');
		}
		countItems();
	})

	// 删除已完成
	$('.clear-completed').on('click', (e) => {
		$('.completed').remove();
		countItems();
	})


	// footer 中各个筛选功能
	$('.filters').on('click', 'a', (e) => {

		$(e.target).addClass('selected')
			.parent().siblings().children()
			.removeClass();

		countItems();
	})

	// 获取条目数
	function countItems() {
		let $count = $('.todo-count').children(),
			allNum = $('.todo-list').children().length,
			completedNum = $('.todo-list .completed').length,
			activeNum = allNum - completedNum;

		let selectedA = $('.filters .selected').text();

		let tempObj = {
			'All': allNum,
			'Active': activeNum,
			'Completed': completedNum
		};

		$count.text(tempObj[selectedA]);

		if ($count.text() == 0) {
			$('.footer').hide();
		}

		let filter = $('.selected').text();
		showItems(filter);
	}

	// 显示筛选出来的条目
	function showItems(filter) {
		switch (filter) {
			case 'Active':
				$('.todo-list').children().show();
				$('.todo-list .completed').hide();
				break;
			case 'Completed':
				$('.todo-list').children().hide();
				$('.todo-list .completed').show();
				break;
			default:
				$('.todo-list').children().show();
		}
	}

	countItems();

})(window);