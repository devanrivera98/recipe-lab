import HomeMainContent from './components/HomeMainContent'
import TrendingMainPage from './components/TrendingMainRecipe'
import OrangeCranberryHero from './components/OrangeCranberryHero'
import WeeknightWinnersRecipes from './components/WeeknightWinnersRecipes'
import BreakfastIdeas from './components/BreakfastIdeas'
import ContactStrip from './components/ContactStrip'
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
