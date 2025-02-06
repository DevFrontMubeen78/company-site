import React from 'react'
import Header from "../components/Header";
import { Link } from 'react-router-dom';
import { FaPencilAlt } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
// import caseONe from "../../public/images/case-studies/iPhone 13 Pro.png"
import caseONe from "/images/case-studies/Group 1686555501.png"
import caseTwo from "/images/case-studies/Group 1000002763.png"

const CaseStudies = () => {
    return (
        <div>
            <Header />

            {/* case studies hero */}
            <div
                style={{
                    backgroundImage:
                        "url('/images/case-studies/fintech-software-development-company-bg-scaled.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
                className="hero padTop"
            >
                <div className="container">
                    <div className="main">
                        <div className="content text-center flex flex-col gap-3">
                            <h1 className="md:text-5xl sm:text-4xl text-2xl font-bold uppercase leading-snug text-[#fff]">
                                Our  <span className="text-[#FF0066]"> Work</span></h1>
                            <p className="md:text-lg text-base leading-normal text-center  heading_content text-[#fff]">
                                Bring your dream project to life with DTechKrew smart home solution development services. We have experience building all kinds of software: switch controls, door contacts, motion & light sensors, intelligent thermostats, security cameras, smart locks, and more. Let’s team up now!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* case studies */}

            <div className="case py-5">
                <div className="container">
                    <div className="main flex flex-col gap-5">
                        <div className="title flex items-center gap-1 justify-center text-2xl text-[#242F65]">
                            <FaPencilAlt className='text-[#DBAC6F] rotate-90' />
                            <h6>Case Studies</h6>
                        </div>

                        <div className="case flex flex-col gap-20">
                            {/* case 1 */}
                            <div style={{
                                backgroundImage:
                                    "url('/images/case-studies/Pattern(1).png'), url('/images/case-studies/Pattern.png')",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "top left, bottom right",
                                backgroundSize: "8%, 17%",
                            }} className="grid md:grid-cols-2 grid-cols-1 xl:gap-20 gap-5 bg-[#fff] md:px-20 px-15 md:py-0 rounded-3xl">
                                <div className="flex flex-col md:gap-20 gap-10 justify-center py-15">
                                    <div className="content flex flex-col gap-3">
                                        <div className="flex flex-col gap-2">
                                            <h5 className='font-bold xl:text-3xl text-2xl'>Glaze App</h5>
                                            <h6 className='font-bold xl:text-4xl text-3xl'>Case Study UX/UI </h6>
                                        </div>
                                        <p className="text text-base leading-snug">Introducing Glaze, the ultimate game-changer in the beauty industry! Brace yourself for a revolutionary all-in-one platform designed to create seamless connections between beauty specialists and their valued clients.</p>
                                    </div>
                                    <Link className='bg-[#827FE1] px-10 py-4 text-[#fff] rounded-lg relative max-w-max' to="#"><span className='line'>View More</span></Link>
                                </div>
                                <div className="flex justify-end">
                                    <img className='xl:w-80 w-96' src={caseONe} alt="" />
                                </div>
                            </div>
                            {/* case 2 */}
                            <div style={{
                                backgroundImage:
                                    "url('/images/case-studies/Pattern(2).png'), url('/images/case-studies/Pattern(sec).png')",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "top left, bottom right",
                                backgroundSize: "8%, 23.5%",
                            }} className="grid md:grid-cols-2 grid-cols-1 xl:gap-20 gap-5 bg-[#fff] p-15 rounded-3xl">
                                <div className="flex flex-col md:gap-20 gap-10 justify-center py-15">
                                    <div className="content flex flex-col gap-3">
                                        <div className="flex flex-col gap-2">
                                            <h5 className='font-bold xl:text-3xl text-2xl'>OYRQ</h5>
                                            <h6 className='font-bold xl:text-4xl text-3xl'>Case Study UX/UI</h6>
                                        </div>
                                        <p className="text text-base leading-snug">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    </div>
                                    <Link className='bg-[#351C75] px-10 py-4 text-[#fff] rounded-lg relative max-w-max flex gap-1 items-center' to="#"><span>Read Case Study</span><FaArrowLeft className='rotate-145' /></Link>
                                </div>
                                <div className="flex justify-end">
                                    <img className='w-96' src={caseTwo} alt="" />
                                </div>
                            </div>
                            {/* case 3 */}
                            <div style={{
                                backgroundImage:
                                    "url('/images/case-studies/Pattern(1).png'), url('/images/case-studies/Pattern.png')",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "top left, bottom right",
                                backgroundSize: "8%, 17%",
                            }} className="grid md:grid-cols-2 grid-cols-1 xl:gap-20 gap-5 bg-[#fff] md:px-20 px-15 md:py-0 rounded-3xl">
                                <div className="flex flex-col md:gap-20 gap-10 justify-center py-15">
                                    <div className="content flex flex-col gap-3">
                                        <div className="flex flex-col gap-2">
                                            <h5 className='font-bold xl:text-3xl text-2xl'>Glaze App</h5>
                                            <h6 className='font-bold xl:text-4xl text-3xl'>Case Study UX/UI </h6>
                                        </div>
                                        <p className="text text-base leading-snug">Introducing Glaze, the ultimate game-changer in the beauty industry! Brace yourself for a revolutionary all-in-one platform designed to create seamless connections between beauty specialists and their valued clients.</p>
                                    </div>
                                    <Link className='bg-[#827FE1] px-10 py-4 text-[#fff] rounded-lg relative max-w-max flex gap-1 items-center' to="#"><span>Read Case Study</span><FaArrowLeft className='rotate-145' /></Link>
                                </div>
                                <div className="flex justify-end">
                                    <img className='xl:w-80 w-96' src={caseONe} alt="" />
                                </div>
                            </div>
                            {/* case 4 */}
                            <div style={{
                                backgroundImage:
                                    "url('/images/case-studies/Pattern(1).png'), url('/images/case-studies/Pattern.png')",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "top left, bottom right",
                                backgroundSize: "8%, 17%",
                            }} className="grid md:grid-cols-2 grid-cols-1 xl:gap-20 gap-5 bg-[#fff] md:px-20 px-15 md:py-0 rounded-3xl">
                                <div className="flex flex-col md:gap-20 gap-10 justify-center py-15">
                                    <div className="content flex flex-col gap-3">
                                        <div className="flex flex-col gap-2">
                                            <h5 className='font-bold xl:text-3xl text-2xl'>Glaze App</h5>
                                            <h6 className='font-bold xl:text-4xl text-3xl'>Case Study UX/UI </h6>
                                        </div>
                                        <p className="text text-base leading-snug">Introducing Glaze, the ultimate game-changer in the beauty industry! Brace yourself for a revolutionary all-in-one platform designed to create seamless connections between beauty specialists and their valued clients.</p>
                                    </div>
                                    <Link className='bg-[#827FE1] px-10 py-4 text-[#fff] rounded-lg relative max-w-max flex gap-1 items-center' to="#"><span>Read Case Study</span><FaArrowLeft className='rotate-145' /></Link>
                                </div>
                                <div className="flex justify-end">
                                    <img className='xl:w-80 w-96' src={caseONe} alt="" />
                                </div>
                            </div>
                            {/* case 5 */}
                            <div style={{
                                backgroundImage:
                                    "url('/images/case-studies/Pattern(1).png'), url('/images/case-studies/Pattern.png')",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "top left, bottom right",
                                backgroundSize: "8%, 17%",
                            }} className="grid md:grid-cols-2 grid-cols-1 xl:gap-20 gap-5 bg-[#fff] md:px-20 px-15 md:py-0 rounded-3xl">
                                <div className="flex flex-col md:gap-20 gap-10 justify-center py-15">
                                    <div className="content flex flex-col gap-3">
                                        <div className="flex flex-col gap-2">
                                            <h5 className='font-bold xl:text-3xl text-2xl'>Glaze App</h5>
                                            <h6 className='font-bold xl:text-4xl text-3xl'>Case Study UX/UI </h6>
                                        </div>
                                        <p className="text text-base leading-snug">Introducing Glaze, the ultimate game-changer in the beauty industry! Brace yourself for a revolutionary all-in-one platform designed to create seamless connections between beauty specialists and their valued clients.</p>
                                    </div>
                                    <Link className='bg-[#827FE1] px-10 py-4 text-[#fff] rounded-lg relative max-w-max flex gap-1 items-center' to="#"><span>Read Case Study</span><FaArrowLeft className='rotate-145' /></Link>
                                </div>
                                <div className="flex justify-end">
                                    <img className='xl:w-80 w-96' src={caseONe} alt="" />
                                </div>
                            </div>
                            {/* case 6 */}
                            <div style={{
                                backgroundImage:
                                    "url('/images/case-studies/Pattern(1).png'), url('/images/case-studies/Pattern.png')",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "top left, bottom right",
                                backgroundSize: "8%, 17%",
                            }} className="grid md:grid-cols-2 grid-cols-1 xl:gap-20 gap-5 bg-[#fff] md:px-20 px-15 md:py-0 rounded-3xl">
                                <div className="flex flex-col md:gap-20 gap-10 justify-center py-15">
                                    <div className="content flex flex-col gap-3">
                                        <div className="flex flex-col gap-2">
                                            <h5 className='font-bold xl:text-3xl text-2xl'>Glaze App</h5>
                                            <h6 className='font-bold xl:text-4xl text-3xl'>Case Study UX/UI </h6>
                                        </div>
                                        <p className="text text-base leading-snug">Introducing Glaze, the ultimate game-changer in the beauty industry! Brace yourself for a revolutionary all-in-one platform designed to create seamless connections between beauty specialists and their valued clients.</p>
                                    </div>
                                    <Link className='bg-[#827FE1] px-10 py-4 text-[#fff] rounded-lg relative max-w-max flex gap-1 items-center' to="#"><span>Read Case Study</span><FaArrowLeft className='rotate-145' /></Link>
                                </div>
                                <div className="flex justify-end">
                                    <img className='xl:w-80 w-96' src={caseONe} alt="" />
                                </div>
                            </div>
                            {/* case 7 */}
                            <div style={{
                                backgroundImage:
                                    "url('/images/case-studies/Pattern(1).png'), url('/images/case-studies/Pattern.png')",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "top left, bottom right",
                                backgroundSize: "8%, 17%",
                            }} className="grid md:grid-cols-2 grid-cols-1 xl:gap-20 gap-5 bg-[#fff] md:px-20 px-15 md:py-0 rounded-3xl">
                                <div className="flex flex-col md:gap-20 gap-10 justify-center py-15">
                                    <div className="content flex flex-col gap-3">
                                        <div className="flex flex-col gap-2">
                                            <h5 className='font-bold xl:text-3xl text-2xl'>Glaze App</h5>
                                            <h6 className='font-bold xl:text-4xl text-3xl'>Case Study UX/UI </h6>
                                        </div>
                                        <p className="text text-base leading-snug">Introducing Glaze, the ultimate game-changer in the beauty industry! Brace yourself for a revolutionary all-in-one platform designed to create seamless connections between beauty specialists and their valued clients.</p>
                                    </div>
                                    <Link className='bg-[#827FE1] px-10 py-4 text-[#fff] rounded-lg relative max-w-max flex gap-1 items-center' to="#"><span>Read Case Study</span><FaArrowLeft className='rotate-145' /></Link>
                                </div>
                                <div className="flex justify-end">
                                    <img className='xl:w-80 w-96' src={caseONe} alt="" />
                                </div>
                            </div>
                            {/* case 8 */}
                            <div style={{
                                backgroundImage:
                                    "url('/images/case-studies/Pattern(1).png'), url('/images/case-studies/Pattern.png')",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "top left, bottom right",
                                backgroundSize: "8%, 17%",
                            }} className="grid md:grid-cols-2 grid-cols-1 xl:gap-20 gap-5 bg-[#fff] md:px-20 px-15 md:py-0 rounded-3xl">
                                <div className="flex flex-col md:gap-20 gap-10 justify-center py-15">
                                    <div className="content flex flex-col gap-3">
                                        <div className="flex flex-col gap-2">
                                            <h5 className='font-bold xl:text-3xl text-2xl'>Glaze App</h5>
                                            <h6 className='font-bold xl:text-4xl text-3xl'>Case Study UX/UI </h6>
                                        </div>
                                        <p className="text text-base leading-snug">Introducing Glaze, the ultimate game-changer in the beauty industry! Brace yourself for a revolutionary all-in-one platform designed to create seamless connections between beauty specialists and their valued clients.</p>
                                    </div>
                                    <Link className='bg-[#827FE1] px-10 py-4 text-[#fff] rounded-lg relative max-w-max flex gap-1 items-center' to="#"><span>Read Case Study</span><FaArrowLeft className='rotate-145' /></Link>
                                </div>
                                <div className="flex justify-end">
                                    <img className='xl:w-80 w-96' src={caseONe} alt="" />
                                </div>
                            </div>
                            {/* case 9 */}
                            <div style={{
                                backgroundImage:
                                    "url('/images/case-studies/Pattern(1).png'), url('/images/case-studies/Pattern.png')",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "top left, bottom right",
                                backgroundSize: "8%, 17%",
                            }} className="grid md:grid-cols-2 grid-cols-1 xl:gap-20 gap-5 bg-[#fff] md:px-20 px-15 md:py-0 rounded-3xl">
                                <div className="flex flex-col md:gap-20 gap-10 justify-center py-15">
                                    <div className="content flex flex-col gap-3">
                                        <div className="flex flex-col gap-2">
                                            <h5 className='font-bold xl:text-3xl text-2xl'>Glaze App</h5>
                                            <h6 className='font-bold xl:text-4xl text-3xl'>Case Study UX/UI </h6>
                                        </div>
                                        <p className="text text-base leading-snug">Introducing Glaze, the ultimate game-changer in the beauty industry! Brace yourself for a revolutionary all-in-one platform designed to create seamless connections between beauty specialists and their valued clients.</p>
                                    </div>
                                    <Link className='bg-[#827FE1] px-10 py-4 text-[#fff] rounded-lg relative max-w-max flex gap-1 items-center' to="#"><span>Read Case Study</span><FaArrowLeft className='rotate-145' /></Link>
                                </div>
                                <div className="flex justify-end">
                                    <img className='xl:w-80 w-96' src={caseONe} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaseStudies
