export default async function useSearchApi(value: string) {

const accessPoint = `https://api.spoonacular.com/recipes/complexSearch?query=${value}&number=50&apiKey=${import.meta.env.VITE_SPOONACULAR_KEY}`;


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
