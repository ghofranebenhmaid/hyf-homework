import React, { Component } from 'react';

export default class TodoList extends Component {
   render() {
      const { isLoading, error } = this.props;
      return (
         <>
            {error ? <p>{error.message}</p> : null}
            {!isLoading ? (
               this.props.todos.map((todo) => {
                  const { id, description, deadline, done } = todo;
                  return (
                     <div className='flex-todo' key={id}>
                        <input
                           id='customCheck1'
                           type='checkbox'
                           checked={done || ''}
                           onChange={() => this.props.handleCheckbox(id)}
                        />
                        <samp className={done ? 'done' : ''}>
                           <h2>{description}</h2>
                           <p>{deadline}</p>
                        </samp>
                        <button
                           className='btn-edit'
                           onClick={() => this.props.handleEdit(id)}
                        >
                           <i className='fa fa-edit'></i>
                        </button>
                        <button
                           className='btn-delete'
                           onClick={() => this.props.removeTodo(id)}
                        >
                           <i className='fa fa-trash'></i>
                        </button>
                     </div>
                  );
               })
            ) : (
               <h3>Loading...</h3>
            )}
         </>
      );
   }
}
