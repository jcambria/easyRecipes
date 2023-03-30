import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import RecipeSearchBar from './components/FindRecipe/RecipeSearchBar';
import RecipeCard from './components/RecipeCard/RecipeCard';
import Card from './components/Resources/Card';
import Slider1, {Timer,Measurment} from './components/Resources/Slider1';


function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <RecipeSearchBar />
      <RecipeCard  />
      <Card />
  
      {/* <Recipe /> */}
    </div>
  );
}

export default App;
