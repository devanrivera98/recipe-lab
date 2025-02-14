"use server";

export default async function getSpoonRecipes(recipeName: string) {
  const API_KEY = process.env.SPOONACULAR_API_KEY;

  if (!API_KEY) {
    console.error("API key is missing");
  }

  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${recipeName}&number=40&apiKey=${API_KEY}`,
    );
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error fetching data", response.status, errorData);
      return [];
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error("Caught Error", err);
    return [];
  }
}
