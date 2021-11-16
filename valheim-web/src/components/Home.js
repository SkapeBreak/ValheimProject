
import '../views/Home.css'
import React from 'react'
import { Link } from "react-router-dom";
import '../views/Header.css'
import dockBG from '../images/Dock01.jpg'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Home() {
  return (
    <div>
      <div id="container">
      <img className="backround" src={dockBG} alt="bgattempt"/>  
            
        <div id="navbar">
          <ul>
                      
            <div>

              <Link to='/store'>
                  
                <span className="header__optionLineTwo">Community</span>
                  
              </Link>

            </div>  
              
            <div>
                
              <Link to='/store'>
                  
                <span className="header__optionLineTwo">Store</span>
                  
              </Link>
            
            </div>
          
          </ul>
        
        </div>

            

            </div>
            <div id="content">
                <h2>Build</h2>
                <h2>Heim</h2>
                <p>Seeds, Blueprints and more.</p>
                <Link to='/info'>
                  <button>Learn More</button>
                </Link >
            </div>
            <div id="icons">
                <div id="iconsLogo">
                    <i> <FacebookIcon /> </i>                    
                    <i> <InstagramIcon /></i>
                    <i> <YouTubeIcon /></i>
                </div>
            </div>
        
    </div>
  )
}

export default Home
