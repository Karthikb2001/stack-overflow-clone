import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
import userRoutes from './routes/users.js'
import questionRoutes from './routes/Questions.js'
import answerRoutes from './routes/Answers.js'
import {loadStripe} from '@stripe/stripe-js';

dotenv.config();

const stripe = loadStripe(process.env.STRIPE_SECRET_KEY);

const app = express();



app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.get('/', (req, res) => {
    res.send("This is a Stack OverFlow Clone API")
})

app.use('/user', userRoutes)
app.use('/questions', questionRoutes)
app.use('/answer', answerRoutes)

app.post("/create-checkout-session", async (req, res) => { 
  const { product } = req.body; 
  const session = await stripe.checkout.session.create({ 
  payment_method_types: ["card"], 
    line_items: [ 

        {price: 'price_1MSHVjSFYGZYgCQk0q5N3oxm', quantity: 1}
       
    ], 
    mode: "payment", 
    success_url: "http://localhost:3000/success", 
    cancel_url: "http://localhost:3000/cancel", 
  }); 
  res.redirect(303, session.url);
});


const PORT = process.env.PORT || 5000

//const CONNECTION_URL = "mongodb+srv://admin:admin@stack-overflow-clone.wndj46r.mongodb.net/?retryWrites=true&w=majority"
const DATABASE_URL = process.env.CONNECTION_URL

mongoose.connect(DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () =>
        console.log(`Stack OverFlow Clone API listening on port ${PORT}!`),
    ))
    .catch((err) => console.log(err.message))

 
