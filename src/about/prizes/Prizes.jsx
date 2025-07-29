import { GeneralFindRoute, GeneralHero, GeneralLearnMore, GeneralRegister } from '../general_info/GeneralInfo'
import './Prizes.css'
import './PrizesRes.css'
import athlete from '../../assets/NewImages/About_Prizes.jpg'




const Prizes = () => {
    return (
        <div className='prizes_mainBody'>
            <GeneralHero Title={"Prize"} H1={"Prizes for \nAjegunle City youth Marathon"} />
            <div className="prizes_article_section_mainBody">
                <div className="prizes_article_section_wrapper">
                    <div className="prizes_article_section_wrapper_img_container">
                        <img src={athlete} alt="Athlete" className='prizes_article_section_wrapper_img' />
                    </div>
                    <div className="prizes_article_section_wrapper_article_container">
                        <h1 className='prizes_article_section_wrapper_article_container_H1'>Prizes</h1>
                        <p className='prizes_article_section_wrapper_article_container_P'>Participants regardless of diversities shall get the following awards for finishing each of these mileposts:</p>
                        <table style={{ border: '1px solid blue' }}>
                            <thead>
                                <tr>
                                    <td className='about_prize_TD'>Winners</td>
                                    <td className='about_prize_TD'>Category</td>
                                    <td className='about_prize_TD'>Cash Prizes (NGN)</td>
                                </tr>
                                <tr>
                                    <th className='about_prize_TH'></th>
                                    <th className='about_prize_TH'>Wheelchair and Hand crank
                                        (Male and Female 18 – 29 years)
                                    </th>
                                    <th className='about_prize_TH'></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='about_prize_TD'>1 st Prize</td>
                                    <td className='about_prize_TD'></td>
                                    <td className='about_prize_TD'>300,000/=</td>
                                </tr>
                                <tr>
                                    <td className='about_prize_TD'>2 nd Prize</td>
                                    <td className='about_prize_TD'></td>
                                    <td className='about_prize_TD'>200,000/=</td>
                                </tr>
                                <tr>
                                    <td className='about_prize_TD'>3 rd Prize</td>
                                    <td className='about_prize_TD'></td>
                                    <td className='about_prize_TD'>100,000/=</td>
                                </tr>
                                <tr>
                                    <td className='about_prize_TD'></td>
                                    <td className='about_prize_TD'></td>
                                    <td className='about_prize_TD'></td>
                                </tr>
                                <tr>
                                    <th className='about_prize_TH'></th>
                                    <th className='about_prize_TH'>Open Division and Corporate Division – Male category</th>
                                    <th className='about_prize_TH'></th>
                                </tr>
                                <tr>
                                    <td className='about_prize_TD'>1 st Prize</td>
                                    <td className='about_prize_TD'></td>
                                    <td className='about_prize_TD'>300,000/=</td>
                                </tr>
                                <tr>
                                    <td className='about_prize_TD'>2 nd Prize</td>
                                    <td className='about_prize_TD'></td>
                                    <td className='about_prize_TD'>200,000/=</td>
                                </tr>
                                <tr>
                                    <td className='about_prize_TD'>3 rd Prize</td>
                                    <td className='about_prize_TD'></td>
                                    <td className='about_prize_TD'>100,000/=</td>
                                </tr>
                                <tr>
                                    <td className='about_prize_TD'></td>
                                    <td className='about_prize_TD'></td>
                                    <td className='about_prize_TD'></td>
                                </tr>
                                <tr>
                                    <th className='about_prize_TH'></th>
                                    <th className='about_prize_TH'>Open Division and Corporate Division - Female category</th>
                                    <th className='about_prize_TH'></th>
                                </tr>
                                <tr>
                                    <td className='about_prize_TD'>1 st Prize</td>
                                    <td className='about_prize_TD'></td>
                                    <td className='about_prize_TD'>300,000/=</td>
                                </tr>
                                <tr>
                                    <td className='about_prize_TD'>2 nd Prize</td>
                                    <td className='about_prize_TD'></td>
                                    <td className='about_prize_TD'>200,000/=</td>
                                </tr>
                                <tr>
                                    <td className='about_prize_TD'>3 rd Prize</td>
                                    <td className='about_prize_TD'></td>
                                    <td className='about_prize_TD'>100,000/=</td>
                                </tr>
                                <tr>
                                    <td className='about_prize_TD'>4 th – 23rd Prize</td>
                                    <td className='about_prize_TD'>Other 20 best Finishers (50,000/Finisher)</td>
                                    <td className='about_prize_TD'>50,000/= 1M</td>
                                </tr>
                                <tr>
                                    <td className='about_prize_TD'>All finishers</td>
                                    <td className='about_prize_TD'></td>
                                    <td className='about_prize_TD'>Certificates of participation</td>
                                </tr>
                                <tr>
                                    <td className='about_prize_TD'></td>
                                    <td className='about_prize_TD'></td>
                                    <td className='about_prize_TD'></td>
                                </tr>
                                <tr>
                                    <th className='about_prize_TH'></th>
                                    <th className='about_prize_TH'>VVIP/VIP Division</th>
                                    <th className='about_prize_TH'></th>
                                </tr>
                                <tr>
                                    <td className='about_prize_TD'></td>
                                    <td className='about_prize_TD'>Special Certificates of sponsorship</td>
                                    <td className='about_prize_TD'>Special Branded Gift Packaged</td>
                                </tr>
                                <tr>
                                    <td className='about_prize_TD'></td>
                                    <td className='about_prize_TD'></td>
                                    <td className='about_prize_TD'></td>
                                </tr>
                                <tr>
                                    <th className='about_prize_TH'></th>
                                    <th className='about_prize_TH'>Other Awards</th>
                                    <th className='about_prize_TH'></th>
                                </tr>
                                <tr>
                                    <td className='about_prize_TD'></td>
                                    <td className='about_prize_TD'>Special Certificates of sponsorship and Awards</td>
                                    <td className='about_prize_TD'>Special Branded Gift Packaged</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
            <GeneralRegister />
            <GeneralLearnMore />
            <GeneralFindRoute/>
        </div>
    )
}

export default Prizes