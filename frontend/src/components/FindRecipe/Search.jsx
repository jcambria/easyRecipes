import React, {useState,useEffect} from 'react'
import { a } from 'react-spring';
import {AiOutlineSearch} from 'react-icons/ai'
import Axios from 'axios';
import { data } from 'autoprefixer';
const Search = () => {
    const [value,setValue] = useState ('');
    const [result,setResult] =useState([]);
    const [recipeName, setRecipeName] = useState("")
    const [recipeDescription, setRecipeDescription] = useState("")
    const [recipeIngredients, setRecipeIngredients] = useState("")
    const [recipeInstructions, setRecipeInstructions] = useState("")
    const [recipe, setRecipe] = useState('')
    const [recipeId,setRecipeId] = useState('')
    useEffect(() =>{
if(value.length >0){
    fetch("http://localhost:8080/api/recipes").then(
        response => response.json( )
    ).then(responseData => {
        setResult([])
        let searchQuery = value.toLowerCase();
        for(const key in responseData){
            let recipe =responseData[key].name.toLowerCase();
            if(recipe.slice(0, searchQuery.length).indexOf(searchQuery) !== -1) {
                    setResult(prevResult => {
                        return [...prevResult, responseData[key].name]
                    })
                        setRecipeId(responseData[key].id)

            }
        }
    }).catch(error =>{
        console.log(error);
    })
   
}else{
    setResult([])
}
    }, [value])

const getRecipe = (name) => {
        Axios.get(`http://localhost:8080/api/recipes/${recipeId}`).then((response) => {
           setRecipeName(response.data.name);
         setRecipeDescription(response.description)
         setRecipeIngredients(response.ingredients)
           setRecipeInstructions(response.instructions)  
    setRecipe([setRecipeName,setRecipeDescription,setRecipeIngredients,setRecipeInstructions]);
    console.log(recipeName)
        })
      }

  return (
    <div className='flex flex-col justify-center items-center '>
        <input type ='text' placeholder='Search for a Recipe' className='searchBar text-bold  bg-white  text-3xl text-black' onChange={(event ) => setValue(event.target.value)} value={value}/>
        <div className='searchBack '>
    {result.map((result,index) => (
        <a  onClick={() => {getRecipe(result[0])}} key={index}>
        <div className='searchEntry text-white text-xl'>
                {result}
                        {console.log(result[1])}
                
        </div>
        </a>
    ))}
    
        </div>
    </div>
  )
}

export default Search