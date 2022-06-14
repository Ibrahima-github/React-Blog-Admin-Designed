import React, {useEffect, useState} from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => {

  
  
  //const [redirect, setRedirect] = useState(false);

  //useEffect()
  useEffect(() => async () => {
    const userRequestResponse = await fetch(process.env.REACT_APP_API + 'utilisateurs/user', {
      headers: { 'Content-Type': 'application/json'},
      credentials: 'include'
    });
    
    console.log(userRequestResponse);
    
     const userRequestContent = await userRequestResponse.json();
     
     console.log(userRequestContent.message);
     
        if(userRequestContent.message === 'Authenticated'){
         // return <Component />
          return isLoggedIn = true;
          
        }else{
            alert(userRequestContent.message);
           // <Redirect to="/" />
           // setRedirect(true);
           return isLoggedIn = false;
        }
        /* if(redirect){
            return <Redirect to='/login' />
        } */
        //return isLoggedIn;
  }
)
    
        
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