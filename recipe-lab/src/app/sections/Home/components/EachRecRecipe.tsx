import './pickedRecipes.css'
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useState } from 'react';
import { RecRecipe } from '../interfaces/home';


export default function EachRecRecipe(recipe: RecRecipe) {

    const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <a>
        <div className='relative'>
          <button className='mapped-recipes-button' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            {isHovered ?
            <FaHeart size={22} style={{color: 'white'}} />
            :
            <FaRegHeart size={22} style={{color: 'white'}} />}
          </button>
          <div className='mapped-recipe-image-container'>
            <img className='w-full h-full object-cover' src={recipe.image} />
          </div>
          <h5 className='py-2.5 md:py-5'>{recipe.foodType}</h5>
          <h1 className='text-xl font-bold'>{recipe.name}</h1>
        </div>
      </a>
    </>
  )
}
