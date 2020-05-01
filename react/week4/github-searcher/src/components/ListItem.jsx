import React, { Component } from 'react';
import { Context } from '../context';
import Loading from './api/Loading';
import Users from './User';

class ListItem extends Component {
   render() {
      return (
         <Context.Consumer>
            {(value) => {
               const { githubList } = value;
               const gitSearch = githubList.map((item) => (
                  <Users
                     key={item.id}
                     items={item.avatar_url}
                     userName={item.login}
                  />
               ));

               return githubList === undefined || githubList.length === 0 ? (
                  <Loading />
               ) : (
                  gitSearch
               );
            }}
         </Context.Consumer>
      );
   }
}
export default ListItem;
