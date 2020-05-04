import React from 'react';
import TodosElement from './TodosElement'

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
const TodoList = (props) => {
  
   return (
       <div className='container'>
         {todos.map((item, key) => {
            return (
                <TodosElement
                    key={ key }
                    description={ item.description }
                    date={ item.date }
                />
            );
         })}
      </div>
   );
};
export default TodoList;
