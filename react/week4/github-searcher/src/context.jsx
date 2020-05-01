import React, { Component } from 'react';

export const Context = React.createContext();

export class Provider extends Component {
   state = {
      githubList: [],
   };

   fetch() {
      fetch(`https://api.github.com/search/users?q=benhmaid`)
         .then((res) => res.json())
         .then((data) => {
            console.log(data.items);
            this.setState({
               githubList: data.items,
            });
         })
         .catch((error) => console.log(error));
   }

  
   componentDidMount() {
      
      this.fetch();
   }
   render() {
      return (
         <Context.Provider value={this.state}>
            {this.props.children}
         </Context.Provider>
      );
   }
}
