import vherk from "../../public/images/vherk/Group 1686555547.png"
import vherkLog from "../../public/images/vherk/vherk-log.png"
import colors from "../../public/images/vherk/Group 1686555593.png"
import font from "../../public/images/vherk/Group 1686555594.png"
import frameone from "../../public/images/vherk/frameone.png"
import frameTwo from "../../public/images/vherk/frameTwo.png"
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet-async";

const projectOver = [
    {
        title: "The Product",
        desc: "Social Connect is an innovative social media platform designed to connect people, facilitate meaningful interactions, and create a positive online community. The app aims to provide users with a seamless and engaging experience, focusing on user privacy, content diversity, and interactive features.",
    },
    {
        title: "The Problem",
        desc: "The main problem faced by our social media app is the inability to sustain high levels of user engagement and retention. Users are signing up, but a significant portion of them are not actively using the app after the initial sign-up period. ",
    },
    {
        title: "The Goal",
        desc: "The goal of your social media app can vary based on your specific objectives, target audience, and the features your app offers. However, here are some common goals that social media apps often aim to achieve.",
    },
    {
        title: "Responsibilities",
        desc: "Conducting interviews, paper and digital wireframing, low and high fidelity prototyping, conducting usability studies, and iterating on design.",
    },
]

const designProcess = [
    {
        img: "/images/vherk/Frame 5619.png",
        title: "Understand",
    },
    {
        img: "/images/vherk/Frame 5620.png",
        title: "Define",
    },
    {
        img: "/images/vherk/Frame 5621.png",
        title: "Ideate",
    },
    {
        img: "/images/vherk/Frame 5622.png",
        title: "Design",
    },
    {
        img: "/images/vherk/Frame 5623.png",
        title: "Test",
    },
]

const typo = [
    {
        heading: "Typography",
        headline: "HEADLINE 1"
    },
    {
        heading: "HEADLINE 1 BOLD",
        headline: "HEADLINE 2"
    },
    {
        heading: "HEADLINE 2 BOLD",
        headline: "HEADLINE 3"
    },
    {
        heading: "HEADLINE 3 BOLD",
        headline: "BODY LARGE"
    },
    {
        heading: "BODY LARGE BOLD",
        headline: "BODY SMALL"
    },
    {
        heading: "BODY SMALL BOLD",
        headline: "BUTTON, CAPTION"
    },
]

const Vherk = () => {
    return (
        <div>
            <Helmet>
                <title> DTK - Unitree</title>
            </Helmet>

            {/* // hero section  */}
            <div className="bg-[#231F20] padTop">
                <div className="container">
                    <div className="flex flex-col gap-14">
                        <Link className='flex items-center gap-5 text-2xl text-[#fff]' to="/case-studies"><IoIosArrowBack /> <span>Back</span></Link>
                        <div className="main grid md:grid-cols-2 gap-20 grid-cols-1">
                            <div className="flex flex-col gap-8">
                                <img src={vherkLog} className='w-46' alt={vherkLog} />
                                <div className="flex flex-col gap-5">
                                    <h6 className='xl:text-5xl text-4xl text-[#fff] font-bold'>Vehrk Case Studies</h6>
                                    <p className="text-lg text-[#fff]">Discover a seamless and delightful shopping experience with our cutting-edge E-commerce app! Unitree brings you the latest trends, unbeatable deals, and a user-friendly interface that makes shopping a breeze. </p>
                                </div>
                            </div>
                            <div className="">
                                <img src={vherk} className='w-full' alt={vherk} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* // project overview */}
            <div className="ProjectOverview padTop">
                <div className="container">
                    <div className="main flex flex-col gap-20">
                        <div style={{
                            backgroundImage:
                                "url('/images/vherk/01.png')",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "bottom left",
                            backgroundSize: "contain",
                            width: "100%",
                            height: "70px"
                        }} className="titleOverView flex items-center">
                            <h6 className="text-[#C31A20] md:text-5xl sm:text-4xl text-3xl font-bold ml-15">Project Overview</h6>
                        </div>
                        <div className="detail flex flex-col gap-10">
                            {
                                projectOver.map((items, index) => {
                                    return (
                                        <div key={index} className="flex flex-col gap-5">
                                            <h6 className='md:text-3xl text-2xl text-[#C31A20] font-bold'>{items.title}</h6>
                                            <p className="text-lg text-[#000000]">{items.desc}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* // Target Audience */}
            <div className="target padTop">
                <div className="container">
                    <div className="main flex flex-col gap-20">
                        <div style={{
                            backgroundImage:
                                "url('/images/vherk/02.png')",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "bottom left",
                            backgroundSize: "contain",
                            width: "100%",
                            height: "70px"
                        }} className="titleOverView flex items-center">
                            <h6 className="text-[#C31A20] md:text-5xl sm:text-4xl text-3xl font-bold ml-15">Target Audience</h6>
                        </div>
                        <div className="audience border border-[#b1b5ba] bg-[#e4e6ea] p-10 rounded-2xl relative">
                            <p className="text-lg text-[#000000]">Age Group: Depending on your app's content and functionality, you might target a specific age group. For instance, if your app is focused on senior citizens, your target audience might be aged 50 and above. If it's a platform for teenagers, you'd aim for users between 13-19.
                                Gender: Your app may cater more to a particular gender, and you can tailor your marketing strategies accordingly. However, keep in mind that it's important to be inclusive and not exclude potential users based on gender.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* // Design Process */}
            <div className="designProcess padTop">
                <div className="container">
                    <div className="main flex flex-col gap-20">
                        <div style={{
                            backgroundImage:
                                "url('/images/vherk/03.png')",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "bottom left",
                            backgroundSize: "contain",
                            width: "100%",
                            height: "70px"
                        }} className="titleOverView flex items-center">
                            <h6 className="text-[#C31A20] md:text-5xl sm:text-4xl text-3xl font-bold ml-15">Design Process</h6>
                        </div>
                        <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 md:gap-30 gap-10">
                            {
                                designProcess.map((items, index) => {
                                    return (
                                        <div key={index} className=" flex flex-col gap-10 items-center text-center">
                                            <img className='w-32' src={items.img} alt="" />
                                            <div className="flex flex-col gap-4">
                                                <h6 className="text-2xl font-bold text-[#000]">{items.title}</h6>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* // Style Guide */}
            <div className="StyleGuide padTop">
                <div className="container">
                    <div className="main flex flex-col gap-20">
                        <div style={{
                            backgroundImage:
                                "url('/images/vherk/04.png')",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "bottom left",
                            backgroundSize: "contain",
                            width: "100%",
                            height: "70px"
                        }} className="titleOverView flex items-center">
                            <h6 className="text-[#C31A20] md:text-5xl sm:text-4xl text-3xl font-bold ml-15">Style Guide</h6>
                        </div>
                        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-30 gap-15">
                            <div className="">
                                <img className='w-full' src={colors} alt={colors} />
                            </div>
                            <div className="">
                                {
                                    typo.map((items, index) => {
                                        return (
                                            <div key={index} className="flex flex-col gap-3">
                                                <h6 className="md:text-4xl text-3xl font-semibold text-[#000]">{items.heading}</h6>
                                                <h6 className="md:text-3xl text-2xl text">{items.headline}</h6>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="">
                                <img className='w-56' src={font} alt={font} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* // Wireframe Design*/}
            <div className="WireframeDesign padTop">
                <div className="container">
                    <div className="main flex flex-col gap-20">
                        <div style={{
                            backgroundImage:
                                "url('/images/vherk/05.png')",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "bottom left",
                            backgroundSize: "contain",
                            width: "100%",
                            height: "70px"
                        }} className="titleOverView flex flex-col gap-20">
                            <h6 className="text-[#C31A20] md:text-5xl sm:text-4xl text-3xl font-bold ml-15 mt-4">Wireframe Design</h6>
                        </div>
                        <img className='w-full' src={frameone} alt={frameone} />
                    </div>
                </div>
            </div>

            {/* // Design*/}
            <div className="Design padTop">
                <div className="container">
                    <div className="main flex flex-col gap-20">
                        <div style={{
                            backgroundImage:
                                "url('/images/vherk/06.png')",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "bottom left",
                            backgroundSize: "contain",
                            width: "100%",
                            height: "70px"
                        }} className="titleOverView flex flex-col gap-20">
                            <h6 className="text-[#C31A20] md:text-5xl sm:text-4xl text-3xl font-bold ml-15 mt-4">Design</h6>
                        </div>
                        <img className='w-full' src={frameTwo} alt={frameTwo} />
                    </div>
                </div>
            </div>

            {/* // Presentation*/}
            <div className="Presentation bg-[#231F20] padTop">
                <div className="container">
                    <div className="main flex flex-col gap-20">
                        <div style={{
                            backgroundImage:
                                "url('/images/vherk/06.png')",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "bottom left",
                            backgroundSize: "contain",
                            width: "100%",
                            height: "70px"
                        }} className="titleOverView flex flex-col gap-20">
                            <h6 className="text-[#fff] md:text-5xl sm:text-4xl text-3xl font-bold ml-15 mt-4">Presentation</h6>
                        </div>
                        {
                            ["/images/vherk/vherk.png", "/images/vherk/Group 1686555595.png"].map((items, index) => {
                                return (
                                    <img key={index} className='w-full' src={items} alt={items} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            {/* // footer*/}
            <div style={{
                backgroundImage:
                    "url('/images/vherk/Group 1597884385.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom left",
                backgroundSize: "contain",
                width: "100%",
                height: "100%"
            }} className="Presentation bg-[#231F20] padTop border-t-3 border-[#bfbfbf]">
                <div className="flex flex-col gap-10">
                    <div className="flex gap-5 items-center md:ml-35 ml-20"><img className='md:w-14 w-10' src="/images/vherk/Group 1686555596.png" alt="" /><p className="text-lg text-[#fff]">Client Requirement</p></div>
                    <div className="flex gap-5 items-center md:ml-55 ml-40"><img className='md:w-14 w-10' src="/images/vherk/Group 1686555597.png" alt="" /><p className="text-lg text-[#fff]">Solution we Offer</p></div>
                    <div className="flex gap-5 items-center md:ml-75 ml-60"><img className='md:w-14 w-10' src="/images/vherk/Group 1686555598.png" alt="" /><p className="text-lg text-[#fff]">Outcome</p></div>
                </div>
            </div>
        </div>
    )
}

export default Vherk
