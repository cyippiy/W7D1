import {createStore} from 'redux';
import rootReducer from '../reducers/root_reducer.js';
// import {RECEIVE_TODOS, RECEIVE_TODO, receiveTodos, receiveTodo} from '../actions/todo_actions';


const configureStore = function () {
  return createStore(rootReducer);
};

export default configureStore;
