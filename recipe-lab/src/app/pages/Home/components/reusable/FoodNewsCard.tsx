export default function FoodNewsCard({image, title} : {image: string, title: string}) {

  return (
    <>
      <a className='flex'>
        <div className='w-28 h-20 flex-shrink-0'>
          <img className='w-full h-full' src={image} />
        </div>
        <div className='article-card px-2'>
          <span className='article-card-title  font-bold'>{title}</span>
        </div>
      </a>
    </>
  )
}
