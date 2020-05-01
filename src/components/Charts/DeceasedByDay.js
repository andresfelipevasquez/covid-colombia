import React from 'react';
import useSwr from "swr";
import Chart from 'react-google-charts';

const fetcher = async (...args) => {
    const res = await fetch(...args);
    const response = await res.json();    
    return response;
  };

const ChartDeceased = () => {
    const url_total_cases = "https://www.datos.gov.co/resource/gt2j-8ykr.json?$select=fecha_de_muerte,COUNT(id_de_caso)&$group=fecha_de_muerte&$order=fecha_de_muerte%20ASC";
    const {data, error} = useSwr(url_total_cases, {fetcher});
    
    if (error) return <div>failed to load</div>

    let deceasedByDay =[];
    if(data) {
        deceasedByDay.push([{ type: 'date', label: 'Day' }, 'Fallecidos por día']);
        let sumTotalByDay = 0;
        data.map(item => {
            if(!item.fecha_de_muerte.includes('  ')){
                sumTotalByDay += Number(item.COUNT_id_de_caso);
                deceasedByDay.push([new Date(item.fecha_de_muerte), sumTotalByDay]);
            }            
            return deceasedByDay;
        });        
    }

    return(
          <Chart
            className="chart-deceased-by-day"
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={deceasedByDay}
            options={{
                hAxis: {
                  title: 'Total de fallecidos',
                  titleTextStyle: {
                    color: '#FFF'
                  },
                  gridlines: {
                    color: 'transparent'
                  },
                  textStyle: {
                    color: '#FFF'
                  }
                },
                vAxis: {
                  title: 'Número de fallecidos',
                  titleTextStyle: {
                    color: '#FFF'
                  },
                  gridlines: {
                    color: 'transparent'
                  },
                  textStyle: {
                    color: '#FFF'
                  }
                },
                backgroundColor: '#010915',
                series: {
                  0: {
                      curveType: 'function',
                      color:  'red'
                    },
                },
              }}
          />
    )
}

export default ChartDeceased;