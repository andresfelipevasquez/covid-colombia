import React from 'react';
import {ReactComponent as FemaleIcon} from '../../Icons/woman.svg';
import {ReactComponent as MaleIcon} from '../../Icons/man.svg';

const TotalCasesByGender = ({data}) => {

    const cardStyle = {
        display: "flex",
        flexDirection: "column",
        margin: "1rem 2rem 1rem 2rem",
        textAlign: "center",
        color: "#aeaeae",
        fontSize: "2.25vw",
        fontWeight: "500"
    }

    return(
        <div className="total-cases-by-gender" style={cardStyle}>
            <div className="total-cases-by-gender-female">
                <FemaleIcon width="2.0vw" height="2.0vw" fill="#aeaeae"/>
                <span style={{color:"#aeaeae"}}>{data.female}</span>
            </div>
            <div className="total-cases-by-gender-male">
                <MaleIcon width="2.0vw" height="2.0vw" fill="#aeaeae"/>
                <span style={{color:"#aeaeae"}}>{data.male}</span>
            </div>
        </div>
    )
}

export default TotalCasesByGender;