export default async function useRecipeId(recipeId: number) {

  const accessPoint = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${import.meta.env.VITE_SPOONACULAR_KEY}`;

    try {
    const response = await fetch(accessPoint)
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error fetching data:', response.status, errorData);
      throw new Error('Error fetching data');
    }
    const results = await response.json()
    console.log('received', results)
  }
  catch (err) {
    console.error(err)
  }

}

//practice id 635675
