import React, { Component } from 'react';
export const UserContext = React.createContext();
export class Provider extends Component {
          state = {
             githubList: [],
             usersArray: [],
             userName: '',
          };
          //  componentDidMount() {
          //     const qry = 'benhmaid';
          //     fetch(`https://api.github.com/search/users?q=${qry}`)
          //        .then((res) => res.json())
          //        .then((data) => {
          //           console.log(data.items);
          //           this.setState({
          //              githubList: data.items,
          //           });
          //        })
          //        .catch((error) => console.log(error));
          //  }

          render() {
             return (
                <UserContext.Provider value={this.state}>
                   {this.props.children}
                </UserContext.Provider>
             );
          }
       }
