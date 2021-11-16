import React from 'react'
import '../views/Info.css'
import Base1 from '../images/base1.jpg'
import InfoBox from './InfoBox';


function Info() {
    return (
        <div className="info">
            <img clasName="" src={Base1} alt=""/>
            
      <div className="info__left">
             
            

            <div>
            {/* <h3>Hello, {user?.email}</h3> */}
            <h2 className="info__title">What is BuildHeim?</h2>

            <InfoBox />

            </div>
      </div>

      {/* <div className="info__right">
        
      </div> */}
      
    </div>
    )
}

export default Info
