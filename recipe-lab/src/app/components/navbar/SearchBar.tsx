import getSpoonRecipes from "@/app/utils/spoonacular/getSpoonRecipes";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    let queryParams = searchParams.get("query");
    if (queryParams === null) {
      queryParams = "";
    }
    setQuery(queryParams);
  }, [searchParams]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    router.push(`/search?query=${encodeURIComponent(query)}`);
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
            value={query}
            onChange={handleRecipeInput}
          ></input>
          <button className="absolute bg-lightOrange hover:bg-darkOrange px-3 h-full right-0 rounded">
            <FaMagnifyingGlass color="white" />
          </button>
        </div>
      </form>
    </>
  );
}
