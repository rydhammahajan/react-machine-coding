import React, { useEffect, useState } from 'react';
import { recipesData } from "./const.js";
import "./RecipeFilterApp.module.css"; 

const Recipe = ({name , cuisine ,image , rating , reviewCount , setCartCount}) => {

  return (

    <div className="recipe-item">
      <img src={image}></img>
      <h4>{name}</h4>
      <div>🍴Cuisine : {cuisine}</div>
      <div>⭐Rating: {rating} ({reviewCount} reviews)</div>
      <button
        onClick={() => {
        setCartCount(prev => prev+1) ; 
      }}
      >Add to Cart</button>
    </div>
  )
}

const RecipeFilterApp = () => {

  const [cartCount, setCartCount] = useState(0); 
  const [averageRating, setAverageRating] = useState(0);
  const [filterRecipeData , setFilterRecipeData] = useState(recipesData) ; 

  useEffect(() => {
    const totalRating = filterRecipeData.reduce((acc, current) => {
      return acc + current.rating;
    }, 0)
    setAverageRating(totalRating / filterRecipeData.length);
  }, [filterRecipeData]);

  const performFilter = (value)=>{

    const temp = recipesData.filter((item) => {
      return item.rating >= Number(value); 
    })

    setFilterRecipeData([...temp]);

  }
  
  
  return (
    <div className = "recipe-container">
      <h1 >🍽️ Recipe Explorer</h1>

      <div className = "recipe-header">
        <div>

          <label htmlFor ="filter">Filter by Rating:</label>
          <select name="filter" id="filter" onChange={(e) => performFilter(e.target.value)} >
            <option value="4.0">4.0+</option>
            <option value="4.3">4.3+</option>
            <option value="4.5">4.5+</option>
            <option value="4.7">4.7+</option>
            <option value="4.9">4.9</option>
          </select>

        </div>
        <div>🛒Cart Items: {cartCount}</div>
      </div>

      <h3>Average Rating: {averageRating} ({filterRecipeData.length} recipes)</h3>

      <div className="recipe-items-container">
          {filterRecipeData.map((item)=>{

            return (
              <Recipe {...item} setCartCount={setCartCount} key={item.id} />
            )
          })}
      </div>
    </div>
  );
};

export default RecipeFilterApp;
