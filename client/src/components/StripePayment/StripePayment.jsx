import React, { useState } from "react"; 
import "bootstrap/dist/css/bootstrap.min.css"; 
import Button from "react-bootstrap/Button"; 
import Card from "react-bootstrap/Card"; 
import {loadStripe} from "@stripe/react-stripe-js";



 
function StripePayment() { 
  const [product, setProduct] = useState({ 
    name: "Silver Plan", 
    price: 100, 
    description: 
      "Checkout", 
    quantity: 1, 
  }); 

  const makePayment = async () => { 
    const stripe = await loadStripe("pk_test_51MRaw5SFYGZYgCQk0cCMkII7vKSrgfrflVAivOM8BXxo03RYHZ6e9hdCzrrKyjC7Gm7351XYQIAPEBLXRJwlooqQ00MGHnGAU2");
    const body = { product }; 
    const headers = { 
      "Content-Type": "application/json", 
    }; 
 
    const response = await fetch( 
      "http://localhost:5000/create-checkout-session", 
      { 
        method: "POST", 
        headers: headers, 
        body: JSON.stringify(body), 
      } 
    ); 
 
    const session = await response.json(); 
 
    const result = stripe.redirectToCheckout({ 
      sessionId: session.id, 
    }); 
 
    if (result.error) { 
      console.log(result.error); 
    } 
  }; 
 
  return ( 
    <Card style={{ padding: '100px' }}> 
      
      <Card.Body> 
        <Card.Title>{product.name}</Card.Title> 
        <Card.Text>{product.description}</Card.Text> 
        <Button variant="primary" onClick={makePayment}> 
          Buy Now for {product.price} 
        </Button> 
      </Card.Body> 
    </Card> 
  ); 
}  
export default StripePayment; 


