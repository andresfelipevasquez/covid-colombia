import React from 'react';
import TotalCases from './TotalCases';
import PatientsStatus from './PatientsStatus';


const Sumary = () => {    
    
    return(
        <div style={{display:"flex", justifyContent: "center"}}>
            <TotalCases></TotalCases>
            <PatientsStatus></PatientsStatus>         
        </div>
    )
}

export default Sumary;