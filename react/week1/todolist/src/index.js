import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList';


import './index.css';

class TodoApp extends React.Component {
   render() {
      return (
         <div>
            <TodoList />
         </div>
      );
   }
}
ReactDOM.render(<TodoApp />, document.getElementById('root'));
