import React, { useState } from 'react';
import { AiFillTool } from "react-icons/ai";
import './slider.css'; 



const Card = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className='space__' id="tools">
      <div id='tool'>
        <AiFillTool />
      </div>
    
      <h1 id='reheader'>Some Helpful Tools</h1>

    <div   className="image-grid-container">
      <div className="image-grid">
        <a target="_blank" rel="noreferrer" href="https://www.timeanddate.com/timer/">
          <div
            className={`image-container ${hoveredIndex === 0 ? 'hovered' : ''}`}
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
          >
            <img id='img' src="https://assets.epicurious.com/photos/5ed94926dd87b9e5df92999b/16:9/w_2560%2Cc_limit/StatementTimers_HERO_060320_8443.jpg" alt="example 1" />
            <div className="overlay">
              <p id='timer'>TIMER</p>
            </div>
          </div>
        </a>
        

        <a target="_blank" rel="noreferrer" href="https://www.tasteofhome.com/article/cooking-measurement-conversion/">
          <div
            className={`image-container ${hoveredIndex === 1 ? 'hovered' : ''}`}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <img id='img' src="https://images.unsplash.com/photo-1523901839036-a3030662f220?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGFwZSUyMG1lYXN1cmV8ZW58MHx8MHx8&w=1000&q=80" alt="example 2" />
            <div className="overlay">
              <p id='convertMeasurement'> MEASUREMENT CONVERTER</p>
            </div>
          </div>
        </a>

        <a target="_blank" rel="noreferrer" href="https://learntocook.com/techniques/top-6-kitchen-best-practices/">
          <div
            className={`image-container ${hoveredIndex === 2 ? 'hovered' : ''}`}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <img id='img' src="https://d39l2hkdp2esp1.cloudfront.net/img/photo/136620/136620_00_2x.jpg" alt="example 3" />
            <div className="overlay">
              <p id='practices'>BEST PRACTICES</p>
            </div>
          </div>
        </a>

        <a  target="_blank" rel="noreferrer" href="https://www.cooksmarts.com/cooking-guides/create-a-functional-kitchen/20-must-have-kitchen-tools/">
          <div
            className={`image-container ${hoveredIndex === 3 ? 'hovered' : ''}`}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <img id='img' src="https://www.fivestarhomefoods.com/blogs/wp-content/uploads/sites/2/2021/07/kitchen-essentials.jpg" alt="example 4" />
            <div className="overlay">
              <p id='kitchen' >Kitchen Essentials</p>
            </div>
          </div>
        </a>
      </div>
    </div>
    </div>
  );
};

export default Card;




// const Card = () => {
//   return (
//     <a href="https://www.timeanddate.com/timer/">
//       <img src="https://images.unsplash.com/photo-1523901839036-a3030662f220?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGFwZSUyMG1lYXN1cmV8ZW58MHx8MHx8&w=1000&q=80" alt="example image" />
//       <div className='overlay'> 
//       <p>
//         This is the link 
//       </p>
      
//       </div>
//     </a>
//   );
// };

// export default Card;







// import './slider.css';

// function Timer() {
//     return (
//       <>
//         <div id='resources'>
//           <div className="top">
//             <img id='timer'
//               src ='https://assets.epicurious.com/photos/5ed94926dd87b9e5df92999b/16:9/w_2560%2Cc_limit/StatementTimers_HERO_060320_8443.jpg'
//               alt="img"
//             />
//           </div>
//           <div>
//             <div>
//             <a id='timerLink' href="https://www.timeanddate.com/timer/" target="_blank" rel="noreferrer" >Online Timer</a>
//             </div>

//           </div>
//         </div>
//       </>
//     );
//   }
//   function Measurment() {
//     return (
//       <>
//         <div >
//           <div>
//             <img
//               id='measurment'
//               src = 'https://images.unsplash.com/photo-1523901839036-a3030662f220?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGFwZSUyMG1lYXN1cmV8ZW58MHx8MHx8&w=1000&q=80'
//               alt="img"
//             />
//           </div>
//           <div>
//             <div>
//             <a id='measurementLink' href="https://www.tasteofhome.com/article/cooking-measurement-conversion/" target="_blank" rel="noreferrer">Measurment Converter</a>
//             </div>

//           </div>
//         </div>
//       </>
//     );
//   }
  
//   function Practises() {
//     return (
//       <>
//         <div>
//           <div>
//             <img
//             id='practices'
//               className="w-[200px] h-[200px] object-cover  p-2"
//               src = 'https://d39l2hkdp2esp1.cloudfront.net/img/photo/136620/136620_00_2x.jpg'
//               alt="img"
//             />
//           </div>
//           <div className="bottom flex flex-col justify-center items-start p-3 bg-">
//             <div className="title font-semibold text-xl my-1">
//             <a id='practicesLink' href="https://learntocook.com/techniques/top-6-kitchen-best-practices/" target="_blank" rel="noreferrer">Best Practices</a>
//             </div>

//           </div>
//         </div>
//       </>
//     );
//   }

//     function Essentials() {
//         return (
//           <>
//             <div>
//               <div>
//                 <img
//                 id='essentials'
//                   className="w-[200px] h-[200px] object-cover  p-2"
//                   src = 'https://www.fivestarhomefoods.com/blogs/wp-content/uploads/sites/2/2021/07/kitchen-essentials.jpg'
//                   alt="img"
//                 />
//               </div>
//               <div className="bottom flex flex-col justify-center items-start p-3 bg-">
//                 <div className="title font-semibold text-xl my-1">
//                 <a id='essentialsLink' href="https://www.cooksmarts.com/cooking-guides/create-a-functional-kitchen/20-must-have-kitchen-tools/" target="_blank" rel="noreferrer">Kitchen Essentials</a>
//                 </div>
    
//               </div>
//             </div>
//           </>
//         );
//   }
//   export {
//     Timer,
//     Measurment,
//    Practises,
//     Essentials,
//   }


