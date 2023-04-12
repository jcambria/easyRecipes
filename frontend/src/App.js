import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import RecipeSearchBar from './components/FindRecipe/RecipeSearchBar';
import RecipeCard from './components/RecipeCard/RecipeCard';
import Slider1 from './components/Resources/Slider1';
import UserRecipeCard from './components/RecipeCard/UserRecipeCard';
import Footer from './components/Footer/Footer';
import ShoppingList from './ShoppingList/ShoppingList';
import AboutTheDevs from './components/AboutTheDevs/AboutTheDevs';


function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <RecipeSearchBar />
      <RecipeCard  />
      <Slider1 />
      <ShoppingList />
      <UserRecipeCard />
      <Footer />
      <AboutTheDevs />

    </div>
  );
}

export default App;
