import monoLogo from "../../public/images/mono/image 1.png"
import figma from "../../public/images/mono/figma icon2.png"
import ps from "../../public/images/causeway/Group 1686555553.png"
import DProcess from "../../public/images/mono/Group 1686555592.png"
import DProcess2 from "../../public/images/mono/design-process.png"
import projectTimeline from "../../public/images/mono/Group 1686555576.png"
import projectTimeline2 from "../../public/images/mono/Group 1686555575.png"
import UserFlowH from "../../public/images/mono/Group 1686555577.png"
import UserFlowD from "../../public/images/mono/Group 1686555578.png"
import UserResearchH from "../../public/images/mono/Group 1686555579.png"
import UserResearch from "../../public/images/mono/undraw_people_search_re_5rre 1.png"
import UserPersonaH from "../../public/images/mono/Group 1686555580.png"
import UserPersona from "../../public/images/mono/undraw_personal_information_re_vw8a 1.png"
import idateH from "../../public/images/mono/Group 1686555581.png"
import idate from "../../public/images/mono/undraw_lightbulb_moment_re_ulyo 1.png"
import ProjectFeatureH from "../../public/images/mono/Group 1686555582.png"
import ProjectFeature from "../../public/images/mono/undraw_features_overview_re_2w78 1.png"
import typographyH from "../../public/images/mono/Group 1686555585.png"
import buttonColorH from "../../public/images/mono/Group 1686555586.png"
import primary from "../../public/images/mono/Group 1686555587.png"
import secondary from "../../public/images/mono/Group 1686555588.png"
import PrimaryColor from "../../public/images/mono/Group 1686555595.png"
import bgc from "../../public/images/mono/Group 1686555591.png"
import ttc from "../../public/images/mono/Group 1686555594.png"
import otherScreen from "../../public/images/mono/Group 1686555596.png"
import otherScreenM from "../../public/images/mono/Group 1686555543.png"
import otherScreenM2 from "../../public/images/mono/Group 1686555597.png"
import footLogo from "../../public/images/mono/image 2.png"
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet-async";

const menuItems = [
    "Splash",
    "Log In/ Sign Up",
    "Select, user/Artist",
    "Stories/News/ Blogs",
    "Chat",
    "Social",
    "Post Details",
    "Create Story",
    "User Profile",
    "Artist Profile",
    "Lesson",
    "Create lesson request",
    "Behind the scenes",
    "Create Story",
    "Search",
    "My job",
    "Job Details",
    "Raise Dispute",
    "Create Job",
    "post Details",
    "Proposal Details",
    "Invited",
    "Live",
    "Create Room",
    "Rooms",
    "Room user",
    "Setting",
    "My profile",
    "Notification",
    "Archived",
    "Change password",
    "How it works",
    "Contact US",
];

const typo = [
    {
        fontCol: "Headline 1",
        font: "Font :Poppins",
        fontWeight: "Weight :Semi Bold",
        fontSize: "Size :18",
        fontSpace: "Letter Spacing :0px"
    },
    {
        fontCol: "Headline 2",
        font: "Font :Poppins",
        fontWeight: "Weight :Medium",
        fontSize: "Size :14",
        fontSpace: "Letter Spacing :0px"
    },
    {
        fontCol: "Subtitle 1",
        font: "Font :Poppins",
        fontWeight: "Weight :Semi Bold",
        fontSize: "Size :18",
        fontSpace: "Letter Spacing :0px"
    },
    {
        fontCol: "Subtitle 2",
        font: "Font :Poppins",
        fontWeight: "Weight :Medium",
        fontSize: "Size :14",
        fontSpace: "Letter Spacing :0px"
    },
    {
        fontCol: "Body",
        font: "Font :Poppins",
        fontWeight: "Weight :Regular",
        fontSize: "Size :14",
        fontSpace: "Letter Spacing :0px"
    },
    {
        fontCol: "Button",
        font: "Font :Poppins",
        fontWeight: "Weight :Semi Bold",
        fontSize: "Size :16",
        fontSpace: "Letter Spacing :0px"
    },
    {
        fontCol: "Caption 1",
        font: "Font :Poppins",
        fontWeight: "Weight :Semi Bold",
        fontSize: "Size :8",
        fontSpace: "Letter Spacing :0px"
    },
    {
        fontCol: "Caption 2",
        font: "Font :Poppins",
        fontWeight: "Weight :Semi Bold",
        fontSize: "Size :8",
        fontSpace: "Letter Spacing :0px"
    },
]

const Mono = () => {
    return (
        <div className="bg-[#18001C]">
            <Helmet>
                <title> DTK - Mono Plug</title>
            </Helmet>

            {/* // hero section  */}
            <div style={{
                backgroundImage:
                    " url('/images/mono/Group 1686555590.png'), url('/images/mono/my-mobile.png'), url('/images/mono/layers.png')",
                backgroundRepeat: "no-repeat, no-repeat",
                backgroundPosition: "top right, bottom center, center",
                backgroundSize: "12%,  60%, cover",
            }} className="monoPlug md:py-[100px] py-[80px]">
                <div className="container">
                    <div className="flex flex-col gap-14">
                        <Link className='flex items-center gap-5 text-2xl text-[#fff]' to="/case-studies"><IoIosArrowBack /> <span>Back</span></Link>
                        <div className="main">
                            <div className="flex flex-col gap-8">
                                <img src={monoLogo} className='w-20' alt={monoLogo} />
                                <div className="flex flex-col gap-3">
                                    <h6 className='md:text-4xl text-[#fff] font-bold'>Mono Plug App</h6>
                                    <p className="text-2xl text-[#fff]">UI/UX Case Study</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-lg text-[#8400DC] font-bold">Made with:</p>
                                    <div className="flex gap-10">
                                        <img src={figma} className='w-16 h-16' alt={figma} />
                                        <img src={ps} className='w-16 h-16' alt={ps} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* //DesignProcess */}
            <div style={{
                backgroundImage:
                    "url('/images/mono/Group 1686555584.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom right",
                backgroundSize: "12%",
            }} className="DesignProcess padTop flex flex-col gap-20">
                <img className="w-72" src={DProcess2} alt={DProcess2} />
                <div className="container flex flex-col gap-10">
                    <p className="text-lg text-[#fff]">Founded in 2022, causeway offers low rental rates and a fun, hassle- free customer experience at the most popular travel destinations throughout Johor Bahru. Our guiding principles, and humble beginning, revolve around personal honesty and integrity. We believe in strengthening our communities one at a time. Serving our customers as if they were our family.</p>
                    <img className="w-full mx-auto" src={DProcess} alt={DProcess} />
                </div>
            </div>

            {/* //Project Timeline */}
            <div className="ProjectTime padTop flex flex-col gap-20">
                <img className="w-72" src={projectTimeline2} alt={projectTimeline2} />
                <div className="container">
                    <img className="w-full mx-auto" src={projectTimeline} alt={projectTimeline} />
                </div>
            </div>

            {/* //User flow */}
            <div className="UserFlow padTop flex flex-col gap-20">
                <img className="w-50" src={UserFlowH} alt={UserFlowH} />
                <div className="container">
                    <img className="md:w-9/12 w-full mx-auto" src={UserFlowD} alt={UserFlowD} />
                </div>
            </div>

            {/* //User Research */}
            <div className="UserResearch padTop flex flex-col gap-20">
                <img className="w-50" src={UserResearchH} alt={UserResearchH} />
                <div className="container">
                    <div className="main grid md:grid-cols-2 grid-cols-1 md:gap-30 gap-15">
                        <div className="">
                            <p className="md:text-4xl text-3xl leading-snug font-semibold text-[#fff]">To create a product which would be used by users, it was necessary to interact with users in order to gain insights on how they think, what they think and how they feel about it. Thus user research was conducted by going from person to person. </p>
                        </div>
                        <div className="">
                            <img className="w-full mx-auto" src={UserResearch} alt={UserResearch} />
                        </div>
                    </div>
                </div>
            </div>

            {/* //User Persona */}
            <div className="UserPersona padTop flex flex-col gap-20">
                <img className="w-50" src={UserPersonaH} alt={UserPersonaH} />
                <div className="container">
                    <div className="main grid md:grid-cols-2 grid-cols-1 md:gap-30 gap-15">
                        <div className="">
                            <img className="w-full mx-auto" src={UserPersona} alt={UserPersona} />
                        </div>
                        <div className="">
                            <p className="md:text-4xl text-3xl leading-snug font-semibold text-[#fff]">Based on the research made, i was able to know who i was designing for .I was able to define my target audience. </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* //User idate */}
            <div className="UserPersona padTop flex flex-col gap-20">
                <img className="w-32" src={idateH} alt={idateH} />
                <div className="container">
                    <div className="main grid md:grid-cols-2 grid-cols-1 md:gap-20 gap-15">
                        <div className="">
                            <p className="md:text-5xl text-3xl text-end leading-snug font-semibold text-[#fff]">Style Guide, Low-Fi Design <br className="inline" />and Hi-Fi Design</p>
                        </div>
                        <div className="">
                            <img className="md:w-96 w-66 mx-auto" src={idate} alt={idate} />
                        </div>
                    </div>
                </div>
            </div>

            {/* //Project Feature list */}
            <div style={{
                backgroundImage:
                    "url('/images/mono/Group 1686555584.png'), url('/images/mono/Group 1686555583.png')",
                backgroundRepeat: "no-repeat, no-repeat",
                backgroundPosition: "bottom right, top right",
                backgroundSize: "12%, 12%",
            }} className="ProjectFeature padTop flex flex-col gap-20">
                <img className="w-78" src={ProjectFeatureH} alt={ProjectFeatureH} />
                <div className="container">
                    <div className="main grid md:grid-cols-2 grid-cols-1 md:gap-20 gap-15">
                        <div className="">
                            <ol className="list-decimal pl-5 text-2xl text-[#fff]">
                                {menuItems.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ol>
                        </div>
                        <div className="">
                            <img className="w-full mx-auto" src={ProjectFeature} alt={ProjectFeature} />
                        </div>
                    </div>
                </div>
            </div>

            {/* //Group 1686555585 */}
            <div className="Group 1686555585 padTop flex flex-col gap-20">
                <img className="w-62" src={typographyH} alt={typographyH} />
                <div className="container">
                    <div className="fonts flex flex-col gap-7 text-[#fff]">
                        {
                            typo.map((items, index) => {
                                return (
                                    <div key={index} className="flex flex-col gap-3">
                                        <h6 className="text-2xl font-semibold">{items.fontCol}</h6>
                                        <div className="grid md:grid-cols-4 grid-cols-2 md:gap-20 gap-2">
                                            <p className="text-lg">{items.font}</p>
                                            <p className="text-lg">{items.fontWeight}</p>
                                            <p className="text-lg">{items.fontSize}</p>
                                            <p className="text-lg">{items.fontSpace}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            {/* //Buttons & Color */}
            <div className="buttonColor padTop flex flex-col gap-20">
                <img className="w-72" src={buttonColorH} alt={buttonColorH} />
                <div className="container flex flex-col gap-20">
                    <div className="main grid md:grid-cols-2 grid-cols-1 gap-15">
                        <div className="flex flex-col gap-10">
                            <h6 className="text-2xl font-semibold text-[#fff]">Primary Buttons</h6>
                            <img className="w-72" src={primary} alt={primary} />
                        </div>
                        <div className="flex flex-col gap-10">
                            <h6 className="text-2xl font-semibold text-[#fff]">Disable Buttons</h6>
                            <img className="w-72" src={secondary} alt={secondary} />
                        </div>
                    </div>

                    <div className="main grid md:grid-cols-3 grid-cols-2 gap-15">
                        <div className="flex flex-col gap-10">
                            <h6 className="text-2xl font-semibold text-[#fff]">Primary Color</h6>
                            <img className="md:w-72 w-full" src={PrimaryColor} alt={PrimaryColor} />
                        </div>
                        <div className="flex flex-col gap-10">
                            <h6 className="text-2xl font-semibold text-[#fff]">BG Color</h6>
                            <img className="md:w-28 sm:w-28 w-20" src={bgc} alt={bgc} />
                        </div>
                        <div className="flex flex-col gap-10">
                            <h6 className="text-2xl font-semibold text-[#fff]">Territory Colors</h6>
                            <img className="md:w-56 sm:w-56 w-10 w-full" src={ttc} alt={ttc} />
                        </div>
                    </div>
                </div>
            </div>

            {/* //User flow */}
            <div className="UserFlow flex flex-col gap-20">
                <img className="w-50" src={otherScreen} alt={otherScreen} />
                <div className="container">
                    <img className="md:w-9/12 w-full mx-auto" src={otherScreenM} alt={otherScreenM} />
                </div>
                <img className="w-full mx-auto" src={otherScreenM2} alt={otherScreenM2} />
            </div>

            {/* //last section */}
            <div style={{
                backgroundImage:
                    "url('/images/mono/Group 1686555598.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom right",
                backgroundSize: "60%",
            }} className="last padTop">
                <div className="container">
                    <div className="main flex flex-col gap-5">
                        <img className="w-26" src={footLogo} alt={footLogo} />
                        <h6 className="md:text-6xl text-4xl font-bold text-[#fff]">Thanks for watching</h6>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Mono
