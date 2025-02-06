import Header from "../components/Header";
import PageLastSec from "../components/PageLastSec";
import WhyDTechKrew from "../components/WhyDTechKrew"
import EmpYouTeam from "../components/EmpYouTeam";
import { Link } from "react-router-dom";

const HireUiUXs = {
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
            desc: "Our UI/UX designers have extensive experience in creating intuitive interfaces and seamless user journeys, utilizing industry-standard tools and best practices. By hiring our UI/UX designers, you’ll get a visually stunning app with user-centric designs that ensure both functionality and an exceptional user experience.",
        },
        {
            title: "Credible reputation",
            desc: "We have successfully designed exceptional user experiences for industries such as e-commerce, fintech, IoT, and more. Our clients trust our UI/UX designers for hire because of our dedication to delivering top-tier expertise and tailored design solutions that align perfectly with your unique requirements.",
        }
    ],
    DesSer1: [
        {
            title: "Flexibility and adaptability",
            desc: "Do you prefer Agile’s flexible, iterative design approach or Waterfall’s detailed, sequential process? Our UI/UX designers excel at adapting to both methodologies. At DTechKrew, we align with your preferred workflow to deliver user-centric designs and ensure a seamless, collaborative process with exceptional project outcomes.",
        },
        {
            title: "Cost-effective solutions",
            desc: "Hire UI/UX designers from DTechKrew to avoid the high costs associated with full-time hires, including training and overhead expenses. This approach allows you to optimize your budget while focusing on delivering innovative and user-centric designs that drive growth and success.",
        }
    ],
    hireProcessing: [
        {
            title: "Review candidates",
            desc: "Hire an Objective-C app development team and evaluate each expert's skills and project portfolio. Review your options and choose the developers you wish to interview for your project.",
        },
        {
            title: "Onboard a new developer",
            desc: "It's time to extend your team by hiring an Objective-C developer. Once onboarded, you can begin your project with your new team member, whether on a part-time or full-time basis.",
        }
    ],
    hireProcessing1: [
        {
            title: "Conduct interviews",
            desc: "You can gain insights into our developers’ experience and aspirations through interviews, helping you assess how well they align with your company culture and project needs.",
        },
    ],
    ProductsTypes: [
        {
            title: "Advanced iOS development",
            desc: "Our developers create reliable, feature-rich applications tailored for iOS platforms. With our expert team, you’ll receive a unique, secure, and high-performing app that stands out in the market.",
        },
        {
            title: "Debugging and testing",
            desc: "We implement top-tier quality assurance practices, including comprehensive testing and debugging, to enhance your app's performance and maintain its stability and efficiency as user demand increases.",
        },
        {
            title: "Maintenance and support",
            desc: "We provide top-notch Objective-C maintenance and support. DTechKrew’s developers monitor performance, implement security updates, and identify future opportunities for improvement.",
        }
    ],
    ProductsTypes1: [
        {
            title: "Mobile app development",
            desc: "Objective-C provides exceptional scalability that grows with your online project, making it a preferred choice for mobile commerce solutions.",
        },
        {
            title: "Objective-C integrations",
            desc: "Our dedicated developers are skilled in managing diverse tasks, from migrating legacy systems to setting up on-demand tools, APIs, libraries, and more.",
        },
        {
            title: "E-Learning Platforms",
            desc: "Provide your learners with a customized, engaging experience on your platform. With advanced analytics, interactive content, and secure authentication, we ensure your customer journey stands out and delivers exceptional value.",
        },
    ]
};
const HireUiUX = () => {
    return (
        <div>
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
                                    Hire UI/UX
                                    <span className="text-[#FF0066]"> Designer</span>
                                </h1>
                                <p className="md:text-lg text-base leading-normal text-center w-full heading_content text-[#fff]">
                                    Want to create an efficient and user-friendly app that captivates your target audience? DTechKrew can help. Our expert UI/UX designers specialize in crafting seamless, intuitive, and visually stunning user experiences. Choose our design services to elevate your app and deliver quality custom solutions tailored to your needs.
                                </p>
                            </div>
                            <div className="text-center flex flex-col gap-3">
                                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#fff]">
                                    Benefits of Our UI/UX
                                    <br className="inline" />
                                    <span className="text-[#FF0066]">  Designer for Hire
                                    </span>
                                </h1>
                            </div>
                        </div>

                        <div className="corporate">
                            <div className="content_corporate grid md:grid-cols-2 grid-cols-1 xl:gap-40 md:gap-20 gap-10">
                                <div className="flex flex-col gap-20">
                                    {HireUiUXs.DesSer.map((items, index) => {
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
                                    {HireUiUXs.DesSer1.map((items, index) => {
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
                                <span className="text-[#FF0066]"> UI/UX Designer Build</span>
                            </h1>
                        </div>
                        <div className="content_corporate grid md:grid-cols-2 grid-cols-1 xl:gap-40 md:gap-20 gap-10">
                            <div className="flex flex-col gap-20">
                                {HireUiUXs.ProductsTypes.map((items, index) => {
                                    return (
                                        <div key={index} className="innertext flex flex-col gap-2">
                                            <h6 className="font-bold text-2xl">{items.title}</h6>
                                            <p className="text-base text">{items.desc}</p>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="flex flex-col gap-20">
                                {HireUiUXs.ProductsTypes1.map((items, index) => {
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
                                Need skilled UI/UX Designer? <br className="inline" /> Turn to DTechKrew to get the best talents.
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
                                Our Process of Hiring <br className="inline" />
                                <span className="text-[#FF0066]"> Objective-C Developers</span>
                            </h1>
                        </div>
                        <div className="content_corporate grid md:grid-cols-2 grid-cols-1 xl:gap-40 md:gap-20 gap-10">
                            <div className="flex flex-col gap-20">
                                {HireUiUXs.hireProcessing.map((items, index) => {
                                    return (
                                        <div key={index} className="innertext flex flex-col gap-2">
                                            <h6 className="font-bold text-2xl">{items.title}</h6>
                                            <p className="text-base text">{items.desc}</p>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="flex flex-col gap-20">
                                {HireUiUXs.hireProcessing1.map((items, index) => {
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

export default HireUiUX;


