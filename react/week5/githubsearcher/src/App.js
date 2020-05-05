import React, { Component } from 'react';
import { Provider } from './Context';

import './App.css';

import Search from './components/Search';
import ListItem from './components/ListItem';

export default class App extends Component {
   render() {
      return (
         <Provider>
            <header className='App-header'>
               <Search />
               <ListItem />
            </header>
         </Provider>
      );
   }
}
