import './GeneralInfo.css'
import './GeneralInfoRes.css'
import { HiOutlineArrowLongLeft } from 'react-icons/hi2'
import route from '../../assets/generalInfo4.png'
import getInfo from "../../assets/generalInfo2.png"
import { NavLink } from 'react-router-dom'



const LearnMore = ({ bgImage, H2 }) => {
    return (

        <div className='general_learn_more_card_body' style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="general_learn_more_card_content">
                <h2 className='general_learn_more_card_content_H2'>
                    {H2}
                </h2>
                <div className="general_learn_more_card_content_div">
                    <p className='general_learn_more_card_content_P'>Learn more <span className='general_learn_more_card_content_Span'> &rarr;</span></p>
                </div>
            </div>
        </div>
    )
}

export const GeneralHero = ({ H1, Title }) => {
    return (
        <>
            <div className="general_info_hero_section_wrapper">
                <div className="general_info_hero_section">
                    <div className="general_info_hero_section_body">
                        <p className='general_info_hero_section_body_P'>{Title}</p>
                        <h1 className='general_info_hero_section_body_H1' >{H1}</h1>
                        <div className="general_info_hero_section_bck_btn_wrapper">
                            <NavLink to={'/about'} className={'general_info_navLink'}>
                                <p className='general_info_hero_section_bck_btn_P'>Go back</p>
                                <HiOutlineArrowLongLeft className='general_info_hero_section_bck_btn_Icon' />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export const GeneralRegister = () => {
    return (
        <>
            <div className="general_info_register_container">
                <div className="general_info_register_wrapper">
                    <div className="general_info_register_body">
                        <div className="general_info_register_main_body">
                            <div className="general_info_register_main_body_section">
                                <h1 className='general_info_register_main_body_section_H1'>Register for the 2024 Ajegunle  City youth Marathon</h1>
                                <p className='general_info_register_main_body_section_P'>Join us at this edition of the Ajegunle City youth Marathon 2024. We are looking forward to have you be a part of this wonderful event.</p>
                                <button className='general_info_register_main_body_section_btn'>How to register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export const GeneralLearnMore = () => {
    return (
        <>
            <div className="general_info_learnMore_container">
                <div className="general_info_learnMore_wrapper">
                    <LearnMore bgImage="/generalInfo4.png" H2='Training for beginner and regular runners' />
                    <LearnMore bgImage="/generalInfo5.png" H2='Know more about health tips' />
                    <LearnMore bgImage="/generalInfo6.png" H2='Prizes' />
                </div>
            </div>

        </>
    )
}

export const GeneralFindRoute = () => {
    return (
        <div className="general_find_route_container">
            <div className="general_find_route_wrapper">
                <div className="general_find_route_left_wrapper">
                    <h1 className='general_find_route_left_wrapper_H1'>Find out the route for runners</h1>
                    <p className='general_find_route_left_wrapper_P'>Start point/Maracana Stadium - Ojokwu street - Kirikiri road - wilmer link brindge - Oregie mba road - Baale Aderemo street - Boundary road - olowo jeunjeje street- sanusi street - Layinka street - Badia ijora road - Mosafejo road - Ojo road - Signals Barraks/End point.</p>
                    <button className='general_find_route_left_wrapper_btn'>Explore Routes & Map</button>
                </div>
                <div className="general_find_route_right_wrapper">
                    <img src={route} alt="" />
                </div>
            </div>
        </div>
    )
}





const GeneralInfo = () => {



    const GeneralInfoCard = (props) => {
        return (
            <div className="general_info_card_body">
                <h1 className='general_info_card_body_H1' style={{ fontFamily: props.font, lineHeight: props.lineHeight }}>{props.H1}</h1>
                <p className='general_info_card_body_P' style={{ fontFamily: props.font }}><span className='general_info_card_body_Span'>{props.Span}</span> {props.P}</p>
                <p className='general_info_card_body_P' style={{ fontFamily: props.font }}><span className='general_info_card_body_Span'>{props.Span2}</span> {props.P2}</p>
                <p className='general_info_card_body_P2'>{props.P3} <span className='general_info_card_body_Span2'>{props.Span3}</span></p>
                <p className='general_info_card_body_P2'>{props.P4} <span className='general_info_card_body_Span2'>{props.Span4}</span></p>
            </div>
        )
    }





    return (
        <div className='general_info_main_body'>
            <GeneralHero Title={"General info"} H1={'All what you need to know \n about the Ajegunle City youth Marathon'} />

            <div className="general_info_article_section_mainBody">
                <div className="general_info_article_section">
                    <div className="general_info_article_section_img_holder">
                        <img src={getInfo} alt="athlete" className='general_info_article_section_img' />
                    </div>
                    <div className="general_info_article_holder">
                        <GeneralInfoCard
                            font=""
                            lineHeight="45px"
                            H1='Start & Finish'
                            P='The starting point will be at Maracanã Stadium, Ojokwu Street, Tolu School Complex, Ajegunle Apapa, Lagos. The finish will be at Open Play Ground, Nigeria Army Signals Barracks, By Ojo, Road, Ajegunle, Apapa, lagos.'
                        />
                        {/* <h1 className='general_info_article_holder_H1'>Start Time</h1> */}
                        <GeneralInfoCard
                            font="'Roboto', sans-serif"
                            H1='Start Time'
                        />
                        <GeneralInfoCard
                            font="'Roboto', sans-serif"
                            H1='5KM'
                            Span="Start:"
                            P='The starting point will be at the entrance of the Maracanã Stadium, Ojokwu Street, Tolu School Complex, Ajegunle Apapa, Lagos'
                            Span2="Finish:"
                            P2="The finishing point will be at the Open Play Ground, Nigeria Army Signals Barracks, By Ojo, Road, Ajegunle, Apapa, lagos"
                            P3='FLAG OFF'
                            Span3='6:30AM'
                            P4='CUT OFF:'
                            Span4="1:30PM"
                        />
                        <GeneralInfoCard
                            font="'Roboto', sans-serif"
                            H1='2.5KM (Master Division – Persons with Disability)'
                            Span="Start:"
                            P='Ajeromi Ifelodun LGA Council Secretariat, Lagos'
                            Span2="Finish:"
                            P2="The finishing point will be at the Open Play Ground, Nigeria Army Signals Barracks, By Ojo, Road, Ajegunle, Apapa, lagos."
                            P3='FLAG OFF'
                            Span3='8:30 AM'
                            P4='CUT OFF:'
                            Span4="12:30 PM"
                        />
                        <GeneralInfoCard
                            font="'Roboto', sans-serif"
                            H1='Getting to Start'
                            P='Driving participants are advised to park their vehicles in secure motor parks within the LGA/LCDA as most of the roads around the start area are closed. Attempts to drive into the area may cause congestion and delays, and violators may be punished. Participants are advised to arrive on time to avoid being late.'
                        />
                        <GeneralInfoCard
                            font="'Roboto', sans-serif"
                            H1='Runners Kits Collection'
                            P='Bibs containing your unique number will be distributed to registered participants at the Ajeromi-Ifelodun LGA Council Secretariat and Ifelodun LCDA Secretariat, from August 21, 2024 to August 28, 2024 from 9:00 a.m. to 6:00 p.m. daily. Please ensure you collect your bib within the specified days.'
                        />
                        <GeneralInfoCard
                            font="'Roboto', sans-serif"
                            H1='PLEASE NOTE:'
                            P='Participants are advised to bring proof of identity when they come to collect their bib. Perhaps the Participants intend to have their race number collected on their behalf; the person collecting must come to the offices with the printed copy of the form or the final confirmation received by email. To do this, they must have Proof of Their identity.'
                        />
                        <GeneralInfoCard
                            font="'Roboto', sans-serif"
                            H1='T/Shirts, Medals and Certificates'
                            P='– All participants will receive a running race vest; finishers will receive certificate; and first 50 finishers will receive medals.'
                        />
                        <GeneralInfoCard
                            font="'Roboto', sans-serif"
                            H1='Awards (Medals and Certificates)'
                            P='First 50 finishers will receive medals while all and other finishers of the marathon will receive certificates.'
                        />
                        <GeneralInfoCard
                            font="'Roboto', sans-serif"
                            H1='Running race vest'
                            P='All participants will receive a running race vest
                            The temperature will be approximately 22-27 degrees Celsius at the start'
                        />
                        <GeneralInfoCard
                            font="'Roboto', sans-serif"
                            H1='Race Timing'
                            P='The race will be timed using the “Time tronics electronic timing system. Chips/Tags will be attached to the race bib number you will receive in your race pack. Do not remove this tag from your bib number.'
                        />
                        <GeneralInfoCard
                            font="'Roboto', sans-serif"
                            H1='Drink Stations – Water spaces between the commas'
                            P='Water Stations will be provided at: 1km, 2km, 3km, 4km, and at the finish.'
                        />
                        <GeneralInfoCard
                            font="'Roboto', sans-serif"
                            H1='Sponges/Refreshment'
                            P='Sponges will be provided at the following stations on the Marathon route: 2km, and 4km and 5k finish point.'
                        />
                        <GeneralInfoCard
                            font="'Roboto', sans-serif"
                            H1='Toilets'
                            P='Toilets will be provided after the following stations on the Marathon route: 2km, and 4km and 5k finish point.'
                        />
                        <GeneralInfoCard
                            font="'Roboto', sans-serif"
                            H1='Medical'
                            P='An Ambulance and medical station will be available approximately 200 meters after each main drink station on the Marathon route at 2km, and 4km and 5k finish point. Service providers and Medics will also be present at every intermediary station.'
                        />
                        <GeneralInfoCard
                            font="'Roboto', sans-serif"
                            H1='Hospitality'
                            P="The Finish point gig event will feature guest artistes’ performance and a selection of other activities to keep participants and supporters entertained. Food and beverage services are also available here."
                        />
                        <GeneralInfoCard
                            font="'Roboto', sans-serif"
                            H1='Raffle Draws'
                            P='There will also be raffle draws at the finish points where participants and eligible supporters will have the opportunity to win awesome prizes. Raffle tickets can also be purchased at collection centres and through marketing agents/vendors.'
                        />
                    </div>
                </div>
            </div>
            <GeneralRegister />
            <GeneralLearnMore />
            <GeneralFindRoute />
        </div>
    )
}

export default GeneralInfo