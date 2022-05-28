import React, {useState} from 'react';
import Posts from './Posts';
import Categories from './Categories';
import Utilisateurs from './Utilisateurs';
import Home from './Home';
import Login from './Login';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { AddCategorie } from './components/AddCategorie';
import PrivateRoute from './PrivateRoute';


function App() {

  
    
    return (
      <BrowserRouter>
      
            
                <Switch>
                    
                    <Route path='/'  component={Login}  exact/>
                    < PrivateRoute path="/home" component={Home} />
                    <PrivateRoute path='/posts' component={Posts} />
                    <PrivateRoute path='/utilisateurs' component={Utilisateurs} />
                    <PrivateRoute path='/addCategorie' component={AddCategorie} />
                    <PrivateRoute path='/categories' component={Categories} />
                    <Route path='*' component={() => <h1>Erreur 404! Désolé, cette page n'existe pas.</h1>} />
                </Switch>
           
        </BrowserRouter>
    )
}

export default App;
