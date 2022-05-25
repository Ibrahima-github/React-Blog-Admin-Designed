import React from 'react';
import Posts from './Posts';
import Categories from './Categories';
import Utilisateurs from './Utilisateurs';
import Home from './Home';
import Login from './Login';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { AddCategorie } from './components/AddCategorie';


function App() {

    
    return (
      <BrowserRouter>
      
            
                <Switch>
                    
                    <Route path='/posts' component={Posts} />
                    <Route path='/utilisateurs' component={Utilisateurs} />
                    <Route path='/addCategorie' component={AddCategorie} />
                    <Route path='/categories' component={Categories} />
                    <Route path="/home" component={Home} />
                    <Route path='/'  exact >
                        <Login />
                    </Route>
                    <Route path='*' component={() => <h1>Erreur 404! Désolé, cette page n'existe pas.</h1>} />
                </Switch>
           
        </BrowserRouter>
    )
}

export default App;
