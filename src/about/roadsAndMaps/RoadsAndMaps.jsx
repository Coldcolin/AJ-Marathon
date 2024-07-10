import { RoadMap } from '../../landingPage/LandingPage'
import './RoadsAndMaps.css'
import './RoadsAndMapsRes.css'
import { GeneralFindRoute, GeneralHero, GeneralLearnMore, GeneralRegister } from '../general_info/GeneralInfo'
import athlete from '../../assets/generalInfo2.png'
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
                            Start point/Maracana Stadium - Ojokwu street - Kirikiri road - wilmer link brindge - Oregie mba road - Baale Aderemo street - Boundary road - olowo jeunjeje street- sanusi street - Layinka street - Badia ijora road - Mosafejo road - Ojo road - Signals Barraks/End point.
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