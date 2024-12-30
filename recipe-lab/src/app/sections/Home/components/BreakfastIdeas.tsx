import RecMappedRecipes from "./RecMappedRecipes";
import useRecipeId from "../../../hooks/useRecipeId";

export default function BreakfastIdeas() {

    const breakfastRecipes = [
    {
      id: 634882,
      image: "./images/breakfast-ideas/breakfast-burrito.png",
      foodType: 'Eggs',
      name: 'Best Breakfast Burrito',
      servingSize: 4
    },
    {
      id: 639769,
      image: "./images/breakfast-ideas/coconut-pancakes.png",
      foodType: 'Breakfast',
      name: 'Coconut Flour Pancakes with Blueberry Honey Compote',
      servingSize: 1
    },
    {
      id: 1095931,
      image: "./images/breakfast-ideas/matcha-smoothie.png",
      foodType: 'Smoothie',
      name: 'Matcha Smoothie',
      servingSize: 1
    },
    {
      id: 633692,
      image: "./images/breakfast-ideas/oatmeal-cranberry.png",
      foodType: 'Oatmeal',
      name: 'Baked Oatmeal with Dried Cranberries',
      servingSize: 9
    },
    {
      id: 796873,
      image: "./images/breakfast-ideas/yogurt-parfait.png",
      foodType: 'Yogurt',
      name: 'Yogurt Parfait',
      servingSize: 2
    },
    {
      id: 643514,
      image: "./images/breakfast-ideas/herb-omelette.png",
      foodType: 'Eggs',
      name: 'Fresh Herb Omelette',
      servingSize: 1
    },
    {
      id: 636087,
      image: "./images/breakfast-ideas/waffles.png",
      foodType: 'Waffles',
      name: 'Breakfast: Waffles',
      servingSize: 4
    },
    {
      id: 650239,
      image: "./images/breakfast-ideas/veggie-omelette.png",
      foodType: 'Eggs',
      name: 'Loaded Veggie Omelette',
      servingSize: 2
    },
    {
      id: 632884,
      image: "./images/breakfast-ideas/asian-eggs.png",
      foodType: 'Brunch',
      name: 'Asian Soft Scrambled Eggs',
      servingSize: 2
    }
  ]

  return (
    <>
    <section className='px-2 md:px-0 mb-16'>
      <RecMappedRecipes categoryTitle='Breakfast Ideas' recipeList={breakfastRecipes} />
    </section>
    </>
  )
}
