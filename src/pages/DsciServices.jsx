import PageLastSec from "../components/PageLastSec";
import Header from "../components/Header";
import Footer from "../components/Footer";
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

const CsDevelopments = {
    DTechKrewBen: [
        {
            title: "Fully customized product",
            desc: "Start strong with a team of experts dedicated to delivering AI and data-driven solutions that align perfectly with your business needs and vision. We’ll discuss all project details upfront, ensuring every requirement is met with precision while staying within your budget.",
        },
        {
            title: "Scalability",
            desc: "In our Data Science and AI Development Services, we prioritize scalability to support your future growth. By integrating dependable, flexible, and scalable data science solutions with your existing data architecture, we ensure that your project is built to scale as your business evolves.",
        }
    ],
    DTechKrewBen1: [
        {
            title: "Cost-Efficiency",
            desc: "We value your time and resources, ensuring our AI and data science solutions are delivered within the agreed budget and timeline. By leveraging advanced algorithms and automating routine processes, our experts develop tailored solutions efficiently, combining speed with cost-effectiveness.",
        },
        {
            title: "Client orientation",
            desc: "At DTechKrew, we prioritize your needs and ensure a seamless experience with our Data Science & AI Development Services. Through clear communication and a proactive approach, we anticipate your requirements and exceed expectations at every stage of the development process.",
        }
    ]
};

const CsDevelopmentss = {
    stages: [
        {
            title: "Kickoff meeting",
            desc: "The initial phase ensures alignment between the team and client, setting clear objectives and expectations for project success.",
        },
        {
            title: "Discovery phase",
            desc: "Once we’ve collected and analyzed the essential data, we define the project’s goals, limitations, and scope, ensuring a clear, actionable plan that bridges the gap between vision and execution for seamless progress.",
        },
        {
            title: "Testing",
            desc: "We conduct thorough QA testing with both internal teams and external users. This collaborative approach uncovers areas for improvement, ensuring optimal performance. A detailed summary of the results is then provided for your review, ensuring complete transparency and quality assurance.",
        }
    ],
    stages1: [
        {
            title: "Gathering requirements",
            desc: "As a software development company, we focus on identifying key requirements critical to your project's success and selecting the right tools, technologies, and resources to execute it efficiently.",
        },
        {
            title: "Development",
            desc: "Our engineers kickstart the development process by creating a robust end-to-end solution, utilizing the ideal tech stack as outlined in the project roadmap, ensuring efficient execution and high-quality results.",
        },
        {
            title: "Deployment & Support",
            desc: "Our team offers full technical support while sharing expertise with your internal team to ensure smooth knowledge transfer. We also assist with marketing efforts pre- and post-deployment, maximizing your product’s impact and success.",
        }
    ]
};

const CsDevelopmentsw = {
    IndWork: [
        {
            title: "Manufacturing",
            desc: "We develop efficient IoT systems for the industrial sector, empowering factories with complete control and real-time monitoring of their production systems.",
            useCases: [
                "Monitoring the production flow",
                "Supply chain optimization",
                "Remote tracking of equipment",
            ],
        },
    ],
    IndWork1: [
        {
            title: "Agriculture",
            desc: "IoT in agriculture revolutionizes farming practices by enabling smart, data-driven solutions for improved efficiency and productivity.",
            useCases: [
                "Control of internal processes",
                "Greenhouse automation",
                "Monitoring climate conditions",
            ],
        },
    ],
};

const DsciServices = () => {
    return (
        <div>
            <Helmet>
                <title>DTK - Data Science & Ai Development Services</title>
            </Helmet>
            <Header />
            <div className="padTop">
                <div className="container">
                    <div className="main flex flex-col gap-18">
                        <div className="content text-center flex flex-col gap-3">
                            <h1 className="md:text-5xl sm:text-4xl text-2xl font-bold uppercase leading-snug text-[#000]">Data Science & AI
                                <span className="text-[#FF0066]">  Development Services</span>
                            </h1>
                            <p className="md:text-lg text-base leading-normal text-center w-full heading_content text">
                                We are dedicated to creating end-to-end solutions for you. Partner with DTechKrews Data Science & AI development services to enjoy tailor-made products that perfectly fit your needs and goals.
                            </p>
                        </div>

                        <div className="corporate flex flex-col gap-16">
                            <div className="content text-center">
                                <h1 className="md:text-3xl text-2xl font-bold leading-snug text-[#000]">Data Science &
                                    <span className="text-[#FF0066]">  AI Development</span>
                                </h1>
                            </div>
                            <div className="content_corporate grid md:grid-cols-2 grid-cols-1 xl:gap-40 md:gap-20 gap-10">
                                <div className="flex flex-col gap-20">
                                    {
                                        DataSciences.DScience.map((items, index) => {
                                            return (
                                                <div key={index} className="innertext flex flex-col gap-2">
                                                    <h6 className="font-bold text-2xl text-[#000]">{items.title}</h6>
                                                    <p className="text-base text">{items.desc}</p>
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
                                                    <h6 className="font-bold text-2xl text-[#000]">{items.title}</h6>
                                                    <p className="text-base text">{items.desc}</p>
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
            <div className="DTechKrewBen padTop">
                <div className="container">
                    <div className="main flex flex-col gap-16">
                        <div className="scroll-animate section_title text-center">
                            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#000]">
                                Benefits of DTechKrew Data Science &
                                <span className="text-[#FF0066]"> <br className="inline" />
                                    AI Development Services
                                </span>
                            </h1>
                        </div>
                        <div className="content_corporate grid md:grid-cols-2 grid-cols-1 xl:gap-40 md:gap-20 gap-10">
                            <div className="slide-in-left flex flex-col gap-20">
                                {CsDevelopments.DTechKrewBen.map((items, index) => {
                                    return (
                                        <div key={index} className="innertext flex flex-col gap-2">
                                            <h6 className="font-bold text-2xl">{items.title}</h6>
                                            <p className="text-base text">{items.desc}</p>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="slide-in-right flex flex-col gap-20">
                                {CsDevelopments.DTechKrewBen1.map((items, index) => {
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

            {/* stages of development */}
            <div className="hireProcessing padTop">
                <div className="container">
                    <div className="main flex flex-col gap-16">
                        <div className="scroll-animate section_title text-center">
                            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#000]">
                                Stages of
                                <span className="text-[#FF0066]"> Development</span>
                            </h1>
                        </div>
                        <div className="content_corporate grid md:grid-cols-2 grid-cols-1 xl:gap-40 md:gap-20 gap-10">
                            <div className="slide-in-left flex flex-col gap-20">
                                {CsDevelopmentss.stages.map((items, index) => {
                                    return (
                                        <div key={index} className="innertext flex flex-col gap-2">
                                            <h6 className="font-bold text-2xl">{items.title}</h6>
                                            <p className="text-base text">{items.desc}</p>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="slide-in-right flex flex-col gap-20">
                                {CsDevelopmentss.stages1.map((items, index) => {
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

            {/* intdustries We work */}
            <div className="IndWeWork padTop">
                <div className="container">
                    <div className="main flex flex-col gap-16">
                        <div className="scroll-animate section_title text-center">
                            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#FF0066]">
                                Industries <span className="text-[#000]">We Work With</span>
                            </h1>
                        </div>
                        <div className="content_corporate grid md:grid-cols-2 grid-cols-1 xl:gap-40 md:gap-20 gap-10">

                            {/* Manufacturing Section */}
                            <div className="slide-in-left flex flex-col gap-20">
                                {CsDevelopmentsw.IndWork.map((item, index) => (
                                    <div key={index} className="innertext flex flex-col gap-8">
                                        <div className="flex flex-col gap-3">
                                            <h6 className="font-bold text-2xl">{item.title}</h6>
                                            <p className="text-base text text-base leading-snug">{item.desc}</p>
                                        </div>
                                        <div className="list flex flex-col gap-2">
                                            <h6 className="uppercase">Use Cases:</h6>
                                            <ul className="list-disc ms-8">
                                                {item.useCases.map((useCase, i) => (
                                                    <li key={i} className="text-base text">{useCase}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Agriculture Section */}
                            <div className="slide-in-right flex flex-col gap-20">
                                {CsDevelopmentsw.IndWork1.map((item, index) => (
                                    <div key={index} className="innertext flex flex-col gap-8">
                                        <div className="flex flex-col gap-3">
                                            <h6 className="font-bold text-2xl">{item.title}</h6>
                                            <p className="text-base text text-base leading-snug">{item.desc}</p>
                                        </div>
                                        <div className="list flex flex-col gap-2">
                                            <h6 className="uppercase">Use Cases:</h6>
                                            <ul className="list-disc ms-8">
                                                {item.useCases.map((useCase, i) => (
                                                    <li key={i} className="text-base text">{useCase}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            {/* last section  */}
            <PageLastSec />

            {/* footer  */}
            <Footer />
        </div>
    )
}

export default DsciServices

