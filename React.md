- [ReactHelper](ReactHelper.md)



<!-- TOC -->

- [Structure](#structure)
- [1. 创建第一个项目](#1-创建第一个项目)
- [2. JSX 简介](#2-jsx-简介)
  - [JSX Rules](#jsx-rules)
    - [在JSX中嵌入表达式 Nested Components](#在jsx中嵌入表达式-nested-components)
    - [JSX也是一个表达式](#jsx也是一个表达式)
    - [JSX中指定属性](#jsx中指定属性)
- [3. Rendering Elements 元素渲染](#3-rendering-elements-元素渲染)
  - [1. 将一个元素渲染为DOM](#1-将一个元素渲染为dom)
    - [根DOM节点](#根dom节点)
  - [2. 更新已渲染的元素](#2-更新已渲染的元素)
  - [3. React 只更新它需要更新的部分](#3-react-只更新它需要更新的部分)
- [4. Components & Props](#4-components--props)
  - [1. 函数组件与class组件](#1-函数组件与class组件)
  - [2. 渲染组件](#2-渲染组件)
  - [3. 组合组件 -> 在一个组件中使用别的组件.](#3-组合组件---在一个组件中使用别的组件)
  - [4. 提取组件 -> 将组件拆分为更小的组件](#4-提取组件---将组件拆分为更小的组件)
    - [1.](#1)
    - [2.](#2)
  - [5. Props的只读性 -> 函数中props绝不能被更改.](#5-props的只读性---函数中props绝不能被更改)
- [5. State&生命周期](#5-state生命周期)
  - [(1). 封装时钟的外观](#1-封装时钟的外观)
  - [(2)State](#2state)
  - [(3) 将函数组件转换成class组件](#3-将函数组件转换成class组件)
  - [(4) 向class组件中添加局部的state](#4-向class组件中添加局部的state)
  - [(5). 将生命周期方法添加到Class中](#5-将生命周期方法添加到class中)
  - [正确使用State](#正确使用state)
    - [1. 不要直接修改State](#1-不要直接修改state)
    - [](#)
    - [2. State的更新可能是异步的](#2-state的更新可能是异步的)
    - [3. State的更新会被合并](#3-state的更新会被合并)
  - [数据时向下流动的](#数据时向下流动的)
- [State 和 Props总结](#state-和-props总结)
    - [总结](#总结)
  - [区别](#区别)
- [6. 事件处理 - 待理解](#6-事件处理---待理解)
  - [向事件处理程序传递参数](#向事件处理程序传递参数)
- [7. 条件渲染](#7-条件渲染)
    - [1. 元素变量](#1-元素变量)
    - [2. 与运算符 &&](#2-与运算符-)
    - [3. 三目运算符](#3-三目运算符)
    - [4. 阻止组件渲染](#4-阻止组件渲染)
  - [List](#list)
    - [Simple List](#simple-list)
    - [Proper List](#proper-list)

<!-- /TOC -->


 React

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

**Summary: 对组件,可以将其与html的<div><h1> 等一起联系在一起, 典型的就是函数组件, 我们可以自己人写一个函数, 定义这个组件, 这个函数接收的参数, 就会是 写这个Components时的属性.**



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



## 3. 组合组件 -> 在一个组件中使用别的组件.

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

## 4. 提取组件 -> 将组件拆分为更小的组件

将组件拆分为更小的组件



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

该组件由于嵌套的关系，**变得难以维护**，且很难复用它的各个部分。因此，让我们从中**提取一些组件出来**。 单独写成一个函数, 之后在Comment中就可以直接用这个组件.

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



根据经验来看,如果UI中有一部分被多次使用(`Button`, `Panel`, `Avatar`),或者组件本身就足够复杂(`App`, `FeedStory`, `Comment`), 那么它就是一个可提取出独立组件的候选项.



## 5. Props的只读性 -> 函数中props绝不能被更改.

**组件无论是函数声明还是class声明, 都绝对不能修改自身的props.**

```react
function sum(a, b) {
	return a + b;
}
```

该函数是**纯函数**-> 不会尝试更改入参, 且多次调用下相同的入参始终返回相同的结果.

```react
function withdraw(account, amount) {
  account.total -= amount;
}
```

这个函数不是纯函数, 它更改了自己的入参.



React有一个严格的规则:

**所有 React 组件都必须像纯函数一样保护它们的 props 不被更改**



# 5. State&生命周期

`state`是什么呢？

> State is similar to props, but it is private and fully controlled by the component.
>
> State consists of any data your application needs to know about, that can change over time.

一个组件的**显示形态可以由数据状态和外部参数所决定**，**外部参数也就是`props`，而数据状态就是`state`。**

简化版:

1. 在组件初始化的时候，通过`this.state`给组件设定一个初始的`state`，在第一次`render`的时候就会用这个数据来渲染组件。

   ``` jsx
   export default class ItemList extends React.Component{
     constructor(){
       super();
       this.state = {
         itemList:'一些数据',
       }
     }
     render(){
       return (
         {this.state.itemList}
       )
     }
   }
   ```

2. 与props不同的一点是, state可以被改变. 但是不可以直接改变this.state = ... 而是通过`this.setState()`方法来修改state.

   **注意：通过`this.state=`来初始化`state`，使用`this.setState`来修改`state`，`constructor`是唯一能够初始化的地方。**



在<u>3.元素渲染</u>中可知, 可以通过调用`ReactDOM.render()`来修改我们想要渲染的元素:

```react
function tick() {
  const element = (
  	<div>
    	<h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  RenderDOM.render(
  	element,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);
```

本节学习: 如何封装真正可复用的`Clock`组件. 它将设置自己的计时器并每秒更新一次.



## (1). 封装时钟的外观

```react
function Clock(props) {
  return (
  	<div>
    	<h1>Hello,world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  RenderDom.render(
  	<Clock date = {new Date()} />
    document.getElementById('root')
  );
}
```

缺少: `Clock`组件需要设置一个计时器, 并且需要每秒更新UI

​		 并且理想情况下, 我们希望编写一次代码, 便可以让`Clock`组件自我更新.

```react
ReactDOM.render(
	<Clock />,
  document.getElementById('root')
);
```



## (2)State

我们需要在`Clock`组件中添加"state"来实现这个功能.

**State于props类似, 但是state是私有的, 并且完全受控于当前组件**.



## (3) 将函数组件转换成class组件

5 steps:

1. 创建一个同名ES6 class, 并且继承于`React.Component`
2. 添加一个空的`render()`方法
3. 将函数体移动到`render()`方法之中.
4. 在`render()`方法中使用`this.props`替换props
5. 删除剩余的空函数声明



```react
// Clock组件被定义为class
class Clock extends React.Component {
  render() {
    return (
  		<div>
    		<h1>Hello,world!</h1>
      	<h2>It is {this.props.date.toLocaleTimeString()}.</h2>
    	</div>
  	); 
  }
}
```

每次组件更新时 `render` 方法都会被调用，但只要在相同的 DOM 节点中渲染 `<Clock />` ，就仅有一个 `Clock` 组件的 class 实例被创建使用。这就使得我们可以使用如 state 或生命周期方法等很多其他特性。

## (4) 向class组件中添加局部的state

三步将`date`从props移动到state中:

1. 把`render()`方法中的`this.props.date`替换成`this.state.date`:

2. 添加一个`class`构造函数, 然后在该函数中为`this.state`赋初值

   通过以下方式将`props`传递到父类的构造函数中

```react
constructor(props) {
  super(props);
  this.state = {date: new Date()};
}

```

Class组件应该始终使用props参数来调用父类的构造函数

3. 移除`<Clock />`元素中的`date`属性:

```react
ReactDOM.render(
	<Clock />,
	document.getElementById('root')
);
```

->

```react
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  
  render() {
    return (
  		<div>
    		<h1>Hello,world!</h1>
      	<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
    	</div>
  	); 
  }
}

ReactDOM.render(
	<Clock />,
  document.getElementById('root')
);
```



我们会设置 `Clock` 的计时器并每秒更新它。



## (5). 将生命周期方法添加到Class中

在具有许多组件的应用程序中, 当组件被销毁时释放所占用的资源是非常重要的.

- 挂载Mount: **在`Clock`组件第一次被渲染到DOM中的时候, 就为其设置一个计时器** -> ***<u>挂载 mount.</u>***
- 卸载unmount: **在`Clock`组件被删除的时候, 应该清除计时器.**



**生命周期方法: **可以为class组件声明一些特殊的方法, 当组件挂载或卸载时就会去执行这些方法

- `componentDidMount`: 在组件已经被渲染到DOM中后运行. 所以, 最好在这里设置计时器

```react
componentDidMount() {
	this.timerID = setInterval(
		() => this.tick(),
		1000
	);
}
```

接下来把计时器的ID保存在`this`之中. 尽管 `this.props` 和 `this.state` 是 React 本身设置的，且都拥有特殊的含义，但是其实你可以向 class 中随意添加不参与数据流（比如计时器 ID）的额外字段。

- `componentWillUnmount`: 清除计时器

  ```react
  componentWillUnmount() {
  	clearInterval(this.timerID);
  }
  ```

  最后，我们会实现一个叫 `tick()` 的方法，`Clock` 组件每秒都会调用它。

  使用 `this.setState()` 来时刻更新组件 state：

->

```react
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

    // 3. 当 Clock 的输出被插入到 DOM 中后，React 就会调用 ComponentDidMount() 生命周期方法。在这个方法中，Clock 组件向浏览器请求设置一个计时器来每秒调用一次组件的 tick() 方法。
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }


  //5. 一旦 Clock 组件从 DOM 中被移除，React 就会调用 componentWillUnmount() 生命周期方法，这样计时器就停止了。
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  //4. 浏览器每秒都会调用一次 tick() 方法。 在这方法之中，Clock 组件会通过调用 setState() 来计划进行一次 UI 更新。得益于 setState() 的调用，React 能够知道 state 已经改变了，然后会重新调用 render() 方法来确定页面上该显示什么。这一次，render() 方法中的 this.state.date 就不一样了，如此一来就会渲染输出更新过的时间。React 也会相应的更新 DOM。
  tick() {
    this.setState({
      date: new Date()
    });
  }

  //2. 之后React会调用组件的render()方法. 这就是React确定该在页面上展示什么的方式. 然后React更新DOM来匹配Clock渲染的输出.
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}


// 1. <Clock /> 被传给ReactDOM.render()的时候, React会调用Clock组件的构造函数. -> 因为Clock需要显示当前的事件, 所以它会用一个包含当前时间的对象来初始化this.state. 我们会在之后更新state
ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```



## 正确使用State

### 1. 不要直接修改State

```react
//Wrong
this.state.comment = 'Hello'

//Correct: 使用setState()
this.setState({comment:'Hello'});
```

构造函数是唯一可以给 `this.state` 赋值的地方。

### 

### 2. State的更新可能是异步的

出于性能考虑，React 可能会把多个 `setState()` 调用合并成一个调用。

因为 `this.props` 和 `this.state` 可能会异步更新，所以你不要依赖他们的值来更新下一个状态。

例如，此代码可能会无法更新计数器：

```react
// Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});
```

要解决这个问题，可以让 `setState()` 接收一个函数而不是一个对象。这个函数用上一个 state 作为第一个参数，将此次更新被应用时的 props 做为第二个参数：

```react
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```



### 3. State的更新会被合并



当你调用 `setState()` 的时候，React 会把你提供的对象合并到当前的 state。

例如，你的 state 包含几个独立的变量：

```react
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: []
    };
  }
```

然后你可以分别调用 `setState()` 来单独地更新它们：

```react
  componentDidMount() {
    fetchPosts().then(response => {
      this.setState({
        posts: response.posts      });
    });

    fetchComments().then(response => {
 
```

这里的合并是浅合并，所以 `this.setState({comments})` 完整保留了 `this.state.posts`， 但是完全替换了 `this.state.comments`。



## 数据时向下流动的

不管是父组件或是子组件都无法知道某个组件是有状态的还是无状态的，并且它们也并不关心它是函数组件还是 class 组件。

这就是为什么称 state 为局部的或是封装的的原因。除了拥有并设置了它的组件，其他组件都无法访问。

组件可以选择把它的 state 作为 props 向下传递到它的子组件中：

```react
<FormattedDate date={this.state.date} />
```

`FormattedDate` 组件会在其 props 中接收参数 `date`，但是组件本身无法知道它是来自于 `Clock` 的 state，或是 `Clock` 的 props，还是手动输入的：

```react
function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}
```



# State 和 Props总结

在任何应用中，数据都是必不可少的。我们需要直接的改变页面上一块的区域来使得视图的刷新，或者间接地改变其他地方的数据。React的数据是自顶向下单向流动的，即从父组件到子组件中，组件的数据存储在`props`和`state`中

### 总结

`state`的主要作用是用于组件保存、控制以及修改自己的状态，它只能在`constructor`中初始化，它算是组件的私有属性，不可通过外部访问和修改，只能通过组件内部的`this.setState`来修改，修改`state`属性会导致组件的重新渲染。

## 区别

1. `state`是组件自己管理数据，控制自己的状态，可变；
2. `props`是外部传入的数据参数，不可变；
3. 没有`state`的叫做无状态组件，有`state`的叫做有状态组件；
4. 多用`props`，少用`state`。也就是多写无状态组件。



# 6. 事件处理 - 待理解

> React元素的事件处理和DOM元素的很相似, 但是有一点语法上的不同:

- React事件的命名采用小驼峰式(camelCase), 而不是纯小写.
- 使用JSX语法时你需要传入一个函数作为事件处理函数, 而不是一个字符串.

例如. 传统的HTML

```html
<button onclick="activateLasers()">
	Activate Lasers
</button>
```

在React中略不同

```react
<button onClick={activateLasers}>
	Activate Lasers
</button>
```

- 在 React 中另一个不同点是你不能通过返回 `false` 的方式阻止默认行为。你必须显式的使用 `preventDefault`。例如，传统的 HTML 中阻止表单的默认提交行为，你可以这样写：

  ```html
  <form onsubmit="console.log('You clicked submit.'); return false">
    <button type ="submit">
      Submit
    </button>
  </form>
  ```

  在React:

  ```react
  function Form() {
    function handleSubmit(e) {
      e.preventDefault();
      console.log('You clicked submit.');
    }
    
    return (
    	<form onSubmit = {handleSubmit}>
      	<button type="submit">Submit</button>
      </form>
    );
  }
  ```

  在这里，`e` 是一个合成事件。React 根据 [W3C 规范](https://www.w3.org/TR/DOM-Level-3-Events/)来定义这些合成事件，所以你不需要担心跨浏览器的兼容性问题。React 事件与原生事件不完全相同。如果想了解更多，请查看 [`SyntheticEvent`](https://zh-hans.reactjs.org/docs/events.html) 参考指南。

- 使用 React 时，你一般不需要使用 `addEventListener` 为已创建的 DOM 元素添加监听器。事实上，你只需要在该元素初始渲染的时候添加监听器即可。

- 当你使用 [ES6 class](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes) 语法定义一个组件的时候，通常的做法是将事件处理函数声明为 class 中的方法。例如，下面的 `Toggle` 组件会渲染一个让用户切换开关状态的按钮：

```react
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // 为了在回调中使用 `this`，这个绑定是必不可少的    this.handleClick = this.handleClick.bind(this);  }

  handleClick() {    this.setState(prevState => ({      isToggleOn: !prevState.isToggleOn    }));  }
  render() {
    return (
      <button onClick={this.handleClick}>        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
)
```

你必须谨慎对待 JSX 回调函数中的 `this`，在 JavaScript 中，class 的方法默认不会[绑定](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind) `this`。如果你忘记绑定 `this.handleClick` 并把它传入了 `onClick`，当你调用这个函数的时候 `this` 的值为 `undefined`。

这并不是 React 特有的行为；这其实与 [JavaScript 函数工作原理](https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/)有关。通常情况下，如果你没有在方法后面添加 `()`，例如 `onClick={this.handleClick}`，你应该为这个方法绑定 `this`。

如果觉得使用 `bind` 很麻烦，这里有两种方式可以解决。如果你正在使用实验性的 [public class fields 语法](https://babeljs.io/docs/plugins/transform-class-properties/)，你可以使用 class fields 正确的绑定回调函数：

```react
class LoggingButton extends React.Component {
  // 此语法确保 `handleClick` 内的 `this` 已被绑定。  
  // 注意: 这是 *实验性* 语法。  
  handleClick = () => {    console.log('this is:', this);  }
  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}
```

[Create React App](https://github.com/facebookincubator/create-react-app) 默认启用此语法。

如果你没有使用 class fields 语法，你可以在回调中使用[箭头函数](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions)：

```react
class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // 此语法确保 `handleClick` 内的 `this` 已被绑定。
    return (      <button onClick={() => this.handleClick()}>        Click me
      </button>
    );
  }
}
```

此语法问题在于每次渲染 `LoggingButton` 时都会创建不同的回调函数。在大多数情况下，这没什么问题，但如果该回调函数作为 prop 传入子组件时，这些组件可能会进行额外的重新渲染。我们通常建议在构造器中绑定或使用 class fields 语法来避免这类性能问题。

## 向事件处理程序传递参数

在循环中，通常我们会为事件处理函数传递额外的参数。例如，若 `id` 是你要删除那一行的 ID，以下两种方式都可以向事件处理函数传递参数：

```
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

上述两种方式是等价的，分别通过[箭头函数](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)和 [`Function.prototype.bind`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind) 来实现。

在这两种情况下，React 的事件对象 `e` 会被作为第二个参数传递。如果通过箭头函数的方式，事件对象必须显式的进行传递，而通过 `bind` 的方式，事件对象以及更多的参数将会被隐式的进行传递。





# 7. 条件渲染

> 在React中, 可以创建不同的组件来封装各种你需要的行为. 然后, 依据应用的不同状态，你可以只渲染对应状态下的部分内容。

```react
function UserGreeting(props) {
  return <h1>Welcome back!</h1>
}
function GuestGreeting(props) {
  return <h1>Please Sign up.</h1>
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

ReactDOM.render(
	<Greeting isLoggedIn = {false} />,
  document.getElementById('root')
);
```



### 1. 元素变量

```react

//它们分别代表了注销和登录按钮：
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}
```

-> 创建 LoginControl的 有状态组件

```react
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {      button = <LogoutButton onClick={this.handleLogoutClick} />;    } else {      button = <LoginButton onClick={this.handleLoginClick} />;    }
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />        {button}      </div>
    );
  }
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);
```

### 2. 与运算符 &&

通过花括号包裹代码，你可以[在 JSX 中嵌入表达式](https://zh-hans.reactjs.org/docs/introducing-jsx.html#embedding-expressions-in-jsx)。这也包括 JavaScript 中的逻辑与 (&&) 运算符。它可以很方便地进行元素的条件渲染：

```react
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&        <h2>          You have {unreadMessages.length} unread messages.        </h2>      }    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
  <Mailbox unreadMessages={messages} />,
  document.getElementById('root')
);
```



**之所以能这样做，是因为在 JavaScript 中，`true && expression` 总是会返回 `expression`, 而 `false && expression` 总是会返回 `false`。**

**因此，如果条件是 `true`，`&&` 右侧的元素就会被渲染，如果是 `false`，React 会忽略并跳过它。**

请注意，返回 false 的表达式会使 `&&` 后面的元素被跳过，但会返回 false 表达式。在下面示例中，render 方法的返回值是 `<div>0</div>`。

```react
render() {
  const count = 0;  return (
    <div>
      { count && <h1>Messages: {count}</h1>}    </div>
  );
}
```

### 3. 三目运算符

另一种内联条件渲染的方法是使用 JavaScript 中的三目运算符 [`condition ? true : false`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)。

在下面这个示例中，我们用它来条件渲染一小段文本

```react
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.    </div>
  );
}
```

同样的，它也可以用于较为复杂的表达式中，虽然看起来不是很直观：

```react
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      {isLoggedIn        ? <LogoutButton onClick={this.handleLogoutClick} />
        : <LoginButton onClick={this.handleLoginClick} />      }
    </div>  );
}
```

就像在 JavaScript 中一样，你可以根据团队的习惯来选择可读性更高的代码风格。需要注意的是，如果条件变得过于复杂，那你应该考虑如何[提取组件](https://zh-hans.reactjs.org/docs/components-and-props.html#extracting-components)。

### 4. 阻止组件渲染

隐藏组件，即使它已经被其他组件渲染。若要完成此操作，你可以让 `render` 方法直接返回 `null`，而不进行任何渲染。

下面的示例中，`<WarningBanner />` 会根据 prop 中 `warn` 的值来进行条件渲染。如果 `warn` 的值是 `false`，那么组件则不会渲染:

```react
function WarningBanner(props) {
  if (!props.warn) {    return null;  }
  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);
```

在组件的 `render` 方法中返回 `null` 并不会影响组件的生命周期。例如，上面这个示例中，`componentDidUpdate` 依然会被调用。

## List

### Simple List

### Proper List











