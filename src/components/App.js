import React, { Component } from 'react';
import LinkList from './LinkList';
import '../styles/App.css';

class App extends Component {
  
  render() {
    
    return (
      <div>
      <header className="App-header">
        <h1 className="App-title">Ant's Race</h1>
      </header>
      <div className="ants-container">
        <div className="ants-list">
           
            
            <LinkList />
        </div>
      </div>
      </div>
    );
  }
}

export default App;
