"use client";

import { useSearchParams } from "next/navigation";
import SearchList from "./SearchList";

export default function SearchPage() {
  const searchParams = useSearchParams();
  let query = searchParams.get("query");

  // TEMPT ONLY REMOVE ONCE DONE TESTING
  query = "empty";
  // TEMPT ONLY REMOVE ONCE DONE TESTING

  if (!query) {
    return "There seems to be no recipes for this item.";
  }
  // see if i need to make a pages folder and restructure files

  console.log("this is", query);

  return (
    <>
      <section className="container py-5 mx-auto">
        <div>
          <h1 className="text-2xl pb-5">
            Search Results For <b>{query}</b>:
          </h1>
        </div>
        <SearchList query={query} />
      </section>
    </>
  );
}
