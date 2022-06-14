import React, {useEffect, useState} from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => {

  
  
  //const [redirect, setRedirect] = useState(false);

  //useEffect()
  const auth = async () => {

    const userRequestResponse = await fetch(process.env.REACT_APP_API + 'utilisateurs/user', {
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json'},
      credentials:"same-origin",
    });
    
    console.log(userRequestResponse);
    
     const userRequestContent = await userRequestResponse.json();
     console.log(userRequestContent);
     console.log(userRequestContent.message);
     
        if(userRequestContent.message === 'Authenticated'){
         
          return isLoggedIn = true;
          
        }
        }
        
  
  auth();
  
        
        return (
    <Route
      {...rest}
      render={props => 
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  )
}

export default PrivateRoute