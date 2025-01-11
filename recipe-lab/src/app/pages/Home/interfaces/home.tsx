export interface RecRecipe {
  id: number;
  image: string;
  foodType: string;
  name: string;
}

export interface RecMappedRecipesProps {
  categoryTitle: string;
  recipeList: RecRecipe[];
}
