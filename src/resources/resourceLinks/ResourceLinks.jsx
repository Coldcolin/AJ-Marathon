import './ResourceLinks.css';
import health2 from '../../assets/health2.svg'
import health3 from '../../assets/health3.svg'
import health4 from '../../assets/health4.svg'
import health5 from '../../assets/health5.png'
import health6 from '../../assets/health6.png'


export const HealthCard = ({ H1, P }) => {
    return (
        <div className='resourceLink_card_body'>
            <h1 className='resourceLink_card_body_H1'>{H1}</h1>
            <p className='resourceLink_card_body_P'>{P}</p>
        </div>
    )
}

const HealthImage = ({ bgColor, Img, H1 }) => {
    return (
        <div className='resourceLink_image_main_container'>
            <div className="resourceLink_image_holder" style={{ backgroundColor: bgColor }}>
                <img src={Img} alt="" className='resourceLink_image' />
            </div>
            <h1 className='resourceLink_image_H1'>{H1}</h1>
        </div>
    )
}

const ResourceLinks = () => {

    return (
        <div className='resourceLink_mainBody'>
            <div className="resourceLink_body_wrapper">
                {/* <div className="resourceLink_body"> */}
                <div className="resourceLink_main_body">
                    <h1 className='resourceLink_H1'>Get yourself prepared!</h1>
                    <div className="resourceLink_image_card">
                        <HealthImage Img={health2} H1={"Health"} />
                        <HealthImage Img={health3} H1={"Training"} />
                    </div>
                    <div className="resourceLink_image2_card">
                        <HealthImage Img={health4} H1={"Nutrition"} />
                    </div>
                    <div className="resourceLink_image_card">
                        <HealthImage Img={health5} H1={"Beginner Drill"} />
                        <HealthImage Img={health6} H1={"Regular Drill"} />
                    </div>
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default ResourceLinks