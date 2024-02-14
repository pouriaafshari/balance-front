// Layout.js
import React from 'react';
import { useUserId } from './UserIdContext'; // Import the context hook

function Layout({ children }) {
  const { userId } = useUserId(); // Access userId from context
  return (
    <div>
      <h4>{userId} خوش آمدید کاربر</h4>
      {children}
    </div>
  );
}

export default Layout;
