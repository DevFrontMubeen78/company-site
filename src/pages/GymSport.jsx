import mgs from "../../public/images/gym/mgs.png"
import shots from "../../public/images/gym/824shots_so.png"
import figma from "../../public/images/gym/Frame 1597884174.png"
import ps from "../../public/images/gym/Frame 1597884175.png"
import check from "../../public/images/gym/check-circle.png"
import gsupport from "../../public/images/gym/860shots_so 1.png"
import frameVL from "../../public/images/gym/Frame 33317.png"
import probleums from "../../public/images/gym/image 691.png"
import aaaa from "../../public/images/gym/A a 1...png"
import lowFidelty from "../../public/images/gym/Low Fidelity Wireframe.png"
import highFidelty from "../../public/images/gym/HIGH Fidelity Wireframe.png"
import mobiless from "../../public/images/gym/Group 1597884427.png"
import mobiles from "../../public/images/gym/Group 1686555527.png"
import icon from "../../public/images/gym/Star Struck.png"
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet-async";


const GymSport = () => {
    return (
        <div>
            <Helmet>
                <title> DTK - Gym Support</title>
            </Helmet>

            {/* // hero section  */}
            <div style={{
                backgroundImage:
                    "url('/images/gym/Thumbnail.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom center",
                backgroundSize: "cover",
            }} className="oyrq padTop">
                <div className="container">
                    <div className="flex flex-col gap-14">
                        <Link className='flex items-center gap-5 text-2xl text-[#fff]' to="/case-studies"><IoIosArrowBack /> <span>Back</span></Link>
                        <div className="main grid md:grid-cols-2 gap-10 grid-cols-1">
                            <div className="flex flex-col gap-10">
                                <div className="flex flex-col gap-5">
                                    <img src={mgs} className='w-46' alt={mgs} />
                                    <h6 className='xl:text-5xl text-4xl text-[#fff] font-bold'>My Gym Support</h6>
                                    <h6 className='xl:text-3xl text-2xl text-[#fff]'>UI/UX Case study design</h6>
                                </div>
                                <div className="grid grid-col-2 gap-5">
                                    <ul className="text-[#fff] flex gap-20">
                                        <li className="flex gap-2 items-center"><img src={check} className='w-6' alt={check} />Detail system</li>
                                        <li className="flex gap-2 items-center"><img src={check} className='w-6' alt={check} />Style guideline</li>
                                    </ul>
                                    <ul className="text-[#fff] flex gap-20">
                                        <li className="flex gap-2 items-center"><img src={check} className='w-6' alt={check} />Pixel perfect</li>
                                        <li className="flex gap-2 items-center"><img src={check} className='w-6' alt={check} />Pixel perfect</li>
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-10">
                                    <div className="imgs">
                                        <h6 className='text-lg text-[#fff]'>Designed by:</h6>
                                        <p className="text-sm md:text-[#FF5252] sm:text-[#000]">Hamza Bhatti</p>
                                    </div>
                                    <div className="flex gap-10">
                                        <img src={figma} className='w-16' alt={figma} />
                                        <img src={ps} className='w-16' alt={ps} />
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <img src={shots} className='w-full' alt={shots} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* // project overview */}
            <div style={{
                backgroundImage:
                    "url('/images/gym/My Gym Support.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
                className="prjectOverview padTop">
                <div className="container">
                    <div className="main grid md:grid-cols-2 grid-cols-1 gap-20">
                        <div className="flex flex-col gap-18">
                            <div className="flex flex-col gap-5">
                                <h1 className="md:text-5xl sm:text-4xl  text-3xl text-[#FF5252]">WHAT IS My Gym Support</h1>
                                <p className="text text-lg">A revolutionary app designed to streamline your workout experience. As you download the app, a sleek and user-friendly interface welcomes you, providing easy navigation to various features. The onboarding process begins with a brief questionnaire, where you input essential information such as your fitness goals, current fitness level, and preferred workout duration. This sets the stage for the AI to work its magic in tailoring a personalized training program to suit your unique needs. The app ensures a seamless and ad-free experience, eliminating the frustrations of interruptions and time-consuming advertisements.</p>
                            </div>
                            <div className="flex flex-col gap-10">
                                <div className="flex flex-col gap-5">
                                    <h1 className="md:text-4xl text-3xl text-[#FF5252]">MY ROLE</h1>
                                    <p className="text text-lg">Carryout User Experience Research and User Interface Design</p>
                                </div>
                                <img className="w-62" src={frameVL} alt={frameVL} />
                            </div>
                        </div>
                        <div className="">
                            <img className="w-full" src={gsupport} alt={gsupport} />
                        </div>
                    </div>
                </div>
            </div>

            {/* // PROBLEM STATEMENT */}
            <div style={{
                backgroundImage:
                    "url('/images/gym/Slide 2.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
                className="PROBLEMSTATEMENT padTop">
                <div className="container">
                    <div className="main flex flex-col gap-20">
                        <h1 className="md:text-5xl sm:text-4xl  text-3xl text-[#000] text-center font-bold leading-snug">Empowering Your Fitness Journey, One <br className="inline" /> Workout at a Time.</h1>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-20">
                            <div className="flex flex-col gap-14">
                                <div className="flex flex-col gap-5">
                                    <h1 className="md:text-4xl text-3xl text-[#FF5252]">PROBLEM STATEMENT</h1>
                                    <p className="text text-lg">Existing gym and fitness apps often lack personalized guidance, community support, and seamless integration of various fitness aspects, leading to user disengagement and limited long-term success in achieving fitness goals. Users face difficulties in tracking their progress effectively, accessing tailored workout plans, receiving timely motivation and support, and connecting with like-minded individuals for accountability and encouragement.</p>
                                </div>
                                <div className="flex flex-col gap-5">
                                    <h1 className="md:text-4xl text-3xl text-[#FF5252]">PROBLEM SOLUTIONS</h1>
                                    <p className="text text-lg">Users may struggle to stay engaged with generic workout programs that don't cater to their specific needs and preferences.
                                        Solution: Implement an onboarding process with a detailed questionnaire to gather essential information about the user's fitness goals, current fitness level, and preferences. Utilize AI algorithms to create personalized training programs tailored to each user's needs and adjust the programs as users progress</p>
                                </div>
                            </div>
                            <div className="">
                                <img className="w-full" src={probleums} alt={probleums} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* //Typography */}
            <div style={{
                backgroundImage:
                    "url('/images/gym/Typography & Color Used.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
                className="PROBLEMSTATEMENT padTop">
                <div className="container">
                    <div className="main flex flex-col gap-20">
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-20">
                            <div className="flex flex-col gap-20">
                                <div className="flex flex-col gap-5">
                                    <h1 className="md:text-5xl sm:text-4xl  text-3xl text-[#000] font-bold">DM Sans</h1>
                                    <ul className="flex gap-10">
                                        <li className="text-2xl">Regular</li>
                                        <li className="text-2xl font-semibold">Semi Bold</li>
                                        <li className="text-2xl font-bold">Bold</li>
                                    </ul>
                                </div>
                                <img className="w-96" src={aaaa} alt={aaaa} />
                            </div>
                            <div className="">
                                <div className="grid grid-cols-2 gap-10">
                                    {
                                        [
                                            "/images/gym/Color 6.png",
                                            "/images/gym/Color 7.png",
                                            "/images/gym/Group 1597884388.png"
                                        ].map((item, index) => (

                                            <img className="w-96" src={item} alt={`Image ${index + 1}`} />

                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* //lowFidelty */}
            <div className="lowFidelty bg-[#f4b7c1] padTop">
                <div className="container">
                    <div className="main flex flex-col md:gap-20 gap-10">
                        <img className="w-3/5 md:ml-36" src={lowFidelty} alt={lowFidelty} />
                        <img src={mobiles} alt={mobiles} />
                    </div>
                </div>
            </div>

            {/* //highFidelty */}
            <div className="highFidelty bg-[#fff] padTop">
                <div className="container">
                    <div className="main flex flex-col md:gap-20 gap-10">
                        <img className="w-3/5 md:ml-36" src={highFidelty} alt={highFidelty} />
                        <img src={mobiless} alt={mobiless} />
                    </div>
                </div>
            </div>

            {/* last section  */}
            <div
                style={{
                    backgroundImage: "url('/images/gym/Foooter No21.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
                className="last padTop"
            >
                <div className="container">
                    <div className="main text-center py-10">
                        <img className="w-16 mx-auto" src={icon} alt="icon" />
                        <h6 className="font-bold md:text-6xl text-4xl mt-4">Thank you!</h6>
                        <p className="text-lg mt-2">
                            I hope you found the information helpful and informative. Don’t forget to give your appreciation!!!
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default GymSport

//complete
