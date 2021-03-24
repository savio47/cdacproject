import React from "react";
import Nav from  "../Nav";
import "./ProfileScreen.css";
function ProfileScreen() {
    const user=useSelector(selectUser);
return (
    <div className="profileScreen">
    <Nav/>
    <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
            <img src="https://www.gettyimages.in/photos/netflix?family=editorial&phrase=netflix&sort=mostpopular" alt=""/>
            <div className="ProfileScreen__details">
            <h2>{user.email }</h2>
            <div className="profileScreen__plans">
                <h3>Plans</h3>
                
                <button 
                onClick={()=>AuthenticatorAssertionResponse.signOut()}
                className='profileScreen__signout'
                >
                    Sign Out
                    </button>
            </div>
            </div>
        </div>
    </div>
</div>
    );

}
export default ProfileScreen;