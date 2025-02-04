'use client'

import { useSearchParams } from "next/navigation";
import SearchList from "./SearchList";

export default function SearchPage() {

  const searchParams = useSearchParams();
  const query = searchParams.get('query')

  if (!query) {
    return 'There seems to be no recipes for this item.'
  }

  console.log('this is', query)

  return (
    <>
    <div>This is the search page for: {query}</div>
    <SearchList query={query}/>

    </>
  )
}
