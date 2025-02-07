import logo from "/images/about/logo.png";
import { Link } from "react-router-dom";
import { FaInfoCircle, FaBriefcase, FaPenNib, FaUsers, FaBlog } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="py-10 mt-20">
            <div className="container">
                <div className="grid md:grid-cols-4 grid-cols-1 md:gap-20 gap-10">
                    <div className="bg-white p-5 rounded-2xl shadow-lg">
                        <Link to="/"><img src={logo} alt="Logo" className="w-24 mb-6" /></Link>
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-center gap-3 text-lg"><FaInfoCircle className="text-pink-500" /><Link to="/about">About</Link></li>
                            <li className="flex items-center gap-3 text-lg"><FaBriefcase className="text-pink-500" /><Link to="#">Careers</Link></li>
                            <li className="flex items-center gap-3 text-lg"><FaPenNib className="text-pink-500" /> <Link to="#">Works</Link></li>
                            <li className="flex items-center gap-3 text-lg"><FaUsers className="text-pink-500" /> <Link to="#">Clients</Link></li>
                            <li className="flex items-center gap-3 text-lg"><FaBlog className="text-pink-500" /> <Link to="#">Blogs</Link></li>
                        </ul>

                        {/* Google Rating Card */}
                        {/* <img
                            src="/assets/img/landingPage/googleFrame.png"
                            alt="Innovative software development"
                            className="mt-12 max-w-xl h-auto rounded-lg shadow-lg"
                        /> */}
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900 text-lg mb-3">EXPERTISES</h3>
                        <ul className="text-gray-600 space-y-2">
                            <li><Link to="/web-development">Web Development</Link></li>
                            <li><Link to="/mobile-app-development">Mobile App Development</Link></li>
                            <li><Link to="/uiux-design-consult">UI/UX Design Consult</Link></li>
                            <li><Link to="/data-science-and-ai-development">Data Science & Ai Development</Link></li>
                            <li><Link to="/custom-software-development">Custom Software Development</Link></li>
                        </ul>
                    </div>
                    <div className="flex flex-col md:gap-10 gap-0">
                        <div>
                            <h3 className="font-bold text-gray-900 text-lg mb-3">SERVICES</h3>
                            <ul className="text-gray-600 space-y-2">
                                <li>Staff Augmentation</li>
                                <li>Dedicated Development Team</li>
                                <li>Custom Software Development</li>
                                <li>Digital Product Design</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 text-lg mb-3 mt-8">PROGRAMMING LANGUAGE</h3>
                            <ul className="text-gray-600 space-y-2">
                                <li>PHP</li>
                                <li>Node.js</li>
                                <li>Swift</li>
                                <li>WordPress</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900 text-lg mb-3">DESIGN</h3>
                        <ul className="text-gray-600 space-y-2">
                            <li>Design Office</li>
                        </ul>
                        <h3 className="font-bold text-gray-900 text-lg mb-3 mt-8">TECHNOLOGIES</h3>
                        <ul className="text-gray-600 space-y-2">
                            <li><Link to="/hire-mobile-app-developers">Hire Mobile App Developers</Link></li>
                            <li><Link to="/hire-ios-developers">Hire IOS Developers</Link></li>
                            <li><Link to="/hire-android-developers">Hire Android Developers</Link></li>
                            <li><Link to="/hire-data-scientists">Hire Data Scientists</Link></li>
                            <li><Link to="/hire-uiux-designer">Hire UI/UX Designer</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
