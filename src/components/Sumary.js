import React from 'react';
import TotalCases from './TotalCases';
import Card from './Card';


const Sumary = () => {    
    
    return(
        <div style={{display:"flex", justifyContent: "center"}}>
            <TotalCases></TotalCases>
            {/* <Card value1={{hola: "hola"}}></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card> */}
        </div>
    )
}

export default Sumary;