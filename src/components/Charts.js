import React from 'react';
import Chart from 'react-google-charts';

const Charts = () => {

    // https://www.datos.gov.co/resource/gt2j-8ykr.json?$select=fecha_reporte_web,COUNT(id_de_caso)&$group=fecha_reporte_web&$order=fecha_reporte_web%20DESC
    const data = [
        ['x', 'dogs', 'cats'],
        [0, 0, 0],
        [1, 10, 5],
        [2, 23, 15],
        [3, 17, 9],
        [4, 18, 10],
        [5, 9, 5],
        [6, 11, 3],
        [7, 27, 19],
      ];

    return (
        <div className={"my-pretty-chart-container"}>
          <Chart
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={data}
            width="50%"
            height="200px"          
            options={{
                hAxis: {
                  title: 'Time',
                },
                vAxis: {
                  title: 'Popularity',
                },
                backgroundColor: '#010915',
                series: {
                  1: { curveType: 'function' },
                },
              }}
          />
        </div>
      );
    
}

export default Charts;