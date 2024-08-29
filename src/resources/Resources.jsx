import './Resources.css';
import resources from '../assets/resources1.svg'
import AboutLayout from '../aboutLayout/AboutLayout';
import { NavLink, Outlet, useLocation, useMatch } from 'react-router-dom';

const ResourcesCard = ({ Num, P1, P2, P3, P4, P5, Span1, Span2, Span3, Span4, flexD, Just }) => {
  return (
    <div className='resourcesCardBody'>
      <div className="resources_card_mainBody" style={{ flexDirection: flexD }}>
        <div className="resources_card_number_holder" style={{ justifyContent: Just }}>
          <div className="resources_card_number">{Num}</div>
        </div>
        <div className="resources_card_text_holder">
          <p className='resources_card_P'>{P1}</p>
          <p className='resources_card_P'><span className='resources_card_Span'>{Span1} </span>{P2}</p>
          <p className='resources_card_P'><span className='resources_card_Span'>{Span2} </span>{P3}</p>
          <p className='resources_card_P'><span className='resources_card_Span'>{Span3} </span>{P4}</p>
          <p className='resources_card_P'><span className='resources_card_Span'>{Span4} </span>{P5}</p>
        </div>
      </div>
    </div>
  )
}

export const ResourceHero = () => {
  const { pathname } = useLocation();


  const resourceRoutes = [
    {
      path: "resources/health_tips",
      name: "Health Tips "
    },
    {
      path: "resources/nutrition_tips",
      name: "Nutrition Tips "
    },
    {
      path: "resources/training_tips",
      name: "Training Tips "
    },
    {
      path: "resources/beginners_tips",
      name: "Beginners Training "
    },
    {
      path: "resources/regular_runners_tips",
      name: "Regular Runners Training "
    },
  ];


  const currenRoute = resourceRoutes.find((route) =>pathname.includes(route.path));
  const name = currenRoute ? currenRoute.name : "";

  

  return (
    <div className="resources_hero_section w-full sm:h-[75vh] h-[45vh] bg-red-500">
      <div className="resources_hero_wrapper">
        <ul className='resources_hero_wrapper_UL sm:pl-[20%] pl-0 justify-between sm:justify-evenly text-[1rem] sm:text-[1rem]'>
          {
            resourceRoutes.map((e) => (
              <li key={e.path} className=''>
                <NavLink to={e.path} className={({ isActive }) => (isActive ? "resource_active" : 'resources_not_active')}>{e.name}</NavLink>
              </li>
            ))
          }
        </ul>
        <div>
          <p className='text-[#17B788] text-3xl font-extrabold leading-[45px] ml-4'>{name}</p>
          <img src={resources} alt="resources" className='resources_hero_wrapper_Img' />
        </div>
      </div>
    </div>
  )
}



const Resources = () => {
  return (
    <div className='resources_mainBody'>
      <AboutLayout>
        <Outlet />
      </AboutLayout>
    </div>
  )
}

export default Resources