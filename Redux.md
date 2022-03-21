# 总结:

1. Redux Store: store entire state of the applications.

   创建 `const store = Redux.createStore(reducer);`

2. Get current state method: `getState()`

3. all state updates are triggered by dispatching **actions**

   1. Define Redux action

   2. Create a Redux action creator

      ```react
      //e.g. 1
      const action = {
        type : 'LOGIN'
      }
      
      function actionCreator {
        return action;
      }
      
      //e.g. 2
      const loginAction = () => {
        return {
          type : "LOGIN"
        }
      }
      ```

   3. Dispatch an Action Event : take the action creator as argument.

      `store.dispatch(actionCreator())`

4. 回到1. What is the reducer? Handle an Action in the Store  -> How to respond to the action

   两个参数, 1. state 常常会在这里设置默认状态或者初始状态, 2. action

   ```react
   const reducer = (state = defaultState, action) => {
     // Change code below this line
     if (action.type === 'LOGIN') {
       return {
         login: true
       }
     } else {
       return state;
     }
     // Change code above this line
   };
   ```

5. subscribe listener functions to the store: `store.subscribe()`

6. Combine Multiple Reducers: `combineReducers`

   ```react
   const rootReducer = Redux.combineReducers({
     auth: authenticationReducer,
     notes: notesReducer
   });
   ```

7. Middleware to Handle Asynchronous Actions

   ```react
   const handleAsync = () => {
     return function(dispatch) {
       // Dispatch request action here
       dispatch(requestingData());
       setTimeout(function() {
         let data = {
           users: ['Jeff', 'William', 'Alice']
         }
         // Dispatch received data action here
       dispatch(receivedData(data));
       }, 2500);
     }
   };
   ```

   



# Content

- Create a Redux Store

  > Redux is a state management framework that can be used with a number of different web technologies, including React.

  In redux, there is a single state object that is responsible for the entire state of your application.

  -> If you had a React app with ten components, and each component had its own local state, **the entire state of your app would be defined by a single state object housed in the Redux `store`.**

  -> Any time any piece of your app wants to update state, it must do so through the Redux store. The unidirectional data flow makes it easier to track state management in your app.

  1. the Redux `store` is an object which holds and manages application `state`

  2. A method `createStore()` on the Redux object -> create the Redux `store`

     Takes a `reducer`function as a required argument

     ```react
     const reducer = (state = 5) => {
       return state;
     }
     
     // Redux methods are available from a Redux object
     // For example: Redux.createStore()
     // Define the store here:
     const store = Redux.createStore(reducer);
     ```



> The Redux store object provides several methods that allow you to interact with it.

- 1. Get state from the Redux Store

  - retrieve the current `state`held in the Redux store object with the `getState()` method.

> -> update state

- 1. Define a redux Action. 

  - In redux, all state updates are triggered by dispatching **actions**.

  - an action is simply a JS object that contains information about an action event that has occurred. 
  - -> The Redux store receives these action objects -> then updates its state accordingly.
  - Sometimes, a Redux action carries a username after a user logs in. While the data is optional, actions must carry a `type` property that specifies the type of action that occurred.

- 2. Define an Action Creator

     After creating an action, the next step is sending the action to the Redux store as it can update its state.

     ```react
     const action = {
       type : 'LOGIN'
     }
     function actionCreator() {
       return action;
     }
     ```

- 3. Dispatch an Action Event

     `dispatch` method is what you use to dispatch actions to the Redux store. Calling `store.dispatch()` and passing the value returned from an action creator sends an action back to the store.

     - Action creators return an object with a type property that specifies the action that specifies the action that has occurred. (2.)

     - Then the method dispatches an object object to the Redux store.

       ```react
       //equivalent:
       store.dispatch(actionCreator());
       store.dispatch({ type: 'LOGIN' });
       ```

       ```react
       const store = Redux.createStore(
         (state = {login: false}) => state
       );
       
       const loginAction = () => {
         return {
           type: 'LOGIN'
         }
       };
       
       // Dispatch the action here:
       store.dispatch(loginAction());
       ```



> Handle an Action in the Store



- Handle an Action in the Store 

  - After an action is created and dispatched, the Redux store needs to know how to respond to that action. -> **the job of a `reducer`function**

  - **Reducers** in Redux are responsible for the state modifications that take place in response to actions.

  - A `redecuer` takes `state` and action as arguments, and it alway returns a new state. 

  - **This is the only role of the reducer.**

  - `state` in Redux is read-only. -> the `reducer` function must always return a new copy of `state` and never modify state directly.

    ```react
    const defaultState = {
      login: false
    };
    
    const reducer = (state = defaultState, action) => {
      // Change code below this line
      if (action.type === 'LOGIN') {
        return {
          login: true
        }
      } else {
        return state;
      }
      // Change code above this line
    };
    
    const store = Redux.createStore(reducer);
    
    const loginAction = () => {
      return {
        type: 'LOGIN'
      }
    };
    ```

    





- Register a Store Listener

  - Another method you have access to on the Redux `store` object is `store.subscribe()`

  - -> This allows you to subscribe listener functions to the store, which are called whenever an action is dispatched against the store.
  - One simple use for this method is to subscribe a function to your store that simply logs a message every time an action is received and the store is updated.



- Combine Multiple Reducers

  - Redux provides reducer composition as a solution for a complex state model. You define multiple reducers to handle different pieces of your application's state, then compose these reducers together into one root reducer. The root reducer is then passed into the Redux `createStore()` method.

  - `combineReducers()` : accepts an object as an argument in which you define properties which associate keys to specific reducer functions. The name you give to the keys will be used by Redux as the name for the associated piece of state

    ```react
    const rootReducer = Redux.combineReducers({
      auth: authenticationReducer,
      notes: notesReducer
    });
    ```

- Send Action Data to the Store.

  - By now you've learned how to dispatch actions to the Redux store, but so far these actions have not contained any information other than a `type`. 
  - You can also send specific data along with your actions

- Use Middleware to Handle Asynchronous Actions

  - Redux provides middleware: **Redux Thunk middleware**.

    1. pass it as an argument to `**Redux.applyMiddleware()**`.

    2. This statement is then provided as a second optional parameter to the `createStore()` function.

       ```react
       const store = Redux.createStore(
         asyncDataReducer,
         Redux.applyMiddleware(ReduxThunk.default)
       );
       ```

    3. To **create an asynchronous action**, you **return a function in the action creator that takes `dispatch` as an argument**. Within this function, you can dispatch actions and perform asynchronous requests.

       ```react
       const handleAsync = () => {
         return function(dispatch) {
           // Dispatch request action here
           dispatch(requestingData());
           setTimeout(function() {
             let data = {
               users: ['Jeff', 'William', 'Alice']
             }
             // Dispatch received data action here
           dispatch(receivedData(data));
           }, 2500);
         }
       };
       ```

       

## Create a Redux app

1. Define a constant for actions types
2. Define the reducer which will update the state based on the action it receives
3. Define action creators

```react
const INCREMENT = 'INCREMENT'; // Define a constant for increment action types
const DECREMENT = 'DECREMENT'; // Define a constant for decrement action types

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT :
      return state + 1;
    case DECREMENT : 
      return state - 1;
    default:
      return state;
  }
    

}; // Define the counter reducer which will increment or decrement the state based on the action it receives

const incAction = () => {
  return {
    type : INCREMENT
  };
}; // Define an action creator for incrementing

const decAction = () => {
  return {
    type : DECREMENT
  };
}; // Define an action creator for decrementing

const store = Redux.createStore(counterReducer); // Define the Redux store here, passing in your reducers
```



## Never Mutate State

 Immutable state means that you never modify state directly, instead, you return a new copy of state.

JS(ES6) provides some useful tools to enforce the immutability of your state, whether it is a `string`, `number`,`array`, or `object`.

Note that strings and numbers are primitive values and are immutable by nature. In other words, 3 is always 3. You cannot change the value of the number 3. An `array` or `object`, however, is mutable. In practice, your state will probably consist of an `array` or `object`, as these are useful data structures for representing many types of information.