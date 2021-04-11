import React, { useState, useEffect} from 'react'
import "./ProfileScreen.css"
//import PlansScreen2 from "./PlansScreen2"
import PlansScreen3 from "./PlansScreen3"
import Nav from "../Nav";
import db from "../firebase";
import { selectUser } from '../features/counter/userSlice';
import { auth } from '../firebase';
import { useSelector } from "react-redux";

function ProfileScreen() {
    const user = useSelector(selectUser);
    const [ plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(false);

    const ref_plans = db.collection("plans");
    
 function getPlans() {
    setLoading(true);
    ref_plans.onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        setPlans(items);
        setLoading(false);
      });
  }
  
   useEffect(() => {
      getPlans();
      // eslint-disable-next-line
    }, []);
    if (loading){
        return  <h2> Plans Loading ...</h2>
    }

    return (
        <div className="profileScreen">
            <Nav />
        <div className="profileScreen_body">
            <h1>Edit Profile</h1>
            <div className="profileScreen_info">
            <img
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt=""
            />
            <div className="profileScreen_details">
                <h2>{user.email}</h2>
                <br/>
                <h3> Monthly Plans </h3>
            <div className="profileScreen_plans">
            {plans.map((plan ) => {
                return (
                <div> 
            
            <hr/>
            {plan.user === user.uid ? (
            <div className="current_plan">
                
              <h3> Your Active Plan: &nbsp;&nbsp; {plan.plan} Plan</h3>                  
            </div>
            ) : (
              <div>                  
              </div>
            )}  
                </div>
                );
        })} 
               <PlansScreen3 />
                <button 
                onClick={() => auth.signOut()} 
                className="profileScreen_signOut">
                    Sign Out
                </button>
                
            </div>    
            </div>
            </div>
        </div>
        </div>
    );
}

export default ProfileScreen
