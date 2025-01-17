import HomeMainContent from './components/unique/HomeMainContent'
import TrendingMainPage from './components/unique/TrendingMainRecipe'
import OrangeCranberryHero from './components/unique/OrangeCranberryHero'
import ContactStrip from './components/unique/ContactStrip'
import SectionalRecommendation from './components/reusable/SectionalRecommendation'
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
