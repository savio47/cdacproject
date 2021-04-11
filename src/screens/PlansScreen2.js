import React from 'react';
//import {useSelector} from "react-redux";
//import {selectUser} from "../features/counter/userSlice";
import './PlansScreen.css';
//import db from "../firebase";
//import { object } from 'prop-types';
//import {loadStripe} from "@stripe/stripe-js";


function PlansScreen2(){
    return(
        <div className="plansScreen2">
                        <div className="plansScreen__plan">
                        <div className="plansScreen__info">
                            <h5>Basic Plan</h5>
                            <h6>720p</h6>
                            </div>
                            <button >Subscribe</button>
                            </div>
                            <div className="plansScreen__plan">
                            <div className="plansScreen__info">
                            <h5>Standard Plan</h5>
                            <h6>1080p</h6>
                            </div>
                            <button>Subscribe</button>
                            </div>
                            <div className="plansScreen__plan">
                            <div className="plansScreen__info">
                            <h5>Premium Plan</h5>
                            <h6>4K+HDR</h6>
                            </div>
                            <button>Subscribe</button>
                            </div>
                        </div>

               
           
      
   )
}

export default PlansScreen2;
/*
useEffect(()  =>  {
    const ownerID = user ? user.uid : 'unknown';
  const ownerEmail = user ? user.email : 'unknown';
    db.collection("products")
    .get().then(querySnapshot =>{
        const products ={};
        querySnapshot.forEach(async productDoc => {
            products[productDoc.id] = productDoc.data()
            const userSnap = await productDoc.ref.collection
            ("user").get();
            userSnap.docs.forEach(user => {
                products[productDoc.id].users = {
                  id: uuidv4(),
                  ownerID,
                  ownerEmail,
                };
            });
            
        });
        setProducts(products);
    });
   }, []);
 // ADD FUNCTION
 function addProduct() {
   const ownerID = user ? user.uid : 'unknown';
  const ownerEmail = user ? user.email : 'unknown';
  const newUser = {
    id: uuidv4(),
    ownerID,
    ownerEmail,
  };

  ref
    .doc(newUser.id)
    .set(newUser)
    .catch((err) => {
      console.error(err);
    });
}

//DELETE FUNCTION
function deleteProduct(user) {
  ref
    .doc(user.id)
    .delete()
    .catch((err) => {
      console.error(err);
    });
}
*/
//REALTIME GET FUNCTION  plans
/* function getPlans() {
  setLoading(true);
  ref_plans
    .where('owner', '==', user.uid)
    //.where('title', '==', 'Review1') // does not need index
    //.orderBy('owner', 'asc')
    //.limit(3)
    .onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setPlans(items);
      setLoading(false);
    });
} */

/* useEffect(() => {
  getPlans();
  // eslint-disable-next-line
}, []); */

// ADD FUNCTION
 /*
function addPlans(newPlan) {
  const owner = user ? user.uid : 'unknown';
  const ownerEmail = user ? user.email : 'unknown';
  const newPlan = {
    plan: product.name,
    id: uuidv4(),
    owner,
    ownerEmail,
   // createdAt: db.FieldValue.serverTimestamp(),
   // lastUpdate: db.FieldValue.serverTimestamp(),
  };
 
  ref_plans
    .doc(newPlan.id)
    .set(newPlan)
    .catch((err) => {
      console.error(err);
    });
}
  */