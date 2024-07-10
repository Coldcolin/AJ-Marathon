import React, { useState } from 'react'
import './Header.css';
import './HeaderRes.css';
// import './HeaderMedia.css';
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoMdClose } from 'react-icons/io'
import { NavLink } from 'react-router-dom';
import logo from '../assets/newLogo.gif'


const routes = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/get_involve', name: 'Get involve' },
    { path: '/blog', name: 'Blog' },
    { path: '/resources', name: 'Resources' },
    { path: '/gallery', name: 'Gallery' },
    { path: '/donate', name: 'Donate' },
    { path: '/contact_us', name: 'Contact us' }
];


const Header = () => {
    const [menu, setMenu] = useState(false);

    return (
        <div className='header_main_container'>
            <div className="header_main_wrapper">
                <div className="header_logo_container">
                    {/* <img src={logo} alt="Logo" className='header_logo' /> */}
                    <NavLink to={"/"} className={'menu_not_active'}>
                        <img src={logo} alt="Logo" className='header_logo' />
                    </NavLink>
                </div>
                <ul className='header_menu_wrapper'>
                    {
                        routes.map((route) => (
                            <li key={route.path}>
                                <NavLink to={route.path} className={'menu_not_active'} >{route.name}</NavLink>

                            </li>
                        ))
                    }
                </ul>
                <div className="header_main_wrapper_mobile">
                    <div className='header_burger_menu_container'>
                        {
                            menu ? <IoMdClose
                                onClick={() => {
                                    setMenu(false);
                                }}
                            /> :
                                <RxHamburgerMenu onClick={() => {
                                    setMenu(true)
                                }} />
                        }
                    </div>
                    {
                        menu ? <div className='header_mobile_menu'>
                            <ul className='header_mobile_menu_Ul'>
                                {
                                    routes.map((route) => (
                                        <li key={route.path}>
                                            <NavLink to={route.path} className={'menu_not_active'} onClick={() => {
                                                setMenu(false)
                                            }}>{route.name}</NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div> : null
                    }
                </div>
            </div>

        </div>
    )
}

export default Header