import React from 'react';
import useSwr from "swr";
import Chart from 'react-google-charts';

const fetcher = async (...args) => {
  const res = await fetch(...args);
  const response = await res.json();    
  return response;
};

const TotalCasesByDay = () => {

    const url_total_cases = "https://www.datos.gov.co/resource/gt2j-8ykr.json?$select=fecha_reporte_web,COUNT(id_de_caso)&$group=fecha_reporte_web&$order=fecha_reporte_web%20ASC";
    const {data, error} = useSwr(url_total_cases, {fetcher});

    if (error) return <div>failed to load</div>

    let casesByDay =[]
    if(data) {
      casesByDay.push([{ type: 'date', label: 'Day' }, 'Total de casos']);
      let sumTotalCasesByDay = 0;
      data.map(item => {
        sumTotalCasesByDay += Number(item.COUNT_id_de_caso);
        casesByDay.push([new Date(item.fecha_reporte_web), sumTotalCasesByDay]);
        return casesByDay;
      });
    }
  
    return (
          <Chart
            className={"chart-cases-by-days"}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={casesByDay}              
            options={{
                hAxis: {
                  title: 'Casos confirmados',
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
                  title: 'Número de casos',
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
                      color:  '#f4b000'
                    },
                },
              }}
          />
      );
    
}

export default TotalCasesByDay;