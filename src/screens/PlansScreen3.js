import React, { useState, useEffect} from 'react';
import './PlansScreen.css';
import db from "../firebase";
import { v4 as uuidv4 } from 'uuid';
import { selectUser } from '../features/counter/userSlice';
import { useSelector } from "react-redux";

function PlansScreen3(){
 const [products, setProducts] = useState([]);
 const [loading, setLoading] = useState(false);
 //const [ setPlans] = useState('');
 const user = useSelector(selectUser);
 //const [title, setTitle] = useState('');    plans,
 //const [desc, setDesc] = useState('');  
 //const [score, setScore] = useState('');

 const ref = db.collection("products");
 const ref_plans = db.collection("plans");
 //REALTIME GET FUNCTION
 function getProducts() {
   setLoading(true);
   ref
   
    .onSnapshot((querySnapshot) => {
       const items = [];
       querySnapshot.forEach((doc) => {
         items.push(doc.data());
       });
       setProducts(items);
       setLoading(false);
     });
 }

  function getPlans() {
  setLoading(true);
  ref_plans
   .limit(1)
   .onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      //setPlans(items);
      setLoading(false);
    });
} 

 useEffect(() => {
    getProducts();
    getPlans();
    // eslint-disable-next-line
  }, []);

  if (loading){
      return  <h2> Plans Loading ...</h2>
  }

 

// ADD FUNCTION
 
function addPlans(newPlan) {
 /*  const owner = user ? user.uid : 'unknown';
  const ownerEmail = user ? user.email : 'unknown';
  const newPlan = {
     plan: product.name, 
     id: uuidv4(), 
     productid:product.id, 
    user: user.uid, 
    userEmail:user.email
  }; */
 
  ref_plans
    .doc(newPlan.id)
    .set(newPlan)
    
    .catch((err) => {
      console.error(err);
      alert(" You already have a Monthly plan activated");
    });
}
  

   return (
    <div className="plansScreen">
        {products.map((product ) => {
            //ToDo Logic to check if the user's subscription is active
            return (
                 <div className="plansScreen__plan">
                    <div className="plansScreen__info">
                        <div key={product.id}>
                        <h5>{product.name} Plan &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Rs {product.price}</h5>
                        <h6>{product.description}</h6>
                        </div>
                        </div>
                         <button  onClick={() => addPlans({  plan: product.name, id: uuidv4(), productid:product.id, 
                         user: user.uid, userEmail:user.email })}> Subscribe </button> 
                        {/* <button   onClick={() => addProduct(product.users.userId)} >Subscribe</button> */}
                    </div> 
            );
         })} 
         
</div>
);

}

export default PlansScreen3;