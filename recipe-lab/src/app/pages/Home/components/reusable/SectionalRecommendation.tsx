import useRecipeId from '../../../../hooks/useRecipeId'
import useSearchApi from '../../../../hooks/useSearchApi'
import './pickedRecipes.css'
import RecMappedRecipes from "./RecMappedRecipes";



export default function SectionalRecommendation({name, dataList}: {name: string, dataList: {id: number, image: string, foodType: string, name: string, servingSize: number }[] }) {

  // console.log(useSearchApi('steak salad'));
  // console.log(useRecipeId(1095697))

  return (
    <>
    <section className='px-2 mb-16 md:px-0'>
      <RecMappedRecipes categoryTitle={name} recipeList={dataList} />
    </section>
    </>
  )
}
