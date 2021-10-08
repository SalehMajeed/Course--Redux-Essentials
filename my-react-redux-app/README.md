# Redux

Redux is the open source javascript library that provide centralized state for your application which has also a predictable behaviour that work consistently.

## Reducer

Reducer is the pure function that work similarly as reduce in javascript. it take 2 arguments one is the state and other one is the action. action is the object that describe what type of operation has to be performed and return new state according to it's operation.

## createStore

once reducer is successfully implemented reducer is passed to the createStore function that holds complete state tree and complete state tree means you might pass multiple reducer instead of one so createStore holds all the state from all the reducers.

That's all now we have successfully implemented our reducer in redux. for reducer code check :
[reducer code](./src/component/reducer.js)
