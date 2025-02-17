import glazeTitle from "../../public/images/glaze/gl-title.png"
import photoshop from "../../public/images/glaze/ps.png"
import mobile from "../../public/images/glaze/heroglaze.png"
import figma from "../../public/images/glaze/figma.png"
import girl from "../../public/images/glaze/girl.png"
import paint from "../../public/images/glaze/paint-point.png"
import location from "../../public/images/glaze/location.png"
import Exclude from "../../public/images/glaze/Exclude.png"
import Exclude2 from "../../public/images/glaze/Exclude2.png"
import Exclude3 from "../../public/images/glaze/Exclude3.png"
import ICONOGRAPHY from "../../public/images/glaze/icong.png"
import virtual from "../../public/images/glaze/vitual.png"
// import Thanks from '../components/Thanks'
import MyRole from "../components/MyRole"
import Footer from "../components/Footer";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet-async";


const designProcess = [
    {
        img: "/images/glaze/understand.png",
        title: "Understand",
        sub: [
            "User Research",
            "User Interview",
            "Competitive Analysis"
        ]
    },
    {
        img: "/images/glaze/define.png",
        title: "Define",
        sub: [
            "User Personas",
            "Empathy Map",
            "User Journey"
        ]
    },
    {
        img: "/images/glaze/Group 1597883600.png",
        title: "Ideate",
        sub: [
            "User Flow",
            "Information-",
            "Architecture"
        ]
    },
    {
        img: "/images/glaze/Group 1597883601.png",
        title: "Design",
        sub: [
            "Wireframe",
            "Hi-Fi Designs",
            "Prototype"
        ]
    },
    {
        img: "/images/glaze/Group 1597883602.png",
        title: "Test",
        sub: [
            "Feedback",
            "Conclusion",
            "Future Concept"
        ]
    },
]

const screen = [
    "/images/glaze/virtual1.png",
    "/images/glaze/virtual2.png",
    "/images/glaze/virtual3.png",
    "/images/glaze/virtual4.png",
    "/images/glaze/virtual5.png",
    "/images/glaze/virtual6.png",
]

console.log(screen)
const Glaze = () => {
    return (
        <div className=' bg-[#343434] h-full'>
            <Helmet>
                <title> DTK - Glaze</title>
            </Helmet>

            {/* // hero section  */}
            <div style={{
                backgroundImage:
                    "url('/images/glaze/hero.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top center",
                backgroundSize: "cover",
            }} className="glaze padTop">
                <div className="container">
                    <div className="flex flex-col gap-10">
                        <Link className='flex items-center gap-5 text-2xl text-[#fff]' to="/case-studies"><IoIosArrowBack /> <span>Back</span></Link>
                        <div className="main grid md:grid-cols-2 gap-10 grid-cols-1">
                            <div className="flex flex-col md:gap-30 gap-10 text-[#fff]">
                                <div className="flex flex-col gap-10">
                                    <img src={glazeTitle} className='w-42' alt={glazeTitle} />
                                    <div className="flex flex-col gap-2">
                                        <h5 className='font-bold xl:text-3xl text-2xl'>Glaze App</h5>
                                        <h6 className='font-bold xl:text-4xl text-3xl'>Case Study UX/UI </h6>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-5">
                                    <h5 className='xl:text-2xl text-lg'>Tool Used</h5>
                                    <div className="tools flex gap-5">
                                        <img src={photoshop} className='w-20' alt={photoshop} />
                                        <img src={figma} className='w-20' alt={figma} />
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <img src={mobile} className='w-full' alt={mobile} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* // design Process  */}
            <div className="designProcess padTop">
                <div className="container">
                    <div className="main flex flex-col gap-18 relative">
                        <h6 className='headingBorder font-bold text-[#6A67D2] md:text-5xl sm:text-4xl  text-3xl max-w-max pb-3'>Design Process</h6>
                        <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-10">
                            {
                                designProcess.map((items, index) => {
                                    return (
                                        <div key={index} className="text-[#fff] flex flex-col gap-10 items-center text-center">
                                            <img className='w-32' src={items.img} alt="" />
                                            <div className="flex flex-col gap-4">
                                                <h6 className="text-2xl font-bold">{items.title}</h6>
                                                <ul className="">

                                                    {
                                                        items.sub.map((items, index) => {
                                                            return (
                                                                <li key={index}>{items}</li>
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

            {/* // project overview */}
            <div className="projectOver padTop">
                <div className="container">
                    <div className="main flex flex-col gap-5">
                        <h6 className='headingBorder font-bold text-[#6A67D2] md:text-5xl sm:text-4xl  text-3xl max-w-max pb-3'>Project Overview</h6>
                        <p className='text-lg text-[#fff]'>Introducing Glaze, the ultimate game-changer in the beauty industry! Brace yourself for a revolutionary all-in-one platform designed to create seamless connections between beauty specialists and their valued clients. This cutting-edge app is a true game-changer, catering to both individual professionals and dynamic beauty salon teams. At Glaze, we have meticulously crafted a comprehensive suite of features, elevating convenience to unprecedented heights. Picture a world where different businesses effortlessly showcase their unique profiles, presenting a dazzling array of top-notch services to our discerning customers. Glaze: Where beauty meets innovation, and your salon experience is transformed like never before.</p>
                    </div>
                </div>
            </div>

            {/* // User Persona */}
            <div className="UserPersona py-10">
                <div className="container">
                    <div className="main flex flex-col gap-10 md:gap-16">
                        {/* Heading */}
                        <h6 className="headingBorder font-bold text-[#6A67D2] md:text-5xl sm:text-4xl  text-3xl max-w-max pb-3">
                            User Persona
                        </h6>

                        {/* Main Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                            {/* Image Section */}
                            <div className="md:col-span-4">
                                <img className="w-full h-auto rounded-lg shadow-lg" src={girl} alt="User Persona" />
                            </div>

                            {/* Text Content Section */}
                            <div className="md:col-span-8 flex flex-col gap-10 text-white">
                                {/* Bio Section */}
                                <div className="flex flex-col gap-5">
                                    <h6 className="font-bold text-2xl md:text-3xl">Bio</h6>
                                    <p className="text-base md:text-lg">
                                        Sarah is a busy young professional who values self-care and staying up-to-date with the latest beauty trends.
                                        She leads a hectic lifestyle, juggling her career, social life, and personal wellness.
                                        Sarah is tech-savvy and relies on her smartphone for various aspects of her life, including shopping, entertainment, and health.
                                    </p>
                                </div>

                                {/* Pain Points & Goals Section */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    {/* Pain Points */}
                                    <div className="flex flex-col gap-4">
                                        <h6 className="font-bold text-2xl md:text-3xl">Pain Points</h6>
                                        <ul className="list-disc pl-5 flex flex-col gap-3 text-base md:text-lg">
                                            <li>Limited time for extensive beauty routines or browsing through numerous products.</li>
                                            <li>Sarah may have specific skin concerns or sensitivities, making it challenging to find suitable products.</li>
                                            <li>The beauty market is saturated, and Sarah may feel overwhelmed with the multitude of products available. She needs guidance on what will work best for her.</li>
                                        </ul>
                                    </div>

                                    {/* Goals */}
                                    <div className="flex flex-col gap-4">
                                        <h6 className="font-bold text-2xl md:text-3xl">Goals</h6>
                                        <ul className="list-disc pl-5 flex flex-col gap-3 text-base md:text-lg">
                                            <li>Sarah is looking for a beauty app that streamlines her beauty routine.</li>
                                            <li>She wants to stay current with beauty trends and discover new products or techniques easily.</li>
                                            <li>Sarah appreciates personalized recommendations based on her skin type, tone, and preferences.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* //Accessibility */}
            <div className="Accessibility padTop">
                <div className="container">
                    <div className="main flex flex-col gap-5">
                        <h6 className='headingBorder font-bold text-[#6A67D2] md:text-5xl sm:text-4xl  text-3xl max-w-max pb-3'>Accessibility Considerations</h6>
                        <div className=" text-[#fff] flex flex-col gap-10 relative">
                            <div className="access relative flex gap-10 items-center">
                                <span className='count  bg-[#6A67D2] rounded-full w-15 h-15 flex justify-center items-center'><div className="z-10">1</div></span>
                                <div className=' flex flex-col gap-5'>
                                    <h6 className='text-lg text-[#fff]'>Screen Reader Compatibility</h6>
                                    <ul className="list-disc pl-8 flex flex-col gap-1 text-base">
                                        <li>Ensure that the app is compatible with screen readers on both iOS (VoiceOver) and Android (TalkBack).</li>
                                        <li>Label all user interface elements correctly and provide meaningful descriptions for images using appropriate accessibility attributes.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="access relative flex gap-10 items-center">
                                <span className='count  bg-[#6A67D2] rounded-full w-15 h-15 flex justify-center items-center'><div className="z-10">2</div></span>
                                <div className="flex flex-col gap-5">
                                    <h6 className='text-lg text-[#fff]'>Contrast and Color Choices</h6>
                                    <ul className="list-disc pl-8 flex flex-col gap-1 text-base">
                                        <li>Use high-contrast colors to make text and important elements easily distinguishable.</li>
                                        <li>Avoid relying solely on color to convey information; use different shapes, icons, or labels as we</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="access relative flex gap-10 items-center">
                                <span className='count  bg-[#6A67D2] rounded-full w-15 h-15 flex justify-center items-center'><div className="z-10">3</div></span>
                                <div className=" flex flex-col gap-5">
                                    <h6 className='text-lg text-[#fff]'>Captions and Transcripts</h6>
                                    <ul className="list-disc pl-8 flex flex-col gap-1 text-base">
                                        <li>Include captions for videos to make them accessible to users with hearing impairments.</li>
                                        <li>Provide transcripts for audio content to accommodate users who may prefer or require text-based content.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="access relative flex gap-10 items-center">
                                <span className='count  bg-[#6A67D2] rounded-full w-15 h-15 flex justify-center items-center'><div className="z-10">4</div></span>
                                <div className="flex flex-col gap-5">
                                    <h6 className='text-lg text-[#fff]'>Accessibility Guidelines Compliance</h6>
                                    <ul className="list-disc pl-8 flex flex-col gap-1 text-base">
                                        <li>Adhere to the Web Content Accessibility Guidelines (WCAG) for mobile apps, which provide a comprehensive set of guidelines for creating accessible digital content.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* // Role */}
            <div className="Role padTop">
                <div className="container">
                    <div className="main flex flex-col gap-18">
                        <div className="flex flex-col gap-5">
                            <h6 className='headingBorder font-bold text-[#6A67D2] md:text-5xl sm:text-4xl  text-3xl max-w-max pb-3'>My Role</h6>
                            <p className='text-lg text-[#fff]'>As a UI/UX designer, I make sure that my designs are well received by users, and can be implemented by developers.</p>
                        </div>
                        <MyRole />
                    </div>
                </div>
            </div>

            {/* //Accessibility */}
            <div className="Accessibility padTop">
                <div className="container">
                    <div className="main grid md:grid-cols-2 grid-cols-1 gap-18">
                        <div className=" text-[#fff] flex flex-col gap-10 relative">
                            <h6 className='headingBorder font-bold text-[#6A67D2] md:text-5xl sm:text-4xl  text-3xl max-w-max pb-3'>Pain Points</h6>
                            <div className="flex flex-col gap-5">
                                <div className=' flex flex-col gap-2'>
                                    <h6 className='text-lg text-[#fff] font-bold'>Appointment Scheduling Hassles</h6>
                                    <p className="text-[#fff] text-lg">Clients often face difficulties in scheduling appointments with their preferred beauty specialists or salons.</p>
                                </div>
                                <div className=' flex flex-col gap-2'>
                                    <h6 className='text-lg text-[#fff] font-bold'>Solution</h6>
                                    <p className="text-[#fff] text-lg">Implement a user-friendly appointment scheduling system within the app, allowing clients to easily book and manage appointments with their desired beauty specialists or salons.</p>
                                </div>
                                <div className=' flex flex-col gap-2'>
                                    <h6 className='text-lg text-[#fff] font-bold'>Limited Visibility for Beauty Professionals</h6>
                                    <p className="text-[#fff] text-lg">Individual beauty professionals may struggle to showcase their work and attract new clients, They  may find it challenging to promote their services.</p>
                                </div>
                                <div className=' flex flex-col gap-2'>
                                    <h6 className='text-lg text-[#fff] font-bold'>Solution</h6>
                                    <p className="text-[#fff] text-lg">Provide a portfolio feature for beauty specialists to showcase their expertise, including images of their work, client reviews, and a bio.and provide platform to promote their services.</p>
                                </div>
                            </div>
                        </div>
                        <div className="img">
                            <img className='w-full' src={paint} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* //styleGuied */}
            <div className="styleGuied padTop">
                <div className="container">
                    <div className="main flex flex-col gap-10">
                        <h6 className='headingBorder font-bold text-[#6A67D2] md:text-5xl sm:text-4xl  text-3xl max-w-max pb-3'>Style Guide</h6>
                        {/* color */}
                        <div className="color flex flex-col gap-2">
                            <div className="location flex gap-3 items-center">
                                <img className='w-8' src={location} alt={location} />
                                <h6 className='text-2xl text-[#fff]'>Color</h6>
                            </div>
                            <div className="colors flex gap-3">
                                <img className='w-30' src={Exclude} alt={Exclude} />
                                <img className='w-30' src={Exclude2} alt={Exclude2} />
                                <img className='w-30' src={Exclude3} alt={Exclude3} />
                            </div>
                        </div>

                        {/* Typography */}
                        <div className="color flex flex-col gap-5">
                            <div className="location flex gap-3 items-center">
                                <img className='w-8' src={location} alt={location} />
                                <h6 className='text-2xl text-[#fff]'>Typography</h6>
                            </div>
                            <div className="typogrphy flex flex-col gap-3">
                                <h6 className='text-3xl font-bold text-[#fff]'>Roboto</h6>
                                <div className="typo grid md:grid-cols-5 grid-cols-2 gap-18">
                                    <div className="light flex flex-col gap-3">
                                        <h6 className='text-2xl font-bold text-[#fff] font-light'>Light</h6>
                                        <p className="text-[#fff] text-lg font-light">ABCDEFGHIJKLMNO <br className='inline' />PQRSTUVWXYX</p>
                                    </div>
                                    <div className="REGULER flex flex-col gap-3">
                                        <h6 className='text-2xl font-bold text-[#fff] font-normal'>REGULER</h6>
                                        <p className="text-[#fff] text-lg font-normal">ABCDEFGHIJKLMNO <br className='inline' />PQRSTUVWXYX</p>
                                    </div>
                                    <div className="MEDIUM flex flex-col gap-3">
                                        <h6 className='text-2xl font-bold text-[#fff] font-medium'>MEDIUM</h6>
                                        <p className="text-[#fff] text-lg font-medium">ABCDEFGHIJKLMNO <br className='inline' />PQRSTUVWXYX</p>
                                    </div>
                                    <div className="SEMIBOLD flex flex-col gap-3">
                                        <h6 className='text-2xl font-bold text-[#fff] font-semibold'>SEMI BOLD</h6>
                                        <p className="text-[#fff] text-lg font-semibold">ABCDEFGHIJKLMNO <br className='inline' />PQRSTUVWXYX</p>
                                    </div>
                                    <div className="BOLD flex flex-col gap-3">
                                        <h6 className='text-2xl font-bold text-[#fff] font-bold'>BOLD</h6>
                                        <p className="text-[#fff] text-lg font-bold">ABCDEFGHIJKLMNO <br className='inline' />PQRSTUVWXYX</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ICONOGRAPHY */}
                        <div className="ICONOGRAPHY flex flex-col gap-5">
                            <div className="location flex gap-3 items-center">
                                <img className='w-8' src={location} alt={location} />
                                <h6 className='text-2xl text-[#fff]'>ICONOGRAPHY</h6>
                            </div>
                            <div className="BASELINE flex flex-col gap-10">
                                <h6 className='text-3xl font-bold text-[#fff]'>BASELINE / REGULAR</h6>
                                <img className='w-full' src={ICONOGRAPHY} alt={ICONOGRAPHY} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* //virtual screen */}
            <div className="virtual screen padTop">
                <div className="container">
                    <div className="main flex flex-col gap-18">
                        <h6 className='headingBorder font-bold text-[#6A67D2] md:text-5xl sm:text-4xl  text-3xl max-w-max pb-3'>Visual Screens</h6>
                        <div className="screens flex flex-col gap-18 items-center">
                            <img className='md:w-5/12 w-full' src={virtual} alt={virtual} />
                            {
                                screen.map((items, index) => {
                                    return (
                                        <img key={index} src={items} alt={`Screen ${index + 1}`} className="md:w-9/12 w-full" />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* footer  */}
            {/* <Thanks /> */}
            <Footer/>
        </div>
    )
}

export default Glaze
