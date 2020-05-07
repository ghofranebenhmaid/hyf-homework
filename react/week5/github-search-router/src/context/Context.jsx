import React, { Component } from 'react';

export const UserContext = React.createContext();

export class Provider extends Component {
   state = {
      usersArray: [],
      userName: '',
   };

   componentDidMount() {
      this.findUser = (e) => {
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
   }
   handleChange = (e) => {
      this.setState({ userName: e.target.value });
   };

   render() {
      return (
         <UserContext.Provider
            value={{
               ...this.state,
               handleChange: this.handleChange,
               findUser: this.findUser,
            }}
         >
            {this.props.children}
         </UserContext.Provider>
      );
   }
}
