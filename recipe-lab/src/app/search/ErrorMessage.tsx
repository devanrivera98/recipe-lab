export default function ErrorMessage({ query }: { query: string | null }) {
  if (query === null) {
    query = "";
  }

  return (
    <>
      <div className="container mx-auto pt-5 ">
        <h1 className="text-2xl pb-5">
          Search Results For <b>{query}</b>:
        </h1>
        There were no recipes with that entry.
      </div>
    </>
  );
}
