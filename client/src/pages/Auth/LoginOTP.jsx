import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import './Auth.css'
import icon from '../../assets/icon.png'
import { firebase, auth } from './firebase';
import { loginOTP } from '../../actions/auth'

const LoginOTP = () => {

    const users = useSelector((state) => state.usersReducer)

    const [phone, setphone] = useState("")
    const [mynumber, setMynumber] = useState("");
    const [otp, setotp] = useState("");
    const [show, setshow] = useState(false);
    const [final, setfinal] = useState("");

    const dispatch = useDispatch();

    const navigate = useNavigate();
    
    let countryCode = "+91";
    
    const signin = (e) => {

        e.preventDefault();
        
        users.filter(user => user.phone === phone).map(user => (
            setMynumber(user.phone)          
        ))
    }
    useEffect(() => {
        if (mynumber === "" || mynumber.length < 10) return;

         console.log({mynumber})
  
        let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        auth.signInWithPhoneNumber(mynumber, verify).then((result) => {
            setfinal(result);
            alert("One Time Password (OTP) has been sent on your registered mobile number...")
            setshow(true);
        })
            .catch((err) => {
                alert(err);
                window.location.reload()
            });
    }, [mynumber])
  
    // Validate OTP
    const ValidateOtp = (e) => {

        e.preventDefault()

        if (otp === null || final === null)
            return;
        final.confirm(otp).then((result) => {
            dispatch(loginOTP({phone}, navigate))
            // success
        }).catch((err) => {
            alert("Wrong code");
        })
    }

    

  return (
    <div>
    <section className='auth-section'>
            <div className='auth-container-2'>
                <img src={icon} alt="stack overflow" className='login-logo'/>
                    <div style={{ display: !show ? "block" : "none" }}>
                        <form >
                            <label htmlFor='number'>
                                <h4>Phone Number</h4>
                                <input type="number" name='number' id='number' onChange={(e) => {setphone(countryCode.concat(e.target.value))}}/>
                            </label>
                            <div id="recaptcha-container"></div>
                            <button type='submit' className='auth-btn' onClick={signin}>Send OTP</button>
                        </form>
                    </div>
                    <div style={{ display: show ? "block" : "none" }}>
                        <form>
                            <label htmlFor='number'>
                                <h4>OTP</h4>
                                <input type="number" name='number' id='number' onChange={(e) => {setotp(e.target.value)}}/>
                            </label>
                            <button type='submit' className='auth-btn' onClick={ValidateOtp}>Verify OTP</button>
                        </form>
                    </div>
            </div>
        </section>
    </div>
  )
}

export default LoginOTP 




/*
import { Button, Card, CardContent } from '@mui/material';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography'
import React, { useState } from 'react'
import { auth } from './firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';



const LoginOTP = () => {

    const [phone, setPhone] = useState('+91');
    const [hasFilled, setHasFilled] = useState(false);
    const [otp, setOtp] = useState('');

    const [isSignUp, setIsSignUp] = useState(false)

    const generateRecaptcha = () => {
      window.recaptchaVerifier = new RecaptchaVerifier('recaptcha', {
        'size': 'invisible',
        'callback': (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // ...
        }
      }, auth);
    }
  
    const handleSwitch = () => {
      if(!isSignUp){
          setIsSignUp(true)
      }
      else{
          setIsSignUp(false)
      }
  }

    const handleSend = (event) => {
      event.preventDefault();
      setHasFilled(true);
      generateRecaptcha();
      let appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(auth, phone, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
        }).catch((error) => {
          // Error; SMS not sent
          console.log(error);
        });
    }
    
    const verifyOtp = (event) => {
      let otp = event.target.value;
      setOtp(otp);
  
      if (otp.length === 6) {
        // verifu otp
        let confirmationResult = window.confirmationResult;
        confirmationResult.confirm(otp).then((result) => {
          // User signed in successfully.
          let user = result.user;
          console.log(user); 
          
          alert('User signed in successfully');
          setIsSignUp(true)
          // ...
        }).catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
          alert('User couldn\'t sign in (bad verification code?)');
        });
      }
      if(!isSignUp){
        setIsSignUp(true)
    }
    else{
        setIsSignUp(false)
    }
    }
  
    if(!hasFilled){
      return (
        <div className='app__container'>
          <Card sx={{ width: '300px'}}>
            <CardContent sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
              <Typography sx={{ padding: '20px'}} variant='h5' component='div'>Enter your phone number</Typography>
              <form onSubmit={handleSend}>
                <TextField sx={{ width: '240px'}} variant='outlined' autoComplete='off' label='Phone Number' value={phone} onChange={(event) => setPhone(event.target.value)} />
                <Button type='submit' variant='contained' sx={{ width: '240px', marginTop: '20px'}}>Send Code</Button>
              </form>
            </CardContent>
          </Card>
          <div id="recaptcha"></div>
        </div>
      ) 
    } else {
      return (
        <div className='app__container'>
          <Card sx={{ width: '300px'}}>
            <CardContent sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
              <Typography sx={{ padding: '20px'}} variant='h5' component='div'>Enter the OTP</Typography>
                <TextField sx={{ width: '240px'}} variant='outlined' label='OTP ' value={otp} onChange={verifyOtp } onchange={handleSwitch} />
            </CardContent>
          </Card>
          <div id="recaptcha"></div>
        </div>
      )
    }
  }
  export default LoginOTP
*/