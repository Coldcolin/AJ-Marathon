import './Footer.css'
import './FooterRes.css'
import ajCityMarathon from '../assets/newLogo.gif'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer_mainBody'>
            <div className="footer_wrapper">

                <div className="footer_wrapper_img_holder">
                    <img src={ajCityMarathon} alt="" />

                </div>

                <ul>
                    <li>About Marathon</li>
                    <li><NavLink to={'/about_general_info'} className={'menu_not_active'}>General info</NavLink></li>
                    <li><NavLink to={'/about_category_of_participant'} className={'menu_not_active'}>Category of Participants</NavLink></li>
                    <li><NavLink to={'/about_how_to_register'} className={'menu_not_active'}>How to register</NavLink></li>
                    <li><NavLink to={'/about_routes_and_map'} className={'menu_not_active'}>Routes & Map</NavLink></li>
                    <li><NavLink to={'/about_prizes'} className={'menu_not_active'}>Prizes</NavLink></li>
                    <li><NavLink className={'menu_not_active'}>Race</NavLink></li>
                    <li><NavLink className={'menu_not_active'}>AJCYM Project</NavLink></li>
                    <li><NavLink className={'menu_not_active'}>Local Organising Committee</NavLink></li>
                </ul>
                <ul>
                    <li>Get Involved</li>
                    <li><NavLink className={'menu_not_active'}>Register for Race</NavLink></li>
                    <li><NavLink className={'menu_not_active'}>Volunteer</NavLink></li>
                    <li><NavLink className={'menu_not_active'}>Media Accreditation</NavLink></li>
                    <li><NavLink className={'menu_not_active'}>Become a sponsor</NavLink></li>
                    <li><NavLink className={'menu_not_active'}>Partner with us</NavLink></li>
                    <li><NavLink className={'menu_not_active'}>Donate</NavLink></li>
                </ul>
                <ul>
                    <li>Resources</li>
                    <li><NavLink to={'/health_tips'} className={'menu_not_active'}>Health Tips</NavLink></li>
                    <li><NavLink to={'/nutrition_tips'} className={'menu_not_active'}>Nutrition Tips</NavLink></li>
                    <li><NavLink className={'menu_not_active'}>Training Tips</NavLink></li>
                    <li><NavLink className={'menu_not_active'}>Beginners Training</NavLink></li>
                    <li><NavLink className={'menu_not_active'}>Regular Runners Training</NavLink></li>
                </ul>
                <ul>
                    <li>News &Updates</li>
                    <li><NavLink className={'menu_not_active'}>Blog</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer