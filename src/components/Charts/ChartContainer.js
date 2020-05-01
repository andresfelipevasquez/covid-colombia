import React from 'react';
import DeceasedByDay from './DeceasedByDay';
import TotalCasesByDay from './TotalCasesByDay';
import './styles.css';

const ChartContainer = () => {
    return(
        <div className="chart-container">
            <TotalCasesByDay></TotalCasesByDay>
            <DeceasedByDay></DeceasedByDay>
        </div>
    )
}

export default ChartContainer;