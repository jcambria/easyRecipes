import React from 'react'
import { GiBoneKnife, GiForkKnifeSpoon, GiSpoon } from 'react-icons/gi';
import './header.css';




const Header = () => {
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
        <div className='app__wrapper_info'>
          <img src="" alt="" /> 
         <h1 className='app__header-h1'>  <GiSpoon className='spoon' /> For Dads <br /> Everywhere.</h1>

         <p id='slogon'>Meals by Dads.<div>
          
          <GiForkKnifeSpoon  />
          </div>  
          
          For dads.</p>

         <p>Meals for Dad is a company that was created to help dads cook and make amazing meals for their families. <br /> We provides tools, resources, and support for dads who want to improve their cooking skills and provide delicious meals for their loved ones. Meals for Dad aims to empower dads to take an active role in meal preparation and provide healthy, nutritious, and flavorful meals for their families. With a focus on simplifying meal preparation and making cooking enjoyable, Meals for Dad offers a variety of recipes, cooking tips, and tools to help dads create memorable meals.

</p>
         <button id='explorebutton'>Explore More</button>
       
         <img id='steak' src="https://loveincorporated.blob.core.windows.net/contentimages/gallery/42a33494-9333-4b6c-aeb6-1687e5a63506-resting-steak.jpg" alt="" />
        
        </div>
        <div className='app__wrapper_img'>
        </div>
    </div>
  )
}

export default Header;
