import '../home.css'

export default function HomeMainContent() {

  return (
    <>
      <section className="home-top-of-page pt-16 px-2 gap-5 mb-16">
          <img alt="martha-stewart-recipe-collection" src="./images/martha-stewart-photo.jpg" />
          <div className="bg-fadedGreen p-6">
            <h1 className='text-2xl font-bold text-center pb-6'>Food News</h1>
            <div className='grid sm:grid-cols-1 lg:grid-cols-1 md:grid-cols-2 gap-10'>
              <a className='flex'>
                <div className='w-28 h-20 flex-shrink-0'>
                  <img className='w-full h-full' src='https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2023/09/Beef-Stew-main.jpg' />
                </div>
                <div className='px-2'>
                  <span className='title-decoration font-bold'>Ina Garten's Beef Stew Recipe Is What We're Making</span>
                </div>
              </a>
              <a className='flex'>
                <div className='w-28 h-20 flex-shrink-0'>
                  <img className='w-full h-full' src='./images/apple-photo.jpg' />
                </div>
                <div className='px-2'>
                  <span className='title-decoration font-bold'>These Apple Recipes Are Trending, and We Want to Try All of Them</span>
                </div>
              </a>
              <a className='flex'>
                <div className='w-28 h-20 flex-shrink-0'>
                  <img className='w-full h-full' src='./images/banana-bread-photo.jpg' />
                </div>
                <div className='px-2'>
                  <span className='title-decoration font-bold'>These Apple Recipes Are Trending, and We Want to Try All of Them</span>
                </div>
              </a>
              <a className='flex'>
                <div className='w-28 h-20 flex-shrink-0'>
                  <img className='w-full h-full' src='https://www.sprinklesandsprouts.com/wp-content/uploads/2019/04/Authentic-Spaghetti-Bolognese-SQ-500x500.jpg' />
                </div>
                <div className='px-2'>
                  <span className='title-decoration font-bold'>These Apple Recipes Are Trending, and We Want to Try All of Them</span>
                </div>
              </a>
            </div>
          </div>
        </section>
    </>
  )
}
