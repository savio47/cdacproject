import React,{ useEffect  } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen'; //<Rote exact path="/">   Component
import {  Switch, Route } from 'react-router-dom';
//import { Switch } from "react-router";  //BrowserRouter as Router,
import LoginScreen from './screens/LoginScreen';
import {auth} from "./firebase";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, login, logout} from "./features/counter/userSlice";
import ProfileScreen from './screens/ProfileScreen';
import Reviews from './screens/Reviews';
import Contacts from './screens/Contacts';
import Helps from './screens/Helps';

function App() {
const user = useSelector(selectUser);
const dispatch = useDispatch();

useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged(
    (userAuth) => {
    if(userAuth){
      //Logged in
      console.log(userAuth);
      dispatch(
        login({
        uid: userAuth.uid,
        email: userAuth.email,
      })
      );
    }else {
       //logged out
      dispatch(logout());
     }
      
  });
  return unsubscribe;
}, [dispatch]);

  return (
    <div className="app">
      {/* <BrowserRouter> */}
      {!user ? (
        <LoginScreen />
      ):(
        <Switch>
          <Route path="/profile" >
            <ProfileScreen />
          </Route>
          <Route exact path="/" > 
            <HomeScreen />
          </Route>
          <Route path="/review" >
            <Reviews />
          </Route>
          <Route path="/contact" >
            <Contacts />
          </Route>
           <Route path="/help" >
            <Helps />
          </Route> 
          </Switch>
      )
    }
    {/* </BrowserRouter> */}
    </div>
    
  );
}
//component={HomeScreen}
export default App;
//module.exports = App;
