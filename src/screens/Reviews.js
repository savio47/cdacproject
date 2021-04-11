import React, { useState, useEffect} from 'react';
//import firebase from '../firebase';
import "./Reviews.css"
import db from "../firebase";
import { v4 as uuidv4 } from 'uuid';
import { selectUser } from '../features/counter/userSlice';
//import { auth } from './firebase';
import { useSelector } from "react-redux";
import Nav from '../Nav';

function Reviews() {
  const user = useSelector(selectUser);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [desc, setDesc] = useState('');

  const ref = db.collection('reviews');

  //REALTIME GET FUNCTION
  function getReviews() {
    setLoading(true);
    ref
      .orderBy('owner', 'asc')
      //.limit(3)
      .onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        setReviews(items);
        setLoading(false);
      });
  }

  useEffect(() => {
    getReviews();
    // eslint-disable-next-line
  }, []);

  // ADD FUNCTION
  function addReview() {
    const owner = user ? user.uid : 'unknown';
    const ownerEmail = user ? user.email : 'unknown';
    const newReview = {
      desc,
      id: uuidv4(),
      owner,
      ownerEmail,
      //createdAt: db.FieldValue.serverTimestamp(),
      //lastUpdate: db.FieldValue.serverTimestamp(),
    };

    ref
      .doc(newReview.id)
      .set(newReview)
      .catch((err) => {
        console.error(err);
      });
  }

  //DELETE FUNCTION
  function deleteReview(review) {
    ref
      .doc(review.id)
      .delete()
      .catch((err) => {
        console.error(err);
        alert(err);
      });
  }

  // EDIT FUNCTION
  function editReview(review) {
    const updatedReview = {
        desc : desc,
       //lastUpdate: db.FieldValue.serverTimestamp(),
    };
    setLoading();
    ref
      .doc(review.id)
      .update(updatedReview)
      .catch((err) => {
        console.error(err);
      });
  }

  //  Only 1 Review per User Allowed
 //  Multiple Reviews Allowed

  return (
    
    <div className="reviewDisplay">
       <Nav />
      <h1>Reviews </h1>
      <div className="inputBox">
        <h3>Add Your Review </h3>
        <h5>&nbsp;&nbsp; Can Add Multiple Reviews </h5>
        <br />
       <h4>Username: &nbsp;&nbsp;&nbsp;{user.email}</h4>
       <br />
        <textarea value={desc} placeholder ="Enter your review" onChange={(e) => setDesc(e.target.value)}  rows="3" cols="70"/>
        <br />
        <button className="b3" onClick={() => addReview()}>Submit</button>
      </div>
      {loading ? <h1> Loading...</h1> : null}
      <br/>
      <hr />
      <div className="allreviews" >
      <br/>
      <h3><b>All User Reviews</b></h3>
      <br/>
      {reviews.map((review) => (
        <div className="review" key={review.id}>
          <hr color="blue" />
          <p className="username" ><b> {review.ownerEmail}</b></p>
          <p className="description">{review.desc}</p>
          
         {/* <small>{review.lastUpdate.toDate()}</small>  */}
         
          {review.owner === user.uid ? (
        <div className="edit_delete">
        <button className="b1" onClick={() => deleteReview(review)}>Delete</button>
        <button  className="b2" onClick={() => editReview(review)}>Edit </button>
        <br/>
        
        <br/>
      </div>
      ) : (
        <div>
             <br/>
             
             <br/>
        </div>
      )}
          
        </div>
      ))}
      </div>
      </div>
    
  );
}

export default Reviews;
