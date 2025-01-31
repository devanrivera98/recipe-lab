import getSpoonRecipes from "@/app/utils/spoonacular/getSpoonRecipes";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useState } from "react";

export default function SearchBar() {

  const [query, setQuery] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const data = await getSpoonRecipes(query);
    console.log(data)
  }

  function handleRecipeInput(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }


  return (
    <>
    <form className="px-3" onSubmit={handleSubmit}>
  <div className="flex border border-black rounded relative h-9">
    <input
      className="flex-grow pl-1 rounded"
      placeholder="Find a recipe"
      onChange={handleRecipeInput}
    ></input>
    <button className="absolute bg-lightOrange hover:bg-darkOrange px-3 h-full right-0 rounded">
      <FaMagnifyingGlass color="white" />
    </button>
  </div>
</form>
    </>
  )
}
