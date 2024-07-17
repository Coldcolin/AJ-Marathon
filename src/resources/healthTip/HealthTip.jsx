import './HealthTip.css';
import resources from '../../assets/resources1.svg'
import health2 from '../../assets/health2.svg'
import health3 from '../../assets/health3.svg'
import health4 from '../../assets/health4.svg'
import health5 from '../../assets/health5.png'
import health6 from '../../assets/health6.png'


export const HealthCard = ({ H1, P }) => {
    return (
        <div className='health_card_body'>
            <h1 className='health_card_body_H1'>{H1}</h1>
            <p className='health_card_body_P'>{P}</p>
        </div>
    )
}

const HealthImage = ({ bgColor, Img, H1 }) => {
    return (
        <div className='health_image_main_container'>
            <div className="health_image_holder" style={{ backgroundColor: bgColor }}>
                <img src={Img} alt="" className='health_image' />
            </div>
            <h1 className='health_image_H1'>{H1}</h1>
        </div>
    )
}

const HealthTip = () => {

    return (
        <div className='health_tip_mainBody'>
            <div className="health_tip_body_wrapper">
                <div className="health_tip_body">
                    <div className="health_tip_main_body">
                        <h1 className='health_tip_H1'>Get yourself prepared! :</h1>
                        <div className="health_image_card">
                            <HealthImage Img={health2} H1={"Health"} />
                            <HealthImage Img={health3} H1={"Training"} />
                        </div>
                        <div className="health_image2_card">
                            <HealthImage Img={health4} H1={"Nutrition"} />
                        </div>
                        <div className="health_image_card">
                            <HealthImage Img={health5} H1={"Beginner Drill"} />
                            <HealthImage Img={health6} H1={"Regular Drill"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HealthTip