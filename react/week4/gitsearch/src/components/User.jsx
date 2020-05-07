import React from 'react';

const Users = (props) => {
   const { items, userName } = props;

   return (
      <div>
         <div className='profil'>
            <img alt='avatar' src={items} />
            {userName}
         </div>
      </div>
   );
};
export default Users;
