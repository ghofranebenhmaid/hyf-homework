import React, { Component } from 'react';
import { UserContext } from '../context/Context';

import Users from './User';
import Loading from '../loading/Loading';

class ListItem extends Component {
   render() {
      return (
         <UserContext.Consumer>
            {(value) => {
               const { usersArray } = value;
               const gitSearch = usersArray.map((item) => (
                  <Users
                     key={item.id}
                     items={item.avatar_url}
                     userName={item.login}
                  />
               ));
               return usersArray === undefined || usersArray.length === 0 ? (
                  <Loading />
               ) : (
                  gitSearch
               );
            }}
         </UserContext.Consumer>
      );
   }
}
export default ListItem;
