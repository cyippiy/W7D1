
import {connect} from 'react-redux';
import TodoList from './todo_list';
import allTodos from '../../reducers/selectors.js';


const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo))
});

// const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
