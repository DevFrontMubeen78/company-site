import Header from "../components/Header";
import PageLastSec from "../components/PageLastSec";
import WhyDTechKrew from "../components/WhyDTechKrew"
import EmpYouTeam from "../components/EmpYouTeam";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const IosDevelopers = {
    logos: [
        {
            title: "React Js",
            logo1: "/images/cs-development/react.png",
            alt: "React Js",
        },
        {
            title: "Python",
            logo1: "/images/cs-development/python.png",
            alt: "Python",
        },
        {
            title: ".Net",
            logo1: "/images/cs-development/net.png",
            alt: ".Net",
        },
        {
            title: "Node Js",
            logo1: "/images/cs-development/node.js.png",
            alt: "Node Js",
        },
        {
            title: "C++",
            logo1: "/images/cs-development/c++.png",
            alt: "C++",
        },
        {
            title: "Php",
            logo1: "/images/cs-development/php.png",
            alt: "Php",
        },
        {
            title: "Javascript",
            logo1: "/images/cs-development/JS.png",
            alt: "Javascript",
        },
        {
            title: "Sales Force",
            logo1: "/images/cs-development/salesforce.png",
            alt: "Sales Force",
        },
        {
            title: "Dev Oop",
            logo1: "/images/cs-development/devop.png",
            alt: "Dev Oop",
        },
    ],
    DesSer: [
        {
            title: "Strong programming skills",
            desc: "Our iOS developers excel in Swift and Objective-C, with deep expertise in essential frameworks like UIKit, Core Data, and SwiftUI. They write clean, efficient, and scalable code, ensuring your app is not only feature-rich but also easy to maintain and upgrade. Partner with us for a development process that guarantees quality and reliability.",
        },
        {
            title: "Credible reputation",
            desc: "At DTechKrew, we pride ourselves on a proven track record of delivering top-notch iOS applications for diverse industries. Our credible reputation is built on trust, quality, and a commitment to exceeding client expectations. Partner with us and experience the difference of working with a reliable and highly skilled team.",
        }
    ],
    DesSer1: [
        {
            title: "Flexibility and adaptability",
            desc: "Our iOS developers are highly flexible and adaptable, seamlessly integrating with your existing team or working independently to meet project demands. Whether it's scaling up quickly, adjusting to changing requirements, or adopting the latest technologies, we ensure your project stays on track and delivers the results you need.",
        },
        {
            title: "Cost-effective solutions",
            desc: "Get premium-quality iOS app development services without exceeding your budget. At DTechKrew, we offer cost-effective solutions tailored to your business needs, ensuring you receive exceptional value without compromising on quality. Build your app efficiently and affordably with our expert team.",
        }
    ],
    hireProcessing: [
        {
            title: "Review candidates",
            desc: "Hire an iOS app development team and evaluate each expert's skills and project portfolio. Review your options and choose the developers you wish to interview for your project to ensure the perfect match for your needs.",
        },
        {
            title: "Onboard a new developer",
            desc: "It's time to extend your team by hiring an iOS developer. Once onboarded, you can kick off your project with your new team member, whether on a part-time or full-time basis, and accelerate your development process.",
        }
    ],
    hireProcessing1: [
        {
            title: "Conduct interviews",
            desc: "Gain valuable insights into our developers’ experience and aspirations through interviews, allowing you to assess how well they align with your company culture and project requirements for optimal collaboration.",
        },
    ],
    ProductsTypes: [
        {
            title: "Advanced iOS development",
            desc: "Our developers create reliable, feature-rich applications designed specifically for iOS platforms. With our expert team, you’ll receive a unique, secure, and high-performing app that not only meets your needs but also stands out in the competitive market.",
        },
        {
            title: "Debugging and testing",
            desc: "We implement top-tier quality assurance practices, including thorough testing and debugging, to enhance your app’s performance. This ensures stability and efficiency, even as user demand grows.",
        },
        {
            title: "Maintenance and support",
            desc: "We provide top-notch iOS maintenance and support. DTechKrew’s developers continuously monitor app performance, implement security updates, and identify opportunities for future improvements to ensure your app stays secure and performs at its best.",
        }
    ],
    ProductsTypes1: [
        {
            title: "Mobile app development",
            desc: "Objective-C offers exceptional scalability, growing seamlessly with your mobile project. It's an ideal choice for building robust mobile commerce solutions that can adapt to your business needs as they evolve.",
        },
        {
            title: "Objective-C integrations",
            desc: "Our dedicated developers are skilled in managing a variety of tasks, including migrating legacy systems, setting up on-demand tools, APIs, libraries, and more, ensuring smooth and efficient project execution.",
        },
        {
            title: "E-Learning Platforms",
            desc: "Provide your learners with a personalized and engaging experience on your platform. With advanced analytics, interactive content, and secure authentication, we ensure a seamless customer journey that delivers exceptional value and fosters long-term engagement.",
        },
    ]
};
const IosDeveloper = () => {
    return (
        <div>
            <Helmet>
                <title>DTK - Hire IOS Developers</title>
            </Helmet>
            <Header />
            <div
                style={{
                    backgroundImage:
                        "url('/images/web/hire-objective-c-developers-bg-scaled.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
                className="hero padTop"
            >
                <div className="container">
                    <div className="main flex flex-col gap-18">
                        <div className="content text-center flex flex-col gap-20">
                            <div className="content text-center flex flex-col gap-3">
                                <h1 className="md:text-5xl sm:text-4xl text-2xl font-bold leading-snug text-[#fff]">
                                    Hire iOS
                                    <span className="text-[#FF0066]"> Developers</span>
                                </h1>
                                <p className="md:text-lg text-base leading-normal text-center w-full heading_content text-[#fff]">
                                    Want to build a high-performing iOS app that delivers exceptional user experiences and meets your business goals? DTechKrew is here to help. With expertise in Swift and Objective-C, our developers create tailored iOS solutions that are sleek, fast, and intuitive. Leverage our staff augmentation services to scale your team and bring your app ideas to life with quality and precision.
                                </p>
                            </div>
                            <div className="text-center flex flex-col gap-3">
                                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#fff]">
                                    Benefits of Our iOS <br className="inline" />
                                    <span className="text-[#FF0066]"> Developers for Hire
                                    </span>
                                </h1>
                            </div>
                        </div>

                        <div className="corporate">
                            <div className="content_corporate grid md:grid-cols-2 grid-cols-1 xl:gap-40 md:gap-20 gap-10">
                                <div className="flex flex-col gap-20">
                                    {IosDevelopers.DesSer.map((items, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className="innertext flex flex-col gap-2"
                                            >
                                                <h6 className="font-bold text-2xl text-[#fff]">
                                                    {items.title}
                                                </h6>
                                                <p className="text-base text-[#fff]">{items.desc}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="flex flex-col gap-20">
                                    {IosDevelopers.DesSer1.map((items, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className="innertext flex flex-col gap-2"
                                            >
                                                <h6 className="font-bold text-2xl text-[#fff]">
                                                    {items.title}
                                                </h6>
                                                <p className="text-base text-[#fff]">{items.desc}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Types of Products */}
            <div className="ProductsTypes padTop">
                <div className="container">
                    <div className="main flex flex-col gap-16">
                        <div className="section_title text-center">
                            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#000]">
                                Types of Products <br className="inline" />
                                <span className="text-[#FF0066]"> IOS Developers Build</span>
                            </h1>
                        </div>
                        <div className="content_corporate grid md:grid-cols-2 grid-cols-1 xl:gap-40 md:gap-20 gap-10">
                            <div className="flex flex-col gap-20">
                                {IosDevelopers.ProductsTypes.map((items, index) => {
                                    return (
                                        <div key={index} className="innertext flex flex-col gap-2">
                                            <h6 className="font-bold text-2xl">{items.title}</h6>
                                            <p className="text-base text">{items.desc}</p>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="flex flex-col gap-20">
                                {IosDevelopers.ProductsTypes1.map((items, index) => {
                                    return (
                                        <div key={index} className="innertext flex flex-col gap-2">
                                            <h6 className="font-bold text-2xl">{items.title}</h6>
                                            <p className="text-base text">{items.desc}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* // skilled  */}
            <div style={{
                backgroundImage:
                    "url('/images/web/skilled.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
            }} className="skilled padTop">
                <div className="container">
                    <div className="flex flex-col md:gap-30 gap-20">
                        <div className="flex flex-col">
                            <h1 className="md:text-4xl text-2xl font-bold leading-snug text-black">
                                Need skilled iOS developers? <br className="inline" /> Turn to DTechKrew to get the best talents.
                            </h1>
                        </div>
                        <Link className="text py-2 bg-[#fff] px-10 rounded-full shadow-lg w-fit mx-auto md:mx-0" to="#"> Contact Us</Link>
                    </div>
                </div>
            </div>

            {/* Hire Processing */}
            <div className="DesignProcess padTop">
                <div className="container">
                    <div className="main flex flex-col gap-16">
                        <div className="section_title text-center">
                            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#000]">
                                Our Process
                                <span className="text-[#FF0066]"> of Hiring <br className="inline" /> iOS Developers</span>
                            </h1>
                        </div>
                        <div className="content_corporate grid md:grid-cols-2 grid-cols-1 xl:gap-40 md:gap-20 gap-10">
                            <div className="flex flex-col gap-20">
                                {IosDevelopers.hireProcessing.map((items, index) => {
                                    return (
                                        <div key={index} className="innertext flex flex-col gap-2">
                                            <h6 className="font-bold text-2xl">{items.title}</h6>
                                            <p className="text-base text">{items.desc}</p>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="flex flex-col gap-20">
                                {IosDevelopers.hireProcessing1.map((items, index) => {
                                    return (
                                        <div key={index} className="innertext flex flex-col gap-2">
                                            <h6 className="font-bold text-2xl">{items.title}</h6>
                                            <p className="text-base text">{items.desc}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Empower Your Team */}
            <EmpYouTeam />

            {/* intdustries We work */}
            <WhyDTechKrew />

            {/* last section  */}
            <PageLastSec />
        </div>
    );
};

export default IosDeveloper;


