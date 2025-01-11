import { db } from '../config/firebase-config';
import { getDocs, collection } from 'firebase/firestore';
import { Recipe } from '../interfaces/recipe';

type GetRecipeListParams = {
  setRecipeList?: (recipes: Recipe[]) => void;
};

export const getRecipeList = async ({
  setRecipeList,
}: GetRecipeListParams = {}) => {
  try {
    const recipeCollectionRef = collection(db, 'recipes');
    const data = await getDocs(recipeCollectionRef);
    console.log(data);
    const filteredData: Recipe[] = data.docs.map((doc) => {
      const recipeData = doc.data() as Omit<Recipe, 'id'>;
      return {
        ...recipeData,
        id: doc.id,
      };
    });
    console.log('this is filtered data', filteredData);
    if (setRecipeList) {
      setRecipeList(filteredData);
    }
  } catch (err) {
    console.error(err);
  }
};
