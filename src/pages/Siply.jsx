import Footer from "../components/Footer";
import designProcess from "../../public/images/siply/Group 1686555549.png"
import Timeline from "../../public/images/siply/Timeline _ Suggestion 2 _ Ali Hassan.png"
import ag from "../../public/images/siply/Ag.png"
import Frame from "../../public/images/siply/Frame 1.png"
import siply from "../../public/images/siply/image 27.png"
import Frame171 from "../../public/images/siply/Frame 171.png"
import Frame173 from "../../public/images/siply/Frame 173.png"
import Frame176 from "../../public/images/siply/Frame 176.png"
import UserFlow from "../../public/images/siply/User Flow _ Ali Hassan.png"
import shots from "../../public/images/siply/76shots_so 1.png"
import figma from "../../public/images/siply/logos_figma.png"
// import ThanksTw from "../components/ThanksTw"
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet-async";



const KeyFeatures = [
    "/images/siply/Key Features.png",
]

const WireframeScreens = [
    "/images/siply/WireframeScreens1.png",
    "/images/siply/WireframeScreens2.png",
]

const screen = [
    "/images/siply/Group 1686555523.png",
    "/images/siply/Group 1686555524.png",
    "/images/siply/Group 1686555525.png",
    "/images/siply/Group 1686555526.png",
]


const Siply = () => {
    return (
        <div className='bg-[#fff] h-full'>
            <Helmet>
                <title> DTK - Siply</title>
            </Helmet>

            {/* // hero section  */}
            <div style={{
                backgroundImage:
                    "url('/images/siply/Desktop - 3.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom center",
                backgroundSize: "cover",
            }} className="oyrq padTop">
                <div className="container">
                    <div className="flex flex-col gap-14">
                        <Link className='flex items-center gap-5 text-2xl text-[#271D46]' to="/case-studies"><IoIosArrowBack /> <span>Back</span></Link>
                        <div className="main grid md:grid-cols-2 gap-10 grid-cols-1">
                            <div className="flex flex-col gap-8">
                                <img src={siply} className='w-46' alt={siply} />
                                <h6 className='xl:text-4xl text-3xl text-[#fff]'>UI/UX Case Study </h6>
                                <div className="flex flex-col gap-3">
                                    <h6 className='text-lg text-[#fff]'>Designed With</h6>
                                    <img src={figma} className='w-14' alt={figma} />
                                </div>
                            </div>
                            <div className="">
                                <img src={shots} className='w-full' alt={shots} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* // App Idea */}
            <div style={{
                backgroundImage:
                    "url('/images/siply/app-idea.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom center",
                backgroundSize: "cover",
            }} className="AppIdea padTop">
                <div className="container">
                    <div className="main flex flex-col gap-5">
                        <h6 className='scroll-animate font-bold text-[#E89F50] md:text-5xl sm:text-4xl  text-3xl max-w-max pb-3'>App Idea</h6>
                        <p className='scroll-animate text-lg text-[#000]'>An app that will list daily deals for all bars/restaurants within a given area. For the app, we need to be able to create filters for different food and drink deals as well as the entertainment provided at each venue. We also want to have a social side to it where you can invite friends to the happy hour of your choice and give the option to post the bar/restaurant you will be on a given day. We want to link it to google maps for location services and yelp to see reviews.</p>
                    </div>
                </div>
            </div>

            {/* // App Idea */}
            <div style={{
                backgroundImage:
                    "url('/images/siply/Design Process _ Ali Hassan.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center top",
                backgroundSize: "cover",
            }} className="AppIdea padTop">
                <div className="container">
                    <div className="main flex flex-col gap-5">
                        <h6 className='scroll-animate font-bold text-[#E89F50] md:text-5xl sm:text-4xl  text-3xl max-w-max pb-3'>Design Process</h6>
                        <img className="scroll-animate " src={designProcess} alt={designProcess} />
                    </div>
                </div>
            </div>

            {/* // Timeline */}
            <div style={{
                backgroundImage:
                    "url('/images/siply/siplylogo-09 1.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left top",
                backgroundSize: "10%",
            }} className="Timeline padTop">
                <div className="container">
                    <div className="main flex flex-col gap-5">
                        <h6 className='scroll-animate font-bold text-[#E89F50] md:text-5xl sm:text-4xl  text-3xl max-w-max pb-3'>Timeline</h6>
                        <img className="scroll-animate" src={Timeline} alt={Timeline} />
                    </div>
                </div>
            </div>

            {/* // User Flow */}
            <div style={{
                backgroundImage:
                    "url('/images/siply/siplylogo-09 1ss.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom left",
                backgroundSize: "cover",
            }} className="UserFlow padTop">
                <div className="container">
                    <div className="main flex flex-col gap-5">
                        <h6 className='scroll-animate font-bold text-[#E89F50] md:text-5xl sm:text-4xl  text-3xl max-w-max pb-3'>User Flow</h6>
                        <img className="scroll-animate " src={UserFlow} alt={UserFlow} />
                    </div>
                </div>
            </div>

            {/* // User Flow sec */}
            <div style={{
                backgroundImage:
                    "url('/images/siply/bacs.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
            }} className="UserFlow padTop">
                <div className="container">
                    <div className="flex flex-col gap-18">
                        <div className="main grid md:grid-cols-2 grid-cols-1 gap-18">
                            <div className="slide-in-left flex flex-col gap-5">
                                <img className='w-98' src={ag} alt={ag} />
                                <h6 className='font-semibold text-[#E89F50] md:text-5xl sm:text-4xl  text-3xl max-w-max pb-3'>UI Design</h6>
                                <p className="text text-lg">After understanding the users problems and behavior, it's time to design the interface. </p>
                            </div>
                            <div className="slide-in-right flex flex-col gap-5">
                                <img src={Frame} alt={Frame} />
                            </div>
                        </div>


                        <div className="main flex flex-col gap-5">
                            <h6 className='font-bold text-[#E89F50] text-4xl max-w-max pb-3'>Color palette</h6>
                            <div className="grid md:grid-cols-3 grid-cols-1 gap-20">
                                <div className="slide-in-left flex flex-col gap-5">
                                    <h6 className='font-semibold text text-2xl max-w-max pb-3'>Neutrals</h6>
                                    <img className='w-48' src={Frame173} alt={Frame173} />
                                </div>
                                <div className="scroll-animate flex flex-col gap-5">
                                    <h6 className='font-semibold text text-2xl max-w-max pb-3'>Primary</h6>
                                    <img className='w-48' src={Frame176} alt={Frame176} />
                                </div>
                                <div className="slide-in-left flex flex-col gap-5">
                                    <h6 className='font-semibold text text-2xl max-w-max pb-3'>Semantic</h6>
                                    <img className='w-48' src={Frame171} alt={Frame171} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Key Features */}
            <div className="KeyFeatures padTop  border-b-4 border-[#F8E2CB]">
                <div className="container">
                    <div className="main flex flex-col gap-18">
                        <h6 className='scroll-animate font-bold text-[#E89F50] md:text-5xl sm:text-4xl  text-3xl max-w-max pb-3'>Key Features</h6>
                        <div className="scroll-animate screens flex flex-col gap-18 items-center">
                            {
                                KeyFeatures.map((items, index) => {
                                    return (
                                        <img key={index} src={items} alt={`Screen ${index + 1}`} className="w-full" />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* Wireframe Screens */}
            <div className="WireframeScreens padTop  border-b-4 border-[#F8E2CB]">
                <div className="container">
                    <div className="main flex flex-col gap-18">
                        <h6 className='scroll-animate font-bold text-[#E89F50] md:text-5xl sm:text-4xl  text-3xl max-w-max pb-3'>Wireframe Screens</h6>
                        <div className="scroll-animate screens flex flex-col gap-18 items-center">
                            {
                                WireframeScreens.map((items, index) => {
                                    return (
                                        <img key={index} src={items} alt={`Screen ${index + 1}`} className="w-full" />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* //virtual screen */}
            <div className="virtualscreen padTop  border-b-4 border-[#F8E2CB]">
                <div className="container">
                    <div className="main flex flex-col gap-18">
                        <h6 className='scroll-animate font-bold text-[#E89F50] md:text-5xl sm:text-4xl  text-3xl max-w-max pb-3'>Visual Screens</h6>
                        <div className="scroll-animate screens flex flex-col gap-18 items-center">
                            {
                                screen.map((items, index) => {
                                    return (
                                        <img key={index} src={items} alt={`Screen ${index + 1}`} className="w-full" />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* last section */}
            {/* <ThanksTw /> */}
            <Footer/>
        </div>
    )
}

export default Siply

//complete
