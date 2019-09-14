import React from 'react';
import logo from './logo.svg';
import './App.css';

const getCurrentDate = ()=> {
  const date = new Date();
  return date.toDateString();
}

function App() {
  return (
    
    
    <div className="App">
      
     

      <h2>Tecajna lista HNB na dan {getCurrentDate()}</h2>
      <table>
        <tr>
          <th>Drzava</th>
          <th>Valuta</th>
          <th>Kupovni</th> 
          <th>Srednji</th>
          <th>Prodajni</th>
        </tr>
        <tr>
          <td></td>
          <td></td> 
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td> 
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
  </div>
  );
}

export default App;
