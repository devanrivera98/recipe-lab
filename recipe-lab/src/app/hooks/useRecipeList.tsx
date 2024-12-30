import { useEffect, useState } from 'react';
import { Recipe } from '../interfaces/recipe';
import { db } from '../config/firebase-config';
import { collection } from 'firebase/firestore';
import { getDocs } from 'firebase/firestore';

export function useRecipeList() {
  const [recipeList, setRecipeList] = useState<Recipe[]>([]);
  useEffect(() => {
    const getRecipeList = async () => {
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
        setRecipeList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };

    getRecipeList();
  }, []);

  return recipeList;
}
