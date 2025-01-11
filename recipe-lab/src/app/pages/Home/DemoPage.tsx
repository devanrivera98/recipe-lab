import { Auth } from "../components/Auth";
import AddRecipe from '../components/PersonalRecipes/AddRecipe';
import PersonalRecipeList from '../components/PersonalRecipes/PersonalRecipeList';
import { db } from '../config/firebase-config';
import { collection } from 'firebase/firestore';

export default function DemoPage() {

  const recipeCollectionRef = collection(db, 'recipes');

  return (
    <>
      <Auth/>
      <AddRecipe collection={recipeCollectionRef} />
      <PersonalRecipeList />
    </>
  )
}
