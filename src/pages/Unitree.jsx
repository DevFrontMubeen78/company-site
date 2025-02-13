import causeway from "../../public/images/unitree/Group 1686555559.png"
import shots from "../../public/images/unitree/Group 1597883333.png"
import Logos from "../../public/images/unitree/Logos.png"
import Logoss from "../../public/images/unitree/Group 6.png"
import vs from "../../public/images/unitree/Group 1686555558.png"
import listIcon from "../../public/images/unitree/Frame 20.png"
import listIcon1 from "../../public/images/unitree/Frame 21.png"
import location from "../../public/images/unitree/image 3.png"
import graph from "../../public/images/unitree/Frame 2258.png"
import quote from "../../public/images/unitree/Page 1.png"
import QuoteMark from "../../public/images/unitree/Quote Mark.png"
import research from "../../public/images/unitree/Group 93.png"
import candidate from "../../public/images/unitree/candidate.png"
import MyRole from "../components/MyRole"
import { IoIosPhonePortrait } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet-async";

const indecations = [
    {
        img: "/images/unitree/Indication.png",
        title: "Ideate",
        desc: "Turn idea from concept and brainstorm to MVP",
    },
    {
        img: "/images/unitree/Indication.png",
        title: "Design",
        desc: "Sketch out the product to align the user needs",
    },
    {
        img: "/images/unitree/Indication.png",
        title: "Develop",
        desc: "Convert the designs into a live application",
    },
    {
        img: "/images/unitree/Indication.png",
        title: "Deploy",
        desc: "Launching the application to the market",
    },
]

const timeline = [
    {
        title: "01 - Ideation",
        list: [
            "Brainstorming",
            "Crazy8",
            "FGD",
            "Research",
            "Interview"
        ]
    },
    {
        title: "02  Research and wireframe",
        list: [
            "Interview",
            "empathy Map",
            "competitor analysis",
            "User journey",
            "General Flow",
            "Design trend Research",
            "Low Fi testing (AB)"
        ]
    },
    {
        title: "03 Hifi Design",
        list: [
            "Brand identity",
            "Design Main Cases",
            "Design Edge Cases",
            "Design UI documentation",
            "Design Sytem",
            "Design Flow Per Cases",
        ]
    },
    {
        title: "04 Prototype  and Testing (UT) ",
        list: [
            "General Prototype",
            "Edge cases Prototype",
            "Usability Testing",
            "Gather Feedback",
            "Design Revision"
        ]
    },
    {
        title: "05 Development ",
        list: [
            "Handoff to developer",
            "Assets Documentation",
            "Translate from UI to code",
            "Unit Testing",
            "UI audit",
            "Gather Feedback",
            "Layout Revision after feedback",
            "Ready to test",
        ]
    },
    {
        title: "Testing -> Release",
        list: [
            "Testcase Creation",
            "Flow Creation from QA",
            "QA documentation",
            "UI Audit",
            "Revision to developer",
            "General Testing",
            "Release MVP"
        ]
    },
]

const interview = [
    {
        mark: "/images/unitree/Quote Mark.png",
        candidate: "/images/unitree/Picture1.png",
        name: "Afiyatika Mufidati",
        designation: "Housewife",
        desc: "it would be very easy for me if I could check the inventory first, before going to the store to buy it.",
    },
    {
        mark: "/images/unitree/Quote Mark.png",
        candidate: "/images/unitree/Picture2.png",
        name: "gustaf Martien",
        designation: "Student",
        desc: "I often use my smartphone for daily needs. it will be very easy if I can place an order using my cellphone from home.",
    },
    {
        mark: "/images/unitree/Quote Mark.png",
        candidate: "/images/unitree/Picture3.png",
        name: "Lik Wati",
        designation: "Grocery buyer",
        desc: "I want my order to be delivered when I order the goods, so I don't have to leave the house, as much as possible free shipping.",
    },
    {
        mark: "/images/unitree/Quote Mark.png",
        candidate: "/images/unitree/Picture4.png",
        name: "Pakdhe Suaman",
        designation: "Grocery buyer",
        desc: "when I buy things, usually a lot. It would be very nice if I could buy many items at once in one order.",
    },
    {
        mark: "/images/unitree/Quote Mark.png",
        candidate: "/images/unitree/Picture5.png",
        name: "Koh Jason",
        designation: "Chicken seller",
        desc: "I often forget to record the orders that I have ordered before, it is very confusing for me to do a monthly recap.",
    },
    {
        mark: "/images/unitree/Quote Mark.png",
        candidate: "/images/unitree/Picture6.png",
        name: "Lik Emy",
        designation: "Food Seller",
        desc: "I live in a village, so access to the city is also difficult. very disappointing if when you go to the city there is no purchased item.",
    },
]

const Unitree = () => {
    return (
        <div style={{
            backgroundImage:
                "url('/images/unitree/mockup3.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom center",
            backgroundSize: "cover",
        }} >
            <Helmet>
                <title> DTK - Unitree</title>
            </Helmet>

            {/* // hero section  */}
            <div style={{
                backgroundImage:
                    "url('/images/unitree/BG.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom center",
                backgroundSize: "cover",
            }} className="oyrq padTop">
                <div className="container">
                    <div className="flex flex-col gap-14">
                        <Link className='flex items-center gap-5 text-2xl text-[#fff]' to="/case-studies"><IoIosArrowBack /> <span>Back</span></Link>
                        <div className="main grid md:grid-cols-2 gap-20 grid-cols-1">
                            <div className="flex flex-col gap-8">
                                <img src={causeway} className='w-46' alt={causeway} />
                                <div className="flex flex-col gap-5">
                                    <h6 className='xl:text-5xl text-4xl text-[#fff] font-bold'>UNITREE APP</h6>
                                    <p className="text-lg text-[#fff]">Discover a seamless and delightful shopping experience with our cutting-edge E-commerce app! Unitree brings you the latest trends, unbeatable deals, and a user-friendly interface that makes shopping a breeze. </p>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <p className="text-base text-[#fff]">Role</p>
                                    <Link className="bg-[#fff] py-2 rounded max-w-max rounded px-8 font-bold" to="#">UI/UX Designer</Link>
                                </div>
                            </div>
                            <div className="">
                                <img src={shots} className='w-full' alt={shots} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* // INTRODUCTION  */}
            <div
                style={{
                    backgroundImage:
                        "url('/images/unitree/mockup.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "bottom center",
                    backgroundSize: "cover",
                }} className="introduction padTop">
                <div className="container">
                    <div className="main flex flex-col gap-20">
                        <div className="flex flex-col gap-6 text-center">
                            <div className="flex flex-col gap-2">
                                <p className="text-base text-[#FECF29]">INTRODUCTION</p>
                                <h1 className="text-4xl text-[#fff] font-bold">About This Project</h1>
                            </div>
                            <div className="">
                                <p className="text-base text-[#fff]">This project functional UX and UI Designer to overcome the immense <br className="inline" /> difficulty, broad minded and interactive and advanced UI Design.</p>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-20">
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col gap-2">
                                    <p className="text-base text-[#FECF29]">GET STARTED</p>
                                    <h1 className="text-3xl text-[#fff] font-bold">Overview</h1>
                                </div>
                                <div className="">
                                    <p className="text-base text-[#fff]">In this app, different businesses make their profile and offer the services and goods to the customers and universities The university business can also provide his service and can post their upcoming events in this app. Thier will be no chat feature in this application from the start. It will be included in future updates.</p>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <p className="text-base text-[#fff]">Platform</p>
                                    <Link className="bg-[#fff] py-2 rounded max-w-max rounded px-8 font-bold flex gap-3 items-center" to="#"><IoIosPhonePortrait /> UI/UX Designer</Link>
                                </div>
                            </div>
                            <div className="flex md:justify-end justify-center">
                                <img className="w-9/12" src={Logos} alt={Logos} />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 grid-cols-1 gap-20">
                            <div className="flex flex-col gap-6">
                                <h1 className="text-3xl text-[#fff] font-bold">The Story</h1>
                                <p className="text-base text-[#fff]">the lack of existing technology in the Sumbawa area, makes the author interested in designing applications that make it easier for users to order grocery items online.</p>
                            </div>
                            <div className="flex md:justify-end justify-center">
                                <img className="w-9/12" src={Logoss} alt={Logoss} />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                            <div className="probleum md:col-span-5 flex flex-col gap-8">
                                <div className="flex flex-col gap-3">
                                    <h6 className="text-3xl font-bold border-l-4 pl-2 text-white">PROBLEM</h6>
                                    <p className="text-lg text-white">
                                        The problem that occurs in the current business process is that many items are sold, but still use the conventional method. So that orders cannot be made quickly, and transaction data cannot be stored properly.
                                    </p>
                                </div>
                                <ul className="text-base text-white flex flex-col gap-3">
                                    <li className="flex items-center gap-2">
                                        <img className="w-6" src={listIcon1} alt="icon" /> Still using the offline method.
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <img className="w-6" src={listIcon1} alt="icon" /> Transactions are not properly recorded.
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <img className="w-6" src={listIcon1} alt="icon" /> User cannot see the progress of the delivery and the order.
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <img className="w-6" src={listIcon1} alt="icon" /> Transactions still use WhatsApp.
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <img className="w-6" src={listIcon1} alt="icon" /> User must ensure the available stock manually.
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <img className="w-6" src={listIcon1} alt="icon" /> Users cannot place orders directly.
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <img className="w-6" src={listIcon1} alt="icon" /> Seller has difficulty recording sales and goods.
                                    </li>
                                </ul>
                            </div>

                            <div className="vs md:col-span-2 flex justify-center">
                                <img className="md:w-full w-10 max-w-[150px]" src={vs} alt="vs" />
                            </div>

                            <div className="solution md:col-span-5 flex flex-col gap-8">
                                <div className="flex flex-col gap-3">
                                    <h6 className="text-3xl font-bold border-l-4 pl-2 text-[#00C48C]">SOLUTION</h6>
                                    <p className="text-base text-white">
                                        The solution that is made is to build an Android application that can place orders online so that business processes to end-to-end users can occur properly.
                                    </p>
                                </div>
                                <ul className="text-base text-white flex flex-col gap-3">
                                    <li className="flex items-center gap-2">
                                        <img className="w-6" src={listIcon} alt="icon" /> Creation of online ordering feature.
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <img className="w-6" src={listIcon} alt="icon" /> Creation of transaction history feature.
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <img className="w-6" src={listIcon} alt="icon" /> User can see the progress of the transaction clearly.
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <img className="w-6" src={listIcon} alt="icon" /> Catalog that can inform the user of the availability of goods.
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <img className="w-6" src={listIcon} alt="icon" /> Goods that are categorized, so that users are not confused.
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <img className="w-6" src={listIcon} alt="icon" /> Users can make multiple transactions with one order.
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <img className="w-6" src={listIcon} alt="icon" /> Payment with COD makes users more confident when making purchases.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* design process  */}
            <div
                style={{
                    backgroundImage:
                        "url('/images/unitree/mockupss.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "bottom center",
                    backgroundSize: "cover",
                }} className="designProcess padTop">
                <div className="container">
                    <div className="main flex flex-col md:gap-30 gap-20">
                        <div className="flex flex-col gap-10">
                            <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center gap-3"><img className="w-12" src={location} alt={location} /> <p className="text-2xl text-[#fff]">Preparation</p></div>
                                    <h6 className="md:text-5xl text-3xl font-bold text-[#fff]">DESIGN PROCESS</h6>
                                </div>
                                <div className="grid grid-cols-2 md:gap-20 gap-10">
                                    <div className="flex flex-col gap-2">
                                        <h6 className="text-lg font-bold text-[#fff]">Design Flow</h6>
                                        <ul className="text-[#fff]">
                                            <li>1. Research & Ideation</li>
                                            <li>2. Design & Prototype</li>
                                            <li>3. Testing</li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h6 className="text-lg font-bold text-[#fff]">Development</h6>
                                        <ul className="text-[#fff]">
                                            <li>1. Code</li>
                                            <li>2. Testing</li>
                                            <li>3. Deploy</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-4 grid-cols-2 md:gap-10 gap-10">
                                {
                                    indecations.map((items, index) => {
                                        return (
                                            <div key={index} className="flex flex-col md:gap-5 gap-3">
                                                <img className="md:w-full w-72" src={items.img} alt={items.img} />
                                                <div className="flex flex-col md:gap-2 gap-1">
                                                    <h6 className="text-2xl font-bold text-[#fff]">{items.title}</h6>
                                                    <p className="text-base leading-snug text-[#fff]">{items.desc}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="flex flex-col md:gap-10 gap-5">
                            <div className="flex flex-col gap-3">
                                <h6 className="md:text-5xl text-3xl font-bold text-[#fff]">Design Timeline</h6>
                                <p className="text-lg text-[#fff]">Our achievement in the journey depicted in numbers</p>
                            </div>
                            <img className="w-full" src={graph} alt={graph} />
                        </div>
                        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
                            {
                                timeline.map((items, index) => {
                                    return (
                                        <div key={index} className="flex flex-col gap-4">
                                            <h6 className="text-[#fff] bg-[#585858] rounded p-2 font-bold">{items.title}</h6>
                                            <ul className="list-disc text-[#fff] text-lg  ml-4">
                                                {
                                                    items.list.map((items, index) => {
                                                        return (
                                                            <li key={index}>{items}</li>
                                                        )
                                                    })
                                                }

                                            </ul>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* // Role */}
            <div style={{
                backgroundImage:
                    "url('/images/unitree/mockup3.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom center",
                backgroundSize: "cover",
            }} className="Role padTop">

                <div className="flex flex-col gap-18">
                    <div className="main flex flex-col gap-18 text-center padTop">
                        <div className="container flex flex-col gap-20">
                            <div className="flex flex-col gap-5">
                                <h6 className='font-bold text-[#fff] text-4xl'>My Role</h6>
                                <p className='text-lg text-[#fff]'>As a UI/UX designer, I make sure that my designs are well received by users, and can <br className="inline" /> be implemented by developers.</p>
                            </div>
                            <MyRole />
                        </div>

                        {/* design stratgy  */}
                        <div className="padTop relative">
                            <div style={{
                                backgroundImage: "url('/images/unitree/Vector 4.png')",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                backgroundSize: "105%",
                                position: "absolute",
                                left: "0px",
                                right: "0",
                                height: "360px",
                            }} className="padTop">
                                <div className="container flex flex-col gap-5 text-center ">
                                    <h6 className='font-bold text-[#fff] text-4xl'>Design Strategy</h6>
                                    <p className='text-lg text-[#fff]'>A design strategy shows the value your product and services will bring to people and describes <br className="inline" /> this value to a goal. It also describes about the steps you will take to achieve the goal.</p>
                                </div>
                            </div>
                            <div className="container">
                                <div className="mainp md:pt-[75px] pt-[240px] pb-[50px]  grid md:grid-cols-3 grid-cols-1 gap-14">
                                    <div className="bg-[#383838] rounded-2xl px-5 pb-5 md:pt-40 pt-5 flex flex-col gap-5">
                                        <h6 className='font-bold text-[#fff] text-2xl text-left'>Design Strategy</h6>
                                        <div className="flex gap-2">
                                            <img className="w-3 h-3" src={quote} alt={quote} />
                                            <div className="flex flex-col gap-5">
                                                <p className='text-base text-[#fff] text-left'>Creating an easy yet unique online platform for people who are searching for online goods to fullfill their needs. Give them an opportunity to share with the other friend when they finish using the app. </p>
                                                <p className='text-lg text-[#fff] font-bold text-left'>Intention to detail transaction</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-[#383838] rounded-2xl px-5 pb-5 md:pt-65 pt-5 flex flex-col gap-5">
                                        <h6 className='font-bold text-[#fff] text-2xl text-left'>Design Strategy</h6>
                                        <div className="flex gap-2">
                                            <img className="w-3 h-3" src={quote} alt={quote} />
                                            <div className="flex flex-col gap-5">
                                                <p className='text-base text-[#fff] text-left'>Creating an easy yet unique online platform for people who are searching for online goods to fullfill their needs. Give them an opportunity to share with the other friend when they finish using the app. </p>
                                                <p className='text-lg text-[#fff] font-bold text-left'>Intention to detail transaction</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-[#383838] rounded-2xl px-5 pb-5 md:pt-40 pt-5 flex flex-col gap-5">
                                        <h6 className='font-bold text-[#fff] text-2xl text-left'>Design Strategy</h6>
                                        <div className="flex gap-2">
                                            <img className="w-3 h-3" src={quote} alt={quote} />
                                            <div className="flex flex-col gap-5">
                                                <p className='text-base text-[#fff] text-left'>Creating an easy yet unique online platform for people who are searching for online goods to fullfill their needs. Give them an opportunity to share with the other friend when they finish using the app. </p>
                                                <p className='text-lg text-[#fff] font-bold text-left'>Intention to detail transaction</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mainm w-full md:flex gap-14 justify-center">
                                    <div className="bg-[#383838] h-auto w-92 rounded-2xl p-5 flex flex-col gap-5">
                                        <h6 className='font-bold text-[#fff] text-2xl text-left'>Design Strategy</h6>
                                        <div className="flex gap-2">
                                            <img className="w-3 h-3" src={quote} alt={quote} />
                                            <div className="flex flex-col gap-5">
                                                <p className='text-base text-[#fff] text-left'>Creating an easy yet unique online platform for people who are searching for online goods to fullfill their needs. Give them an opportunity to share with the other friend when they finish using the app. </p>
                                                <p className='text-lg text-[#fff] font-bold text-left'>Intention to detail transaction</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-[#383838] md:mt-0 mt-14 h-auto w-92 rounded-2xl p-5 flex flex-col gap-5">
                                        <h6 className='font-bold text-[#fff] text-2xl text-left'>Design Strategy</h6>
                                        <div className="flex gap-2">
                                            <img className="w-3 h-3" src={quote} alt={quote} />
                                            <div className="flex flex-col gap-5">
                                                <p className='text-base text-[#fff] text-left'>Creating an easy yet unique online platform for people who are searching for online goods to fullfill their needs. Give them an opportunity to share with the other friend when they finish using the app. </p>
                                                <p className='text-lg text-[#fff] font-bold text-left'>Intention to detail transaction</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* user reserch  */}
            <div className="userReserch padTop">
                <div className="container">
                    <div className="main flex flex-col gap-20">
                        <div className="flex flex-col gap-10">
                            <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center gap-3"><img className="w-12" src={location} alt={location} /> <p className="text-2xl text-[#fff]">Preparation</p></div>
                                    <h6 className="md:text-5xl text-3xl font-bold text-[#fff]">USER RESEARCH</h6>
                                </div>
                                <div className="grid grid-cols-2 md:gap-20 gap-10">
                                    <div className="flex flex-col gap-2">
                                        <h6 className="text-lg font-bold text-[#fff]">Research Plan</h6>
                                        <ul className="text-[#fff]">
                                            <li>Survey</li>
                                            <li>Interview</li>
                                            <li>Personas</li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <ul className="text-[#fff]">
                                            <li>Empathy Map</li>
                                            <li>User Journey</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <p className="text-lg text-[#fff]">User research is a proccess to find out the user point of view, their frustations and their struggle to get their understandig. I have two used methods which contributed hugely in aditio to my own findings</p>
                        </div>
                        <div className="flex flex-col md:gap-20 gap-10">
                            <div className="flex flex-col gap-3">
                                <h6 className="md:text-5xl text-3xl font-bold text-[#FECF29] border-l-8 pl-5">SURVEY</h6>
                                <p className="text-lg text-[#fff]">I did survey with 55 potential users in combination with interviews from individual conversation to know their views, experience and to collect quantitive and qualitative data. the target audience were between the age 20-50 Yold</p>
                            </div>
                            <img className="w-full" src={research} alt={research} />
                        </div>
                        <div className="flex flex-col md:gap-20 gap-10">
                            <div className="flex flex-col gap-3">
                                <h6 className="md:text-5xl text-3xl font-bold text-[#00C48C] border-l-8 pl-5">INTERVIEW</h6>
                                <p className="text-lg text-[#fff]">From the survey that I have done, I did filtering, and got 15 people for direct interview. I did online interviews using Zoom and invited them at different times.</p>
                            </div>
                            <img className="w-full" src={candidate} alt={candidate} />
                        </div>
                        <div className="mainp grid md:grid-cols-2 grid-cols-1 gap-5">
                            {
                                interview.map((items, index) => {
                                    return (
                                        <div key={index} className="bg-[#383838] rounded p-10 flex flex-col gap-5">
                                            <img className="w-18 flex self-end" src={items.mark} alt={items.mark} />
                                            <div className="flex gap-4 items-center">
                                                <img className="w-16 flex self-end" src={items.candidate} alt={items.candidate} />
                                                <div className="">
                                                    <h6 className='font-bold text-[#fff] text-lg text-left'>{items.name}</h6>
                                                    <p className='text-base text-[#fff] text-left'>{items.designation}</p>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-5">
                                                <p className='text-base text-[#fff] text-left'>{items.desc}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Unitree
