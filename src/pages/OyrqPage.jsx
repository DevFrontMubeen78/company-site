import Footer from "../components/Footer";
import Frame from "../../public/images/oyrq/Frame 8.png"
import Rectangle from "../../public/images/oyrq/Rectangle.png"
import idea from "../../public/images/oyrq/idea.png"
import Mask from "../../public/images/oyrq/Mask group.png"
import timeline from "../../public/images/oyrq/Group 1000002756.png"
import Vector from "../../public/images/oyrq/Vector.png"
import Colors from "../../public/images/oyrq/Colors.png"
import wireFrame from "../../public/images/oyrq/Group 1686555515.png"
// import Thanks from '../components/Thanks'
import leftBar from "../../public/images/footer/Rectangle 17.png"
import rightBar from "../../public/images/footer/Rectangle 18.png"
import logo from "/images/about/logo.png";
import { FaInfoCircle, FaBriefcase, FaPenNib, FaUsers } from "react-icons/fa";

import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet-async";

const role = [
    {
        img: "/images/oyrq/game-icons_light-bulb.png",
        title: "Discovery",
        list: [
            "Design Strategy ",
            "Stake holder interview",
            "Market strategy",
            "Competitive Analysis",
        ]
    },
    {
        img: "/images/oyrq/carbon_ibm-watson-discovery.png",
        title: "Describe",
        list: [
            "User Research",
            "User Persona",
            "Data gathering",
            "Empathy Mapping",
        ]
    },
    {
        img: "/images/oyrq/mdi_head-idea-outline.png",
        title: "Ideate",
        list: [
            "Brain Storming ",
            "User Flow",
            "Information Planning",
            "Cart Sorting",
        ]
    },
    {
        img: "/images/oyrq/openmoji_wireframes.png",
        title: "Design",
        list: [
            "Colors",
            "Fonts",
            "Wire framing",
            "Visual Design",
        ]
    },

]

const uiDesign = [
    "/images/oyrq/Group 1000002761.png",
    "/images/oyrq/Group 1000002762.png",
    "/images/oyrq/Group 1000002763.png",
    "/images/oyrq/Group 1000002764.png",
    "/images/oyrq/Group 1000002765.png",
]

const OyrqPage = () => {
    return (
        <div className='bg-[#271D46] h-full'>
            <Helmet>
                <title> DTK - OYRQ</title>
            </Helmet>

            {/* // hero section  */}
            <div style={{
                backgroundImage:
                    "url('/images/oyrq/ui_des.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom center",
                backgroundSize: "cover",
            }} className="oyrq padTop">
                <div className="container">
                    <div className="flex flex-col gap-26">
                        <Link className='flex items-center gap-5 text-2xl text-[#271D46]' to="/case-studies"><IoIosArrowBack /> <span>Back</span></Link>
                        <div className="main grid md:grid-cols-2 gap-10 grid-cols-1">
                            <div className="flex flex-col gap-5 text-[#271D46]">
                                <h5 className='font-bold xl:text-8xl text-2xl'>OYRQ <br className='inline' /> UX</h5>
                                <h6 className='xl:text-4xl text-3xl'>Case Study UX/UI </h6>
                                <img src={Frame} className='w-20' alt={Frame} />
                            </div>
                            <div className="">
                                <img src={Rectangle} className='w-full' alt={Rectangle} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* // ABOUT PROJECT  */}
            <div className="ABOUTPROJECT padTop">
                <div className="container">
                    <div className="main flex flex-col gap-10">
                        <h6 className='font-bold text-[#fff] md:text-5xl sm:text-4xl  text-3xl max-w-max pb-3'>ABOUT PROJECT</h6>
                        <div className="main grid md:grid-cols-2 grid-cols-1 gap-18">
                            <div className="flex flex-col gap-3">
                                <h6 className='font-bold text-[#fff] text-3xl max-w-max pb-3'>Introduction</h6>
                                <p className='text-lg text-base text-[#fff]'>we've embarked on a mission to revolutionize your online shopping experience. Whether you're browsing for the latest fashion trends, hunting for household essentials, or seeking unique gifts for loved ones, our app is your one-stop destination.With a curated selection of products sourced from top brands and independent sellers, we pride ourselves on offering a diverse array of items to suit every taste and need. From fashion-forward apparel to cutting-edge gadgets, from artisanal crafts to everyday necessities, we've got it all conveniently housed within our intuitive interface.</p>
                            </div>
                            <div className="flex justify-end">
                                <img className='w-98' src={idea} alt={idea} />
                            </div>
                        </div>

                        {/* second  */}
                        <div className="main grid md:grid-cols-2 grid-cols-1 gap-18">
                            <div className="flex items-center">
                                <img className='w-98' src={Mask} alt={Mask} />
                            </div>
                            <div className="flex flex-col gap-10">
                                <div className="one flex flex-col gap-3">
                                    <h6 className='font-bold text-[#fff] text-2xl border-l-8 pl-3'>Problem statement:</h6>
                                    <p className='text-lg text-base text-[#fff]'>In today's fast-paced world, online shopping has become increasingly popular due to its convenience and accessibility. However, despite the growing number of ecommerce platforms available, customers often face several challenges that hinder their overall shopping experience. From navigating cluttered interfaces to encountering security concerns,</p>
                                </div>
                                <div className="two flex flex-col gap-3">
                                    <h6 className='font-bold text-[#fff] text-2xl border-l-8 pl-3'>Goal:</h6>
                                    <p className='text-lg text-base text-[#fff]'>The goal of this case study is to design Fundify as a user-friendly and intuitive fin-tech app that helps users manage their finances efficiently and make informed investment decisions. The app will be designed with the user's needs and goals in mind, focusing on simplicity, ease of use, and accessibility. The painpoints and needs of the users are also considered after an exhaustive research. The app aim to tackle the financial problems of users, thereby, ensuring a seamless experience on the app.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* //Design  Process  */}
            <div className="DesignProcess padTop bg-[#fff]">
                <div className="main flex flex-col gap-10">
                    <div className="container">
                        <h6 className='font-bold text-[#271D46] md:text-5xl sm:text-4xl  text-3xl max-w-max pb-3'>Design  Process</h6>
                    </div>
                    <div style={{
                        backgroundImage:
                            "url('/images/oyrq/Vector 621.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }} className="main padTop">
                        <div className="container">
                            <div className="grid md:grid-cols-4 grid-cols-1 gap-18">
                                {
                                    role.map((items, index) => {
                                        return (
                                            <div key={index} className="text-[#fff] flex flex-col gap-5 items-center rounded-2xl p-10 bg-[#5d5574]">
                                                <img className='w-16' src={items.img} alt="" />
                                                <div className="flex flex-col gap-4">
                                                    <h6 className="text-2xl font-bold">{items.title}</h6>
                                                    <ul className='list-disc'>
                                                        {
                                                            items.list.map((items, index) => {
                                                                return (
                                                                    <li>{items}</li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* /Project Timeline  */}
            <div className="ProjectTimeline md:padTop bg-[#fff]">
                <div className="main flex flex-col md:gap-10 gap-5">
                    <div className="container">
                        <h6 className='font-bold text-[#271D46] md:text-5xl sm:text-4xl  text-3xl max-w-max pb-3'>Project Timeline</h6>
                    </div>
                    <div style={{
                        backgroundImage:
                            "url('/images/oyrq/Vector 6222.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }} className="main padTop">
                        <div className="container">
                            <div className="">
                                <img src={timeline} alt={timeline} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* /Style Guide  */}
            <div className="StyleGuide padTop bg-[#fff]">
                <div className="container">
                    <div className="main flex flex-col gap-18">
                        <h6 className='font-bold text-[#271D46] md:text-5xl sm:text-4xl  text-3xl max-w-max pb-3'>Style Guide</h6>
                        <div className="grid grid-cols-1 md:grid-cols-12 md:gap-10 gap-20">
                            {/* First Image */}
                            <div className="md:col-span-4">
                                <img className="w-40 md:w-56" src={Vector} alt="Vector Image" />
                            </div>

                            {/* Second Image */}
                            <div className="md:col-span-8">
                                <img className="w-10/12 max-w-lg md:max-w-full" src={Colors} alt="Colors Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* // wire frame  */}
            <div className="padTop">
                <div className="container">
                    <div className="main flex flex-col gap-18">
                        <h6 className='font-bold text-[#fff] md:text-8xl sm:text-6xl  text-3xl max-w-max pb-3'>Wireframe</h6>
                        <div className="img">
                            <img src={wireFrame} alt={wireFrame} />
                        </div>
                    </div>
                </div>
            </div>

            {/* // UI Design  */}
            <div style={{
                backgroundImage:
                    "url('/images/oyrq/ui_des.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top left",
                backgroundSize: "contain",
            }} className="padTop">
                <div className="container">
                    <div className="main flex flex-col gap-18">
                        <h6 className='font-bold text-[#271D46] md:text-8xl sm:text-6xl  text-3xl max-w-max pb-3'>UI Design</h6>
                        <div className="uiDesign flex flex-col gap-10">
                            {
                                uiDesign.map((items, index) => {
                                    return (
                                        <img key={index} src={items} alt={`Screen ${index + 1}`} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* footer  */}
            <footer className="pt-20 bg-[#fff]">
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
                                <h3 className="font-bold text-[#000] text-lg mb-3">EXPERTISES</h3>
                                <ul className="space-y-2 text">
                                    <li><Link to="/uiux-design-consult">UI/UX Design</Link></li>
                                    <li><Link to="/data-science-and-ai-development">Data Science & Ai Development</Link></li>
                                    <li><Link to="/mobile-app-development">Mobile App Development</Link></li>
                                    <li><Link to="/web-development">Web Development</Link></li>
                                    <li><Link to="/custom-software-development">Custom Software Development</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-[#000] text-lg mb-3">Hire Developers</h3>
                                <ul className="space-y-2 text">
                                    <li><Link to="/hire-uiux-designer">Hire UI/UX Designer</Link></li>
                                    <li><Link to="/hire-mobile-app-developers">Hire Mobile App Developers</Link></li>
                                    <li><Link to="/hire-ios-developers">Hire IOS Developers</Link></li>
                                    <li><Link to="/hire-android-developers">Hire Android Developers</Link></li>
                                    <li><Link to="/hire-data-scientists">Hire Data Scientists Developers</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-[#000] text-lg mb-3">SERVICES</h3>
                                <ul className="text space-y-2">
                                    <li><Link to="/staff-augmentation">Staff Augmentation</Link></li>
                                    <li><Link to="/mobile-app-development">App Development </Link></li>
                                    <li><Link to="/data-science-and-ai-development-services">Data Science & AI  Development Services</Link></li>
                                    <li><Link to="#"></Link>Digital Product Design</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="bottomBar grid md:grid-cols-3 grid-cols-1 md:py-0 py-5">
                        <div className="md:block hidden"></div>
                        <div><p className="text-[#fff] text-base text-center">© 2025 DTK | All Rights Reserved</p></div>
                        <div className="md:block hidden"></div>
                    </div>
                </div>
                <div className="bottomBar grid md:grid-cols-3 grid-cols-1 md:py-0 py-5">
                    <div className="md:block hidden"><img src={leftBar} alt={leftBar} /></div>
                    <div><p className="text text-base text-center">© 2025 DTK | All Rights Reserved</p></div>
                    <div className="md:block hidden"><img src={rightBar} alt={rightBar} /></div>
                </div>
            </footer>
        </div>
    )
}

export default OyrqPage

//complete
