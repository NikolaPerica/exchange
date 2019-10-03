import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch("https://blockchain.info/ticker").then(response => response.json()).then(findresponse => {
        this.setState({
          data: [findresponse]
        });
      })
  }

  render() {
    return (
      <div id="renderiranje">
        {
          this.state.data.map((dynamicData, Key) => {
            let keys = Object.keys(dynamicData);
            let d = dynamicData;
            return keys.map(data => {
              return (
                <div >
                  <table id="mjenjacnica">
                    <tr>
                      <th>valuta</th>
                      <th>kupnja</th>
                      <th>prodaja</th>
                    </tr>
                    <tr>
                      <td>{data}</td>
                      <td> {dynamicData[data].buy}</td>
                      <td> {dynamicData[data].sell}</td>
                    </tr>
                  </table>
                
                </div>
              );
            });
          })
          
        }
      </div>
    )
  }
}

export default App;
