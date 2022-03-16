# React

- Developed by Facebook 2011
- Angular, Vue, Svelte
- Components = User Interfaces
- Root Component, Component Tree
- Independence
- Reusability
- Speed



# Structure

1. Dev Environment
2. Tutorial
3. Projects
4. Redux



node 版本问题

https://stackoverflow.com/questions/8191459/how-do-i-update-node-js



# 1. 创建第一个项目

进入目录后, 指令:

1. 创建react项目 

   `npx create-react-app [project name]`

2. `npm start`

   如果有`Error: getaddrinfo ENOTFOUND x86_64-apple-darwin13.4.0`的问题,

   先输入指令`unset HOST`

   package.json 包含所有需要的dependencies. 如果没有, 没办法. ->`npm install`

3. 所得的项目结构

   public

   src -> 我们大部分的操作在这

   build 隐藏文件, 要看可以`npm run build`

4. Clean boilerplate

​		src 里的内容全部删掉, 留一个空的index.js

5. **First Component (stateless functional component)**

   1. 需要import React

   2. need to set up function -> will be component!

      **In order for react to know that it is a react component, the function name need to have a capital letter**  (in order to render)

   3. entry point `ReactDom`, 联系 `index.js`和`index.html`-> `document.getElementById('root')`

      pass 1. What we are going to render 2. where we are going to render

   ```javascript
   import React from 'react';
   
   import ReactDom from 'react-dom';
   
   
   
   function Greeting(){  //function 名 要capitalize
     return <h4>This is Haida and this is my first component</h4>;
   }
   
   ReactDom.render(<Greeting/>, document.getElementById('root')); //What we are going to render 2. where we are going to render
   ```

   

   

   -> 1. **stateless functional component**

   ​	**Always return JSX**

   ​	-> What is **JSX** ? 

   ​	JSX指的是如下的变量声明:

   ```javascript
   const element = <h1>Hello, world!</h1>;
   ```

   这个有趣的标签语法既不是字符串也不是 HTML。

   它被称为 JSX，是一个 JavaScript 的语法扩展。我们建议在 React 中配合使用 JSX，JSX 可以很好地描述 UI 应该呈现出它应有交互的本质形式。JSX 可能会使人联想到模板语言，但它具有 JavaScript 的全部功能。

​	-> 2. 另一种方法

```javascript
import React from 'react';

import ReactDom from 'react-dom';



/* function Greeting(){  //function 名 要capitalize
  
  return <h4>This is Haida and this is my first component</h4>;
  
} */

const Greeting  = () => {
  return React.createElement('h1', {}, 'hello world');
}


ReactDom.render(<Greeting/>, document.getElementById('root'));
```

​	前一种方法的一个好处是, 如果要多个html元素叠加 比如

```javascript
return <div>
		<h4>Hello World</h4>
</div>

//但是 第二种方法:
const Greeting = () => {
  return React.createElement (
  	'div',
    {},
    React.createElement('h1', {}, 'helloworld')
  );
};
//复杂很多


```



​		 

# 2. JSX 简介

JSX指的是如下的变量声明:

```javascript
const element = <h1>Hello, world!</h1>;
```

这个有趣的标签语法既不是字符串也不是 HTML。

JSX可以很好地描述UI应该呈现出它应有交互的本质形式. 它具有JS的全部功能

JSX可以生成**React元素**



React并没有采用将标记与逻辑进行分离到不同文件这种人为地分离方式, 而是通过将两者共同存放在称之为"Component"的松散耦合单元之中 (**Component 包含标记和逻辑 **),来实现**Separation of concerns(SoC).** 



## JSX Rules

1. return single element

    ` return <h3> hello people</h3>`

   多个element 可以把它们都放在一个<div></div> 或者 <section></section>.. 里 或者 <React.Fragment>

2. div / section / article or Fragment

   多个element 可以把它们都放在一个<div></div> 或者 <section></section>.. 里 或者 <React.Fragment>

3. use camelCase for html attribute

4. className instead of class

     React没有这种  <div onClick>

    不用class 用className

   `<div className = ''>`

   

   因为 JSX 语法上更接近 JavaScript 而不是 HTML，所以 React DOM 使用 `camelCase`（小驼峰命名）来定义属性的名称，而不使用 HTML 属性名称的命名约定。

   例如，JSX 里的 `class` 变成了 [`className`](https://developer.mozilla.org/en-US/docs/Web/API/Element/className)，而 `tabindex` 则变为 [`tabIndex`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/tabIndex)。

   

5. close every element

6. Formatting 

​		不能一行只留一个return

 

### 在JSX中嵌入表达式 Nested Components

```jsx
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

在JSX语法中, 可以在大括号内放置任何有效的JS表达式, 比如 `2 + 2`,` formatName(user)` 等



例子: 调用JavaScript函数`formatName(user)`的结果, 将结果嵌入到<h1> 元素中

```react
function formatName(user) {
  return user.firstName + '' + user.lastName;
}

const user = {
  firstName:'Harper',
  lastName: 'Perez'
};

const element = {
  <h1>
  	Hello, {formatName(user)};
  </h1>
};

ReactDOM.render{
  element,
  document.getElementById('root')
};
```





```react
import React from 'react';
import ReactDom from 'react-dom';
// Nested Components, React Tools
function Greeting(){ 
  return (
    <div>
      <Person />
      <Message />
    </div>
    );
}
const Person = () => <h2>Haida</h2>;
const Message = () => {
  return <p>This is my message</p>;
}
ReactDom.render(<Greeting/>, document.getElementById('root'));
```



### JSX也是一个表达式

在编译之后，**JSX 表达式会被转为普通 JavaScript 函数调用**，并且对其取值后得到 JavaScript 对象。

也就是说，你可以在 `if` 语句和 `for` 循环的代码块中使用 JSX，**1. 将 JSX 赋值给变量，2. 把 JSX 当作参数传入，3. 以及从函数中返回 JSX** ：

```react
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

```

### JSX中指定属性

你可以通过使用引号，来将属性值指定为**字符串字面量**：

```react
const element = <a href="https://www.reactjs.org"> link </a>;
```

也可以使用大括号，来在属性值中**插入一个 JavaScript 表达式**：

```react
const element = <img src={user.avatarUrl}></img>;
```

在属性中嵌入 JavaScript 表达式时，不要在大括号外面加上引号。你应该仅使用引号（对于字符串值）或大括号（对于表达式）中的一个，对于同一属性不能同时使用这两种符号。 不能"{user.avatarUrl}"

 



# 3. Rendering Elements 元素渲染

**元素是构成React应用的最小砖块**, 它描述了你在屏幕上想看到的内容

```react
const element = <h1>Hello World</h1>
```

与浏览器的DOM元素不同-> React元素是创建开销极小的普通对象. React DOM会负责更新DOM来与React元素保持一致.

不要将Elements和Component混淆.



## 1. 将一个元素渲染为DOM

### 根DOM节点

假设HTML文件某处有一个`<div>`:

```html
<div id = "root"></div>
```

根DOM节点, 该节点内的所有内容都将由React DOM管理.

**仅使用 React 构建的应用通常只有单一的根 DOM 节点。**如果你在将 React 集成进一个已有应用，那么你可以在应用中包含任意多的独立根 DOM 节点。

想要将一个 React 元素渲染到根 DOM 节点中，只需把它们一起传入 [`ReactDOM.render()`](https://zh-hans.reactjs.org/docs/react-dom.html#render)：



```react
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```



## 2. 更新已渲染的元素

**React 元素是[不可变对象](https://en.wikipedia.org/wiki/Immutable_object)。**一旦被创建，你就无法更改它的子元素或者属性。一个元素就像电影的单帧：它代表了**某个特定时刻的 UI**。

-> 更新UI的唯一方式是创建一个全新的元素, 并将其传入`ReactDom.render()`.



```react
function tick() {
	const element = (
		<div>
			<h1>HelloWorld!</h1>
			<h2>It is {new Date().toLocaleTimeString()}.</h2>
		</div>
	);
	ReactDOM.render(element, document.getElementById('root'));
}
setInterval(tick, 1000);
```



**大多数React应用只会调用一次`ReactDOM.render()`**



## 3. React 只更新它需要更新的部分

ReactDOM 会将元素和它的子元素与它们之前的状态进行比较, 并只会进行必要的更新来使DOM达到预期的状态.



如上例.



# 4. Components & Props

**组件允许将UI拆分为独立可复用的代码片段, 并对每个片段进行独立构思.**

-> 组件, 从概念上类似于JS函数, 它**接受任意的入参(即“props”)**, 并返回用于描述页面展示内容的React元素.

## 1. 函数组件与class组件

定义组件最简单的方式就是编写JavaScript函数:

```react
function Welcome(props) {
	return <h1>Hello, {props.name}</h1>;
}
```

该函数是一个有效的React组件, 因为它接收唯一带有数据的"props"(代表属性)对象并返回一个React元素. -> **这类组件被称为 函数组件** , 因为它本质上就是JavaScript函数.



也可以用ES6的class来定义组件

```react
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```



## 2. 渲染组件

1. 之前遇到的React元素都只是DOM标签:

`const element = < div />;`

2. React也可以是用户自定义的组件

```react
const element = <Welcome name = "Sara" />;
```

当React元素为用户自定义组件 -> 它会将JSX所接收的属性(attributes) 以及子组件(children) 转换为单个对象传递给组件, 这个对象被称之为"props"

```react
function Welcome(props) {
	return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name = "Sara" />
ReactDOM.render(
	element,
	document.getElementById('root');
)
```

1. 我们调用 `ReactDOM.render()` 函数，并传入 `<Welcome name="Sara" />` 作为参数。
2. React 调用 `Welcome` 组件，并将 `{name: 'Sara'}` 作为 props 传入。
3. `Welcome` 组件将 `<h1>Hello, Sara</h1>` 元素作为返回值。
4. React DOM 将 DOM 高效地更新为 `<h1>Hello, Sara</h1>`。

**ReactDOM.render() -> element -> Welcome**



<u>**Welcome是自定义的组件, 可以理解成类似于html的<div><h1> 等, 这个自定义组件可以自己用一个函数来定义(组件名称必须以大写字母开头). 然后element 组件<Welcome>里的属性, 在function中会以props参数传入.**</u>



## 3. 组合组件

组件可以在其输出中引用其他组件, 如下, App组件, 引入Welcome组件. (可以多次渲染`Welcome`组件的`App`组件)

这就可以让我们用同一组件来抽象出任意层次的细节. 

按钮, 表单, 对话框, 甚至整个屏幕的内容: 在React应用程序中, 这些通常都会以组件的形式表示.

```react
function Welcome(props) {
	return <h1>Hello, {props.name}</h1>;
}

function App() {
	return (
		<div>
			<Welcome name = "sara" />
			<Welcome name = "Cahal" />
			<Welcome name = "Edite" />
		</div>
	);
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
```

.

## 4. 提取组件

将组建拆分为更小的组件



### 1. 

```react
function Comment(props) {
  return (
  	<div className = "Comment">
    	<div className = "UserInfo">
      	<img className = "Avatar"
          src = {props.author.avatarUrl}
          alt = {props.author.name}
         />
        <div className = "UserInfo-name">
        	{props.author.name}
        </div>
        <div className = "Comment-text">
        	{props.text}
        </div>
        <div className = "Comment-date">
        	{formatDate(props.date)}
        </div>
      </div>
    </div>
  );
}
```

该组件用于描述一个社交媒体网站上的评论功能，它接收 `author`（对象），`text` （字符串）以及 `date`（日期）作为 props。

该组件由于嵌套的关系，**变得难以维护**，且很难复用它的各个部分。因此，让我们从中**提取一些组件出来**。

### 2. 

`Avatar`

```react
function Avatar(props){
  return (
  	<img className = "Avatar"
     	src = {props.user.avatarUrl}
      alt = {props.user.name}
    />
  );
}
```

`Avatar` 不需知道它在 `Comment` 组件内部是如何渲染的。因此，我们给它的 props 起了一个更通用的名字：`user`，而不是 `author`。

我们建议从组件自身的角度命名 props，而不是依赖于调用组件的上下文命名。

```react
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <Avatar user={props.author} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

接下来, 提取`UserInfo`组建, 该组件在用户名旁渲染`Avatar`组件

```react
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}
```







## List

### Simple List

### Proper List











