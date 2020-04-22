import React from 'react';
import './App.css';
import Map from './components/Map';
import Header from './components/Header';
import Sumary from './components/Sumary';

class App extends React.Component {

    render() {
      return(
        <div className="app-container">
          <Header></Header>
          <Sumary></Sumary>
          <Map></Map>
        </div>
      )
    }
}
export default App;
