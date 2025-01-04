import './home.css'
import HomeMainContent from '../sections/Home/components/HomeMainContent'
import TrendingMainPage from '../sections/Home/components/TrendingMainRecipe'
import OrangeCranberryHero from '../sections/Home/components/OrangeCranberryHero'
import WeeknightWinnersRecipes from '../sections/Home/components/WeeknightWinnersRecipes'
import BreakfastIdeas from '../sections/Home/components/BreakfastIdeas'
import ContactStrip from '../sections/Home/components/ContactStrip'
// import useSearchApi from '../../hooks/useSearchApi'

export default function HomePage() {

  // useSearchApi('orange cranberry')
  //fix the section top padding when completed

  return (
    <>
      <div className="container mx-auto">
        <HomeMainContent />
        <TrendingMainPage />
        <BreakfastIdeas />
      </div>
      <OrangeCranberryHero />
      <div className="container mx-auto">
        <WeeknightWinnersRecipes />
      </div>
      <ContactStrip />
    </>
  )
}
