import './ResourceLinks.css';
import health2 from '../../assets/health2.svg'
import health3 from '../../assets/health3.svg'
import health4 from '../../assets/health4.svg'
import health5 from '../../assets/health5.png'
import health6 from '../../assets/health6.png'
import { NavLink } from 'react-router-dom';


export const HealthCard = ({ H1, P }) => {
    return (
        <div className='resourceLink_card_body'>
            <h1 className='resourceLink_card_body_H1'>{H1}</h1>
            <p className='resourceLink_card_body_P'>{P}</p>
        </div>
    )
}

const HealthImage = ({ bgColor, Img, H1, nav }) => {
    return (
        <div className=' sm:w-[33%] w-[100%]'>
            <NavLink to={nav}>
                <div className="resourceLink_image_holder" style={{ backgroundColor: bgColor }}>
                    <img src={Img} alt="" className='resourceLink_image' />
                </div>
                <h1 className='resourceLink_image_H1 sm:text-[2.5rem] text-[1.5rem]'>{H1}</h1>
            </NavLink>
        </div>
    )
}

const ResourceLinks = () => {

    return (
        <div className='resourceLink_mainBody'>
            <div className="resourceLink_body_wrapper">
                {/* <div className="resourceLink_body"> */}
                <div className="resourceLink_main_body">
                    <h1 className='resourceLink_H1 underline font-bold text-[1.5rem] sm:text-[3.2rem] leading-[5.3rem] text-[rgba(35, 34, 34, 1)]'>Get yourself prepared!</h1>
                    <div className="resourceLink_image_card w-full flex sm:justify-between sm:flex-row flex-col gap-[7vh]">
                        <HealthImage
                            Img={health2}
                            H1={"Health"}
                            nav={"resources/health_tips"}
                        />
                        <HealthImage
                            Img={health3}
                            nav={"resources/training_tips"}
                            H1={"Training"}
                        />
                    </div>
                    <div className="resourceLink_image2_card">
                        <HealthImage
                            Img={health4}
                            H1={"Nutrition"}
                            nav={"resources/nutrition_tips"}
                        />
                    </div>
                    <div className="resourceLink_image_card w-full flex sm:justify-between sm:flex-row flex-col gap-[7vh]">
                        <HealthImage
                            Img={health5}
                            H1={"Beginner Drill"}
                            nav={"resources/beginners_tips"}
                        />
                        <HealthImage
                            Img={health6}
                            H1={"Regular Drill"}
                            nav={"resources/regular_runners_tips"}
                        />
                    </div>
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default ResourceLinks