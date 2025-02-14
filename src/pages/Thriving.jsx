import causeway from "../../public/images/unitree/Group 1686555559.png"
import mobiless from "../../public/images/thriving/mobileBG.png"
import LogosOv from "../../public/images/thriving/LogosOv.png"
import ddesign from "../../public/images/thriving/ddesign.png"
import thrivieng from "../../public/images/thriving/thrivieng-img.png"
import UserPersona from "../../public/images/thriving/User Persona.png"
import userFlow from "../../public/images/thriving/Group 1646.png"
import Iconography from "../../public/images/thriving/Group 1686555567.png"
import thrivLogo from "../../public/images/thriving/thrivin_logoo.png"
import colorCode from "../../public/images/thriving/Frame 2.png"
import homeScreen from "../../public/images/thriving/Group 1686555519.png"
import workout from "../../public/images/thriving/Group 1686555520.png"
import MyRole from "../components/MyRole"
import { IoIosPhonePortrait } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet-async";

const designProcess = [
    {
        img: "/images/fitsician/Group 1686555424.png",
        title: "Understand",
    },
    {
        img: "/images/fitsician/Group 1686555427.png",
        title: "Define",
    },
    {
        img: "/images/fitsician/Group 1686555428.png",
        title: "Ideate",
    },
    {
        img: "/images/fitsician/Group 1686555429.png",
        title: "Design",
    },
    {
        img: "/images/fitsician/Group 1686555430.png",
        title: "Test",
    },
]

const Thriving = () => {
    return (
        <div className="bg-[#0b0b0b]">
            <Helmet>
                <title> DTK - Thriving Minds</title>
            </Helmet>

            {/* // hero section  */}
            <div style={{
                backgroundImage: `
        url('/images/thriving/mobileBG.png'), 
        url('/images/thriving/BG.png')`,
                backgroundRepeat: "no-repeat, no-repeat",
                backgroundPosition: "bottom right, bottom center",
                backgroundSize: "43% auto, cover",
            }}

                className="oyrq md:py-[50px] pt-[50px] border-b-1 border-[#595959]">
                <div className="container">
                    <div className="flex flex-col gap-14">
                        <Link className='flex items-center gap-5 text-2xl text-[#fff]' to="/case-studies"><IoIosArrowBack /> <span>Back</span></Link>
                        <div className="main">
                            <div className="flex flex-col gap-8">
                                <div className="flex flex-col gap-5">
                                    <h6 className='xl:text-5xl text-4xl text-[#fff] font-bold'>Thriving <span className="text-[#3C855A]">Minds</span></h6>
                                    <p className="text-lg text-[#fff] md:w-6/12">Introducing MentorMind, your personalized digital mentor designed to accompany you on your journey of self-improvement and personal growth. With its intuitive hologram interface and advanced conversational AI, MentorMind serves as a supportive companion, providing guidance, encouragement, and insights tailored to your individual needs.</p>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <p className="text-base text-[#fff]">Tools used</p>
                                    <div className="tools flex gap-5">
                                        {
                                            [
                                                "/images/thriving/Icon.png",
                                                "/images/thriving/Google_Sheets_Logo 1.png",
                                                "/images/thriving/Group.png"
                                            ].map((items, index) => {
                                                return (
                                                    <img key={index} className="w-14" src={items} alt={items} />
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <p className="text-base text-[#fff]">Role</p>
                                    <Link className="bg-[#3C855A] text-[#fff] py-4 rounded max-w-max rounded px-12 font-bold" to="#">UI/UX Designer</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <img src={mobiless} className='w-full md:hidden' alt={mobiless} />
                </div>
            </div>

            {/* // Role */}
            <div className="Role padTop">
                <div className="container">
                    <div className="main flex flex-col gap-18">
                        <div className="flex flex-col gap-5">
                            <h6 className='font-bold text-[#fff] text-4xl max-w-max pb-3'>My <span className="text-[#3C855A]">Role</span></h6>
                            <p className='text-lg text-[#fff]'>As a UI/UX designer, I make sure that my designs are well received by users, and can be implemented by developers.</p>
                        </div>
                        <MyRole />
                    </div>
                </div>
            </div>

            {/* // INTRODUCTION  */}
            <div
                style={{
                    backgroundImage: "url('/images/thriving/overBG.png')",
                    backgroundRepeat: "no-repeat, no-repeat",
                    backgroundPosition: "bottom right, bottom center",
                    backgroundSize: "43% auto, cover",
                }} className="introduction padTop">
                <div className="container">
                    <div className="main flex flex-col gap-20">
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-20">
                            <div className="flex flex-col gap-10">
                                <h1 className="text-5xl text-[#fff] font-bold">Over <span className="text-[#3C855A]">view</span></h1>
                                <div>
                                    <h6 className='font-bold text-[#fff] text-3xl max-w-max pb-3'>About The Project</h6>
                                    <p className="text-base text-[#fff]">The project aims to create an innovative digital mentor application called MentorMind, providing users with personalized support and guidance for their personal growth journey. Leveraging advanced AI technology, MentorMind offers a unique holographic interface for engaging conversations, voice activation for seamless interaction, and insightful summaries of conversations for reflection and progress tracking.</p>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <p className="text-base text-[#fff]">Platform</p>
                                    <Link className="bg-[#3C855A] text-[#fff] py-2 rounded max-w-max rounded px-8 font-bold flex gap-3 items-center" to="#"><IoIosPhonePortrait className="text-lg" /> Mobile</Link>
                                </div>
                            </div>
                            <div className="flex md:justify-end justify-center">
                                <img className="w-9/12" src={LogosOv} alt={LogosOv} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* // design Process  */}
            <div className="designProcess padTop border-b-1 border-[#595959]">
                <div className="container">
                    <div className="main flex flex-col gap-18">
                        <h1 className="text-5xl text-[#fff] font-bold">Design <span className="text-[#3C855A]">Process</span></h1>
                        <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 md:gap-30 gap-10">
                            {
                                designProcess.map((items, index) => {
                                    return (
                                        <div key={index} className=" flex flex-col gap-10 items-center text-center">
                                            <img className='w-32' src={items.img} alt="" />
                                            <div className="flex flex-col gap-4">
                                                <h6 className="text-2xl font-bold text-[#fff]">{items.title}</h6>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* // Design Timeline  */}
            <div className="designProcess padTop">
                <div className="container">
                    <div className="main flex flex-col gap-18">
                        <h1 className="text-5xl text-[#fff] font-bold">Design  <span className="text-[#3C855A]">Timeline</span></h1>
                        <img className='w-full' src={ddesign} alt={ddesign} />
                    </div>
                </div>
            </div>

            {/* //paint points */}
            <div style={{
                backgroundImage: "url('/images/thriving/thrivieng-img.png')",
                backgroundRepeat: "no-repeat, no-repeat",
                backgroundPosition: "bottom right",
                backgroundSize: "43% auto, cover",
            }} className="paintPoints md:py-[50px] pt-[50px] flex flex-col gap-20">
                <div className="container">
                    <div className="main grid md:grid-cols-2 grid-cols-1">
                        <div className=" text-[#fff] flex flex-col gap-10 relative">
                            <h1 className="text-5xl text-[#fff] font-bold">Paint  <span className="text-[#3C855A]">points</span></h1>
                            <div className="flex flex-col gap-5">
                                <div className=' flex flex-col gap-2'>
                                    <h6 className='text-lg text-[#fff] font-bold'>Complexity <span className="text-[#3C855A]">of Work</span></h6>
                                    <p className="text-[#fff] text-lg">Creating MentorMind entails integrating advanced AI for a holographic interface, voice activation, and summarization, along with </p>
                                </div>
                                <div className=' flex flex-col gap-2'>
                                    <h6 className='text-lg text-[#fff] font-bold'>Acces<span className="text-[#3C855A]">sibility</span></h6>
                                    <p className="text-[#fff] text-lg">LMentorMind prioritizes accessibility through voice activation, enabling users to engage conveniently and inclusively with their digital mentor.</p>
                                </div>
                                <div className=' flex flex-col gap-2'>
                                    <h6 className='text-lg text-[#fff] font-bold'>Future <span className="text-[#3C855A]">Performance</span></h6>
                                    <p className="text-[#fff] text-lg">MentorMind aims for continuous improvement, adapting to user needs and evolving with advances in AI technology for sustained effectiveness </p>
                                </div>
                                <div className=' flex flex-col gap-2'>
                                    <h6 className='text-lg text-[#fff] font-bold'>Service <span className="text-[#3C855A]">Quality</span></h6>
                                    <p className="text-[#fff] text-lg">MentorMind ensures exceptional service quality through empathetic interaction, personalized recommendations, and robust privacy measures, fostering a supportive and trustworthy user experience.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="img">
                    <img className='w-full md:hidden block' src={thrivieng} alt={thrivieng} />
                </div>
            </div>

            {/* //User Persona */}
            <div className="UserPersona md:py-[50px] pt-[50px] flex flex-col gap-20">
                <div className="container">
                    <div className="main flex flex-col gap-20">
                        <div className=" text-[#fff] flex flex-col gap-10">
                            <h1 className="text-5xl text-[#fff] font-bold">User <span className="text-[#3C855A]">Personas</span></h1>
                            <p className="text-[#fff] text-lg w-9/12">User personas are fictional characters created to represent different segments of a product or service's target audience. They help teams understand and empathize with their users, guiding design, development, and marketing decisions.</p>
                        </div>
                        <img className='w-full' src={UserPersona} alt={UserPersona} />
                    </div>
                </div>
            </div>

            {/* //User flow */}
            <div style={{
                backgroundImage: "url('/images/thriving/userflobg.png')",
                backgroundRepeat: "no-repeat, no-repeat",
                backgroundPosition: "bottom right",
                backgroundSize: "cover",
            }} className="UserPersona md:py-[50px] pt-[50px] flex flex-col gap-20">
                <div className="container">
                    <div className="main flex flex-col gap-20">
                        <div className=" text-[#fff] flex flex-col gap-10">
                            <h1 className="text-5xl text-[#fff] font-bold">User <span className="text-[#3C855A]">Flow</span></h1>
                            <p className="text-[#fff] text-lg w-6/12">Users engage holographic interface, converse via voice, receive summaries, access journal integration, and receive personalized recommendations, ensuring seamless, personalized, and impactful mentorship experience.</p>
                        </div>
                        <img className='w-full' src={userFlow} alt={userFlow} />
                    </div>
                </div>
            </div>

            {/* //Typography */}
            <div className="UserPersona padTop">
                <div className="container">
                    <div className="main flex flex-col gap-10">
                        <h1 className="text-5xl text-[#fff] font-bold">Typog<span className="text-[#3C855A]">raphy</span></h1>
                        <div className="bg-[#1A1A1E]  p-8 rounded flex flex-col gap-20">
                            <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-4xl text-[#fff] font-bold">Typography</h1>
                                    <p className="text-[#fff] text-lg">Version 1.0</p>
                                </div>
                                <h1 className="text-2xl text-[#fff] font-bold text-end">Thriving Minds App</h1>
                            </div>
                            <div className="grid md:grid-cols-2 grid-cols-1">
                                <div className="flex flex-col gap-3">
                                    <h1 className="text-4xl text-[#fff] font-bold">Poppins</h1>
                                    <div className="flex gap-10">
                                        <p className="text-[#fff] text-lg font-bold">Bold</p>
                                        <p className="text-[#fff] text-lg font-semibold">Semi Bold</p>
                                        <p className="text-[#fff] text-lg">Regular</p>
                                    </div>
                                </div>
                                <h1 className="text-8xl text-[#fff] font-bold text-end">Aa</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* //Iconography */}
            <div className="UserPersona padTop">
                <div className="container">
                    <div className="main flex flex-col gap-20">
                        <div className="flex flex-col gap-10">
                            <h1 className="text-5xl text-[#fff] font-bold">Icono<span className="text-[#3C855A]">graphy</span></h1>
                            <div className="bg-[#1A1A1E]  p-8 rounded">
                                <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
                                    <div className="flex flex-col gap-2">
                                        <h1 className="text-4xl text-[#fff] font-bold">Iconography</h1>
                                        <p className="text-[#fff] text-lg">Version 1.0</p>
                                    </div>
                                    <h1 className="text-2xl text-[#fff] font-bold text-end">Thriving Minds App</h1>
                                </div>
                            </div>
                        </div>
                        <img className='w-full' src={Iconography} alt={Iconography} />
                    </div>
                </div>
            </div>

            {/* //logo */}
            <div className="UserPersona padTop">
                <div className="container">
                    <div className="main flex flex-col gap-20">
                        <div className="flex flex-col gap-10">
                            <h1 className="text-5xl text-[#fff] font-bold">Lo<span className="text-[#3C855A]">go</span></h1>
                            <div className="bg-[#1A1A1E]  p-8 rounded">
                                <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
                                    <div className="flex flex-col gap-2">
                                        <h1 className="text-4xl text-[#fff] font-bold">Logo</h1>
                                        <p className="text-[#fff] text-lg">Version 1.0</p>
                                    </div>
                                    <h1 className="text-2xl text-[#fff] font-bold text-end">Thriving Minds App</h1>
                                </div>
                            </div>
                        </div>
                        <div className="flex md:gap-40 gap-20">
                            <img className='md:w-72 w-36' src={thrivLogo} alt={thrivLogo} />
                            <img className='md:w-72 w-36' src={thrivLogo} alt={thrivLogo} />
                        </div>
                    </div>
                </div>
            </div>

            {/* //Colors */}
            <div className="UserPersona padTop">
                <div className="container">
                    <div className="main flex flex-col gap-20">
                        <div className="flex flex-col gap-10">
                            <h1 className="text-5xl text-[#fff] font-bold">Col<span className="text-[#3C855A]">ors</span></h1>
                            <div className="bg-[#1A1A1E]  p-8 rounded">
                                <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
                                    <div className="flex flex-col gap-2">
                                        <h1 className="text-4xl text-[#fff] font-bold">Colors</h1>
                                        <p className="text-[#fff] text-lg">Version 1.0</p>
                                    </div>
                                    <h1 className="text-2xl text-[#fff] font-bold text-end">Thriving Minds App</h1>
                                </div>
                            </div>
                        </div>
                        <img className='md:w-9/12 mx-auto' src={colorCode} alt={colorCode} />
                    </div>
                </div>
            </div>

            {/* //fidelty */}
            <div className="UserPersona padTop border-b-1 border-[#595959]">
                <div className="container">
                    <div className="main flex flex-col md:gap-20 gap-10">
                        <h1 className="md:text-5xl text-4xl text-[#fff] font-bold">High Fide<span className="text-[#3C855A]">lity Designs</span></h1>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
                            <img className='w-full' src={homeScreen} alt={homeScreen} />
                            <div className="flex flex-col gap-5">
                                <h1 className="text-4xl text-[#fff] font-bold">Home <span className="text-[#3C855A]">Screen</span></h1>
                                <p className="text-[#fff] text-lg border-l-3 border-[#3C855A] pl-5">The home screen features a lifelike holographic interface for engaging conversations, voice activation, access to summaries, journal integration, and personalized recommendations.</p>
                            </div>
                        </div>
                        {/* Workout Section */}
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
                            <div className="flex flex-col gap-5">
                                <h1 className="text-4xl text-[#fff] font-bold">Workout <span className="text-[#3C855A]">Section</span></h1>
                                <p className="text-[#fff] text-lg border-l-3 border-[#3C855A] pl-5">The workout section provides tailored exercise routines, progress tracking, video demonstrations, and motivational tips for achieving fitness goals effectively.</p>
                            </div>
                            <img className='w-full' src={workout} alt={workout} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Thriving
