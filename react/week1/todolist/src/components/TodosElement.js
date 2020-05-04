import React from 'react';

const TodosElement = ({description, date}) => {
   return (
      <div className='todoItems'>
         <div>{description}</div>
         {date}
      </div>
   );
};
export default TodosElement;
