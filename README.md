# Todo List

> 本项目的 HTML 文件与 CSS 文件 来自于[TodoMVC App Template](https://github.com/tastejs/todomvc-app-template)，页面效果如下图所示：

![](https://github.com/tastejs/todomvc-app-css/raw/master/screenshot.png)



## JS的实现
为实现其功能，编写 js 文件， 放于 `todo-list/js` 文件夹中。

### 版本一
只使用 jQuery 对 DOM 元素进行操作，实现 todo-list 的所有效果。

- html 文件： `todo-list/index-version1.html`
- js 文件：`todo-list/js/app-version1.js`

### 版本二
利用 js 模板引擎 `art-template`，进行操作。

> art-template github 项目地址：[art-emplate](https://github.com/aui/art-template)

- html 文件： `todo-list/index-version2.html`
- js 文件：`todo-list/js/app-version2.js`

版本二对比版本一的优势：由操作 dom 改为操作数据，极大地提高了页面性能。

---

注：`index.html`为默认文件，内容与版本一`index-version1.html`相同。