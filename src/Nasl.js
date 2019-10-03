import React from 'react';
import './App.css';

const getCurrentDate = ()=> {
  const date = new Date();
  return date.toDateString();
}

function Nasl() {
  return (
    <div className="Nasl">
   <h1>Bitcoin value on {getCurrentDate()}</h1>
   </div>
  );
}

export default Nasl;
