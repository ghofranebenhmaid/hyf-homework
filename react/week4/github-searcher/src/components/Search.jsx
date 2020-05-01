import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Context } from '../context';

class Search extends Component {
   state = {
      githubList: [],
      userName: '',
   };
   findUser(e) {
      e.preventDefault();
      fetch(`https://api.github.com/search/users?q=${this.state.userName}`)
         .then((res) => res.json())
         .then((data) => {
            console.log(data.items);
            this.setState({
               githubList: data.items,
               userName: '',
            });
         })
         .catch((error) => console.log(error));
   }

   onChange(e) {
      this.setState({ userName: e.target.value });
   }
   render() {
      return (
         <Context.Consumer>
            {(value, index) => {
               return (
                  <form
                     onSubmit={this.findUser.bind(this)}
                     key={index}
                     noValidate
                     autoComplete='off'
                  >
                     <TextField
                        id='outlined-secondary'
                        label='Outlined secondary'
                        variant='outlined'
                        value={this.state.userName}
                        onChange={this.onChange.bind(this)}
                     />
                  </form>
               );
            }}
         </Context.Consumer>
      );
   }
}
export default Search;
