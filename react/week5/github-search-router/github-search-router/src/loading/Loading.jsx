import React from 'react';
import loading from './loading.gif';

export default () => {
   return (
      <div>
         <img
            src={loading}
            alt='Loading...'
            style={{ width: '300px', margin: '5px auto', display: 'block' }}
         />
      </div>
   );
};
