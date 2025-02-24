import Header from "../components/Header";
import Footer from "../components/Footer";
import PageLastSec from "../components/PageLastSec";
import WhyDTechKrew from "../components/WhyDTechKrew"
import EmpYouTeam from "../components/EmpYouTeam";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const HireAndroids = {
    DesSer: [
        {
            title: "Strong programming skills",
            desc: "Our developers have extensive experience with Java and Kotlin, including expertise in key libraries and frameworks such as Android SDK and Jetpack. By hiring our Android developers, you’ll receive an app built with clean, efficient, and maintainable code, ensuring top performance and scalability.",
        },
        {
            title: "Credible reputation",
            desc: "Do you prefer Agile’s flexible, iterative approach or Waterfall’s detailed, sequential process? Our Android developers are skilled in both project management methodologies. At DTechKrew, we align with your chosen workflow to ensure seamless collaboration and deliver high-quality project results.",
        }
    ],
    DesSer1: [
        {
            title: "Flexibility and adaptability",
            desc: "Do you prefer Agile’s flexible, iterative approach or Waterfall’s detailed, sequential process? Our Android developers are skilled in both project management methodologies. At DTechKrew, we align with your chosen workflow to ensure seamless collaboration and deliver high-quality project results.",
        },
        {
            title: "Cost-effective solutions",
            desc: "Hire Android developers from DTechKrew to avoid the high costs associated with full-time hires, including training and overhead expenses. This approach helps you optimize your budget and allocate more resources toward growth and innovation.",
        }
    ],
    hireProcessing: [
        {
            title: "Review candidates",
            desc: "Evaluate each expert’s skills and project portfolio when hiring an Android app development team. Review your options and select the developers you wish to interview to ensure the perfect fit for your project.",
        },
        {
            title: "Onboard a new developer",
            desc: "It's time to extend your team by hiring an Android developer. Once onboarded, you can begin your project with your new team member, whether on a part-time or full-time basis.",
        }
    ],
    hireProcessing1: [
        {
            title: "Conduct interviews",
            desc: "You can gain insights into our Android developers’ experience and aspirations through interviews, helping you assess how well they align with your company culture and project needs.",
        },
    ],
    ProductsTypes: [
        {
            title: "Advanced Android development",
            desc: "Our developers create reliable, feature-rich applications tailored for Android platforms. With our expert team, you’ll receive a unique, secure, and high-performing app that stands out in the market.",
        },
        {
            title: "Debugging and testing",
            desc: "We implement top-tier quality assurance practices, including comprehensive testing and debugging, to enhance your Android app's performance and maintain its stability and efficiency as user demand increases.",
        },
        {
            title: "Top-Notch Android App Maintenance and Support",
            desc: "We provide top-notch Android app maintenance and support. DTechKrew’s developers monitor performance, implement security updates, and identify future opportunities for improvement.",
        }
    ],
    ProductsTypes1: [
        {
            title: "Android app development",
            desc: "Android provides exceptional scalability that grows with your online project, making it a preferred choice for mobile commerce solutions.",
        },
        {
            title: "Objective-C integrations",
            desc: "Our dedicated Android developers are skilled in managing diverse tasks, from migrating legacy systems to setting up on-demand tools, APIs, libraries, and more.",
        },
        {
            title: "Customized and Engaging Android App Experience",
            desc: "Provide your users with a customized, engaging experience on your Android platform. With advanced analytics, interactive content, and secure authentication, we ensure your app delivers a seamless and valuable journey for your users.",
        },
    ]
};
const HireAndroid = () => {
    return (
        <div>
            <Helmet>
                <title>DTK - Hire Android Developers</title>
            </Helmet>
            <Header />
            <div className="hero padTop bg-[#001876]">
                <div className="container">
                    <div className="main flex flex-col gap-18">
                        <div className="content text-center flex flex-col gap-20">
                            <div className="content text-center flex flex-col gap-3">
                                <h1 className="md:text-5xl sm:text-4xl text-2xl font-bold leading-snug text-[#fff]">
                                    Hire Android
                                    <span className="text-[#FF0066]"> Developers</span>
                                </h1>
                                <p className="md:text-lg text-base leading-normal text-center w-full heading_content text-[#fff]">
                                    It is time to extend your team by hiring an Android developer. Once onboarded, you can begin your project with your new team member, whether on a part-time or full-time basis, and drive your Android app development forward.
                                </p>
                            </div>
                            <div className="text-center flex flex-col gap-3">
                                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#fff]">
                                    Benefits of Our Android  <br className="inline" />
                                    <span className="text-[#FF0066]"> Developers for Hire
                                    </span>
                                </h1>
                            </div>
                        </div>

                        <div className="corporate">
                            <div className="content_corporate grid md:grid-cols-2 grid-cols-1 xl:gap-40 md:gap-20 gap-10">
                                <div className="flex flex-col gap-20">
                                    {HireAndroids.DesSer.map((items, index) => {
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
                                    {HireAndroids.DesSer1.map((items, index) => {
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
                        <div className="scroll-animate section_title text-center">
                            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#000]">
                                Types of Products <br className="inline" />
                                <span className="text-[#FF0066]"> Android Developers Build</span>
                            </h1>
                        </div>
                        <div className="content_corporate grid md:grid-cols-2 grid-cols-1 xl:gap-40 md:gap-20 gap-10">
                            <div className="slide-in-left flex flex-col gap-20">
                                {HireAndroids.ProductsTypes.map((items, index) => {
                                    return (
                                        <div key={index} className="innertext flex flex-col gap-2">
                                            <h6 className="font-bold text-2xl">{items.title}</h6>
                                            <p className="text-base text">{items.desc}</p>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="slide-in-right flex flex-col gap-20">
                                {HireAndroids.ProductsTypes1.map((items, index) => {
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
                            <h1 className="scroll-animate md:text-4xl text-2xl font-bold leading-snug text-black">
                                Need skilled Android developers? <br className="inline" /> Turn to DTechKrew to get the best talents.
                            </h1>
                        </div>
                        <Link className="scroll-animate border border-[#e1e0e0] py-2 px-4 shadow bg-[#fff] rounded-full text-[#000] text-lg max-w-max hover:bg-[#FF0066] hover:text-[#fff]" to="/Contact-us"> Contact Us</Link>
                    </div>
                </div>
            </div>

            {/* Hire Processing */}
            <div className="DesignProcess padTop">
                <div className="container">
                    <div className="main flex flex-col gap-16">
                        <div className="scroll-animate section_title text-center">
                            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#000]">
                                Our Process
                                <span className="text-[#FF0066]"> of Hiring Mobile App <br className="inline" /> Developers</span>
                            </h1>
                        </div>
                        <div className="content_corporate grid md:grid-cols-2 grid-cols-1 xl:gap-40 md:gap-20 gap-10">
                            <div className="slide-in-left flex flex-col gap-20">
                                {HireAndroids.hireProcessing.map((items, index) => {
                                    return (
                                        <div key={index} className="innertext flex flex-col gap-2">
                                            <h6 className="font-bold text-2xl">{items.title}</h6>
                                            <p className="text-base text">{items.desc}</p>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="slide-in-right flex flex-col gap-20">
                                {HireAndroids.hireProcessing1.map((items, index) => {
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

            {/* footer  */}
            <Footer />
        </div>
    );
};

export default HireAndroid;


