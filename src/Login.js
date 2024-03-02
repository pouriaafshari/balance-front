import React, { useState, useEffect } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'; // Import the cookies library or use an alternative
import Lottie from 'react-lottie';
import * as loadinganimation from './looties/loading.json'

const serverVerify = 'https://afshari.liara.run/verifyPhoneNumber'; // Replace with your actual server URL
const serverAuthUrl = 'https://afshari.liara.run/auth';
const serverLogin = 'https://afshari.liara.run/login';
//const serverVerify = 'http://localhost:3000/verifyPhoneNumber'; // Replace with your actual server URL
//const serverLogin = 'http://localhost:3000/login';
//const serverAuthUrl = 'http://localhost:3000/auth';


function Login({ LoggedIn }) {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showNotGoodText, setShowNotGoodText] = useState(true);
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(false);
  const [verifyToken, setVerifyToken] = useState(null);
  const [codeInput, setCodeInput] = useState('');
  const [isCodeValid, setIsCodeValid] = useState(false);
  const [loading, setLoading] = useState(false); // Added loading state

  // Load stored login state and user ID on component mount

  useEffect(() => {
    const authenticateToken = async () => {
      const storedAccessToken = Cookies.get('accessToken');

      if (storedAccessToken) {
        try {
          const response = await fetch(serverAuthUrl, {
            headers: {
              Authorization: `Bearer ${storedAccessToken}`,
            },
          });

          if (response.ok) {
            const { stat } = await response.json();

            if (stat === 'ok') {
              // Authentication successful, proceed with login
              LoggedIn();
              navigate('/menu');
            } else {
              // Handle invalid user ID from server response
              console.error('Invalid Token, could not authenticate');
            }
          } else {
            // Handle server error or authentication failure
            console.error('Server error or authentication failure:', response.statusText);
          }
        } catch (error) {
          console.error('Error sending GET request:', error);
        }
      }
    };

    authenticateToken();
  }, [LoggedIn, navigate]);

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);

    // Check if the phone number meets the specified criteria
    const isValidNumber = /^\d{11}$/.test(value) && value.startsWith('09');
    setIsValidPhoneNumber(isValidNumber);
    setShowNotGoodText(!isValidNumber);
  };

  const authNumber = async () => {
    setLoading(true);

    try {
      const response = await fetch(serverVerify, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber }),
      });

      if (response.ok) {
        const { verifytoken } = await response.json();

        // Log the server response
        console.log('Server response:', response);

        // Enable the code input area
        setVerifyToken(verifytoken);
      } else {
        // Handle server error
        console.error('Server error:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending POST request:', error);
    } finally {
      setLoading(false); // Set loading to false when the request is complete
    }
  };

  const handleAuthNumber = () => {
    // Call the authNumber function to request authentication code
    authNumber();
  };

  const handleLogin = async () => {
    if (isValidPhoneNumber && verifyToken) {

      setLoading(true);
      // Send POST request to the server
      try {
        const response = await fetch(serverLogin, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${verifyToken}`,
          },
          body: JSON.stringify({ phoneNumber, codeInput }),
        });

        if (response.ok) {
          const { Accesstoken, Uid } = await response.json();

          if (Accesstoken) {
            // Server response is valid, proceed with login
            // Save access token to cookies
            Cookies.set('accessToken', Accesstoken);

            LoggedIn();
            navigate('/menu');
          } else {
            // Handle invalid data from server response
            console.error('Invalid data from server:', Accesstoken, Uid);
          }
        } else {
          // Handle server error
          console.error('Server error:', response.statusText);
        }
      } catch (error) {
        console.error('Error sending POST request:', error);
      } finally {
        setLoading(false); // Set loading to false when the request is complete
      }
    }
  };

  const handleCodeInputChange = (e) => {
    const value = e.target.value;
    setCodeInput(value);

    // Check if the entered code is only numbers and 6 digits
    const isValidCode = /^\d{6}$/.test(value);
    setIsCodeValid(isValidCode);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: loadinganimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div>
      {loading && (
        <Lottie
          options={defaultOptions}
          isClickToPauseDisabled={true}
          height={'100vw'}
          width={'100vw'}
          isStopped={false}
          isPaused={false}
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 9999,
          }}
        />
      )}
      <h3>بالانس</h3>
      <p>شمارہ تلفن خود را وارد کنید</p>
      <input
        type='text'
        placeholder='0912654321'
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />
      <br />
      <button disabled={!isValidPhoneNumber} onClick={handleAuthNumber}>
        دریافت کد یک بار مصرف
      </button>
      <br />
      <input
        type='text'
        placeholder='کد یک بار مصرف'
        value={codeInput}
        onChange={handleCodeInputChange}
        disabled={!verifyToken}
      />
      <br />
      <button disabled={!isCodeValid} onClick={handleLogin}>
        ورود
      </button>
      {showNotGoodText && <p className='error'>*شماره وارد شده معتبر نمی باشد*</p>}
    </div>
  );
}

export default Login;
