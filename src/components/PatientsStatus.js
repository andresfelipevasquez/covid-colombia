import React from 'react'
import useSwr from "swr";
import Card from './Card';


const fetcher = async (...args) => {
    const res = await fetch(...args);
    const response = await res.json();    
    return response;
  };

const PatientsStatus = () => {
    const url_status = "https://www.datos.gov.co/resource/gt2j-8ykr.json?$select=atenci_n,COUNT(atenci_n)&$group=atenci_n";
    const {data, error} = useSwr(url_status, {fetcher});
    // let totalRecuperate = 0;
    // let totalDeceased = 0;
    let statusData = {}
    const labelRecuperate = 'RECUPERADO';
    const labelDeceased = 'FALLECIDO';



    if (error) return <div>failed to load</div>

    if(data) {
        data.map(items => {
            if(items.atenci_n.toUpperCase() === labelRecuperate){
                statusData[labelRecuperate] = items.COUNT_atenci_n;
            } else if(items.atenci_n.toUpperCase() === labelDeceased){
                statusData[labelDeceased] = items.COUNT_atenci_n;
            }
            return statusData;
        });

        console.log("Estados: ", statusData);        
    }

    return(
        <div style={{display: "flex"}}>
            <Card data={{ label: 'Recuperados', value: statusData[labelRecuperate]}}></Card>
            <Card data={{ label: 'Fallecidos', value: statusData[labelDeceased]}}></Card>
        </div>
    );

}

export default PatientsStatus;