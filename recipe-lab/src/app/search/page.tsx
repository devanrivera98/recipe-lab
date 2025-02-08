'use client'

import { useSearchParams } from "next/navigation";
import SearchList from "./SearchList";

export default function SearchPage() {

  const searchParams = useSearchParams();
  let query = searchParams.get('query')

// TEMPT ONLY REMOVE ONCE DONE TESTING
query = 'empty'
// TEMPT ONLY REMOVE ONCE DONE TESTING

  if (!query) {
    return 'There seems to be no recipes for this item.'
  }
  // see if i need to make a pages folder and restructure files

  console.log('this is', query)

  return (
    <>
    <section>
    <div>This is the search page for: {query}</div>
    <SearchList query={query}/>
    </section>

    </>
  )
}
