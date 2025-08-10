import './CategoyParticipant.css'
import './CategoyParticipantRes.css'
import { GeneralFindRoute, GeneralHero, GeneralLearnMore, GeneralRegister } from '../general_info/GeneralInfo'
import athlete from '../../assets/NewImages/categoryNew.jpg'


const CategoryArticle = ({ H1, L1, L2, L3, L4, L5, L6 }) => {
    return (
        <>
            <h1 className='category_article_H1'>{H1}</h1>
            <ul className='category_article_UL'>
                {L1 && <li className='category_article_LI'>{L1}</li>}
                {L2 && <li className='category_article_LI'>{L2}</li>}
                {L3 && <li className='category_article_LI'>{L3}</li>}
                {L4 && <li className='category_article_LI'>{L4}</li>}
                {L5 && <li className='category_article_LI'>{L5}</li>}
                {L6 && <li className='category_article_LI'>{L6}</li>}
            </ul>
        </>
    )
}



const CategoyParticipant = () => {
    return (
        <div className='category_main_body'>
            <GeneralHero H1={"Teams can compete in the following \n categories;"} Title={"CATEGORY OF PARTICIPANTS"} />
            <div className="category_article_section_mainBody">
                <div className="category_article_section_wrapper">
                    <div className="category_article_section_wrapper_img_container">
                        <img src={athlete} alt="Athlete" className='category_article_section_wrapper_img' />
                    </div>
                    <div className="category_article_section_wrapper_article_container">
                        <CategoryArticle H1={'Master Division – Persons with Disability'} L1={'Wheelchair (all males and females Children under 18-29) 10km'} L2={'Hand crank (all males age under 18 -29) 2.5km'} />
                        <CategoryArticle H1={"Open Division – Individuals 18-35 years  (10km)"} L1={"High School Students"} L2={"Undergraduates"} L3={" Youth Self-Employed/Entrepreneurs"} L4={"Youth out of school/Not in Education, Employment and Training(NEET)"} L5={"Police or Military (all active duty or retired firemen, policemen or military personnel)"}/>
                        <CategoryArticle H1={"Corporate Division – Group/Team(10km)"} L1={"Employees from same company(18 - 35years)"} L2={"Police/military (both gender 18 -35 years)"} L3={"Government Agency( both gender 18 -35years)"}/>
                        <CategoryArticle H1={"VVIP/VIP Division – Individual /Group"} L1={"Sponsors/Representatives"} L2={"Government Stakeholders"} L3={"Private Partners/Representatives"} L4={"Key community stakeholders"} L5={"Celebrities/High profile personalities"}/>
                    </div>
                </div>
            </div>
            <GeneralRegister />
            <GeneralLearnMore />
            <GeneralFindRoute />

        </div>
    )
}

export default CategoyParticipant