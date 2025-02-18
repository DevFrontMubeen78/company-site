import causeway from "../../public/images/causeway/jpeg-01 1.png"
import shots from "../../public/images/causeway/Group 1686555528.png"
import figma from "../../public/images/causeway/Group 1686555554.png"
import ps from "../../public/images/causeway/Group 1686555553.png"
import ProjectTime from "../../public/images/causeway/Group 1597884010.png"
import ProjectOv from "../../public/images/causeway/Group 1597884011.png"
import font from "../../public/images/causeway/Group 1597884012.png"
import flow from "../../public/images/causeway/Group 1686555555.png"
import Userflow from "../../public/images/causeway/User Flow.png"
import mbile from "../../public/images/causeway/Group 1597883730.png"
import DProcess from "../../public/images/causeway/Group 1597884009.png"
import DProcess2 from "../../public/images/causeway/Group 1597883757.png"
import projectTimeline from "../../public/images/causeway/Group 1597883758.png"
import projectTimeline2 from "../../public/images/causeway/Group 1597884010.png"
import logo from "/images/about/logo.png";
import { FaInfoCircle, FaBriefcase, FaPenNib, FaUsers } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet-async";


// const icons = [
//     {
//         img: "images/causeway/icon1.png",
//         path: "#"
//     },
//     {
//         img: "images/causeway/icon2.png",
//         path: "#"
//     },
//     {
//         img: "images/causeway/icon3.png",
//         path: "#"
//     },
//     {
//         img: "images/causeway/icon4.png",
//         path: "#"
//     },
//     {
//         img: "images/causeway/icon5.png",
//         path: "#"
//     },
// ]

const CauseWay = () => {
    return (
        <div className="bg-[#050505]">
            <Helmet>
                <title> DTK - Causeway</title>
            </Helmet>

            {/* // hero section  */}
            <div style={{
                backgroundImage:
                    "url('/images/causeway/Desktop - 2.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom center",
                backgroundSize: "cover",
            }} className="CauseWay padTop">
                <div className="container">
                    <div className="flex flex-col gap-14">
                        <Link className='flex items-center gap-5 text-2xl text-[#fff]' to="/case-studies"><IoIosArrowBack /> <span>Back</span></Link>
                        <div className="main grid md:grid-cols-2 md:gap-30 gap-15 grid-cols-1">
                            <div className="flex flex-col gap-8">
                                <img src={causeway} className='w-58' alt={causeway} />
                                <div className="flex flex-col gap-10">
                                    <h6 className='xl:text-5xl text-4xl text-[#fff]'>About <span className="font-bold">roles <br className="inline" /> and process.</span></h6>
                                    <p className="text-lg text-[#fff]">In the field of user experience (UX) design, roles and processes play a key role in ensuring that the end product is user-friendly and meets the needs of the target audience. </p>
                                </div>
                                <div className="flex gap-10">
                                    <img src={figma} className='w-22' alt={figma} />
                                    <img src={ps} className='w-22' alt={ps} />
                                </div>
                            </div>
                            <div className="">
                                <img src={shots} className='w-full' alt={shots} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* //Design Process */}
            <div
                style={{
                    backgroundImage:
                        "url('/images/causeway/Desktop - 63.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "bottom center",
                    backgroundSize: "cover",
                }} className="ProjectTime padTop flex flex-col gap-20">
                <img className="w-80" src={DProcess} alt={ProjectTime} />
                <div className="container">
                    <img className="scroll-animate md:w-8/12 w-full mx-auto" src={DProcess2} alt={DProcess2} />
                </div>
            </div>

            {/* //project timeline */}
            <div className="ProjectTime padTop flex flex-col gap-20">
                <img className="w-80" src={projectTimeline2} alt={projectTimeline2} />
                <div className="container">
                    <img className="scroll-animate w-full mx-auto" src={projectTimeline} alt={projectTimeline} />
                </div>
            </div>

            {/* //project overviw */}
            <div
                style={{
                    backgroundImage:
                        "url('/images/causeway/car.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top right",
                    backgroundSize: "contain",
                }} className="ProjectTime padTop flex flex-col gap-20">
                <img className="w-80" src={ProjectOv} alt={ProjectOv} />
                <div className="container flex flex-col gap-10">
                    <p className="scroll-animate text-lg text-[#fff] md:w-6/12">Founded in 2022, causeway offers low rental rates and a fun, hassle- free customer experience at the most popular travel destinations throughout Johor Bahru. Our guiding principles, and humble beginning, revolve around personal honesty and integrity. We believe in strengthening our communities one at a time. Serving our customers as if they were our family.</p>
                    <p className="scroll-animate text-lg text-[#fff]">Causeway never stops looking for ways to enhance cleanliness and safety. We pledge to go above and beyond our already rigorous cleaning protocols. Your comfort is our priority. You can depend on us, whatever your motoring needs.</p>
                </div>
            </div>

            {/* //font */}
            <div className="ProjectTime padTop flex flex-col gap-20">
                <img className="w-38" src={font} alt={font} />
                <div className="container">
                    <div className="scroll-animate fonts flex flex-col gap-7 text-[#fff]">
                        <div className="flex flex-col gap-3">
                            <h6 className="text-2xl font-semibold">Headline 1</h6>
                            <div className="grid md:grid-cols-4 grid-cols-2 md:gap-20 gap-2">
                                <p className="">Font :Inter</p>
                                <p className="">Weight :Bold</p>
                                <p className="">Size :28</p>
                                <p className="">Letter Spacing :0px</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h6 className="text-2xl font-semibold">Headline 2</h6>
                            <div className="grid md:grid-cols-4 grid-cols-2 md:gap-20 gap-2">
                                <p className="">Font :Inter</p>
                                <p className="">Weight :Regular</p>
                                <p className="">Size :16</p>
                                <p className="">Letter Spacing :0px</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h6 className="text-2xl font-semibold underline">Subtitle 1</h6>
                            <div className="grid md:grid-cols-4 grid-cols-2 md:gap-20 gap-2">
                                <p className="underline">Font :Inter</p>
                                <p className="underline">Weight :Semi Bold</p>
                                <p className="underline">Size :16</p>
                                <p className="underline">Letter Spacing :0px</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h6 className="text-2xl font-semibold">Subtitle 2</h6>
                            <div className="grid md:grid-cols-4 grid-cols-2 md:gap-20 gap-2">
                                <p className="">Font :Inter</p>
                                <p className="">Weight :Semi Bold</p>
                                <p className="">Size :14</p>
                                <p className="">Letter Spacing :0px</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h6 className="text-2xl font-semibold">Body</h6>
                            <div className="grid md:grid-cols-4 grid-cols-2 md:gap-20 gap-2">
                                <p className="">Font :Inter</p>
                                <p className="">Weight :Regular</p>
                                <p className="">Size :14</p>
                                <p className="">Letter Spacing :0px</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h6 className="text-2xl font-semibold">Button</h6>
                            <div className="grid md:grid-cols-4 grid-cols-2 md:gap-20 gap-2">
                                <p className="">Font :Inter</p>
                                <p className="">Weight :Semi Bold</p>
                                <p className="">Size :16</p>
                                <p className="">Letter Spacing :0px</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h6 className="text-2xl font-semibold">Caption 1</h6>
                            <div className="grid md:grid-cols-4 grid-cols-2 md:gap-20 gap-2">
                                <p className="">Font :Inter</p>
                                <p className="">Weight :Semi Bold</p>
                                <p className="">Size : 8</p>
                                <p className="">Letter Spacing :0px</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h6 className="text-2xl font-semibold">Caption 2</h6>
                            <div className="grid md:grid-cols-4 grid-cols-2 md:gap-20 gap-2">
                                <p className="">Font :Inter</p>
                                <p className="">Weight :Semi Bold</p>
                                <p className="">Size : 8</p>
                                <p className="">Letter Spacing :0px</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* //User Flow */}
            <div
                style={{
                    backgroundImage:
                        "url('/images/causeway/arrow.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top right",
                    backgroundSize: "40%",
                }} className="useflow padTop flex flex-col gap-20">
                <img className="w-60" src={flow} alt={flow} />
                <div className="container flex flex-col gap-20">
                    <img className="scroll-animate w-9/12 mx-auto" src={Userflow} alt={Userflow} />
                    <img className="scroll-animate" src={mbile} alt={mbile} />
                </div>
            </div>

            {/* last section  */}
            {/* <div style={{
                backgroundImage:
                    "url('/images/causeway/Desktop - 29.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right top",
                backgroundSize: "contain",
            }} className="causeLast bg-[#050505] pt-[50px] pb-[10px]">
                <div className="container">
                    <div className="main flex flex-col gap-16">
                        <h6 className="text-[#fff] md:text-4xl text-2xl text-center">THANKS FOR WATCHING</h6>
                        <ul className="flex items-center justify-end gap-5">
                            {
                                icons.map((item, index) => {
                                    return (
                                        <li key={index}><Link to={item.path}><img className="w-6" src={item.img} alt={item.img} /></Link></li>
                                    )
                                })
                            }

                        </ul>
                    </div>
                </div>
            </div> */}

            {/* footer  */}
            <footer className="padTop bg-[#ed2e3e]">
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
                                <h3 className="font-bold text-[#fff] text-lg mb-3">EXPERTISES</h3>
                                <ul className="space-y-2 text-[#fff]">
                                    <li><Link to="/uiux-design-consult">UI/UX Design</Link></li>
                                    <li><Link to="/data-science-and-ai-development">Data Science & Ai Development</Link></li>
                                    <li><Link to="/mobile-app-development">Mobile App Development</Link></li>
                                    <li><Link to="/web-development">Web Development</Link></li>
                                    <li><Link to="/custom-software-development">Custom Software Development</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-[#fff] text-lg mb-3">Hire Developers</h3>
                                <ul className="space-y-2 text-[#fff]">
                                    <li><Link to="/hire-uiux-designer">Hire UI/UX Designer</Link></li>
                                    <li><Link to="/hire-mobile-app-developers">Hire Mobile App Developers</Link></li>
                                    <li><Link to="/hire-ios-developers">Hire IOS Developers</Link></li>
                                    <li><Link to="/hire-android-developers">Hire Android Developers</Link></li>
                                    <li><Link to="/hire-data-scientists">Hire Data Scientists Developers</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-[#fff] text-lg mb-3">SERVICES</h3>
                                <ul className="text-[#fff] space-y-2">
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
            </footer>
        </div>
    )
}

export default CauseWay

// complete
