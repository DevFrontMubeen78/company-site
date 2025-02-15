
import PageLastSec from "../components/PageLastSec";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BenefitsDTechKrew from "../components/BenefitsDTechKrew";
import StageOfDev from "../components/StageOfDev";
import IndWeWork from "../components/IndWeWork";
import { Helmet } from "react-helmet-async";

const DataSciences = {

    DScience: [
        {
            title: "AI-Powered Business Solutions",
            desc: "Harness the power of AI to drive innovation and efficiency across your business. Our AI solutions automate routine tasks, streamline operations, and empower your team to focus on strategic goals."
        },
        {
            title: "Advanced Data Analytics",
            desc: "Unlock the full potential of your data with advanced analytics. We help you identify trends, discover opportunities, and make informed decisions using state-of-the-art tools and techniques."
        },
        {
            title: "Natural Language Processing (NLP)",
            desc: "Enhance user interactions and automate text-based processes with NLP solutions. From chatbots to sentiment analysis, we help you create systems that understand and respond to human language effectively."
        },
    ],
    DScience1: [
        {
            title: "Custom Machine Learning Models",
            desc: "We develop machine learning models tailored to your specific business requirements. From recommendation engines to fraud detection, our solutions deliver data-driven insights and optimize performance."
        },
        {
            title: "Predictive Analytics & Forecasting",
            desc: "Stay ahead of the competition with predictive analytics. Our models forecast trends, predict customer behavior, and optimize resource allocation, giving you a data-driven edge."
        },
        {
            title: "AI Integration & Automation",
            desc: "Streamline your operations with AI-driven automation. We integrate intelligent systems into your workflows, reducing manual effort, increasing accuracy, and enhancing overall productivity."
        },
    ],
    stages: [
        {
            title: "Predictive Analytics & Forecasting",
            desc: "Defining the necessary skills, qualifications, and criteria needed for a candidate to excel in a specific role."
        },
        {
            title: "Employee Learning Initiatives:",
            desc: "We prioritize the growth and development of our workforce by offering a variety of learning opportunities. From professional skill-building workshops to educational sponsorships, we empower our team members to succeed both personally and professionally."
        },
        {
            title: "Job Offering",
            desc: "Extending a job offer to the selected candidate and moving forward with the employment process."
        }
    ],
    stages1: [
        {
            title: "Talent Sourcing",
            desc: "Proactively sourcing and pinpointing potential candidates using a variety of recruitment channels and job platforms."
        },
        {
            title: "Interviewing and Selection",
            desc: "Conducting interviews and assessments to evaluate candidates and ensure the best fit for the position."
        },
        {
            title: "Onboarding",
            desc: "Onboarding the new hire and supporting their smooth integration into the DTechKrew team."
        }
    ]

}
const DataScience = () => {
    return (
        <div>
            <Helmet>
                <title>DTK - Data Science & Ai Development</title>
            </Helmet>
            <Header />
            <div
                style={{
                    backgroundImage: "url('/images/cs-development/custom-software-development-services-bg-1-scaled.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
                className="hero padTop"
            >

                <div className="container">
                    <div className="main flex flex-col gap-18">
                        <div className="content text-center flex flex-col gap-3">
                            <h1 className="md:text-5xl sm:text-4xl text-2xl font-bold uppercase leading-snug text-[#fff]">Data Science & AI
                                <span className="text-[#FF0066]">  Development</span>
                            </h1>
                            <p className="md:text-lg text-base leading-normal text-center w-full heading_content text-[#fff]">
                                We are dedicated to creating end-to-end solutions for you. Partner with DTechKrews Data Science & AI development services to enjoy tailor-made products that perfectly fit your needs and goals.
                            </p>
                        </div>

                        <div className="corporate flex flex-col gap-16">
                            <div className="content text-center">
                                <h1 className="md:text-3xl text-2xl font-bold leading-snug text-[#fff]">Data Science &
                                    <span className="text-[#FF0066]">  AI Development</span>
                                </h1>
                            </div>
                            <div className="content_corporate grid md:grid-cols-2 grid-cols-1 xl:gap-40 md:gap-20 gap-10">
                                <div className="flex flex-col gap-20">
                                    {
                                        DataSciences.DScience.map((items, index) => {
                                            return (
                                                <div key={index} className="innertext flex flex-col gap-2">
                                                    <h6 className="font-bold text-2xl text-[#fff]">{items.title}</h6>
                                                    <p className="text-base text-[#fff]">{items.desc}</p>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                                <div className="flex flex-col gap-20">
                                    {
                                        DataSciences.DScience1.map((items, index) => {
                                            return (
                                                <div key={index} className="innertext flex flex-col gap-2">
                                                    <h6 className="font-bold text-2xl text-[#fff]">{items.title}</h6>
                                                    <p className="text-base text-[#fff]">{items.desc}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Benefits of DTechKrew */}
            <BenefitsDTechKrew />

            {/* stages of development */}
            <StageOfDev />

            {/* intdustries We work */}
            <IndWeWork />


            {/* last section  */}
            <PageLastSec />

            {/* footer  */}
            <Footer />
        </div>
    )
}

export default DataScience

