import React, { Component } from 'react';
import { Provider } from './context/Context';
import {
   BrowserRouter as Router,
   Route,
   Switch,
   
} from 'react-router-dom';

import './App.css';

import ListItem from './components/ListItem';
import Form from './components/Form';
import UserProfil from './components/UserProfil';

export default class App extends Component {
   state = {
      usersArray: [],
      userName: '',
   };

   render() {
      return (
         <>
            <Router>
               <Provider>
                  <header className='App-header'>
                     <Switch>
                        <Route path='/' exact>
                           <Form />
                           <ListItem />
                        </Route>
                        <Route
                           path='/userprofil'
                           exact
                           component={UserProfil}
                        />
                        <Route path='/userprofil/:username' component={UserProfil} />
                     </Switch>
                  </header>
               </Provider>
            </Router>
         </>
      );
   }
}
