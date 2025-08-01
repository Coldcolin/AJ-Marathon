import "./GetInvolve.css";
import "./GetInvolveRes.css";
import getInvolved1 from "../assets/NewImages/GetINvolved.jpg";
import getInvolved2 from "../assets/NewImages/Volunteer.jpg";
import getInvolved3 from "../assets/NewImages/Media.jpg";
import getInvolved4 from "../assets/NewImages/Sponsor.jpg";
import getInvolved5 from "../assets/NewImages/Partner.jpg";
import getInvolved6 from "../assets/NewImages/Donate.jpg";
import { NavLink } from "react-router-dom";


const GetInvolve = () => {
    return (
        <div className="get_involve_main_body">
            <div className="get_involve_hero_container">GET INVOLVED</div>
            <div className="get_involve_card_container">
                <div className="w-full h-max flex items-center flex-col px-56 phone:px-4 py-10 gap-10">
                    <div className="w-full h-80 phone:h-max flex phone:flex-col shadow-lg border border-gray-200 rounded-lg">
                        <div className="w-1/2 phone:w-full h-full phone:h-72">
                            <img
                                src={getInvolved1}
                                alt=""
                                className="w-full h-full object-cover rounded-l-lg phone:rounded-lg"
                            />
                        </div>
                        <div className="w-1/2 phone:w-full phone:h-max phone:py-10 phone:items-center h-full flex flex-col px-12 justify-center gap-8">
                            <h1 className="font-bold text-2xl">
                                REGISTER FOR A RACE
                            </h1>
                            <p className="phone:text-center">
                                Join the Ajegunle city marathon runners and
                                raise awareness to promote: peace, youth
                                inclusion and good governance.
                            </p>
                            <button className="w-max h-max text-2xl px-8 py-3 border border-green-500 rounded text-green-500 font-bold">
                                <NavLink to={"/register"}>Register</NavLink>
                            </button>
                        </div>
                    </div>
                    <div className="w-full h-80 phone:h-max flex phone:flex-col shadow-lg border border-gray-200 rounded-lg flex-row-reverse">
                        <div className="w-1/2 phone:w-full h-full phone:h-72">
                            <img
                                src={getInvolved2}
                                alt=""
                                className="w-full h-full object-cover rounded-r-lg phone:rounded-lg"
                            />
                        </div>
                        <div className="w-1/2 phone:w-full phone:h-max phone:py-10 phone:items-center h-full flex flex-col px-12 justify-center gap-8">
                            <h1 className="font-bold text-2xl">VOLUNTEER</h1>
                            <p className="phone:text-center">
                                Join the Ajegunle city marathon as a volunteer.
                                This is a great way of making a difference with
                                us
                            </p>
                            <button className="w-max h-max text-2xl px-8 py-3 border border-green-500 rounded text-green-500 font-bold">
                                {/* <NavLink to={"/contact_us"}>Volunteer</NavLink> */}
                                <a href="https://bit.ly/Volunteer-Registration-Ajegunle-City-Youth-Marathon-2025" target="_blank" rel="noreferrer">Volunteer</a>
                            </button>
                        </div>
                    </div>
                    <div className="w-full h-80 phone:h-max flex phone:flex-col shadow-lg border border-gray-200 rounded-lg">
                        <div className="w-1/2 phone:w-full h-full phone:h-72">
                            <img
                                src={getInvolved3}
                                alt=""
                                className="w-full h-full object-cover rounded-l-lg phone:rounded-lg"
                            />
                        </div>
                        <div className="w-1/2 phone:w-full phone:h-max phone:py-10 phone:items-center h-full flex flex-col px-12 justify-center gap-8">
                            <h1 className="font-bold text-2xl">
                                MEDIA ACCREDITATION
                            </h1>
                            <p className="phone:text-center">
                                Interested in becoming our media partner? find
                                out how to become accredited and and have access
                                to cover the race.
                            </p>
                            <button className="w-max h-max text-2xl px-8 py-3 border border-green-500 rounded text-green-500 font-bold">
                                <NavLink to={"/contact_us"}>Get In touch</NavLink>
                            </button>
                        </div>
                    </div>
                    <div className="w-full h-80 phone:h-max flex phone:flex-col shadow-lg border border-gray-200 rounded-lg flex-row-reverse">
                        <div className="w-1/2 phone:w-full h-full phone:h-72">
                            <img
                                src={getInvolved4}
                                alt=""
                                className="w-full h-full object-cover rounded-r-lg phone:rounded-lg"
                            />
                        </div>
                        <div className="w-1/2 phone:w-full phone:h-max phone:py-10 phone:items-center h-full flex flex-col px-12 justify-center gap-8">
                            <h1 className="font-bold text-2xl">
                                BECOME A SPONSOR
                            </h1>
                            <p className="phone:text-center">
                                We have a range of categories for and cost share
                                packages for interested sponsors
                            </p>
                            <button className="w-max h-max text-2xl px-8 py-3 border border-green-500 rounded text-green-500 font-bold">
                                <NavLink to={"/contact_us"}>Get In touch</NavLink>
                            </button>
                        </div>
                    </div>
                    <div className="w-full h-80 phone:h-max flex phone:flex-col shadow-lg border border-gray-200 rounded-lg">
                        <div className="w-1/2 phone:w-full h-full phone:h-72">
                            <img
                                src={getInvolved5}
                                alt=""
                                className="w-full h-full object-cover rounded-l-lg phone:rounded-lg"
                            />
                        </div>
                        <div className="w-1/2 phone:w-full phone:h-max phone:py-10 phone:items-center h-full flex flex-col px-12 justify-center gap-8">
                            <h1 className="font-bold text-2xl">
                                PARTNER WITH US
                            </h1>
                            <p className="phone:text-center">
                                We keenly recognize the impact for all our
                                Corporate and philanthropic partnership. You too
                                can BECOME A PARTNER
                            </p>
                            <button className="w-max h-max text-2xl px-8 py-3 border border-green-500 rounded text-green-500 font-bold">
                                <NavLink to={"/contact_us"}>Get in touch</NavLink>
                            </button>
                        </div>
                    </div>
                    <div className="w-full h-80 phone:h-max flex phone:flex-col shadow-lg border border-gray-200 rounded-lg flex-row-reverse">
                        <div className="w-1/2 phone:w-full h-full phone:h-72">
                            <img
                                src={getInvolved6}
                                alt=""
                                className="w-full h-full object-cover rounded-r-lg phone:rounded-lg"
                            />
                        </div>
                        <div className="w-1/2 phone:w-full phone:h-max phone:py-10 phone:items-center h-full flex flex-col px-12 justify-center gap-8">
                            <h1 className="font-bold text-2xl">DONATE</h1>
                            <p className="phone:text-center">
                                All proceeds shall go to support disadvantaged
                                AYP identified from the marathon activities whom
                                thereafter will be prioritized and enrolled into
                                developmental programs.
                            </p>
                            <button className="w-max h-max text-2xl px-8 py-3 border border-green-500 rounded text-green-500 font-bold">
                                <NavLink to={"/donate"}>Donate Now</NavLink>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetInvolve;
