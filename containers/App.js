import React from 'react';

import Navbar from '../containers/Navbar';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      minLengthRead: 5,
      maxLengthRead: 10,
      reads: []
    }
}
    
  render() {
    return (
      <div id="app">

        <Navbar/>
        
        <label>Min:</label>
        <input type="text" value={this.state.minLengthRead} onChange={e => this.setState({minLengthRead: e.target.value})}/>
        <label>Max:</label>
        <input type="number" value={this.state.maxLengthRead} onChange={e => this.setState({maxLengthRead: e.target.value})}/>
        <button>Generate reads</button>

        <style jsx>{`
        `}</style>
      </div>
    );
  }
}