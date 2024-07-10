import { GeneralFindRoute, GeneralHero, GeneralLearnMore, GeneralRegister } from '../general_info/GeneralInfo'
import './Prizes.css'
import './PrizesRes.css'
import athlete from '../../assets/generalInfo2.png'




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
                                    <td>Winners</td>
                                    <td>Category</td>
                                    <td>Cash Prizes (NGN)</td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <th>Wheelchair and Hand crank
                                        (Male and Female 18 – 29 years)
                                    </th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1 st Prize</td>
                                    <td></td>
                                    <td>300,000/=</td>
                                </tr>
                                <tr>
                                    <td>2 nd Prize</td>
                                    <td></td>
                                    <td>200,000/=</td>
                                </tr>
                                <tr>
                                    <td>3 rd Prize</td>
                                    <td></td>
                                    <td>100,000/=</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <th>Open Division and Corporate Division – Male category</th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <td>1 st Prize</td>
                                    <td></td>
                                    <td>400,000/=</td>
                                </tr>
                                <tr>
                                    <td>2 nd Prize</td>
                                    <td></td>
                                    <td>300,000/=</td>
                                </tr>
                                <tr>
                                    <td>3 rd Prize</td>
                                    <td></td>
                                    <td>200,000/=</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <th>Open Division and Corporate Division - Female category</th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <td>1 st Prize</td>
                                    <td></td>
                                    <td>300,000/=</td>
                                </tr>
                                <tr>
                                    <td>2 nd Prize</td>
                                    <td></td>
                                    <td>200,000/=</td>
                                </tr>
                                <tr>
                                    <td>3 rd Prize</td>
                                    <td></td>
                                    <td>100,000/=</td>
                                </tr>
                                <tr>
                                    <td>4 th – 23rd Prize</td>
                                    <td>Other 20 best Finishers (50,000/Finisher)</td>
                                    <td>50,000/= 1M</td>
                                </tr>
                                <tr>
                                    <td>All finishers</td>
                                    <td></td>
                                    <td>Certificates of participation</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <th>VVIP/VIP Division</th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Special Certificates of sponsorship</td>
                                    <td>Special Branded Gift Packaged</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <th>Other Awards</th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Special Certificates of sponsorship and Awards</td>
                                    <td>Special Branded Gift Packaged</td>
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