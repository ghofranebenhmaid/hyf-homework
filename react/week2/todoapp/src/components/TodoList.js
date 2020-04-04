import React from 'react';
import todosData from './todosData';
import TodoItem from './TodoItem';
import Timer from './Timer';

class TodoList extends React.Component {
   state = { todos: todosData };

   addTodo = () => {
      const newItem = { description: 'newText' };
      const newList = this.state.todos.concat(newItem);
      this.setState({ todos: newList }, () => {
         console.log('state has been updated');
      });
   };

   removeTodo = (index) => {
      const todo = Object.assign([], this.state.todos);
      todo.splice(index, 1);
      this.setState({ todos: todo });
      console.log(todo);
      console.log(todosData);
   };

   handleChange = (id) => {
      this.setState((prevState) => {
         const updatedTodos = prevState.todos.map((todo) => {
            if (todo.id === id) {
               return {
                  ...todo,
                  done: !todo.done,
               };
            }
            return todo;
         });
         return {
            todos: updatedTodos,
         };
      });
   };
   render () {
      const todoItems = this.state.todos.map((item) => (
         <TodoItem
            key={item.id}
            item={item}
            handleChange={this.handleChange}
            removeTodo={this.removeTodo}
         />
      ));

      return (
         <div className='container'>
            <Timer />
            <button className='btn add-todo' onClick={this.addTodo}>
               Add todo
            </button>
            {todoItems}
         </div>
      );
   }
}

export default TodoList;
