import React from 'react';
import Form from './Form';
import TodoList from './TodoList';
import uuid from 'uuid';

class App extends React.Component {
   constructor() {
      super();
      this.state = {
         isLoading: true,
         todos: [],
         id: uuid(),
         done: true,
         error: null,
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChangeTodo = this.handleChangeTodo.bind(this);
      this.handleChangeDate = this.handleChangeDate.bind(this);

       this.handleCheckbox = this.handleCheckbox.bind(this);
       this.removeTodo = this.removeTodo.bind(this);
       this.handleEdit = this.handleEdit.bind(this);
   }

   fetchTodos() {
      fetch(
         `https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw`
      )
         .then((response) => response.json())
         .then((data) =>
            this.setState({
               todos: data,
               isLoading: false,
            })
         )
         .catch((error) => this.setState({ error, isLoading: false }));
   }

   componentDidMount() {
      this.fetchTodos();
   }
   handleChangeTodo(event) {
      this.setState({ description: event.target.value });
   }
   handleChangeDate(event) {
      this.setState({ deadline: event.target.value });
   }
   handleSubmit(e) {
      e.preventDefault();
      const newItem = {
         id: this.state.id,
         description: this.state.description,
         deadline: this.state.deadline,
      };
      console.log(newItem);

      this.setState({
         todos: [...this.state.todos, newItem],
         id: uuid(),
         description: '',
         deadline: '',
      });
   }

   handleCheckbox(id) {
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
   }
   removeTodo = (id) => {
      this.setState({
         todos: this.state.todos.filter((todo) => todo.id !== id),
      });
   };

   handleEdit = (id) => {
      const filteredTodo = this.state.todos.filter((todo) => todo.id !== id);
      const selectedTodo = this.state.todos.find((todo) => todo.id === id);

      this.setState({
         todos: filteredTodo,
         description: selectedTodo.description,
         deadline: selectedTodo.deadline,
      });
   };
   render ()
   {
 
      return (
         <div>
            <Form
               handleSubmit={this.handleSubmit}
               handleChangeTodo={this.handleChangeTodo}
               handleChangeDate={this.handleChangeDate}
               description={this.state.description}
               deadline={this.state.deadline}
            />
            <TodoList
               handleCheckbox={this.handleCheckbox}
               handleEdit={this.handleEdit}
               removeTodo={this.removeTodo}
               todos={this.state.todos}
            />
         </div>
      );
   }
}

export default App;
