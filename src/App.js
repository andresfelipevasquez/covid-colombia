import React from 'react';
import './App.css';
import Map from './components/Map/Map';
import Header from './components/Header';
import Sumary from './components/Sumary/Sumary';
import Charts from './components/Charts/ChartContainer';


class App extends React.Component {

    render() {
      return(
        <div className="app-container">
          <Header></Header>
          <Sumary></Sumary>
          <Map></Map>
          <Charts></Charts>          
        </div>
      )
    }
}
export default App;
