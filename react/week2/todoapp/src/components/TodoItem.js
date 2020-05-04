import React from 'react';

const TodoItem = (props) => {
   return (
      <div>
         <input
            className=''
            id='customCheck1'
            type='checkbox'
            checked={props.item.done}
            onChange={() => props.handleChange(props.item.id)}
         />

         <samp className={props.item.done ? 'done' : ''}>
            {props.item.description}
         </samp>
         <button className='btn-delete' onClick={props.removeTodo}>
            <i className='fa fa-trash'></i>
         </button>
      </div>
   );
};
export default TodoItem;
