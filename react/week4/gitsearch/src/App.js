import React, { Component } from 'react';
import { Provider } from './context/Context';

import './App.css';

import ListItem from './components/ListItem';
import Form from './components/Form';

export default class App extends Component {
   state = {
      usersArray: [],
      userName: '',
   };

   render() {
      return (
         <header className='App-header'>
            <Provider>
               <Form />
               <ListItem />
            </Provider>
         </header>
      );
   }
}
