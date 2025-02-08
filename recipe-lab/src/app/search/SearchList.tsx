import getSpoonRecipes from "@/app/utils/spoonacular/getSpoonRecipes"
import { useState, useEffect } from "react"
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

interface testData {
  id: number;
  title: string;
  image: string;
  imageType: string;
}


export default function SearchList({query}: {query: string}) {

  const [list, setList] = useState<testData[]>([]);

//  const getList = async () => {
//   const data = await getSpoonRecipes(query);
//   console.log(data)
//    setList(data.results)
//  }

 useEffect(() => {

//  getList()
setList(testData)

 }, [])

 const allSearchRecipes = list.map(({title, image, id}: {title: any, image: any, id: any}) => (
        <li key={id} className="search-card-container">
          <div>
            <div className="search-image-container">
              <img onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://www.simplyrecipes.com/thmb/OqIa97v74_ejCGqPxeyCs2Lv-1Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SimplyRecipesPlaceholder-d1f4bdc2330a4d5ea617df96c74321cc.png';
              }} src={image} className="search-image object-cover" />
            <button className="heart-button">
            <FaHeart />
            </button>
            </div>
            <h1 className="">{title}</h1>
          </div>
        </li>
      ))


  return(
    <>
    <ul className="search-items-container flex flex-wrap container mx-auto">
      {allSearchRecipes}
    </ul>
    </>
  )
}


const testData = [{id: 650946, title: 'Maple-Nut Oatmeal Cream Pies', image: 'https://img.spoonacular.com/recipes/650946-312x231.jpg', imageType: 'jpg'},
{id: 648883, title: 'Kidney Pie', image: 'https://img.spoonacular.com/recipes/648883-312x231.jpg', imageType: 'jpg'},
{id: 652497, title: 'Mouthwatering Mushroom Pie', image: 'https://img.spoonacular.com/recipes/652497-312x231.jpg', imageType: 'jpg'},
{id: 632167, title: 'Almond Pie', image: 'https://img.spoonacular.com/recipes/632167-312x231.jpg', imageType: 'jpg'},
{id: 638568, title: 'Chili Pie with Green Chile and Cheddar Cornbread Crust', image: 'https://img.spoonacular.com/recipes/638568-312x231.jpg', imageType: 'jpg'},
{id: 661860, title: 'Strawberry Peach Pie with Sage and Honey', image: 'https://img.spoonacular.com/recipes/661860-312x231.png', imageType: 'png'},
{id: 157278, title: 'Pumpkin Chiffon Pie with a Double-Chocolate Crust', image: 'https://img.spoonacular.com/recipes/157278-312x231.jpg', imageType: 'jpg'},
{id: 641410, title: 'Delicious Rhubarb Custard Pie', image: 'https://img.spoonacular.com/recipes/641410-312x231.jpg', imageType: 'jpg'}
]
