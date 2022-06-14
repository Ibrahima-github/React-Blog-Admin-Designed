import React, {useEffect, useState} from 'react';
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
                    <PrivateRoute isLoggedIn={setIsLoggedIn} path='/home'  component={Home}  />
                    <PrivateRoute isLoggedIn={setIsLoggedIn}  path='/posts' component={Posts} />
                    <PrivateRoute isLoggedIn={setIsLoggedIn}  path='/utilisateurs' component={Utilisateurs} />
                    <PrivateRoute isLoggedIn={setIsLoggedIn}   path='/addCategorie' component={AddCategorie} />
                    <PrivateRoute isLoggedIn={setIsLoggedIn}  path='/categories' component={Categories} />
                    <Route path='*' component={() => <h1>Erreur 404! Désolé, cette page n'existe pas.</h1>} />
                </Switch>
           
        </BrowserRouter>
    )
}

export default App;
