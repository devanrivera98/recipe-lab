import { useRecipeList } from '../../hooks/useRecipeList';
import { deleteRecipe } from '../../services/deleteRecipe';
import { updateRecipeTitle } from '../../services/updateRecipeTitle';
import { useState } from 'react';
// import { storage } from '../../config/firebase-config';
import { uploadFile } from '../../services/uploadFile';

export default function PersonalRecipeList() {
  const [updatedTitle, setUpdatedTitle] = useState('');

  //file upload
  const [fileUpload, setFileUpload] = useState<File | null>(null);

  const recipeList = useRecipeList();
  console.log('here is all the recipe', recipeList);

  return (
    <>
      <div>
        {recipeList.map((recipe) => (
          <div key={recipe.id}>
            <h1>{recipe.name}</h1>
            <p>{recipe.prepTime}</p>
            <button onClick={() => deleteRecipe(recipe.id)}>
              Delete Movie
            </button>
            <input
              placeholder="new title..."
              onChange={(e) => setUpdatedTitle(e.target.value)}
            />
            <button onClick={() => updateRecipeTitle(recipe.id, updatedTitle)}>
              Update Title
            </button>
          </div>
        ))}
        <div>
          <input type="file" onChange={(e) => setFileUpload(e.target.files ? e.target.files[0] : null)}/>
          <button onClick={() => uploadFile(fileUpload)}>Upload File</button>
        </div>
      </div>
    </>
  );
}
