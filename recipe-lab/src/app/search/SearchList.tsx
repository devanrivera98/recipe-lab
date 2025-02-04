import getSpoonRecipes from "@/app/utils/spoonacular/getSpoonRecipes"
import { useState, useEffect } from "react"

export default function SearchList({query}: {query: string}) {

  const [list, setList] = useState([]);

 const getList = async () => {
  const data = await getSpoonRecipes(query);
   setList(data.results)
 }

 useEffect(() => {

 getList()

 }, [])

 const allSearchRecipes = list.map(({title, image, id}: {title: any, image: any, id: any}) => (
        <div key={id}>
          <h1>{title}</h1>
        </div>
      ))


  return(
    <>
      {allSearchRecipes}
    </>
  )
}
