export default async function RecipePage({params} : {params: Promise<{recipeId : string}>}) {

  const recipeId = (await params).recipeId

  return (
    <>
      <div>This is the search page {recipeId}</div>
    </>
  )
}
