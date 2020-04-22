import React from 'react';


const Card = ({data}) => {

    const cardStyle = {
        display: "flex",
        flexDirection: "column",
        margin: "1rem 2rem 1rem 2rem",
        textAlign: "center",
        color: "#aeaeae",
        fontSize: "2.25vw",
        fontWeight: "500"
    }

    console.log(data);
    

    return(
        <div className="card-sumary" style={cardStyle}>
            <span style={{marginBottom: "0.5rem"}}>{data.value}</span>
            <span>{data.label}</span>
        </div>
    )
}

export default Card;