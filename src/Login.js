import React , { Component } from "react";
import fire from "./config/fire";
import './Login.css';

//import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends Component{
constructor(props)
{
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state={
        email : "",
        password : ""
    }
}
login(e){
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
        console.log(u)
    }).catch((err)=>{
        console.log(err);
    })
}
signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
        console.log(u)
    }).catch((err)=>{
        console.log(err);
    })
}
handleChange(e){
    this.setState({
        [e.target.name] : e.target.value
    })
}
render()
{
    return(
        <div className="login_box" >
            <form>
            <div class="form-group" >
            <br/>
            <h1>Login to Video Streaming App</h1>
                <br/>
                <br/>
            <label for="email">Email address </label>
                <input
                type="email"
                id="email"
                name="email"
                placeholder="enter email address"
                onChange={this.handleChange}
                value={this.state.email}
                />
                 </div>
                <br/>
                <div class="form-group">
                <label for="password">Password </label>
                <input 
                name="password"
                type= "password"
                onChange={this.handleChange}
                id="password"
                placeholder="enter password"
                value={this.state.password}
                />
                
                </div>
               <br/>
                <button onClick={this.login} className="btn1">Login</button>
                <button onClick={this.signup}  className="btn2">Signup</button>
                
            </form>

        </div>
    )
}
}
export default Login;