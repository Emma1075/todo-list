# Todo List

> 本项目的 HTML 文件与 CSS 文件 来自于[TodoMVC App Template](https://github.com/tastejs/todomvc-app-template)，页面效果如下图所示：

![](https://github.com/tastejs/todomvc-app-css/raw/master/screenshot.png)



## JS的实现
为实现其功能，编写 js 文件

### 版本一
只使用 jQuery 对 DOM 元素进行操作，实现 todo-list 的所有效果。

- html 文件： `version1/index.html`
- js 文件：`version1/js/app.js`

[项目效果](http://www.sugar1075.online/todo-list/version1/index.html)

### 版本二
利用 js 模板引擎 `art-template`，进行操作。

> art-template github 项目地址：[art-emplate](https://github.com/aui/art-template)

- html 文件： `version2/index.html`
- js 文件：`version2/js/app.js`

[项目效果](http://www.sugar1075.online/todo-list/version2/index.html)

版本二对比版本一的优势：由操作 DOM 改为直接操作数据（对数据进行增删改查），然后对数据进行渲染，极大地提高了页面性能。
