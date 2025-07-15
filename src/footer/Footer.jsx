import './Footer.css'
import './FooterRes.css'
import ajCityMarathon from '../assets/newLogo.gif'
import { NavLink } from 'react-router-dom'
// import { CiFacebook } from "react-icons/ci";
import facebook from "../assets/facebook.png"
import instagram from "../assets/instaNew.png"
import X from "../assets/X.png"
import youtube from "../assets/youtube-icon.webp"


const Footer = () => {
    return (
        <div className='footer_mainBody'>
            <div className="footer_wrapper">

                <div className="footer_wrapper_img_holder">
                    <img src={ajCityMarathon} alt="" className="footer_top_image"/>

                </div>

                <ul>
                    <li>About Marathon</li>
                    <li><NavLink to={'/about_general_info'} className={'menu_not_active'}>General info</NavLink></li>
                    <li><NavLink to={'/about_category_of_participant'} className={'menu_not_active'}>Category of Participants</NavLink></li>
                    <li><NavLink to={'/about_how_to_register'} className={'menu_not_active'}>How to register</NavLink></li>
                    <li><NavLink to={'/about_routes_and_map'} className={'menu_not_active'}>Routes & Map</NavLink></li>
                    <li><NavLink to={'/about_prizes'} className={'menu_not_active'}>Prizes</NavLink></li>
                    {/* <li><NavLink className={'menu_not_active'}>Race</NavLink></li> */}
                    {/* <li><NavLink className={'menu_not_active'}>AJCYM Project</NavLink></li> */}
                    {/* <li><NavLink className={'menu_not_active'}>Local Organising Committee</NavLink></li> */}
                </ul>
                <ul>
                    <li>Get Involved</li>
                    <li><NavLink to={'/register'} className={'menu_not_active'}>Register for Race</NavLink></li>
                    <li><a href="https://bit.ly/Volunteer-Registration-Ajegunle-City-Youth-Marathon-2025" className={'menu_not_active'} target="_blank" rel="noreferrer">Volunteer</a></li>
                    <li><NavLink to={'/contact_us'} className={'menu_not_active'}>Media Accreditation</NavLink></li>
                    <li><NavLink to={'/contact_us'} className={'menu_not_active'}>Become a sponsor</NavLink></li>
                    <li><NavLink to={'/contact_us'} className={'menu_not_active'}>Partner with us</NavLink></li>
                    <li><NavLink to={'/donate'} className={'menu_not_active'}>Donate</NavLink></li>
                </ul>
                <ul>
                    <li>Resources</li>
                    <li><NavLink to={'/resources/resources/health_tips'} className={'menu_not_active'}>Health Tips</NavLink></li>
                    <li><NavLink to={'/resources/resources/nutrition_tips'} className={'menu_not_active'}>Nutrition Tips</NavLink></li>
                    <li><NavLink to={'/resources/resources/training_tips'} className={'menu_not_active'}>Training Tips</NavLink></li>
                    <li><NavLink to='/resources/resources/beginners_tips' className={'menu_not_active'}>Beginners Training</NavLink></li>
                    <li><NavLink to='/resources/resources/regular_runners_tips' className={'menu_not_active'}>Regular Runners Training</NavLink></li>
                </ul>
                <ul>
                    <li>News &Updates</li>
                    <li><NavLink to={"/blog"} className={'menu_not_active'}>Blog</NavLink></li>
                </ul>
                <ul>
                    <li>Contact Us</li>
                    <li><NavLink to='/contact_us' className={'menu_not_active'}>Support Email</NavLink></li>
                    <div>
                    <div><a href='https://www.facebook.com/profile.php?id=61556186280702' target='_blank' rel="noopener noreferrer" className={'menu_not_active'} style={{display: "flex"}}> <img className='atag' src={facebook} alt="facebook"/></a></div>
                        <div><a href="https://www.instagram.com/ajegunlecityyouthmarathon/" target='_blank' rel="noopener noreferrer" className={'menu_not_active'} style={{display: "flex"}}><img className='atag' src={instagram} alt="instagram"/></a></div>
                        <div><a href="https://x.com/Ajegunleci93698" target='_blank' rel="noopener noreferrer" className={'menu_not_active'} style={{display: "flex"}}><img className='atag' src={X} alt="X"/></a></div>
                        <div><a href="https://www.youtube.com/@ajegunlecityyouthmarathon" target='_blank' rel="noopener noreferrer" className={'menu_not_active'} style={{display: "flex"}}><img className='atag' src={youtube} alt="X"/></a></div>
                </div>
                </ul>
                
            </div>
            <p style={{color: "white"}} className='footer_P'>Copyright 2025 © Ajegunle City Youth Marathon. All Rights Reserved.</p>
        </div>
    )
}

export default Footer