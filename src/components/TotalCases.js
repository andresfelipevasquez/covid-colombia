import React from 'react';
import useSwr from "swr";
import Card from './Card';


const fetcher = async (...args) => {
    const res = await fetch(...args);
    const response = await res.json();    
    return response;
  };

const TotalCases = () => {

    const url_total_cases = "https://www.datos.gov.co/resource/gt2j-8ykr.json?$select=sexo,COUNT(sexo)&$group=sexo";
    const {data, error} = useSwr(url_total_cases, {fetcher});
    let totalCases = 0;
    let totalCasesByGender = {
        'F': 0,
        'M': 0
    }
    
    if (error) return <div>failed to load</div>
    
    if(data){
        let gender = '';
        let totalCasesTemp = 0;
        data.map(cases => { 
            gender = cases.sexo.toUpperCase();
            totalCasesTemp = Number(cases.COUNT_sexo);
            totalCases += totalCasesTemp;
            totalCasesByGender[gender] = totalCasesByGender[gender] + totalCasesTemp;
            return {
                totalCasesByGender
            }
        }); 
    }

    return(
            <Card data={{ label: 'Casos confirmados', value: totalCases}}></Card>
    )
}

export default TotalCases;