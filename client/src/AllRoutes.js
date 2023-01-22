import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AskQuestion from './pages/AskQuestion/AskQuestion'
//import App from './pages/Auth/App'
import Auth from './pages/Auth/Auth'
import LoginOTP from './pages/Auth/LoginOTP'
import Home from './pages/Home/Home'
import DisplayQuestion from './pages/Questions/DisplayQuestion'
import Questions from './pages/Questions/Questions'
import Tags from './pages/Tags/Tags'
import UserProfile from './pages/UserProfile/UserProfile'
import Users from './pages/Users/Users'
import Community from './pages/Community/Community'

//import PaymentForm from './components/Payment/PaymentForm'
import StripePayment from "./components/StripePayment/StripePayment"; 
import Success from "./components/StripePayment/Success"; 
import Cancel from "./components/StripePayment/Cancel";


const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Auth' element={<Auth />}/>
            <Route path='/AskQuestion' element={<AskQuestion />}/>
            <Route path='/Questions' element={<Questions />}/>
            <Route path='/Questions/:id' element={<DisplayQuestion />}/>
            <Route path='/Tags' element={<Tags />}/>
            <Route path='/Users' element={<Users />}/>
            <Route path='/Users/:id' element={<UserProfile />}/>
            <Route path='/Community' element={<Community />}/>
            <Route path='/LoginOTP' element={<LoginOTP/>}/>
            
            <Route path="/success" element={<Success />} /> 
            <Route path="/cancel" element={<Cancel />} /> 
            <Route path="/StripePayment" element={<StripePayment />} />
            

        </Routes>
    </div>
  )
}

export default AllRoutes