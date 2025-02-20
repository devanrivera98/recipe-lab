"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import SearchList from "./SearchList";
import getSpoonRecipes from "../utils/spoonacular/getSpoonRecipes";
import { dataInterface } from "./interface/dataInterface";
import ErrorMessage from "./ErrorMessage";

export default function SearchPage() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [list, setList] = useState<dataInterface[]>([]);
  const searchParams = useSearchParams();
  let query = searchParams.get("query");

  if (!query) {
    return <ErrorMessage query={query} />;
  }

  useEffect(() => {
    setIsLoading(true);
    getList();
  }, [query]);

  const getList = async () => {
    if (!query) {
      return <ErrorMessage query={query} />;
    }
    try {
      const data = await getSpoonRecipes(query);
      console.log(data);
      setList(data.results);
    } catch (err) {
      console.error("An error occured while gathering recipes", err);
    } finally {
      setIsLoading(false);
    }
  };

  if (list.length === 0) {
    return <ErrorMessage query={query} />;
  }

  return (
    <>
      <section className="container py-5 mx-auto">
        <div className="px-2 md:px-0">
          <h1 className="text-2xl pb-5">
            Search Results For <b>{query}</b>:
          </h1>
        </div>
        {isLoading ? (
          <div className="container mx-auto flex justify-center pt-10">
            <div className="loader"></div>
          </div>
        ) : (
          <SearchList data={list} />
        )}
      </section>
    </>
  );
}
