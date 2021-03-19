import React , { Component } from "react";
//import ReactDOM from 'react-dom';
import fire from "./config/fire";
import Menu from './Menu';
import './Home.css';

class Home extends Component{
constructor(props)
{
    super(props)
    this.state={
        
    }
}
logout(){
    fire.auth().signOut();
}
render()
{
    return( 
        <div>   
            <React.StrictMode>
              <Menu />
            </React.StrictMode>
          <br/>
            <button onClick={this.logout} className="btn3">Logout</button>
        </div>
    )
}
}
export default Home;