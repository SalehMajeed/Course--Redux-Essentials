# Redux

Redux is the open source javascript library that provide centralized state for your application which has also a predictable behaviour that work consistently.

## Reducer

Reducer is the pure function that work similarly as reduce in javascript. it take 2 arguments one is the state and other one is the action. action is the object that describe what type of operation has to be performed and return new state according to it's operation.

## createStore

once reducer is successfully implemented reducer is passed to the createStore function that holds complete state tree and complete state tree means you might pass multiple reducer instead of one so createStore holds all the state from all the reducers.

## store

once createStore Successfully created it returns an object so we store object in a variable called store that has few methods -

1. getState() ->
   getState method is used for get the last updated state value.
1. dispatch(action) ->
   dispatch is the only way to trigger a state change. it take action object as an arguments.
1. subscribe(listener) ->
   subscribe take a listener as an arument
   that listen on every dispatch action and subscribe invocation return an method called unsubscribe function that is used to remove listener.
1. replaceReducer(nextReducer) ->
   replaceReducer used to add reducer dynamically by replacing current reducer. it takes reducer as an argument.

That's all now we have successfully implemented our reducer in redux with the all four methods of store. for code check :
[reducer code](./src/readme/reducer.js)
