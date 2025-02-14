import getSpoonRecipes from "@/app/utils/spoonacular/getSpoonRecipes";
import { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import SearchCard from "./SearchCard";

interface testData {
  id: number;
  title: string;
  image: string;
  imageType: string;
}

export default function SearchList({ query }: { query: string }) {
  const [list, setList] = useState<testData[]>([]);

  //  const getList = async () => {
  //   const data = await getSpoonRecipes(query);
  //   console.log(data)
  //    setList(data.results)
  //  }

  useEffect(() => {
    //  getList()
    setList(testData);
  }, []);

  const allSearchRecipes = list.map(
    ({ title, image, id }: { title: any; image: any; id: any }) => (
      <SearchCard key={id} id={id} title={title} image={image} />
    ),
  );

  return (
    <>
      <ul className="px-2 md:px-0 search-items-container flex flex-wrap container mx-auto">
        {allSearchRecipes}
      </ul>
    </>
  );
}

const testData = [
  {
    id: 650946,
    title: "Maple-Nut Oatmeal Cream Pies",
    image: "https://img.spoonacular.com/recipes/650946-312x231.jpg",
    imageType: "jpg",
  },
  {
    id: 648883,
    title: "Kidney Pie",
    image: "https://img.spoonacular.com/recipes/648883-312x231.jpg",
    imageType: "jpg",
  },
  {
    id: 652497,
    title: "Mouthwatering Mushroom Pie",
    image: "https://img.spoonacular.com/recipes/652497-312x231.jpg",
    imageType: "jpg",
  },
  {
    id: 632167,
    title: "Almond Pie",
    image: "https://img.spoonacular.com/recipes/632167-312x231.jpg",
    imageType: "jpg",
  },
  {
    id: 638568,
    title: "Chili Pie with Green Chile and Cheddar Cornbread Crust",
    image: "https://img.spoonacular.com/recipes/638568-312x231.jpg",
    imageType: "jpg",
  },
  {
    id: 661860,
    title: "Strawberry Peach Pie with Sage and Honey",
    image: "https://img.spoonacular.com/recipes/661860-312x231.png",
    imageType: "png",
  },
  {
    id: 157278,
    title: "Pumpkin Chiffon Pie with a Double-Chocolate Crust",
    image: "https://img.spoonacular.com/recipes/157278-312x231.jpg",
    imageType: "jpg",
  },
  {
    id: 641410,
    title: "Delicious Rhubarb Custard Pie",
    image: "https://img.spoonacular.com/recipes/641410-312x231.jpg",
    imageType: "jpg",
  },
];
