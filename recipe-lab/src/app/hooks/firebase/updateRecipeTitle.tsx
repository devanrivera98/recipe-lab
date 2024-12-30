import { db } from '../config/firebase-config';
import { updateDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';

export async function updateRecipeTitle(id: string, updatedTitle: string) {
  const recipeDoc = doc(db, 'recipes', id);
  await updateDoc(recipeDoc, { name: updatedTitle });
  location.reload();
}
