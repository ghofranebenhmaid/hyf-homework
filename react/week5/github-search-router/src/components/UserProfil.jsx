import React, { useState, useEffect } from 'react';
import './profil-user.css';
import { Link } from 'react-router-dom';


export default function UserProfil({ match }) {
   
   const qry = match.params.username;
   useEffect(() => {
      fetchItem();
   } );
   const [item, setItem] = useState({});

   const fetchItem = () => {
      fetch(`https://api.github.com/users/${qry}`)
         .then((res) => res.json())
         .then((item) => {
            setItem(item);
           
         });
   };

   return (
      <div className='arrow'>
         <Link to='/' className='arrow-back'>
            <i className='fa fa-arrow-circle-left'></i>
         </Link>
         <div className='container-profil'>
            <div className='profil-user'>
               <img alt='avatar' src={item.avatar_url} />
            </div>
            <div className='profil-info'>
               <h2>{item.name}</h2>
               <p>{item.login}</p>
               <h5>
                  <span>
                     <i className='fas fa-map-marker'></i>
                  </span>
                  {item.location}
               </h5>
               <h5>
                  
                  <span>
                     <i className='fab fa-github'></i>
                  </span>
                  {item.html_url}
               </h5>
               <h5>Repositories: {item.public_repos}</h5>
            </div>
         </div>
      </div>
   );
}
