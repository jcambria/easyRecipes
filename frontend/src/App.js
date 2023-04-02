import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import RecipeSearchBar from './components/FindRecipe/RecipeSearchBar';
import RecipeCard from './components/RecipeCard/RecipeCard';
import ImageGallery from './components/ImgGallery/ImageGallery';
import ContactPage from './components/ContactPage/ContactPage';





function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <RecipeSearchBar />
      <RecipeCard  />
      <ImageGallery images= {['https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium',
      'https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000',
      'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-376464.jpg&fm=jpg',
      'https://itsallgoodvegan.com/wp-content/uploads/2020/03/img_3427.jpg' ]} />

      <ContactPage />

    
      
      
      {/* <Recipe /> */}
    </div>
  );
}

export default App;
