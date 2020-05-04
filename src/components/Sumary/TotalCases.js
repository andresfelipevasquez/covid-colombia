import React from 'react';
import useSwr from "swr";
import Card from '../Card';
import TotalCasesByGender from './TotalCasesByGender';
import ToFormatNumber from '../../services/ToFormatNumber';


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
    
    if(data) {
        let gender = '';
        let totalCasesTemp = 0;
        data.map(cases => {
            // Validación para no incluir falsos positivos
            if(!cases.sexo.includes('  ')){
                gender = cases.sexo.toUpperCase();
                totalCasesTemp = Number(cases.COUNT_sexo);
                totalCases += totalCasesTemp;
                totalCasesByGender[gender] = totalCasesByGender[gender] + totalCasesTemp;
            }
            return {
                totalCasesByGender
            }
        }); 
    }

    return(
        <div style={{display: "flex"}}>
            <Card data={{ label: 'Casos confirmados', value: ToFormatNumber(totalCases)}}></Card>
            <TotalCasesByGender data={{female: ToFormatNumber(totalCasesByGender['F']), male: ToFormatNumber(totalCasesByGender['M'])}}></TotalCasesByGender>
        </div>
    )
}

export default TotalCases;