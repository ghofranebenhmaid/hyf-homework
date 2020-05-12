import React, { Component } from 'react';
import { UserContext } from '../context/Context';

import Users from './User';
import Loading from '../loading/Loading';
import { Link } from 'react-router-dom';

class ListItem extends Component {
   render() {
      return (
         <div className='container'>
            <UserContext.Consumer>
               {(value) => {
                  const { usersArray } = value;
                  const gitSearch = usersArray.map((item) => (
                     <Link key={item.id} to={`/userprofil/${item.login}`}>
                        <Users
                           key={item.id}
                           items={item.avatar_url}
                           userName={item.login}
                        />
                     </Link>
                  ));

                  return !usersArray === undefined &&
                     !usersArray.length === 0 ? (
                     <Loading />
                  ) : (
                     gitSearch
                  );
               }}
            </UserContext.Consumer>
         </div>
      );
   }
}
export default ListItem;
