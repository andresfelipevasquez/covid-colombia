import React from 'react';
import {ReactComponent as FemaleIcon} from '../Icons/woman.svg';
import {ReactComponent as MaleIcon} from '../Icons/man.svg';

const TotalCasesByGender = ({data}) => {
    return(
        <div className="total-cases-by-gender">
            <div className="total-cases-by-gender-female">
                <FemaleIcon width="22px" height="22px" fill="#aeaeae"/>
                <span style={{color:"#aeaeae"}}>{data.female}</span>
            </div>
            <div className="total-cases-by-gender-male">
                <MaleIcon width="22px" height="22px" fill="#aeaeae"/>
                <span style={{color:"#aeaeae"}}>{data.male}</span>
            </div>
        </div>
    )
}

export default TotalCasesByGender;