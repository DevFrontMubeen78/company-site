import Header from "../components/Header";
import Footer from "../components/Footer";
import PageLastSec from "../components/PageLastSec";
import WhyDTechKrew from "../components/WhyDTechKrew"
import EmpYouTeam from "../components/EmpYouTeam";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const HireDataScientistss = {
    DesSer: [
        {
            title: "Access to Specialized Expertise",
            desc: "Hiring data scientists provides you with skilled professionals proficient in advanced data analysis, machine learning, and AI. They bring deep domain knowledge and cutting-edge tools to solve complex business challenges and unlock valuable insights from your data.",
        },
        {
            title: "Scalable Solutions for Business Growth",
            desc: "Data scientists for hire offer scalable solutions tailored to your evolving business needs. Whether you're launching a new product or analyzing market trends, their expertise ensures you have the right resources to support growth and innovation.",
        }
    ],
    DesSer1: [
        {
            title: "Cost-Effective Talent Solutions",
            desc: "By hiring data scientists on a project or contract basis, you avoid the high overhead costs of full-time hires. This flexible approach helps you allocate resources efficiently, enabling you to invest in other critical areas of your business.",
        },
        {
            title: "Faster Project Delivery",
            desc: "With experienced data scientists on your team, you can accelerate project timelines. Their efficiency and expertise allow for quicker analysis, development, and deployment of data-driven strategies, giving you a competitive edge in the market.",
        }
    ],
    hireProcessing: [
        {
            title: "Understanding Your Needs",
            desc: "We begin by thoroughly understanding your business requirements, project goals, and the specific skills needed for your data science development. By aligning with your vision, we ensure the candidates we select are the perfect fit for your unique project.",
        },
        {
            title: "Expert Interviews and Evaluations",
            desc: "Once we identify suitable candidates, we conduct detailed interviews to assess their problem-solving abilities, technical knowledge, and cultural fit. This step ensures the data science developer we hire aligns with your team and project requirements.",
        }
    ],
    hireProcessing1: [
        {
            title: "Rigorous Candidate Screening",
            desc: "Our hiring process involves a comprehensive screening of data science developers, including technical assessments, interviews, and evaluating past work. We focus on skills like data modeling, machine learning, and statistical analysis to ensure our developers excel in their expertise.",
        },
        {
            title: "Onboarding and Integration",
            desc: "After selecting the right developer, we ensure a smooth onboarding process. Our team facilitates seamless integration into your existing workflows, providing full support to help them hit the ground running and contribute to your project from day one.",
        }
    ],
    ProductsTypes: [
        {
            title: "Predictive Analytics Models",
            desc: "Data scientists design predictive models that forecast trends, customer behavior, and market shifts. These solutions enable businesses to make proactive, data-driven decisions and improve operational efficiency.",
        },
        {
            title: "Data Visualization Dashboards",
            desc: "Data scientists build interactive dashboards that simplify complex datasets, making insights accessible and actionable for stakeholders. These tools enhance decision-making across all business levels.",
        },
        {
            title: "Natural Language Processing (NLP) Tools",
            desc: "NLP solutions analyze and interpret human language, enabling applications like chatbots, sentiment analysis, and language translation. These tools enhance customer support and automate communication processes.",
        }
    ],
    ProductsTypes1: [
        {
            title: "Recommendation Systems",
            desc: "Tailored recommendation systems help businesses deliver personalized customer experiences. These solutions are widely used in e-commerce, streaming platforms, and content delivery services to boost engagement and conversions.",
        },
        {
            title: "Customer Segmentation Tools",
            desc: "Data scientists develop tools to segment customers based on behavior, preferences, and demographics. These solutions enable businesses to target the right audience with personalized marketing strategies, improving customer retention and sales.",
        },
        {
            title: "Supply Chain Optimization Systems",
            desc: "Data scientists design systems to optimize supply chain operations, improving inventory management, logistics, and delivery timelines. These solutions reduce costs and enhance overall efficiency for businesses.",
        },
    ]
};
const HireDataScientists = () => {
    return (
        <div>
            <Helmet>
                <title>DTK - Hire Data Scientists</title>
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
                                    Hire Data
                                    <span className="text-[#FF0066]"> Scientists</span>
                                </h1>
                                <p className="md:text-lg text-base leading-normal text-center w-full heading_content text-[#fff]">
                                    Want to leverage data to drive impactful business decisions? DTechKrew can help. Our expert data scientists specialize in building efficient, data-driven solutions tailored to your needs. Choose our data science services to uncover insights, optimize processes, and create innovative solutions that captivate your audience and fuel your success.
                                </p>
                            </div>
                            <div className="text-center flex flex-col gap-3">
                                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#fff]">
                                    Benefits of Data
                                    <br className="inline" />
                                    <span className="text-[#FF0066]"> Scientists for Hire
                                    </span>
                                </h1>
                            </div>
                        </div>

                        <div className="corporate">
                            <div className="content_corporate grid md:grid-cols-2 grid-cols-1 xl:gap-40 md:gap-20 gap-10">
                                <div className="flex flex-col gap-20">
                                    {HireDataScientistss.DesSer.map((items, index) => {
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
                                    {HireDataScientistss.DesSer1.map((items, index) => {
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
                                <span className="text-[#FF0066]"> Data Scientists Build </span>
                            </h1>
                        </div>
                        <div className="content_corporate grid md:grid-cols-2 grid-cols-1 xl:gap-40 md:gap-20 gap-10">
                            <div className="slide-in-left flex flex-col gap-20">
                                {HireDataScientistss.ProductsTypes.map((items, index) => {
                                    return (
                                        <div key={index} className="innertext flex flex-col gap-2">
                                            <h6 className="font-bold text-2xl">{items.title}</h6>
                                            <p className="text-base text">{items.desc}</p>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="slide-in-right flex flex-col gap-20">
                                {HireDataScientistss.ProductsTypes1.map((items, index) => {
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
                        <div className="scroll-animate flex flex-col">
                            <h1 className="md:text-4xl text-2xl font-bold leading-snug text-black">
                                Need skilled Data Scientists? <br className="inline" /> Turn to DTechKrew to get the best talents.
                            </h1>
                        </div>
                        <Link className="scroll-animate text py-2 bg-[#fff] px-10 rounded-full shadow-lg w-fit mx-auto md:mx-0" to="/Contact-us"> Contact Us</Link>
                    </div>
                </div>
            </div>

            {/* Hire Processing */}
            <div className="DesignProcess padTop">
                <div className="container">
                    <div className="main flex flex-col gap-16">
                        <div className="scroll-animate section_title text-center">
                            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#000]">
                                Our Process of Hiring  <br className="inline" />
                                <span className="text-[#FF0066]"> Data Science Developers </span>
                            </h1>
                        </div>
                        <div className="content_corporate grid md:grid-cols-2 grid-cols-1 xl:gap-40 md:gap-20 gap-10">
                            <div className="slide-in-left flex flex-col gap-20">
                                {HireDataScientistss.hireProcessing.map((items, index) => {
                                    return (
                                        <div key={index} className="innertext flex flex-col gap-2">
                                            <h6 className="font-bold text-2xl">{items.title}</h6>
                                            <p className="text-base text">{items.desc}</p>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="slide-in-right flex flex-col gap-20">
                                {HireDataScientistss.hireProcessing1.map((items, index) => {
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

export default HireDataScientists;


