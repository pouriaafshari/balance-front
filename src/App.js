import React, { useState } from 'react';
import { HashRouter as BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login from './Login'
import Menu from './Menu'
import Fastdiet from './Fastdiet';
import Recepies from './Recepies';
import Soupsabzijat from './soupsabzijat';
import Layout from './Layout';
import { UserIdProvider } from './UserIdContext';

export default function App() {

  const [currentUser, setCurrentUser] = useState(true);

  const LoggedIn = () => {
    setCurrentUser(true)
  }

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/" />;
    }
  
    return <Layout>{children}</Layout>;
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
                <ProtectedRoute>
                  <Fastdiet />
                </ProtectedRoute>
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
