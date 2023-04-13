import React from 'react'
import { GiBoneKnife, GiForkKnifeSpoon, GiSpoon } from 'react-icons/gi';
import BackgroundAnimation from '../BackgroundAnimation/BackgroundAnimation';
import './header.css';





const Header = () => {
  return (
    <div className='app__header app__wrapper section__padding'>
        <div className='app__wrapper_info'>
        <div className='animation'>
  
        </div>
        
          
          
          <img src="" alt="" /> 
         <h1 className='app__header-h1'>  <GiSpoon className='spoon' id='home'/> For Dads  Everywhere.
         </h1>
         
         <div className='animation'>
         <BackgroundAnimation  />

          
         </div>

         
         


         <p id='slogon'>Meals by Dads.  <div className='icon'>
          
          
          
          <GiForkKnifeSpoon />

          </div>  
          
          For dads.</p>

         <p id='header__intro'>
          Meals by Dad is a company that was created to help dads cook and make amazing meals for their families. We provides tools, resources, and support for dads who want to improve their cooking skills and provide delicious meals for  their loved ones.  
          
          
          </p>
         <button  className='explorebutton' > <a href="#contact">Learn More</a></button>

         <hr id='headerHR'  />
       
         {/* <img id='steak' src="https://loveincorporated.blob.core.windows.net/contentimages/gallery/42a33494-9333-4b6c-aeb6-1687e5a63506-resting-steak.jpg" alt="" />
         */}
        </div>
        <div id='recipes'>

        </div>
        
          <h2 id='headerForRecipe'>As a Dad We Know You're in a rush...</h2>

        

          
          

    </div>
  )
}

export default Header;
