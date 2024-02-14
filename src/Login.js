import React, { useState, useEffect } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'; // Import the cookies library or use an alternative
import { useUserId } from './UserIdContext';

const serverUrl = 'http://localhost:3000/savePhoneNumber'; // Replace with your actual server URL
const serverAuthUrl = 'http://localhost:3000/auth';

function Login({ LoggedIn }) {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showNotGoodText, setShowNotGoodText] = useState(true);

  // Load stored login state and user ID on component mount
  const { setUserIdAndNavigate } = useUserId(); // Access setUserIdAndNavigate from context

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
            const { userId } = await response.json();

            if (/^\d{6}$/.test(userId)) {
              // Authentication successful, proceed with login
              LoggedIn();
              
              // Update userId in context and navigate to '/menu'
              setUserIdAndNavigate(userId);
              navigate('/menu');
            } else {
              // Handle invalid user ID from server response
              console.error('Invalid user ID from server:', userId);
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
  }, [LoggedIn, setUserIdAndNavigate, navigate]);

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);

    // Check if the phone number meets the specified criteria
    const isValidPhoneNumber = /^\d{11}$/.test(value) && value.startsWith('09');
    setShowNotGoodText(!isValidPhoneNumber);
  };

  const handleLogin = async () => {
    if (!showNotGoodText) {
      // Send POST request to the server
      try {
        const response = await fetch(serverUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ phoneNumber }),
        });

        if (response.ok) {
          const { Accesstoken, Uid } = await response.json();

          if (Accesstoken && /^\d{6}$/.test(Uid)) {
            // Server response is valid, proceed with login
            // Save access token to cookies
            Cookies.set('accessToken', Accesstoken);

            LoggedIn();
            setUserIdAndNavigate(Uid);
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
      }
    }
  };

  return (
    <div>
      <h3>بالانس</h3>
      <p>شمارہ تلفن خود را وارد کنید</p>
      <input
        type='text'
        placeholder='0912654321'
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />
      <br />
      <button onClick={handleLogin}>
        دریافت کد یک بار مصرف
      </button>
      <br />
      <input type='text' placeholder='کد یک بار مصرف'></input>
      <br />
      <button disabled={showNotGoodText} onClick={handleLogin}>ورود</button>
      {showNotGoodText && <p className='error'>*شماره وارد شده معتبر نمی باشد*</p>}
    </div>
  );
}

export default Login;
