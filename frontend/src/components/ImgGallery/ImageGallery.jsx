// import React, { useState } from "react";
// import "./imageGallery.css";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { AiFillCamera, AiFillSave, AiFillTool } from "react-icons/ai";

// const ImageGallery = ({ images }) => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleImageClick = (index) => {
//     setActiveIndex(index);
//   };

//   const handlePrevClick = () => {
//     setActiveIndex((activeIndex - 1 + images.length) % images.length);
//   };

//   const handleNextClick = () => {
//     setActiveIndex((activeIndex + 1) % images.length);
//   };

//   return (
//     <div className="image-gallery">
//       <AiFillCamera  id="iconicon" />
//       <h1>
//           Our Top Picks
//         </h1>
//       <div className="main-image-container">
        
//         <img src={images[activeIndex]} alt="gallery" />
//         <div className="arrow left" onClick={handlePrevClick}>
//           <FaChevronLeft />
//         </div>
//         <div className="arrow right" onClick={handleNextClick}>
//           <FaChevronRight />
//         </div>
//       </div>
//       <div className="thumbnail-container">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className={`thumbnail ${index === activeIndex && "active"}`}
//             onClick={() => handleImageClick(index)}
//           >
//             <img src={image} alt={`gallery-thumbnail-${index}`} />

//           </div>
//         ))}
//       </div>
//       <div>
        
//       </div>
//       <div>
  
//       </div>
      
//     </div>
    
//   );
// };

// export default ImageGallery;

