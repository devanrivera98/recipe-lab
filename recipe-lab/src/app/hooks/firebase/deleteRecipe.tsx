import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebase-config';

export async function deleteRecipe(id: string) {
  const recipeDoc = doc(db, 'recipes', id);
  await deleteDoc(recipeDoc);
  location.reload();
}
