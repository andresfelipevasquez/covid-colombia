import React from 'react';
import './App.css';
import Map from './components/Map';
import Header from './components/Header';

class App extends React.Component {

    render() {
      return(
        <div>
          <Header></Header>
          <Map></Map>
        </div>
      )
    }
}
export default App;
