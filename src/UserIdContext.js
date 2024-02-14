// UserIdContext.js
import React, { createContext, useContext, useState } from 'react';

const UserIdContext = createContext();

export const UserIdProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);

  const setUserIdAndNavigate = (newUserId) => {
    setUserId(newUserId);
  };

  return (
    <UserIdContext.Provider value={{ userId, setUserIdAndNavigate }}>
      {children}
    </UserIdContext.Provider>
  );
};

export const useUserId = () => {
  const context = useContext(UserIdContext);
  if (!context) {
    throw new Error('useUserId must be used within a UserIdProvider');
  }
  return context;
};
