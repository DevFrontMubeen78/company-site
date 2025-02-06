
import PageLastSec from "../components/PageLastSec";
import Header from "../components/Header";
const DataSciences = {

    corporate: [
        {
            title: "Blood Donation Advocacy:",
            desc: "We actively engage in blood donation drives, emphasizing the significance of this vital contribution. Many of our team members are dedicated, regular donors, playing a part in supporting the health and welfare of our local and global communities."
        },
        {
            title: "Employee Learning Initiatives:",
            desc: "Investing in our workforce's growth, we provide diverse learning programs, including skill enhancement workshops and educational sponsorships. This empowers our team to excel both personally and professionally."
        },
    ],
    corporate1: [
        {
            title: "Stands with Ukraine:",
            desc: "Supporting Our Armed Forces: We proudly support our armed forces by donating funds and resources to meet their essential needs and initiatives, ensuring they receive the best possible assistance."
        },
        {
            title: "Community Engagement:",
            desc: "We enrich our local communities through outreach programs, supporting local events, sponsoring educational initiatives, and volunteering our time. Our commitment is to make a positive impact and strengthen our connections close to home."
        },
    ],
    stages: [
        {
            title: "Defining needs and requirements",
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
                                <span className="text-[#FF0066]">  Development Services</span>
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
                                        DataSciences.corporate.map((items, index) => {
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
                                        DataSciences.corporate1.map((items, index) => {
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

            {/* corportate stage */}
            <div className="corporate padTop">
                <div className="container">
                    <div className="main flex flex-col gap-16">
                        <div className="section_title text-center">
                            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#000]">Types of Applications Our
                                <span className="text-[#FF0066]"> Developers Build</span>
                            </h1>
                        </div>
                        <div className="content_corporate grid md:grid-cols-2 grid-cols-1 xl:gap-40 md:gap-20 gap-10">
                            <div className="flex flex-col gap-20">
                                {
                                    DataSciences.corporate.map((items, index) => {
                                        return (
                                            <div key={index} className="innertext flex flex-col gap-2">
                                                <h6 className="font-bold text-2xl">{items.title}</h6>
                                                <p className="text-base text">{items.desc}</p>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                            <div className="flex flex-col gap-20">
                                {
                                    DataSciences.corporate1.map((items, index) => {
                                        return (
                                            <div key={index} className="innertext flex flex-col gap-2">
                                                <h6 className="font-bold text-2xl">{items.title}</h6>
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

            {/* corportate stage */}
            <div className="corporate padTop">
                <div className="container">
                    <div className="main flex flex-col gap-16">
                        <div className="section_title text-center">
                            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#000]"> Our Process of Hiring
                                <span className="text-[#FF0066]"> Mobile App Developers</span>
                            </h1>
                        </div>
                        <div className="content_corporate grid md:grid-cols-2 grid-cols-1 xl:gap-40 md:gap-20 gap-10">
                            <div className="flex flex-col gap-20">
                                {
                                    DataSciences.corporate.map((items, index) => {
                                        return (
                                            <div key={index} className="innertext flex flex-col gap-2">
                                                <h6 className="font-bold text-2xl">{items.title}</h6>
                                                <p className="text-base text">{items.desc}</p>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                            <div className="flex flex-col gap-20">
                                {
                                    DataSciences.corporate1.map((items, index) => {
                                        return (
                                            <div key={index} className="innertext flex flex-col gap-2">
                                                <h6 className="font-bold text-2xl">{items.title}</h6>
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

            {/* corportate stage */}
            <div className="corporate padTop">
                <div className="container">
                    <div className="main flex flex-col gap-16">
                        <div className="section_title text-center">
                            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#000]">Why
                                <span className="text-[#FF0066]"> Why DTeckrew?</span>
                            </h1>
                        </div>
                        <div className="content_corporate grid md:grid-cols-2 grid-cols-1 xl:gap-40 md:gap-20 gap-10">
                            <div className="flex flex-col gap-20">
                                {
                                    DataSciences.corporate.map((items, index) => {
                                        return (
                                            <div key={index} className="innertext flex flex-col gap-2">
                                                <h6 className="font-bold text-2xl">{items.title}</h6>
                                                <p className="text-base text">{items.desc}</p>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                            <div className="flex flex-col gap-20">
                                {
                                    DataSciences.corporate1.map((items, index) => {
                                        return (
                                            <div key={index} className="innertext flex flex-col gap-2">
                                                <h6 className="font-bold text-2xl">{items.title}</h6>
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


            {/* last section  */}
            <PageLastSec />
        </div>
    )
}

export default DataScience

