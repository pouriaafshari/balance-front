import React, { useState } from 'react';
import { HashRouter as BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login from './Login'
import Menu from './Menu'
import Fastdiet from './Fastdiet';
import Recepies from './Recepies';
import Soupsabzijat from './soupsabzijat';
import { UserIdProvider } from './UserIdContext';

const pkgCheckURL = 'http://localhost:3000'

export default function App() {

  const [currentUser, setCurrentUser] = useState(true);
  const [veganPkg, setVeganPkg] = useState(false);

  const LoggedIn = () => {
    setCurrentUser(true)
  }

  const VeganCheck = async () => {
    const storedAccessToken = Cookies.get('accessToken');

    try {
      const response = await fetch(pkgCheckURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${storedAccessToken}`,
        },
      });

      if (response.ok) {
        const { Accesstoken, Uid } = await response.json();

        if (Accesstoken) {
          // Server response is valid, proceed with login
          // Save access token to cookies
          Cookies.set('accessToken', Accesstoken);

          setVeganPkg();
          navigate('/vegan');
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

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/" />;
    }
  
    return children;
  };

  const ProtectedPkg = ({ children }) => {
    if (!veganPkg) {
      return <Navigate to="/menu" />;
    }
  
    return children;
  };

  return (
    <div className="container">
      <UserIdProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login LoggedIn={LoggedIn}/>} />
            <Route
              path="/fastdiet"
              element={
                <ProtectedPkg>
                  <Fastdiet />
                </ProtectedPkg>
              }
            />
            <Route
              path="/menu"
              element={
                <ProtectedRoute>
                  <Menu />
                </ProtectedRoute>
              }
            />
            <Route
              path="/recepies"
              element={
                <ProtectedRoute>
                  <Recepies />
                </ProtectedRoute>
              }
            />
            <Route
              path="/recepies"
              element={
                <ProtectedRoute>
                  <Soupsabzijat/>
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<Navigate to="/" />} />

          </Routes>
        </BrowserRouter>
      </UserIdProvider>
    </div>
  );
}
