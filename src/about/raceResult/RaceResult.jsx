import { GeneralFindRoute, GeneralHero, GeneralLearnMore, GeneralRegister } from '../general_info/GeneralInfo'
import './RaceResult.css'
import './RaceResultRes.css'
import athlete from '../../assets/generalInfo2.png'


const RaceResultLink = ({ H5, Span }) => {
    return (
        <>
            <h5 className='race_result_H5'>{H5} <span><a href="">{Span}</a></span></h5>
        </>
    )
}

const RaceResult = () => {
    return (
        <div className='race_result_mainBody'>
            <GeneralHero Title={"Race Results"} H1={"Race results for \nAjegunle City youth Marathon"} />
            <div className="race_result_mainBody_article_section_mainBody">
                <div className="race_result_mainBody_article_section_wrapper">
                    <div className="race_result_mainBody_article_section_wrapper_img_container">
                        <img src={athlete} alt="Athlete" className='race_result_mainBody_article_section_wrapper_img' />
                    </div>
                    <div className="race_result_mainBody_article_section_wrapper_article_container">
                        <RaceResultLink H5={"2024 Race Results for ACYM Female – 5km –"} Span={"Click Here"} />
                        <RaceResultLink H5={"2024 Race Results for ACYM Female – 5km –"} Span={"Click Here"} />
                        <RaceResultLink H5={"2024 Race Results for ACYM Female – 5km –"} Span={"Click Here"} />
                        <RaceResultLink H5={"2024 Race Results for ACYM Female – 5km –"} Span={"Click Here"} />
                        <RaceResultLink H5={"2024 Race Results for ACYM Female – 5km –"} Span={"Click Here"} />
                        <RaceResultLink H5={"2024 Race Results for ACYM Female – 5km –"} Span={"Click Here"} />
                        <RaceResultLink H5={"2024 Race Results for ACYM Female – 5km –"} Span={"Click Here"} />
                        <RaceResultLink H5={"2024 Race Results for ACYM Female – 5km –"} Span={"Click Here"} />
                        <RaceResultLink H5={"2024 Race Results for ACYM Female – 5km –"} Span={"Click Here"} />
                        <RaceResultLink H5={"2024 Race Results for ACYM Female – 5km –"} Span={"Click Here"} />
                        <RaceResultLink H5={"2024 Race Results for ACYM Female – 5km –"} Span={"Click Here"} />
                        <RaceResultLink H5={"2024 Race Results for ACYM Female – 5km –"} Span={"Click Here"} />
                        <RaceResultLink H5={"2024 Race Results for ACYM Female – 5km –"} Span={"Click Here"} />
                        <RaceResultLink H5={"2024 Race Results for ACYM Female – 5km –"} Span={"Click Here"} />
                        <RaceResultLink H5={"2024 Race Results for ACYM Female – 5km –"} Span={"Click Here"} />
                        <RaceResultLink H5={"2024 Race Results for ACYM Female – 5km –"} Span={"Click Here"} />
                        <RaceResultLink H5={"2024 Race Results for ACYM Female – 5km –"} Span={"Click Here"} />
                        <RaceResultLink H5={"2024 Race Results for ACYM Female – 5km –"} Span={"Click Here"} />
                    </div>
                </div>
            </div>
            <GeneralRegister />
            <GeneralLearnMore />
            <GeneralFindRoute/>
        </div>
    )
}

export default RaceResult