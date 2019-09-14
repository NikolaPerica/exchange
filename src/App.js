import React from 'react';
import './App.css';

const getCurrentDate = ()=> {
  const date = new Date();
  return date.toDateString();
}

function App() {
  return (
    
    
    <div className="App">
      
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
