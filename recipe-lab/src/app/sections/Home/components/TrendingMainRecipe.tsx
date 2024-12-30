export default function TrendingMainPage() {

  const articles = [
    {
      image: "./images/pie-collage.png",
      title: 'The 18 Recipes We Cannot Wait To Make This September',
    },
    {
      image: "./images/salad.png",
      title: 'Our Best Banana Bread Recipe of all time'
    },
    {
      image: "./images/pizza.png",
      title: 'The 18 Recipes We Cannot Wait To Make This September',
    },
    {
      image: "./images/banana-based.png",
      title: 'Our Best Banana Bread Recipe of all time'
    }
  ]

  return (
    <>
      <section className="px-4 mb-16">
        <div>
          <div className="pb-0.5 mb-6 flex md:justify-center">
            <h1 className="text-center text-3xl font-semibold trending-title">Trending Now</h1>
          </div>
          <div className="grid grid-cols-2 gap-5 md:gap-10">
          {articles.map((article, index) => (
            <a key={index} className="lg:flex">
              <div className="trending-aspect-ratio">
                <img className="cursor-pointer w-full h-full object-cover" src={article.image}></img>
              </div>
              <div className="flex justify-center items-center">
                <span className="title-decoration font-bold text-lg md:text-2xl md:px-2">
                  {article.title}
                </span>
              </div>
            </a>
          ))}
          </div>
        </div>
      </section>
    </>
  )
}
