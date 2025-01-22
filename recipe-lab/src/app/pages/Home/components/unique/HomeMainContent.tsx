import { foodNewsArticles } from "../../data/foodNewsArticles";
import FoodNewsCard from "../reusable/FoodNewsCard";

export default function HomeMainContent() {
  return (
    <>
      <section className="home-top-of-page pt-16 px-2 md:px-0  mb-16">
        <div className="article-card">
          <img
            alt="martha-stewart-recipe-collection"
            src="./images/martha-stewart-photo.jpg"
          />
          <div className="py-1 item-title">
            <h1 className="article-card-title text-3xl py-2">
              Discover the Best Recipes: Perfect for Hosting Every Occasion
            </h1>
            <div>
              Sometimes there just aren't enough hours in the day. Here are some
              great quick and tasty meals that anyone can make in less than 15
              minutes.
            </div>
          </div>
        </div>
        <div className="bg-fadedGreen p-6">
          <h1 className="text-2xl font-bold text-center pb-6">Food News</h1>
          <div className="grid sm:grid-cols-1 lg:grid-cols-1 md:grid-cols-2 gap-10">
            {foodNewsArticles.map((article, index) => {
              return (
                <FoodNewsCard
                  key={index}
                  image={article.image}
                  title={article.title}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
