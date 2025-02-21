import Header from "../components/Header";
import Footer from "../components/Footer";
import PageLastSec from "../components/PageLastSec";
import { Link } from 'react-router-dom';
import { FaPencilAlt } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import caseONe from "/images/case-studies/Group 1686555501.png"
import caseTwo from "/images/case-studies/Group 1000002763.png"
import caseThree from "../../public/images/case-studies/fitsian.png"
import caseFour from "/images/case-studies/Group 1686555503.png"
import caseFive from "/images/case-studies/siply.png"
import caseSix from "/images/case-studies/860shots_so 1.png"
import caseSev from "/images/case-studies/Group 1686555504.png"
import caseEig from "/images/case-studies/Group 1686555505.png"
import caseNine from "/images/case-studies/Group 1686555506.png"
import caseTen from "/images/case-studies/Group 1686555507.png"
import Calendar from "../components/ClendarModal"
import { Helmet } from "react-helmet-async";

const CaseStudies = () => {
    return (
        <div>

            <Helmet>
                <title> DTK - Case Studies</title>
            </Helmet>
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
                    <div className="main flex flex-col gap-5 relative">
                        <div className="titleCaseSt">
                            <div className="titleCase bg-[#d4d6e5] flex items-center gap-1 justify-center text-2xl text-[#242F65] borderx-2 max-w-max m-auto border-r-2 border-l-2 border-white px-2">
                                <FaPencilAlt className='text-[#DBAC6F] rotate-90' />
                                <h6>Case Studies</h6>
                            </div>
                        </div>
                        <div className="case flex flex-col gap-20">
                            {/* case 1 */}
                            <div style={{
                                backgroundImage:
                                    "url('/images/case-studies/Pattern(1).png'), url('/images/case-studies/Pattern.png')",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "top left, bottom right",
                                backgroundSize: "8.5%, 16.8%",
                            }} className="slide-in-left grid md:grid-cols-2 grid-cols-1 xl:gap-20 gap-5 bg-[#edf0f9] md:px-20 px-5 md:py-0 rounded-3xl">
                                <div className="flex flex-col md:gap-20 gap-10 justify-center py-15">
                                    <div className="content flex flex-col gap-3">
                                        <h5 className='font-bold md:text-4xl sm:text-4xl text-2xl text-2xl'>Glaze App Case Study</h5>
                                        <p className="text text-base leading-snug">Introducing Glaze, the ultimate game-changer in the beauty industry! Brace yourself for a revolutionary all-in-one platform designed to create seamless connections between beauty specialists and their valued clients.</p>
                                    </div>
                                    <Link className='bg-[#827FE1] px-10 py-4 text-[#fff] rounded-lg relative max-w-max flex gap-1 items-center' to="/glaze"><span>Read Case Study</span><FaArrowLeft className='rotate-145' /></Link>
                                </div>
                                <div className="flex md:justify-end justify-center items-center">
                                    <img className='md:w-80 w-96' src={caseONe} alt="" />
                                </div>
                            </div>
                            {/* case 2 */}
                            <div style={{
                                backgroundImage:
                                    "url('/images/case-studies/Pattern(2).png'), url('/images/case-studies/Pattern(sec).png')",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "top left, bottom right",
                                backgroundSize: "9%, 27%",
                            }} className="slide-in-right grid md:grid-cols-2 grid-cols-1 xl:gap-20 gap-5 bg-[#eaeaea] md:px-20 px-5 rounded-3xl">
                                <div className="flex flex-col md:gap-20 gap-10 justify-center py-15">
                                    <div className="content flex flex-col gap-3">
                                        <h5 className='font-bold md:text-4xl sm:text-4xl text-2xl'>OYRQ Case Study</h5>
                                        <p className="text text-base leading-snug">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    </div>
                                    <Link className='bg-[#351C75] px-10 py-4 text-[#fff] rounded-lg relative max-w-max flex gap-1 items-center' to="/oyrq"><span>Read Case Study</span><FaArrowLeft className='rotate-145' /></Link>
                                </div>
                                <div className="flex md:justify-end justify-center items-center">
                                    <img className='md:w-80 md:h-82 h-72' src={caseTwo} alt="" />
                                </div>
                            </div>
                            {/* case 3 */}
                            <div style={{
                                backgroundImage:
                                    "url('/images/case-studies/Pattern(5).png'), url('/images/case-studies/Pattern(6).png')",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "top left, bottom right",
                                backgroundSize: "9%, 27%",
                            }} className="slide-in-left grid md:grid-cols-2 grid-cols-1 xl:gap-20 gap-5 bg-[#abebff] md:px-20 px-5 rounded-3xl">
                                <div className="flex flex-col md:gap-20 gap-10 justify-center py-15">
                                    <div className="content flex flex-col gap-3">
                                        <h5 className='font-bold md:text-4xl sm:text-4xl text-2xl'>Fitsician Case Study</h5>
                                        <p className="text text-base leading-snug">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    </div>
                                    <Link className='bg-[#008080] px-10 py-4 text-[#fff] rounded-lg relative max-w-max flex gap-1 items-center' to="/fitsician"><span>Read Case Study</span><FaArrowLeft className='rotate-145' /></Link>
                                </div>
                                <div className="flex md:justify-end justify-center items-center">
                                    <img className='md:w-full md:h-78 h-62' src={caseThree} alt="" />
                                </div>
                            </div>
                            {/* case 4 */}
                            <div style={{
                                backgroundImage:
                                    "url('/images/case-studies/Pattern(7).png'), url('/images/case-studies/Pattern(8).png')",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "top left, bottom right",
                                backgroundSize: "9%, 29%",
                            }} className="slide-in-right grid md:grid-cols-2 grid-cols-1 xl:gap-20 gap-5 bg-[#fff3e9] md:px-20 px-5 rounded-3xl">
                                <div className="flex flex-col md:gap-20 gap-10 justify-center py-15">
                                    <div className="content flex flex-col gap-3">
                                        <h5 className='font-bold md:text-4xl sm:text-4xl text-2xl'>Thriving Minds Case Study</h5>
                                        <p className="text text-base leading-snug">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    </div>
                                    <Link className='bg-[#3c855a] px-10 py-4 text-[#fff] rounded-lg relative max-w-max flex gap-1 items-center' to="/thriving"><span>Read Case Study</span><FaArrowLeft className='rotate-145' /></Link>
                                </div>
                                <div className="flex md:justify-end justify-center items-center">
                                    <img className='w-88' src={caseFour} alt="" />
                                </div>
                            </div>
                            {/* case 5 */}
                            <div style={{
                                backgroundImage:
                                    "url('/images/case-studies/Pattern(9).png'), url('/images/case-studies/Patternx.png')",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "top left, bottom right",
                                backgroundSize: "9%, 19%",
                            }} className="slide-in-left grid md:grid-cols-2 grid-cols-1 xl:gap-20 gap-5 bg-[#edf0f9] md:px-20 px-5 rounded-3xl">
                                <div className="flex flex-col md:gap-20 gap-10 justify-center py-15">
                                    <div className="content flex flex-col gap-3">
                                        <h5 className='font-bold md:text-4xl sm:text-4xl text-2xl'>Siply App Case Study</h5>
                                        <p className="text text-base leading-snug">Introducing Glaze, the ultimate game-changer in the beauty industry! Brace yourself for a revolutionary all-in-one platform designed to create seamless connections between beauty specialists and their valued clients.</p>
                                    </div>
                                    <Link className='bg-[#eb9539] px-10 py-4 text-[#fff] rounded-lg relative max-w-max flex gap-1 items-center' to="/siply"><span>Read Case Study</span><FaArrowLeft className='rotate-145' /></Link>
                                </div>
                                <div className="flex md:justify-end justify-center items-center">
                                    <img className='md:w-92 md:h-78 h-62' src={caseFive} alt={caseFive} />
                                </div>
                            </div>
                            {/* case 6 */}
                            <div style={{
                                backgroundImage:
                                    "url('/images/case-studies/Pattern(11).png'), url('/images/case-studies/Pattern(12).png')",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "top left, bottom right",
                                backgroundSize: "9%, 25%",
                            }} className="slide-in-right grid md:grid-cols-2 grid-cols-1 xl:gap-20 gap-5 bg-[#eaeaea] md:px-20 px-5 rounded-3xl">
                                <div className="flex flex-col md:gap-20 gap-10 justify-center py-15">
                                    <div className="content flex flex-col gap-3">
                                        <h5 className='font-bold md:text-4xl sm:text-4xl text-2xl'>My Gym Support Case Study</h5>
                                        <p className="text text-base leading-snug">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    </div>
                                    <Link className='bg-[#ff5252] px-10 py-4 text-[#fff] rounded-lg relative max-w-max flex gap-1 items-center' to="/gym-support"><span>Read Case Study</span><FaArrowLeft className='rotate-145' /></Link>
                                </div>
                                <div className="flex md:justify-end justify-center items-center">
                                    <img className='md:w-full md:h-92 h-62' src={caseSix} alt="" />
                                </div>
                            </div>
                            {/* case 7 */}
                            <div style={{
                                backgroundImage:
                                    "url('/images/case-studies/Pattern(19).png'), url('/images/case-studies/Pattern(14).png')",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "top left, bottom right",
                                backgroundSize: "9%, 25%",
                            }} className="slide-in-left grid md:grid-cols-2 grid-cols-1 xl:gap-20 gap-5 bg-[#e2c2d1] md:px-20 px-5 rounded-3xl">
                                <div className="flex flex-col md:gap-20 gap-10 justify-center py-15">
                                    <div className="content flex flex-col gap-3">
                                        <h5 className='font-bold md:text-4xl sm:text-4xl text-2xl'>CAUSEWAY Case Study</h5>
                                        <p className="text text-base leading-snug">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    </div>
                                    <Link className='bg-[#c23235] px-10 py-4 text-[#fff] rounded-lg relative max-w-max flex gap-1 items-center' to="/causeway"><span>Read Case Study</span><FaArrowLeft className='rotate-145' /></Link>
                                </div>
                                <div className="flex md:justify-end justify-center items-center">
                                    <img className='md:w-full md:h-72 h-56' src={caseSev} alt="" />
                                </div>
                            </div>
                            {/* case 8 */}
                            <div style={{
                                backgroundImage:
                                    "url('/images/case-studies/Pattern(15).png'), url('/images/case-studies/Pattern(20).png')",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "top left, bottom right",
                                backgroundSize: "9%, 19%",
                            }} className="slide-in-right grid md:grid-cols-2 grid-cols-1 xl:gap-20 gap-5 bg-[#edf0f9] md:px-20 px-5 rounded-3xl">
                                <div className="flex flex-col md:gap-20 gap-10 justify-center py-15">
                                    <div className="content flex flex-col gap-3">
                                        <h5 className='font-bold md:text-4xl sm:text-4xl text-2xl'>UNITREE APP Case Study</h5>
                                        <p className="text text-base leading-snug">Introducing Glaze, the ultimate game-changer in the beauty industry! Brace yourself for a revolutionary all-in-one platform designed to create seamless connections between beauty specialists and their valued clients.</p>
                                    </div>
                                    <Link className='bg-[#212121] px-10 py-4 text-[#fff] rounded-lg relative max-w-max flex gap-1 items-center' to="/unitree"><span>Read Case Study</span><FaArrowLeft className='rotate-145' /></Link>
                                </div>
                                <div className="flex md:justify-end justify-center items-center">
                                    <img className='w-100' src={caseEig} alt="" />
                                </div>
                            </div>
                            {/* case 9 */}
                            <div style={{
                                backgroundImage:
                                    "url('/images/case-studies/Pattern(17).png'), url('/images/case-studies/Pattern(18).png')",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "top left, bottom right",
                                backgroundSize: "9%, 20.9%",
                            }} className="slide-in-left grid md:grid-cols-2 grid-cols-1 xl:gap-20 gap-5 bg-[#edf0f9] md:px-20 px-5 rounded-3xl">
                                <div className="flex flex-col md:gap-20 gap-10 justify-center py-15">
                                    <div className="content flex flex-col gap-3">
                                        <h5 className='font-bold md:text-4xl sm:text-4xl text-2xl'>Mono Plug App Case Study</h5>
                                        <p className="text text-base leading-snug">Introducing Glaze, the ultimate game-changer in the beauty industry! Brace yourself for a revolutionary all-in-one platform designed to create seamless connections between beauty specialists and their valued clients.</p>
                                    </div>
                                    <Link className='bg-[#18001c] px-10 py-4 text-[#fff] rounded-lg relative max-w-max flex gap-1 items-center' to="/mono-plug"><span>Read Case Study</span><FaArrowLeft className='rotate-145' /></Link>
                                </div>
                                <div className="flex md:justify-end justify-center items-center">
                                    <img className='w-100' src={caseNine} alt="" />
                                </div>
                            </div>
                            {/* case 10 */}
                            <div style={{
                                backgroundImage:
                                    "url('/images/case-studies/Pattern(19).png'), url('/images/case-studies/Pattern(16).png')",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "top left, bottom right",
                                backgroundSize: "9%, 17.2%",
                            }} className="slide-in-right grid md:grid-cols-2 grid-cols-1 xl:gap-20 gap-5 bg-[#edf0f9] md:px-20 px-5 rounded-3xl">
                                <div className="flex flex-col md:gap-20 gap-10 justify-center py-15">
                                    <div className="content flex flex-col gap-3">
                                        <h5 className='font-bold md:text-4xl sm:text-4xl text-2xl'>VEHRK APP Case Study</h5>
                                        <p className="text text-base leading-snug">Introducing Glaze, the ultimate game-changer in the beauty industry! Brace yourself for a revolutionary all-in-one platform designed to create seamless connections between beauty specialists and their valued clients.</p>
                                    </div>
                                    <Link className='bg-[#363434] px-10 py-4 text-[#fff] rounded-lg relative max-w-max flex gap-1 items-center' to="/vherk"><span>Read Case Study</span><FaArrowLeft className='rotate-145' /></Link>
                                </div>
                                <div className="flex md:justify-end justify-center items-center">
                                    <img className='w-full h-full' src={caseTen} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* project  */}
            <div className="project padTop">
                <div className="container">
                    <div className="main md:w-9/12 w-full mx-auto p-8 rounded border text-center border-dashed border-[2px] flex flex-col gap-5">
                        <h1 className="md:text-4xl text-3xl font-bold">Your project here</h1>
                        <p className="md:text-lg text-base">The proof is in our work. Check out our case studies to learn how our product development services can transform your business.</p>
                        <Calendar btnClass="bg-[#FF0066] text-[#fff]" btnText="Book Free Discovery Session"/>
                    </div>
                </div>
            </div>

            {/* last section  */}
            <PageLastSec />

            {/* footer  */}
            <Footer />
        </div>
    )
}

export default CaseStudies
