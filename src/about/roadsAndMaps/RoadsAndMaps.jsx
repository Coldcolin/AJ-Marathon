import { RoadMap } from '../../landingPage/LandingPage'
import './RoadsAndMaps.css'
import './RoadsAndMapsRes.css'
import { GeneralFindRoute, GeneralHero, GeneralLearnMore, GeneralRegister } from '../general_info/GeneralInfo'
import athlete from '../../assets/NewImages/about_routes.jpg'
import roadsAndMaps from '../../assets/roadsAndMaps.png'




const RoadsAndMaps = () => {


    return (
        <div className='roads_and_map_mainBody'>
            <GeneralHero Title={"Routes & Map"} H1={"Route Map for \nAjegunle City youth Marathon"} />
            <div className="roads_and_map_mainBody_article_section_mainBody">
                <div className="roads_and_map_mainBody_article_section_wrapper">
                    <div className="roads_and_map_mainBody_article_section_wrapper_img_container">
                        <img src={athlete} alt="Athlete" className='roads_and_map_mainBody_article_section_wrapper_img' />
                    </div>
                    <div className="roads_and_map_mainBody_article_section_wrapper_article_container">
                        <p className='roads_and_map_mainBody_article_section_wrapper_article_container_P'>
                        Ajegunle City Youth Marathon, 2025 | Route Description/Navigation 
                        </p><br/>
                        <p className='roads_and_map_mainBody_article_section_wrapper_article_container_P'>
                    Start point/Maracana Stadium - Ojokwu street - Kirikiri road - wilmer link bridge - Okito street - Koripamo street - Oregie mba road - Baale Adeyemo street - Cementry street - Ojora Street -  Fakunle street - Olowojeunjeje - Sanusi street - Layinka street  - Mosafejo road - Bakare-Faro street - Adejinyan/Ishaga street - Mosafejo road - Awope/Itire street - Ojo road - Signals Barracks Sports Ground/Endpoint.
                        </p>
                        <img src={roadsAndMaps} alt="Ajegunle Maps" className='roads_and_map_mainBody_article_section_wrapper_article_image'/>
                    </div>
                </div>
            </div>
            <RoadMap />
            <GeneralRegister />
            <GeneralLearnMore />
            <GeneralFindRoute/>
        </div>
    )
}

export default RoadsAndMaps