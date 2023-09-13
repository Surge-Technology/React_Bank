import React from 'react';
//import './header.css'; 

function Header() {
    const email=sessionStorage.getItem('email');

  return (
    <div className="header">
    <img> </img>  <span><h1>Inbox</h1></span>  
      <div className="right-corner"style={{ textAlign: 'end',fontSize:25 }}>
         <span>Welcome {email}</span>
      </div>
      
      <br/>
   </div>
  

  );
}

export default Header;
