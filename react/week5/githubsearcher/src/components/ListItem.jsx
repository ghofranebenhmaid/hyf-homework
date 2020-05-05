import React, { Component } from 'react';
import { UserContext, Provider } from '../Context';
import Loading from './Loading';
import Users from './User';

class ListItem extends Component {
   render() {
      return (
         <Provider>
            <UserContext.Consumer>
               {(value) => {
                  const { githubList } = value;
                  const gitSearch = githubList.map((item) => (
                     <Users
                        key={item.id}
                        items={item.avatar_url}
                        userName={item.login}
                     />
                  ));
                  // return githubList === undefined || githubList.length === 0 ? (
                  //    <Loading />
                  // ) : (
                  //    gitSearch
                  // );
                  
               }}
            </UserContext.Consumer>
         </Provider>
      );
   }
}
export default ListItem;
