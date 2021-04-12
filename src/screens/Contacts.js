import React, { useState} from 'react';
import "./Contacts.css"
import db from "../firebase";
import { v4 as uuidv4 } from 'uuid';
import { selectUser } from '../features/counter/userSlice';
import { useSelector } from "react-redux";
import Nav from '../Nav';

function Contacts() {
  const user = useSelector(selectUser);
  const [message, setMessage] = useState('');
  const [cname, setCname] = useState('');

  const ref = db.collection('contacts');
  
  // ADD FUNCTION
  function addContact() {
    const owner = user ? user.uid : 'unknown';
    const ownerEmail = user ? user.email : 'unknown';
    const newContact = {
      cname,
      message,
      id: uuidv4(),
      owner,
      ownerEmail,
      //createdAt: db.FieldValue.serverTimestamp(),
      //lastUpdate: db.FieldValue.serverTimestamp(),
    };
    
    
    ref
      .doc(newContact.id)
      .set(newContact)
     
      .catch((err) => {
        console.error(err);
      });
      alert("Your Feedback is Recorded")
  }

 //  Multiple Contacts Allowed

  return (
    
    <div className="contactDisplay">
       <Nav />
       <br />
      <h1>Contact Us  </h1>
      <div className="inputBox">
        <h4>Name: </h4>
        <textarea value={cname} placeholder ="Enter your name" onChange={(e) => setCname(e.target.value)} rows="1" cols="40"/>
        <br />
        <br />
       <h4>Email: &nbsp;&nbsp;&nbsp;{user.email}</h4>
       <br />
       <h4>Message:</h4>
        <textarea value={message} placeholder ="Write Something..."  onChange={(e) => setMessage(e.target.value)} rows="10" cols="70"/>
        <br />
        <button className="b3" onClick={() => addContact()}>Submit</button>
      </div>
      <br/>
     
      </div>
    
  );
}

export default Contacts;
