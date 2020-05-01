import React, { Component } from 'react';
export const Context = React.createContext();
export class Provider extends Component {
          state = {
             githubList: [],
          };
          componentDidMount() {
             const qry = 'benhmaid';
             fetch(`https://api.github.com/search/users?q=${qry}`)
                .then((res) => res.json())
                .then((data) => {
                   console.log(data.items);
                   this.setState({
                      githubList: data.items,
                   });
                })
                .catch((error) => console.log(error));
          }
          render() {
             return (
                <Context.Provider value={this.state}>
                   {this.props.children}
                </Context.Provider>
             );
          }
       }
