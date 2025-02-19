"use client";
import getSpoonRecipes from "@/app/utils/spoonacular/getSpoonRecipes";
import { useState, useEffect } from "react";
import SearchCard from "./SearchCard";

interface testData {
  id: number;
  title: string;
  image: string;
  imageType: string;
}

export default function SearchList({
  query,
  setIsLoading,
}: {
  query: string;
  setIsLoading: (value: boolean) => void;
}) {
  const [list, setList] = useState<testData[]>([]);

  const getList = async () => {
    const data = await getSpoonRecipes(query);
    console.log(data);
    setList(data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    getList();
  }, [query]);

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
