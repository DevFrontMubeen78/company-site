import Header from "../components/Header";
import Footer from "../components/Footer";
import PageLastSec from "../components/PageLastSec";
import { Link } from 'react-router-dom';
import { FaPencilAlt } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import caseONe from "/images/case-studies/Group 1686555501.png"
import caseTwo from "/images/case-studies/Group 1000002763.png"
import caseThree from "/images/case-studies/ai.png"
import caseFour from "/images/case-studies/Group 1686555503.png"
import caseSix from "/images/case-studies/860shots_so 1.png"
import caseSev from "/images/case-studies/Group 1686555504.png"
import caseEig from "/images/case-studies/Group 1686555505.png"
import caseNine from "/images/case-studies/Group 1686555506.png"
import caseTen from "/images/case-studies/Group 1686555507.png"
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
                            }} className="grid md:grid-cols-2 grid-cols-1 xl:gap-20 gap-5 bg-[#edf0f9] md:px-20 px-15 md:py-0 rounded-3xl">
                                <div className="flex flex-col md:gap-20 gap-10 justify-center py-15">
                                    <div className="content flex flex-col gap-3">
                                        <div className="flex flex-col gap-2">
                                            <h5 className='font-bold xl:text-3xl text-2xl'>Glaze App</h5>
                                            <h6 className='font-bold xl:text-4xl text-3xl'>Case Study UX/UI </h6>
                                        </div>
                                        <p className="text text-base leading-snug">Introducing Glaze, the ultimate game-changer in the beauty industry! Brace yourself for a revolutionary all-in-one platform designed to create seamless connections between beauty specialists and their valued clients.</p>
                                    </div>
                                    <Link className='bg-[#827FE1] px-10 py-4 text-[#fff] rounded-lg relative max-w-max' to="/glaze"><span className='line'>View More</span></Link>
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
                                backgroundSize: "9%, 27%",
                            }} className="grid md:grid-cols-2 grid-cols-1 xl:gap-20 gap-5 bg-[#eaeaea] p-15 rounded-3xl">
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
                                    "url('/images/case-studies/Pattern(5).png'), url('/images/case-studies/Pattern(6).png')",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "top left, bottom right",
                                backgroundSize: "9%, 27%",
                            }} className="grid md:grid-cols-2 grid-cols-1 xl:gap-20 gap-5 bg-[#abebff] px-15 py-5 rounded-3xl">
                                <div className="flex flex-col md:gap-20 gap-10 justify-center py-15">
                                    <div className="content flex flex-col gap-3">
                                        <div className="flex flex-col gap-2">
                                            <h5 className='font-bold xl:text-3xl text-2xl'>Fitsician</h5>
                                            <h6 className='font-bold xl:text-4xl text-3xl'>Case Study UX/UI</h6>
                                        </div>
                                        <p className="text text-base leading-snug">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    </div>
                                    <Link className='bg-[#008080] px-10 py-4 text-[#fff] rounded-lg relative max-w-max flex gap-1 items-center' to="#"><span>Read Case Study</span><FaArrowLeft className='rotate-145' /></Link>
                                </div>
                                <div className="flex justify-end">
                                    <img className='w-full' src={caseThree} alt="" />
                                </div>
                            </div>
                            {/* case 4 */}
                            <div style={{
                                backgroundImage:
                                    "url('/images/case-studies/Pattern(7).png'), url('/images/case-studies/Pattern(8).png')",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "top left, bottom right",
                                backgroundSize: "9%, 29%",
                            }} className="grid md:grid-cols-2 grid-cols-1 xl:gap-20 gap-5 bg-[#fff3e9] px-15 rounded-3xl">
                                <div className="flex flex-col md:gap-20 gap-10 justify-center py-15">
                                    <div className="content flex flex-col gap-3">
                                        <div className="flex flex-col gap-2">
                                            <h5 className='font-bold xl:text-3xl text-2xl'>Thriving Minds</h5>
                                            <h6 className='font-bold xl:text-4xl text-3xl'>Case Study UX/UI</h6>
                                        </div>
                                        <p className="text text-base leading-snug">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    </div>
                                    <Link className='bg-[#3c855a] px-10 py-4 text-[#fff] rounded-lg relative max-w-max flex gap-1 items-center' to="#"><span>Read Case Study</span><FaArrowLeft className='rotate-145' /></Link>
                                </div>
                                <div className="flex justify-end">
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
                            }} className="grid md:grid-cols-2 grid-cols-1 xl:gap-20 gap-5 bg-[#edf0f9] px-15 rounded-3xl">
                                <div className="flex flex-col md:gap-20 gap-10 justify-center py-15">
                                    <div className="content flex flex-col gap-3">
                                        <div className="flex flex-col gap-2">
                                            <h5 className='font-bold xl:text-3xl text-2xl'>Siply App</h5>
                                            <h6 className='font-bold xl:text-4xl text-3xl'>Case Study UX/UI</h6>
                                        </div>
                                        <p className="text text-base leading-snug">Introducing Glaze, the ultimate game-changer in the beauty industry! Brace yourself for a revolutionary all-in-one platform designed to create seamless connections between beauty specialists and their valued clients.</p>
                                    </div>
                                    <Link className='bg-[#eb9539] px-10 py-4 text-[#fff] rounded-lg relative max-w-max flex gap-1 items-center' to="#"><span>Read Case Study</span><FaArrowLeft className='rotate-145' /></Link>
                                </div>
                                <div className="flex justify-end">
                                    <img className='w-full' src={caseThree} alt="" />
                                </div>
                            </div>
                            {/* case 6 */}
                            <div style={{
                                backgroundImage:
                                    "url('/images/case-studies/Pattern(11).png'), url('/images/case-studies/Pattern(12).png')",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "top left, bottom right",
                                backgroundSize: "9%, 25%",
                            }} className="grid md:grid-cols-2 grid-cols-1 xl:gap-20 gap-5 bg-[#eaeaea] px-15 rounded-3xl">
                                <div className="flex flex-col md:gap-20 gap-10 justify-center py-15">
                                    <div className="content flex flex-col gap-3">
                                        <div className="flex flex-col gap-2">
                                            <h5 className='font-bold xl:text-3xl text-2xl'>My Gym Support</h5>
                                            <h6 className='font-bold xl:text-4xl text-3xl'>Case Study UX/UI</h6>
                                        </div>
                                        <p className="text text-base leading-snug">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    </div>
                                    <Link className='bg-[#ff5252] px-10 py-4 text-[#fff] rounded-lg relative max-w-max flex gap-1 items-center' to="#"><span>Read Case Study</span><FaArrowLeft className='rotate-145' /></Link>
                                </div>
                                <div className="flex justify-end">
                                    <img className='w-full' src={caseSix} alt="" />
                                </div>
                            </div>
                            {/* case 7 */}
                            <div style={{
                                backgroundImage:
                                    "url('/images/case-studies/Pattern(19).png'), url('/images/case-studies/Pattern(14).png')",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "top left, bottom right",
                                backgroundSize: "9%, 25%",
                            }} className="grid md:grid-cols-2 grid-cols-1 xl:gap-20 gap-5 bg-[#e2c2d1] p-15 rounded-3xl">
                                <div className="flex flex-col md:gap-20 gap-10 justify-center py-15">
                                    <div className="content flex flex-col gap-3">
                                        <div className="flex flex-col gap-2">
                                            <h5 className='font-bold xl:text-3xl text-2xl'>CAUSEWAY</h5>
                                            <h6 className='font-bold xl:text-4xl text-3xl'>Case Study UX/UI</h6>
                                        </div>
                                        <p className="text text-base leading-snug">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    </div>
                                    <Link className='bg-[#c23235] px-10 py-4 text-[#fff] rounded-lg relative max-w-max flex gap-1 items-center' to="#"><span>Read Case Study</span><FaArrowLeft className='rotate-145' /></Link>
                                </div>
                                <div className="flex justify-end">
                                    <img className='w-full' src={caseSev} alt="" />
                                </div>
                            </div>
                            {/* case 8 */}
                            <div style={{
                                backgroundImage:
                                    "url('/images/case-studies/Pattern(15).png'), url('/images/case-studies/Pattern(20).png')",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "top left, bottom right",
                                backgroundSize: "9%, 19%",
                            }} className="grid md:grid-cols-2 grid-cols-1 xl:gap-20 gap-5 bg-[#edf0f9] p-15 rounded-3xl">
                                <div className="flex flex-col md:gap-20 gap-10 justify-center py-15">
                                    <div className="content flex flex-col gap-3">
                                        <div className="flex flex-col gap-2">
                                            <h5 className='font-bold xl:text-3xl text-2xl'>UNITREE APP</h5>
                                            <h6 className='font-bold xl:text-4xl text-3xl'>Case Study UX/UI</h6>
                                        </div>
                                        <p className="text text-base leading-snug">Introducing Glaze, the ultimate game-changer in the beauty industry! Brace yourself for a revolutionary all-in-one platform designed to create seamless connections between beauty specialists and their valued clients.</p>
                                    </div>
                                    <Link className='bg-[#212121] px-10 py-4 text-[#fff] rounded-lg relative max-w-max flex gap-1 items-center' to="#"><span>Read Case Study</span><FaArrowLeft className='rotate-145' /></Link>
                                </div>
                                <div className="flex justify-end">
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
                            }} className="grid md:grid-cols-2 grid-cols-1 xl:gap-20 gap-5 bg-[#edf0f9] p-15 rounded-3xl">
                                <div className="flex flex-col md:gap-20 gap-10 justify-center py-15">
                                    <div className="content flex flex-col gap-3">
                                        <div className="flex flex-col gap-2">
                                            <h5 className='font-bold xl:text-3xl text-2xl'>Mono Plug App</h5>
                                            <h6 className='font-bold xl:text-4xl text-3xl'>Case Study UX/UI</h6>
                                        </div>
                                        <p className="text text-base leading-snug">Introducing Glaze, the ultimate game-changer in the beauty industry! Brace yourself for a revolutionary all-in-one platform designed to create seamless connections between beauty specialists and their valued clients.</p>
                                    </div>
                                    <Link className='bg-[#18001c] px-10 py-4 text-[#fff] rounded-lg relative max-w-max flex gap-1 items-center' to="#"><span>Read Case Study</span><FaArrowLeft className='rotate-145' /></Link>
                                </div>
                                <div className="flex justify-end">
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
                            }} className="grid md:grid-cols-2 grid-cols-1 xl:gap-20 gap-5 bg-[#edf0f9] px-15 rounded-3xl">
                                <div className="flex flex-col md:gap-20 gap-10 justify-center py-15">
                                    <div className="content flex flex-col gap-3">
                                        <div className="flex flex-col gap-2">
                                            <h5 className='font-bold xl:text-3xl text-2xl'>VEHRK APP</h5>
                                            <h6 className='font-bold xl:text-4xl text-3xl'>Case Study UX/UI</h6>
                                        </div>
                                        <p className="text text-base leading-snug">Introducing Glaze, the ultimate game-changer in the beauty industry! Brace yourself for a revolutionary all-in-one platform designed to create seamless connections between beauty specialists and their valued clients.</p>
                                    </div>
                                    <Link className='bg-[#363434] px-10 py-4 text-[#fff] rounded-lg relative max-w-max flex gap-1 items-center' to="#"><span>Read Case Study</span><FaArrowLeft className='rotate-145' /></Link>
                                </div>
                                <div className="flex justify-end">
                                    <img className='w-full' src={caseTen} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* last section  */}
            <PageLastSec />

            {/* check portfolio */}
            <div className="portfolio flex justify-center items-center">
                <div className="container flex justify-center">
                    <Link className="bg-[#fff] text-[#79BCCF] py-3 uppercase rounded-full px-10 flex justify-center max-w-max" to="#">
                        check our portfolio
                    </Link>
                </div>
            </div>


            {/* footer  */}
            <Footer />
        </div>
    )
}

export default CaseStudies
