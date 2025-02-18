// complete page 
import Header from "../components/Header";
import Footer from "../components/Footer";
import figure from "../../public/images/career/Figure.png";
import gallery from "/images/about/every.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const principles = [
    {
        img: "/images/career/our-experience.svg.png",
        title: "Our experience",
        desc: "DTechKrew is your reliable technological partner with 10+ years of experience 100+ professionals, and an averag rating of 4.8/5 on Clutch."
    },
    {
        img: "/images/career/our-versatility.svg.png",
        title: "Our versatility",
        desc: "Our team has an extensive background in creating complex solutions across multiple industries: E-commerce, retail, IoT, FinTech, Cyber Security, and many others."
    },
    {
        img: "/images/career/our-goals.svg.png",
        title: "Our goals",
        desc: "Our mission is to provide you with successful solutions, so we always strive to equip your project with technologies and developers that match your goals perfectly."
    },
]

const Career = () => {
    return (
        <div>
            <Helmet>
                <title>DTK - Career</title>
            </Helmet>
            <Header />
            <div className="hero padTop">
                <div className="container">
                    <div className="main flex flex-col gap-18">
                        <div className="content text-center flex flex-col gap-3">
                            <h1 className="md:text-6xl sm:text-4xl text-2xl font-bold leading-snug text-[#FF0066]">
                                Welcome to DTechKrew <br className="inline" />
                                <span className="text-[#000] "> Where Ideas Thrive</span>
                            </h1>
                            <p className="md:text-lg text-base leading-normal text-center w-full heading_content text">
                                Join our vibrant team in the heart and contribute to projects that impact the global startup scene. Dive into a <br className="inline" /> workplace where your creativity knows no bounds!
                            </p>
                        </div>

                        <div className="content text-center flex flex-col gap-10">
                            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#FF0066]">
                                Browse through our open positions
                                <span className="text-[#000] "> and <br className="inline" />
                                    find where you can make your mark </span>
                            </h1>
                            <div className="flex flex-col gap-3">
                                <p className="font-semibold text-2xl">Java/Kotlin Engineer</p>
                                <p className="md:text-lg text-base leading-normal text-center heading_content text">
                                    We are looking for a Java/Kotlin Developer to join a U.S.-based project focused on simplifying the process of buying, selling, and <br className="inline" />
                                    managing cloud solutions.
                                </p>
                                <Link className="text-[#FF0066] underline text-2xl" to="#">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* // Core principles that define us */}
            <div className="CorePrincipal padTop">
                <div className="container">
                    <div className="flex flex-col gap-20">
                        <div className="main flex flex-col gap-20">
                            <h1 className="scroll-animate md:text-4xl text-2xl text-[#FF0066] text-center">
                                Core principles
                                <span className="text-[#000] "> that define us</span>
                            </h1>
                            <div className="scroll-animate grid md:grid-cols-3 grid-cols-1 gap-20">
                                {
                                    principles.map((items, index) => {
                                        return (
                                            <div key={index} className="flex flex-col gap-10">
                                                <img className="w-16" src={items.img} alt={items.img} />
                                                <div className="flex flex-col gap-2">
                                                    <h6 className="font-semibold text-2xl">{items.title}</h6>
                                                    <p className="text text-lg leading-snug">{items.desc}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        {/* //second  */}
                        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-40 gap-10">
                            <div className="slide-in-left flex flex-col gap-5 justify-center">
                                <h1 className="md:text-4xl text-2xl text-[#FF0066]">
                                    More Than
                                    <span className="text-[#000] "> Just a Job</span>
                                </h1>
                                <p className="md:text-lg text-base leading-normal w-full heading_content text">
                                    At DTechKrew, you’re not just another employee, but a vital
                                    part of our dynamic community. Enjoy the freedom of
                                    remote work, engage with cutting-edge technology, and
                                    make decisions that matter. We’re not just building
                                    software; we’re building futures
                                </p>
                            </div>
                            <div className="slide-in-right map">
                                <img src={figure} alt="python" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* // Team that makes everything possible */}
            <div className="CorePrincipal padTop">
                <div className="flex flex-col gap-20">
                    <div className="main flex flex-col gap-20">
                        <h1 className="scroll-animate md:text-4xl text-2xl text-[#FF0066] text-center">
                            Team that makes
                            <span className="text-[#000] "> everything possible</span>
                        </h1>
                        <img className="scroll-animate" src={gallery} alt={gallery} />
                    </div>
                </div>
            </div>

            {/* // ffooter  */}
            <Footer />
        </div>
    )
}

export default Career
