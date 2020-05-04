import React from 'react';

function FormSubmit(props) {
   return (
      <div className='container'>
         <form onSubmit={props.handleSubmit}>
            <input
               type='text'
               name='inputText'
               onChange={props.handleChangeTodo}
               value={props.description || ''}
               placeholder='Enter todo'
            />
            <input
               type='date'
               name='inputDate'
               value={props.deadline || ''}
               onChange={props.handleChangeDate}
            />
            <button className='btn-add' type='submit'>
               add
            </button>
         </form>
      </div>
   );
}
export default FormSubmit;
