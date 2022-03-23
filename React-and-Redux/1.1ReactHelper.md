# Component

1. 

```react

ReactDOM.render(componentToRender, targetNode)
```

componentToRender: the React element or component that you want to render

targetNode: the DOM note that you want to render the component to.

1. **Define an HTML Class in JSX** : className

2. **Create a Stateless Functional Component**

   想成接收参数并render it 的函数, 但是这个参数一定不能改变!

3. Create a React Component with ES6 class syntax.

4. **Create a Component with Composition**

5. **Use React to Render <u>Nested</u> Components**

6. Pass Props to a Stateless Functional Component

   ```react
   <App>
     <Welcome user='Mark' />
   </App>
   
   <CurrentDate date = {Date()}/>
   ```

   ```react
   const Welcome = (props) => <h1>Hello, {props.user}!</h1>
   ```

7. Pass an array as Props

   ```react
   <ParentComponent>
     <ChildComponent colors={["green", "blue", "red"]} />
   </ParentComponent>
   
   const ChildComponent = (props) => <p>{props.colors.join(', ')}</p>
   ```

8. Use Default Props

   ```react
   const ShoppingCart = (props) => {
     return (
       <div>
         <h1>Shopping Cart Component</h1>
       </div>
     )
   };
   // Change code below this line
   
   ShoppingCart.defaultProps = {items: 0}
   ```

9. 数字 <Items quantity={10} />

10. Use PropTypes to Define the Props you expect

    ```react
    
    MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }
    // Adding isRequired tells React that handleClick is a required property fot that component.
    
    
    // Example
    const Items = (props) => {
      return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
    };
    
    Items.propTypes = { quantity : PropTypes.number.isRequired}
    
    Items.defaultProps = {
      quantity: 0
    };
    
    
    ```

    



# State

- State 简述: State consists of any data your application needs to know about, that can change over time. 

- Create state:  Declaring a `state` property on the component class in its `constructor`.

  The `state` property must be set to a JS `object`.

  ```react
  this.state = {
    
  }
  You have access to the state object throughtout the life of your component.
  ```

- If a component is stateful, it will always have access to the data in `state` in its `render()` method. can access the data with `this.state`.

- **Set state with this.setState**

  ```react
  handleClick() {
      this.setState({
        text: "You clicked!"
      });
    }
  ```

- **Bind 'this' to a Class Method**

  - 除了 setting and updating `state`, you can also define methods for your component class.

    - A class method typically needs to use the `this `keyword so that it can access properties on the class(e.g. `state` `props`)
    - Inside the scope of the method. There are a few ways to allow your class methods to access `this` **在class Method中,有权可以访问this**

  - one way: bind `this` in the constructor so `this` becomes bound to the class methods when the component is initialized.

  - ```react
    class MyComponent extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          text: "Hello"
        };
        // Change code below this line
        this.handleClick = this.handleClick.bind(this);
        // Change code above this line
      }
      handleClick() {
        this.setState({
          text: "You clicked!"
        });
      }
      render() {
        return (
          <div>
            { /* Change code below this line */ }
            <button onClick = {this.handleClick}>Click Me</button>
            { /* Change code above this line */ }
            <h1>{this.state.text}</h1>
          </div>
        );
      }
    };
    ```

- **Use State to Toggle an Element**

  - Might need to know the previous state when updating the state.

    - Problems: state updates may be asynchronous -> React may batch multiple `setState()` calls into a single update.

    - -> You can't rely on the previous value of `this.state` or `this.props`when calculating the new value. -> **DONT USE CODE LIKE THIS**

      ```react
      this.setState({
        counter : this.state.counter + this.props.increment
      });
      ```

    - Instead, you should pass `setState` a function that allows you to access state and props. Using a function with `setState` guarantees you are working with the most current values of state and props/

      ```react
      this.setState((state, props) => ({
        ounter: state.counter + props.increment
      }));
      ```

      只要state的话也可以单独使用

- Create a Controlled Input

- Pass State as Props to Child Components

  we are going to be passing state, but **since state is local to its parent component we must use props to pass into the child component**. Using props in child components will allow us to keep all the state data in the parent component and we can pass the data in one direction to the children components.

- Pass a Callback as Props

  You can pass `state` as props to child components, but you're not limited to passing data. You can also pass handler functions or any method that's defined on a React component to a child component. 

- Use the Lifecycle method 

  > React components have several special methods that provide opportunities to perform actions at specific points in the lifecycle of a component. -> Lifecycle methods/hooks -> allow you to catch components at certain points in time.

  - `componentDidMount`
    - Most web developers, at some point, **need to call an API endpoint to retrieve data.**
    - The best practive with React is to place API calls or any calls to your server in the lifecycle method `componentDidMount`.  **This method is called after a component is mounted to the DOM.** Any calls to `setState()` here will trigger a re-rendering of your component. 
    - When you call an API in this method, and set your state with the data that the API returns, it will automatically trigger an update once you receive the data.

​				



# Event

- Add Event Listeners

  `componentDidMount`method is also the best place to attach any event listeners you need to add for specific functionality.

  React provides : synthetic event system -> regardless of the user's browser.

```react
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // Change code below this line
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown",this.handleKeyPress)
  }
  // Change code above this line
  handleEnter() {
    this.setState((state) => ({
      message: state.message + 'You pressed the enter key! '
    }));
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};
```

- Optimize Re-Renders with shouldComponentUpdate

  **So far:** If any component receives new `state` or new `props`, it re-renders itself and all its children. 

  -> **React provides a lifecycle method `shouldComponentUpdate()`** you can call when child components receive new `state` or `props`, and declare specifically if the components should update or not. 

- Introducing Inline Styles -> How to style those JSX elements you create in React.

  - Import styles from a stylesheet -> isn't much different at all.
  - Inline styles -> a very common in ReactJS development.
    - HTML: `<div style="color: yellow; font-size: 16px">Mellow Yellow</div>`
    - JSX: `<div style={{color: "yellow", fontSize: 16}}>Mellow Yellow</div>`

​		

- Use Advanced JavaScript in React Render Method
  - In previous challenges, you learned how to inject JavaScript code into JSX code using curly braces, `{ }`, for tasks like accessing props, passing props, accessing state, inserting comments into your code, and most recently, styling your components. 
  - **You can also write JavaScript directly in your `render` methods, before the `return` statement, *without* inserting it inside of curly braces.**

- Render with an If-Else Condition and more concise &&

  `{condition && <p>markup</p>}`

  ```react
  render() {
      // change code below this line
      if (this.state.display) {
        return (
           <div>
             <button onClick={this.toggleDisplay}>Toggle Display</button>
             <h1>Displayed!</h1>
           </div>
        );
      } else {
        return (
          <div>
             <button onClick={this.toggleDisplay}>Toggle Display</button>
           </div>
        );
      }
    }
  
  
   render() {
      // Change code below this line
  
      return (
         <div>
           <button onClick={this.toggleDisplay}>Toggle Display</button>
          {this.state.display && <h1>Displayed!</h1>}
         </div>
      );
    }
  ```

- Render conditionally from Props

  - Using props to conditionally render code

- **Use Array.filter() to Dynamically Filter an Array**

  `let onlineUsers = users.filter(user => user.online);`

  ```react
  this.state = {
        users: [
          {
            username: 'Jeff',
            online: true
          },
          {
            username: 'Alan',
            online: false
          },
          {
            username: 'Mary',
            online: true
          },
          {
            username: 'Jim',
            online: false
          },
          {
            username: 'Sara',
            online: true
          },
          {
            username: 'Laura',
            online: true
          }
        ]
      };
    }
  
  
  const usersOnline = this.state.users.filter(user => user.online === true);
  const renderOnline = usersOnline.map(user => <li key={user.username}>{user.username}</li>);
  ```

- **Render React on the Server with renderToString**

  There are two key reasons why rendering on the server may be used in a real world app. First, without doing this, your React apps would consist of a relatively empty HTML file and a large bundle of JavaScript when it's initially loaded to the browser. This may not be ideal for search engines that are trying to index the content of your pages so people can find you. If you render the initial HTML markup on the server and send this to the client, the initial page load contains all of the page's markup which can be crawled by search engines. Second, this creates a faster initial page load experience because the rendered HTML is smaller than the JavaScript code of the entire app. React will still be able to recognize your app and manage it after the initial load.

  `ReactDOMServer.renderToString(<App />);`

  
