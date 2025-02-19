"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import SearchList from "./SearchList";

export default function SearchPage() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const searchParams = useSearchParams();
  let query = searchParams.get("query");

  useEffect(() => {
    setIsLoading(true);
  }, [query]);

  if (!query) {
    return "There seems to be no recipes for this item.";
  }

  return (
    <>
      <section className="container py-5 mx-auto">
        <div className="px-2 md:px-0">
          <h1 className="text-2xl pb-5">
            Search Results For <b>{query}</b>:
          </h1>
        </div>
        {isLoading && (
          <div className="container mx-auto flex justify-center pt-10">
            <div className="loader"></div>
          </div>
        )}
        <div className={isLoading ? "hidden" : ""}>
          <SearchList query={query} setIsLoading={setIsLoading} />
        </div>
      </section>
    </>
  );
}
