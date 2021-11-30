import React from 'react'
import '../views/Info.css'
import Base1 from '../images/base1.jpg'



function Info() {
    return (
        <div className="info">
            <img clasName="info_image" src={Base1} alt=""/>   
                
            <div className='infobox'>
                        
                 <div className=''>
                            
                            <h2 className="info__title">
                                What is BuildHeim?
                            </h2>
                                
                            <h1 className='infobox__title'>
                                Info
                                asdasasdasdasdasdasdasfgsdgs
                                gSDWGgdsgASDGgdG
                                gGGgG
                            </h1>
                                
                            <p className="infobox__price">
                                hellosjkladhfgaskljdghsadlkjg
                                sdghasdfjkghasjklghafsdjlkghdaf
                                fakjhgsdfhjasdghjkasdgasdg
                                asdgkjhdfgsjkghakljdfg
                            </p>
                            <div className="infobox__rating">
                                    
                                <p>🌟</p>
                                    
                            </div>
                            
                        
                </div>

            </div>
      
        </div>
    )
}

export default Info
