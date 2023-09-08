import React from 'react';
//import './header.css'; 

function Header() {
    const email=sessionStorage.getItem('email');

  return (
    <div className="header">
      <h1>Approver Form</h1>
      <br/>
      
      <div className="left-corner">
        <span>Welcome, {email}</span>
      </div>
      
      <br/>
    </div>
  );
}

export default Header;
