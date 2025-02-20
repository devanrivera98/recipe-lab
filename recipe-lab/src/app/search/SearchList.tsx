import SearchCard from "./SearchCard";
import { dataInterface } from "./interface/dataInterface";

export default function SearchList({ data }: { data: dataInterface[] }) {
  const allSearchRecipes = data.map(
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
