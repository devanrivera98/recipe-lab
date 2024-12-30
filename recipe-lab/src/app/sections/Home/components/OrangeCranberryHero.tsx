export default function OrangeCranberryHero() {
  return (
    <>
    <section>
      <a className="grid orange-grid-container cursor-pointer">
        <div className="orange-cranberry-aspect orange-image-container">
          <img className="w-full h-full object-cover" src="./images/orange-cranberry-photo.png"></img>
        </div>
        <div className="orange-hero-card md:ml-10">
          <div className="flex flex-col p-3 md:p-6 md:w-96 bg-lightOrange">
            <div>
            <span className="text-lg">IN THE KITCHEN</span>
            </div>
            <span className="text-3xl font-semibold my-0.5 py-4 savor-text">Savor the Citrus: Orange Cranberry Delight!</span>
            <div>
            <p className="text-lg mb-4">Read more about our favorite recipes involving the fusion of cranberries and oranges.</p>
            </div>
          </div>
        </div>
      </a>
    </section>
    </>
  )
}
