import './pickedRecipes.css'
import { RecMappedRecipesProps, RecRecipe } from '../interfaces/home';
import EachRecRecipe from './EachRecRecipe';

export default function RecMappedRecipes({categoryTitle, recipeList}: RecMappedRecipesProps) {

  const mappedRecipes = recipeList.map((recipe: RecRecipe) => (
    <>
      <EachRecRecipe key={recipe.id} id={recipe.id} image={recipe.image} foodType={recipe.foodType} name={recipe.name}  />
    </>
  ))

  return (
    <>
      <div className="mt-16">
        <div className="flex justify-center">
          <h1 className="text-4xl font-semibold mb-8">{categoryTitle}</h1>
        </div>
        <div className="recipe-grid">
          {mappedRecipes}
        </div>
      </div>
    </>
  )
}
