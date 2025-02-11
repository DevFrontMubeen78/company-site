import logo from "/images/about/logo.png";
import leftBar from "../../public/images/footer/Rectangle 17.png"
import rightBar from "../../public/images/footer/Rectangle 18.png"
import { Link } from "react-router-dom";
import { FaInfoCircle, FaBriefcase, FaPenNib, FaUsers } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="mt-20">
            <div className="flex flex-col gap-20">
                <div className="container">
                    <div className="grid md:grid-cols-4 grid-cols-1 gap-10">
                        <div className="bg-white p-5 rounded-2xl shadow-lg">
                            <Link to="/"><img src={logo} alt="Logo" className="w-24 mb-6" /></Link>
                            <ul className="space-y-4 text-gray-700">
                                <li className="flex items-center gap-3 text-lg"><FaInfoCircle className="text-pink-500" /><Link to="/about">About</Link></li>
                                <li className="flex items-center gap-3 text-lg"><FaBriefcase className="text-pink-500" /><Link to="/career">Careers</Link></li>
                                <li className="flex items-center gap-3 text-lg"><FaPenNib className="text-pink-500" /> <Link to="#">Works</Link></li>
                                <li className="flex items-center gap-3 text-lg"><FaUsers className="text-pink-500" /> <Link to="#">Clients</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 text-lg mb-3">EXPERTISES</h3>
                            <ul className="text-gray-600 space-y-2">
                                <li><Link to="/uiux-design-consult">UI/UX Design</Link></li>
                                <li><Link to="/data-science-and-ai-development">Data Science & Ai Development</Link></li>
                                <li><Link to="/mobile-app-development">Mobile App Development</Link></li>
                                <li><Link to="/web-development">Web Development</Link></li>
                                <li><Link to="/custom-software-development">Custom Software Development</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 text-lg mb-3">Hire Developers</h3>
                            <ul className="text-gray-600 space-y-2">
                                <li><Link to="/hire-uiux-designer">Hire UI/UX Designer</Link></li>
                                <li><Link to="/hire-mobile-app-developers">Hire Mobile App Developers</Link></li>
                                <li><Link to="/hire-ios-developers">Hire IOS Developers</Link></li>
                                <li><Link to="/hire-android-developers">Hire Android Developers</Link></li>
                                <li><Link to="/hire-data-scientists">Hire Data Scientists Developers</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 text-lg mb-3">SERVICES</h3>
                            <ul className="text-gray-600 space-y-2">
                                <li><Link to="/staff-augmentation">Staff Augmentation</Link></li>
                                <li><Link to="/mobile-app-development">App Development </Link></li>
                                <li><Link to="/data-science-and-ai-development">AI & Data Science Development</Link></li>
                                <li><Link to="#"></Link>Digital Product Design</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bottomBar grid md:grid-cols-3 grid-cols-1 md:py-0 py-5">
                    <div className="md:block hidden"><img src={leftBar} alt={leftBar} /></div>
                    <div><p className="text text-base text-center">© 2025 DTK | All Rights Reserved</p></div>
                    <div className="md:block hidden"><img src={rightBar} alt={rightBar} /></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
