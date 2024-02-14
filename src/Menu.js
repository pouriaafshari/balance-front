import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function Menu() {
  const navigate = useNavigate();

  function handlefastdiet() {
    navigate('/fastdiet');
  }

  function handlerecepie() {
    navigate('/recepies');
  }

  function handleLogout() {
    // Remove the accessToken cookie
    Cookies.remove('accessToken');
    
    // Navigate to the root route
    navigate('/');
  }

  return (
    <>
      <div>
        <button className='package-button' onClick={handlefastdiet}>
          دریافت پکیج رایگان
        </button>
        <button className='package-button' onClick={handlerecepie}>
          دستور پخت
        </button>
        <button className='logout-button' onClick={handleLogout}>
          خروج
        </button>
      </div>
    </>
  );
}

export default Menu;
