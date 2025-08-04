import { IoMdPlay } from 'react-icons/io'
import './About.css'
import './AboutRes.css'
import oba1 from '../assets/oba1.jpg'
import oba2 from '../assets/oba2.png'
import oba3 from '../assets/oba3.png'
import fatai from "../assets/currentChair.jpg"
import Okeowo from "../assets/HonOkeowo.jpg"
import ObaNew from "../assets/ObaNew.png"
import ObaImg from "../assets/ObaImg.jpg"
import about4 from '../assets/about4.png'
import about5 from '../assets/about5.png'
import about6 from '../assets/about6.png'
import lawal from "../assets/Lawal.jpg"
import BillBoard from "../assets/BillBoard.png"
import newCommitee1 from '../assets/isaacNew.png'
import newCommitee2 from '../assets/ambIsaac.png'
import newCommitee3 from '../assets/ademolaNew.png'
import newCommitee4 from '../assets/mcAnthony.png'
import newCommitee5 from '../assets/wowo.png'
import newCommitee6 from '../assets/oghene.png'
import newCommitee7 from '../assets/sam.png'
import newCommitee8 from '../assets/richard.png'
import newCommitee9 from '../assets/michael.png'
import newCommitee10 from '../assets/uche.png'
import newCommitee11 from '../assets/oloola.png'
import newCommitee12 from '../assets/godspower.png'
import { NavLink } from 'react-router-dom'






const About = () => {


  const AboutCard = (props) => {
    return (
      <div className='about_card_body'>
        <div className="about_card_img_div">
          <img src={props.img} alt="committe member" className='about_card_img' />
        </div>
        <div className="about_card_name_committe_wrapper">
          <h2 className='about_card_name_committe_H2'>{props.H2}</h2>
          <p className='about_card_name_committe_P'>{props.P}</p>
        </div>
      </div>
    )
  }





  return (
    <div className='about_main_body'>
      <div className="about_hero_wrapper">
        <ul className='about_hero_UL'>
          <li>
            <NavLink to={'/about_general_info'} className={'about_menu_not_active'}>General info</NavLink>
          </li>
          <li>
            <NavLink to={'/about_category_of_participant'} className={'about_menu_not_active'}>Category of Participants</NavLink>
          </li>
          <li>
            <NavLink to={'/about_how_to_register'} className={'about_menu_not_active'}>How to register</NavLink>

          </li>
          <li>
            <NavLink to={'/about_routes_and_map'} className={'about_menu_not_active'}>Routes & Map</NavLink>

          </li>
          <li>
            <NavLink to={'/about_prizes'} className={'about_menu_not_active'}>Prizes</NavLink>

          </li>
          <li>
            <NavLink to={'/about_race_result'} className={'about_menu_not_active'}>Race Results</NavLink>

          </li>
        </ul>
        <div className="about_hero_img_wrapper">
          <div className="about_hero_image_div">
            <div className="about_hero_image_play_btn">
              <IoMdPlay />
            </div>
          </div>
        </div>
      </div>
      <div className="about_AJCYM_project_div">
        AJEGUNLE CITY YOUTH MARATHON PROJECT
      </div>
      {/* <div className="about_AJCYM_project_marathon">
        “ABOUT AJEGUNLE CITY YOUTH MARATHON”
      </div> */}
      <div className="about_AJYCM_project_article_wrapper">
        <div className='about_AJYCM_project_article_wrapper_top'>
          <div className="about_AJYCM_project_article_image_wrapper">
            <div className="about_AJYCM_project_article_left_image_container1">
              <img src={ObaNew} alt="athlete" className='about_AJYCM_project_article_left_image' />
              <p className='about_AJYCM_project_article_right_image_container2_P1'><span className='about_AJYCM_project_article_right_image_container2_P1_Span'>HIS ROYAL MAJESTY </span>
                <br />OBA MOROOF OYEKUNLE ATANDA
                AMODU TIJANI (AMORE III)
                OLU OF IWA AND APAPA KINGDOM</p>
            </div>
            <div className="about_AJYCM_project_article_right_image_container2">
              <div className='about_AJYCM_project_article_right_image_top'>
                <img src={fatai} alt="athlete" className='about_AJYCM_project_article_right_image1' />
                <p className='about_AJYCM_project_article_right_image_container2_P1'>HON. OLALEKAN OLU AKINDIPE
EXECUTIVE CHAIRMAN
AJEROMI-IFELODUN LOCAL GOVERNMENT</p>
              </div>
              <div className='about_AJYCM_project_article_right_image_bottom'>
                <img src={Okeowo} alt="athlete" className='about_AJYCM_project_article_right_image2' />
                <p className='about_AJYCM_project_article_right_image_container2_P1'>HON. OLUFEMI OKEOWO AKANBI
                  EXECUTIVE CHAIRMAN
                  IFELODUN LCDA</p>
              </div>
            </div>
          </div>
          <div className='about_AJYCM_project_article_down_image'>
            <img src={BillBoard} />
          </div>
        </div>
        <div className="about_AJYCM_project_article">
          <div className="about_AJCYM_project_marathon">
            “ABOUT AJEGUNLE CITY YOUTH MARATHON”
          </div>
          <p className='about_AJYCM_project_article_P'>

            The<span className='about_AJYCM_project_article_SPAN'> "Ajegunle City Youth Marathon" </span>{" "} is organized by a consortium of indigenous youth-led organisations all represented on the Local Organizing Committee (LOC), comprising the lead partner, Society for Information and Human Advancement Initiative (SOHAI), National Youth Council of Nigeria (NYCN) Ajeromi-Ifelodun LGA and Ifelodun LCDA Local Branches and Ajeromi-Ifelodun Sports Council as coordinating and technical partners respectively; and Kobis Global Multidimensional, The Curve Africa, Klick Designs, Mula Integrated Concepts, Heart to Give Initiative, Africa Network of Adolescents and Young Persons Development (ANAYD), and SMARTPadi 
            <br/><br/>
            The maiden edition of the Ajegunle City Youth Marathon was held in 2024 and has since then become a major sporting event in the annals of the Ajegunle community. The marathon attracts thousands of participants from all over Ajegunle communities and beyond, and also provides a platform to showcase the community’s potential for sports and tourism and also for young athletes to showcase their talents and compete for prizes. The Ajegunle City Youth Marathon, beyond just a sporting event; it is a community event that brings people together to promote peace and unity while empowering young people to become role models for positive change. The marathon is a celebration of the resilience and determination of the Ajegunle and Nigerian youth, and it is a source of inspiration for the entire community and Nation.
            <br/><br/>
            In addition to promoting health and fitness, youth development and empowerment, the Ajegunle City Youth Marathon, also serves as a fund raiser for various community projects to support educational and developmental programs, healthcare initiatives, and other projects that will benefit the youths of Ajegunle and Nigeria at large.
            <br/><br/>
            The Ajegunle City Youth Marathon event consists of the #RUNAjegunle main youth 10kilometer race and the VIP/Celebrity 2.5kilometer race events that runs through strategic routes across streets and communities from Ajeromi-Ifelodun LGA to Ifelodun LCDA, showcasing Ajegunle’s key socio-cultural values, ethnic diversities (among participants and onlookers), economic potential and abundance of humans resources in her populousness; while promoting healthiness and peaceful coexistence for building sustainable communities. The event also features pre/and post activities including side events that will integrates health interventions and host dignitaries, private/corporate partners, government and key community stakeholders amidst other variety of activities which usually makes the entire event a memorable and laudable one and has entered into the annals of Ajegunle Youth Project.
            <br/><br/>

            The Ajegunle City Youth Marathon is a symbol of hope for a brighter future and inspiration for the youth of Ajegunle and Nigeria; and it is a reminder that our communities can only develop and thrive in a peaceful and eco-friendly atmosphere.
          </p>
        </div>
      </div>
      <div className="about_AJYCM_local_committee_container">
        <div className="about_AJYCM_local_committee_body">
          <h1 className='about_AJYCM_local_committee_body_H1'>Local Organising Committee</h1>
          <p className='about_AJYCM_local_committee_body_P'>Meet Our LOC Members </p>
          <div className="about_AJYCM_local_committee_card_body">
            <AboutCard img={newCommitee1} H2='ISAAC MOSES' P={"EXECUTIVE DIRECTOR, SOHAI NAIJA/PROJECT LEAD, ACYM2025"} />
            {/* <AboutCard img={newCommitee2} H2='AMB. ISAAC SUCCESS OMOYELE' P={"COORDINATOR, NYCN-AJIF/YOUTH HOST & HEAD OF PUBLIC RELATIONS, AJCYM2025"} /> */}
            <AboutCard img={newCommitee3} H2='COMRD. ADEMOLA IGI-ABA LAWAL' P={"HEAD OF COMMUNITY MOBILIZATION & ADVOCACY, ACYM2025"} />
            <AboutCard img={newCommitee4} H2='HON. MC.ANTHONY ANAELECHUKWU' P={"DIRECTOR GENERAL, AJEROMI-IFELODUN SPORTS COUNCIL/TECHNICAL ADVISOR & CHIEF OFFICIAL, ACYM2025"} />
            <AboutCard img={newCommitee5} H2='PRINCE OGAGA WOWO' P={"CEO, KOBIS GLOBAL/STRATEGIC MEDIA & COMMUNICATIONS LEAD ACYM2025"} />
            <AboutCard img={newCommitee6} H2='OGHENEKARO RACHEAL LAWRENCE' P={"GENDER ADVOCACY FOCAL POINT, SOHAI/HEAD OF MARKETING & ADVERTISEMENT, ACYM2025"} />
            <AboutCard img={newCommitee7} H2='SAMUEL KELECHI' P={"CEO, THE CURVE/ICT & STRATEGIC KNOWLEDGE MANAGEMENT LEAD, ACYM2025"} />
            <AboutCard img={newCommitee8} H2='OGHENEKOME RICHARD' P={"PROJECT DIRECTOR, SOHAI/QUALITY ASSURANCE LEAD, ACYM2025"} />
            <AboutCard img={newCommitee9} H2='MICHAEL UTEDI' P={"CEO, MULA INTEGRATED CONCEPT/LOGISTIC & SUPPLY LEAD, ACYM2025"} />
            <AboutCard img={newCommitee10} H2="ESE UCHE GOD'S-WILL" P={"CEO, KLICK DESIGNS/CONTENT MANAGEMENT AND BRANDING LEAD, ACYM2025"} />
            <AboutCard img={newCommitee11} H2='AMUDALAT TEMITOPE OLOOLA' P={"CEO, HEART TO GIVE INITIATIVE/VOLUNTEER COORDINATOR, ACYM2025"} />
            {/* <AboutCard img={newCommitee12} H2='GODSPOWER  O. EBIZE' P={"CEO, KODED LAFF ENTERTAINMENT/MARKETING & PUBLICITY,  AYCM2025"} /> */}
          </div>

        </div>
      </div>
    </div>
  )
}

export default About