import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './layout/Layout'
import LandingPage from './landingPage/LandingPage'
import About from './about/About'
import GetInvolve from './getInvolve/GetInvolve'
import Blog from './blog/Blog'
import Gallery from './gallery/Gallery'
import Donate from './donate/Donate'
import Contact from './contact/Contact'
import Resources from './resources/Resources'
import GeneralInfo from './about/general_info/GeneralInfo'
import CategoyParticipant from './about/category_participant/CategoyParticipant'
import HowToRegister from './about/howToRegister/HowToRegister'
import RoadsAndMaps from './about/roadsAndMaps/RoadsAndMaps'
import Prizes from './about/prizes/Prizes'
import RaceResult from './about/raceResult/RaceResult'
import HealthTip from './resources/healthTip/HealthTip'
import NutritionTip from './resources/nutritionTip/NutritionTip'
import ScrollToTop from './scrollToTop/ScrollToTop'
import Registration from './registration/Registration'

function App() {

  return (
    <>
      <HashRouter>
      <ScrollToTop/>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path='about' element={<About />} />
            <Route path='get_involve' element={<GetInvolve />} />
            <Route path='blog' element={<Blog />} />
            <Route path='resources' element={<Resources />} />
            <Route path='gallery' element={<Gallery />} />
            <Route path='donate' element={<Donate />} />
            <Route path='contact_us' element={<Contact />} />
            <Route path='about_general_info' element={<GeneralInfo />} />
            <Route path='about_category_of_participant' element={<CategoyParticipant />} />
            <Route path='about_how_to_register' element={<HowToRegister />} />
            <Route path='about_routes_and_map' element={<RoadsAndMaps />} />
            <Route path='about_prizes' element={<Prizes />} />
            <Route path='about_race_result' element={<RaceResult />} />
            <Route path='health_tips' element={<HealthTip />} />
            <Route path='nutrition_tips' element={<NutritionTip />} />
            <Route path='register' element={<Registration />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
