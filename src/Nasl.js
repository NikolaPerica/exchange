import React from 'react';
import './App.css';

const getCurrentDate = ()=> {
  const date = new Date();
  return date.toDateString();
}

function Nasl() {
  return (
    <div className="Nasl">
   <h2>Bitcoin vrijednosti na dan {getCurrentDate()}</h2>
   </div>
  );
}

export default Nasl;
