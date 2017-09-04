(function(window) {
	'use strict';

	// Your starting point. Enjoy the ride!

	// 编写数据
	let data = {
		lists: [{
			name: 'use jQuery',
			completed: true
		}, {
			name: 'use art-template',
			completed: false
		}, {
			name: 'task3',
			completed: true
		}]
	}

	function render(mydata = data) {
		let $todoList = $('.todo-list');
		let tpl = template('todo-list', mydata);
		$todoList.html(tpl);
	}

	render();

	// 接下来的所以操作都改变 data 即可
	// 添加代办事项
	$('.new-todo').on('keydown', (e) => {

		if (e.keyCode == 13) {
			let inputValue = e.target.value;

			// 去除首尾空格后，如果是空字符串，则不添加
			if (inputValue.trim() == '') {
				return false;
			}

			data.lists.push({
				name: inputValue,
				completed: false
			});

			// 添加代办事项时默认 footer 中选项切换至 all
			$('.selected').removeClass('selected');
			$('.filters li').first().children().addClass('selected');
			render();

			e.target.value = '';
			countItems();
			$('.footer').show();
		}
	})

	// 删除代办事项,用事件代理
	$('.todo-list').on('click', '.destroy', (e) => {
		// 获取 index 值
		let index = $('.destroy').index($(e.target));
		data.lists.splice(index, 1);
		render();
		countItems();
	})

	// 完成未完成状态 切换
	$('.todo-list').on('click', '.toggle', (e) => {
		let index = $('.toggle').index($(e.target));

		data.lists[index].completed = !data.lists[index].completed;
		render();
		countItems();
	})

	// 删除已完成
	$('.clear-completed').on('click', (e) => {

		data.lists = data.lists.filter(function(ele, index) {
			return ele.completed == false;
		})

		render();
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
			allNum = data.lists.length,
			completedNum = 0;

		data.lists.forEach(e => {
			if (e.completed) {
				completedNum++;
			}
		})

		let activeNum = allNum - completedNum;
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
		let newData = {};

		switch (filter) {
			case 'Active':
				newData.lists = data.lists.filter(e => {
					return e.completed == false;
				})
				render(newData);
				break;
			case 'Completed':
				newData.lists = data.lists.filter(e => {
					return e.completed == true;
				})
				render(newData);
				break;
			default:
				render(data);
		}
	}

	countItems();

})(window);