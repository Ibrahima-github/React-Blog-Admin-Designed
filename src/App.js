import React, { useState} from 'react';
import Posts from './Posts';
import Categories from './Categories';
import Utilisateurs from './Utilisateurs';
import Home from './Home';
import Login from './Login';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { AddCategorie } from './components/AddCategorie';
import PrivateRoute from './PrivateRoute';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

 
    
    return (
      <BrowserRouter>
      
            
                <Switch>
                    
                    < Route path="/" component={Login} exact />
                    <PrivateRoute isLoggedIn={isLoggedIn} path='/home'  component={Home}  />
                    <PrivateRoute isLoggedIn={isLoggedIn}  path='/posts' component={Posts} />
                    <PrivateRoute isLoggedIn={isLoggedIn}  path='/utilisateurs' component={Utilisateurs} />
                    <PrivateRoute isLoggedIn={isLoggedIn}   path='/addCategorie' component={AddCategorie} />
                    <PrivateRoute isLoggedIn={isLoggedIn} path='/categories' component={Categories} />
                    <Route path='*' component={() => <h1>Erreur 404! Désolé, cette page n'existe pas.</h1>} />
                </Switch>
           
        </BrowserRouter>
    )
}

export default App;
