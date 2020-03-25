import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const todos = [
   {
      id: 1,
      description: 'Get out of bed',
      date: 'Wed Sep 13 2017'
   },
   {
      id: 2,
      description: 'Brush teeth',
      date: 'Thu Sep 14 2017'
   },
   {
      id: 3,
      description: 'Eat breakfast',
      date: 'Fri Sep 15 2017'
   }
];
class TodoList extends React.Component {
   render() {
      const list = todos.map((items) => {
         return (
            <div key={items.id} className='todoItems'>
               <div>{items.description}</div>
               {items.date}
            </div>
         );
      });
      return <div className='container'>{list}</div>;
   }
}
class App extends React.Component {
   render() {
      return (
         <div>
            <TodoList />
         </div>
      );
   }
}

ReactDOM.render(<App />, document.getElementById('root'));
