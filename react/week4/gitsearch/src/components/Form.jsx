import React from 'react';
import TextField from '@material-ui/core/TextField';
import { UserContext } from '../context/Context';

export default class Form extends React.Component {
   render() {
      return (
         <UserContext.Consumer>
            {(value) => {
               const { onChange, findUser, userName } = value;
               return (
                  <div>
                     <h1>Github Search</h1>
                     <form onSubmit={findUser} noValidate autoComplete='off'>
                        <TextField
                           id='outlined-secondary'
                           label='Search users'
                           variant='outlined'
                           value={userName}
                           onChange={onChange}
                        />
                     </form>
                  </div>
               );
            }}
         </UserContext.Consumer>
      );
   }
}
