import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { UserContext, Provider } from '../Context';
import Users from './User';
import Loading from './Loading';

class Search extends Component {
    state = {
       usersArray: [],
       userName: '',
    };

   findUser = (e) => {
      e.preventDefault();
      fetch(`https://api.github.com/search/users?q=${this.state.userName}`)
         .then((res) => res.json())
         .then((data) => {
            console.log(data.items);
            this.setState({
               usersArray: data.items,
                userName: '',
            });
         })
         .catch((error) => console.log(error));
   };

   onChange = (e) => {
      this.setState({ userName: e.target.value });
   };
   render() {
      return (
         <Provider>
            <UserContext.Consumer>
               {(value, index) => {
                  const { usersArray, userName } = this.state;

                  const Searching = usersArray.map((item) => (
                     <Users
                        key={item.id}
                        items={item.avatar_url}
                        userName={item.login}
                     />
                  ));

                  return (
                     <div>
                        <h1>Github Search</h1>
                        <form
                           onSubmit={this.findUser}
                           key={index}
                           noValidate
                           autoComplete='off'
                        >
                           <TextField
                              id='outlined-secondary'
                              label='Search users'
                              variant='outlined'
                              value={userName}
                              onChange={this.onChange}
                           />
                        </form>
                        {usersArray === undefined && usersArray.length === 0 ? (
                           <Loading />
                        ) : usersArray.length === 0 || !userName.trim() ? (
                           'No resulte..'
                        ) : (
                           Searching
                        )}
                     </div>
                  );
               }}
            </UserContext.Consumer>
         </Provider>
      );
   }
}
export default Search;
