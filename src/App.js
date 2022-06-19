import React, { useEffect, useState } from 'react';
import Posts from './pages/Posts';
import Categories from './pages/Categories';
import Utilisateurs from './pages/Utilisateurs';
import Home from './pages/Home';
import Login from './pages/Login';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { AddCategorie } from './popups/AddCategorie';
import PrivateRoute from './components/PrivateRoute';
import { Redirect } from 'react-router-dom';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [redirection, setRedirection] = useState(false);
  useEffect (async () => {
  
    await fetch(process.env.REACT_APP_API + 'utilisateurs/user', {
     headers: { 'Content-Type': 'application/json', 'Accept': 'application/json'},
     credentials:"include",
   }).then((response) => response.json())
    .then((result) => {
      console.log(result);
     if(result === "Authenticated"){
      setIsLoggedIn(true)
     }else{
      setRedirection(true);
     }
  }).catch(error => {
   console.error(error.message)
  }); 
  }
  
)
    return (
      <BrowserRouter>
      
         
                <Redirect to="/" />  
                <Switch>
                    < Route path="/"  component={Login} exact />
                    < PrivateRoute path="/home" component={Home} exact />
                    <PrivateRoute    component={Posts} exact />
                    <PrivateRoute   component={Utilisateurs} exact />
                    <PrivateRoute  component={AddCategorie} exact />
                    <PrivateRoute component={Categories} exact/>
                    <Route path='*' component={() => <h1>Erreur 404! Désolé, cette page n'existe pas.</h1>} />
                </Switch>
           
        </BrowserRouter>
    )
}

export default App;
