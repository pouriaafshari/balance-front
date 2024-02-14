import React from 'react';

function Recepies() {
    const storedUserId = localStorage.getItem('userId');

    return (
        <div>
        <h4>{storedUserId} خوش آمدید کاربر</h4>
        <button className='package-button'>پوره سبزیجات</button>
        <button className='package-button'>پوره سبزیجات</button>
        <button className='package-button'>پوره سبزیجات</button>
        </div>
    );
}

export default Recepies;
