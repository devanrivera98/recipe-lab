import HomeMainContent from './components/HomeMainContent'
import TrendingMainPage from './components/TrendingMainRecipe'
import OrangeCranberryHero from './components/OrangeCranberryHero'
import ContactStrip from './components/ContactStrip'
import SectionalRecommendation from './components/SectionalRecommendation'
import { quickRecipes } from './data/quickRecipes'
import { breakfastRecipes } from './data/breakfastRecipes'
// import useSearchApi from '../../hooks/useSearchApi'

export default function HomePage() {

  // useSearchApi('orange cranberry')
  //fix the section top padding when completed

  return (
    <>
      <div className="container mx-auto">
        <HomeMainContent />
        <TrendingMainPage />
        <SectionalRecommendation name='Breakfast Ideas' dataList={breakfastRecipes} />
      </div>
      <OrangeCranberryHero />
      <div className="container mx-auto">
        <SectionalRecommendation name='Weeknights Winners' dataList={quickRecipes} />
      </div>
      <ContactStrip />
    </>
  )
}
