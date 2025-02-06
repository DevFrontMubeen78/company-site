// complete page 
import Header from "../components/Header";
import GoogleLogo from "/images/about/Vector.png"
import gallery from "/images/about/every.png"
import map from "/images/about/maps.png"
import ReactStars from "react-rating-stars-component";
import PageLastSec from "../components/PageLastSec";
import { Link } from "react-router-dom";

const aboutContent = {
    logos: [
        {
            logo1: "/images/about/donw1.png",
            alt: "donw1"
        },
        {
            logo1: "/images/about/down2.png",
            alt: "donw1"
        },
        {
            logo1: "/images/about/down3.png",
            alt: "donw1"
        },
        {
            logo1: "/images/about/down4.png",
            alt: "donw1"
        },
        {
            logo1: "/images/about/down5.png",
            alt: "donw1"
        },
        {
            logo1: "/images/about/down2.png",
            alt: "donw1"
        },
        {
            logo1: "/images/about/down6.png",
            alt: "donw1"
        },
        {
            logo1: "/images/about/down7.png",
            alt: "donw1"
        },
        {
            logo1: "/images/about/down8.png",
            alt: "donw1"
        },
        {
            logo1: "/images/about/down9.png",
            alt: "donw1"
        },
        {
            logo1: "/images/about/down10.png",
            alt: "donw1"
        },
        {
            logo1: "/images/about/down11.png",
            alt: "donw1"
        },
    ],
    corporate: [
        {
            title: "Blood Donation Advocacy:",
            desc: "We actively engage in blood donation drives, emphasizing the significance of this vital contribution. Many of our team members are dedicated, regular donors, playing a part in supporting the health and welfare of our local and global communities."
        },
        {
            title: "Employee Learning Initiatives:",
            desc: "Investing in our workforce's growth, we provide diverse learning programs, including skill enhancement workshops and educational sponsorships. This empowers our team to excel both personally and professionally."
        },
        {
            title: "Human Rights and Labor Practices:",
            desc: "We uphold human rights and fair labor practices, ensuring a respectful and equitable workplace. Our inclusive policies promote equal opportunities, fostering a culture of respect, dignity, and continuous growth for all individuals."
        }
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
        {
            title: "Volunteering Commitment:",
            desc: "Embracing the spirit of giving back, we actively encourage and facilitate volunteering among our team members. From helping at local shelters to participating in environmental clean-ups or mentoring youth, we believe in the transformative power of volunteering."
        }
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
    ],
    btns: [
        {
            btnName: "Islamabad",
            path: ""

        },
        {
            btnName: "Karachi",
            path: ""

        },
        {
            btnName: "Okara",
            path: ""

        }
    ]

}

const About = () => {
    return (
        <div>
            <Header />
            {/* About Hero Section */}
            <div
                style={{
                    backgroundImage: "url('/images/about/digital-product-design-bg-scaled.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
                className="hero padTop"
            >
                <div className="container">
                    <div className="main flex flex-col gap-14">
                        <div className="content text-center flex flex-col gap-3">
                            <h1 className="md:text-6xl sm:text-4xl text-2xl font-bold uppercase leading-snug text-[#FF0066]">Software <br />
                                <span className="text-[#fff]"> Development Company</span>
                            </h1>
                            <p className="md:text-lg text-base leading-normal text-center md:w-6/12 w-full heading_content text-[#fff]">
                                DTechKrew combines cutting-edge technology with deep industry expertise to deliver impactful, scalable results.
                            </p>
                        </div>
                        <div className="cardAbout">
                            <div className="flex flex-col gap-5 bg-[#fff] items-center text-center rounded-xl p-10 w-80">
                                <img className="w-32" src={GoogleLogo} alt="GoogleLogo" />
                                <div className="cardContent">
                                    <h2>Average Referral Rating 4.9/5</h2>
                                    <div className="flex gap-4 items-center justify-center">
                                        <p>4.9</p>
                                        <ReactStars
                                            count={5}
                                            // onChange={ratingChanged}
                                            size={24}
                                            activeColor="#ffd700"
                                        />,
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* get started */}
            <div className="getStarted padTop">
                <div className="container">
                    <div className="main flex flex-col gap-18">
                        <div className="content text-center flex flex-col gap-8">
                            <div className="flex flex-col gap-1">
                                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#FF0066]">Get started
                                    <span className="text-[#000]"> with us</span>
                                </h1>
                                <p className="md:text-lg text-base leading-normal text-center md:w-6/12 w-full heading_content text">
                                    Start with us today—fill out the form, and our sales team will help tailor the perfect solution for you.
                                </p>
                            </div>
                            <Link className="bg-[#fff] p-3 rounded-full w-max block mx-auto px-10" to="#">Contact sales</Link>
                        </div>
                        <div className="grid grid-cols-12 md:gap-10 gap-5">
                            {/* Left Side Box */}
                            <div className="md:col-span-4 col-span-12 rounded-lg bg-white md:p-8 p-5">
                                <h6 className="xl:text-3xl text-2xl font-bold leading-snug text-[#FF0066]">
                                    Innovative Solutions
                                    <span className="text-black"> for Business Growth</span>
                                </h6>
                            </div>

                            {/* Right Side Box */}
                            <div className="md:col-span-8 col-span-12 rounded-lg bg-white md:p-8 p-5 flex flex-col md:gap-5 gap-3">
                                <p className="md:text-lg text-base leading-relaxed text-gray-700">
                                    DTechKrew is a dynamic software solutions company dedicated to empowering businesses worldwide.
                                </p>
                                <p className="md:text-lg text-base leading-relaxed text-gray-700">
                                    With innovative technology, we transform challenges into lasting value, operational efficiency, and revenue growth.
                                </p>
                                <p className="md:text-lg text-base leading-relaxed text-gray-700">
                                    Our tailored engineering services and advanced solutions drive business success, enabling our clients to thrive in a rapidly evolving digital landscape.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* trust us  */}
            <div className="trust padTop">
                <div className="container">
                    <div className="main flex flex-col gap-10">
                        <div className="section_title text-center">
                            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#FF0066]">Who
                                <span className="text-[#000]">Trust Us</span>
                            </h1>
                        </div>
                        <div className="logos grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
                            {aboutContent.logos.map((items, index) => (
                                <div key={index} className="bg-white shadow-md rounded-lg md:p-5 p-3 flex justify-center items-center">
                                    <img src={items.logo1} alt={items.alt} className="w-full max-w-[120px] h-auto" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* corportate stage */}
            <div className="corporate padTop">
                <div className="container">
                    <div className="main flex flex-col gap-16">
                        <div className="section_title text-center">
                            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#FF0066]">Corporate Social
                                <span className="text-[#000]"> Responsibility</span>
                            </h1>
                        </div>
                        <div className="content_corporate grid md:grid-cols-2 grid-cols-1 xl:gap-40 md:gap-20 gap-10">
                            <div className="flex flex-col gap-20">
                                {
                                    aboutContent.corporate.map((items, index) => {
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
                                    aboutContent.corporate1.map((items, index) => {
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

            {/* team  */}
            <div className="team padTop">
                <div className="main flex flex-col gap-20">
                    <div className="section_title text-center">
                        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#FF0066]">Team that makes
                            <span className="text-[#000]"> everything possible</span>
                        </h1>
                    </div>
                    <div className="gallery">
                        <img src={gallery} alt="gallery" />
                    </div>
                </div>
            </div>

            {/* corportate stage */}
            <div className="corporate padTop">
                <div className="container flex flex-col gap-20">
                    <div className="main flex flex-col gap-16">
                        <div className="content text-center flex flex-col gap-8">
                            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#000]">Recruitment
                                <span className="text-[#FF0066]"> stages</span>
                            </h1>
                            <p className="md:text-lg text-base leading-normal text-center md:w-6/12 w-full heading_content text">
                                Our recruitment process takes 2-3 weeks on average, ensuring quick onboarding. Filling positions typically takes 5-6 weeks.
                            </p>
                        </div>
                        <div className="content_corporate grid md:grid-cols-2 grid-cols-1 xl:gap-40 md:gap-20 gap-10">
                            <div className="flex flex-col gap-20">
                                {
                                    aboutContent.stages.map((items, index) => {
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
                                    aboutContent.stages1.map((items, index) => {
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

                    {/* // second section  */}
                    <div className="contentMap grid md:grid-cols-2 grid-cols-1 md:gap-40 gap-10">
                        <div className="flex flex-col gap-5">
                            <p className="md:text-lg text-base leading-normal w-full heading_content text">
                                Our international offices work in unison to serve clients across the globe, ensuring seamless collaboration across regions and time zones to deliver tailored support and solutions that meet each client’s specific requirements.
                            </p>
                            <div className="btns flex gap-5">
                                {
                                    aboutContent.btns.map((items, index) => {
                                        return (
                                            <Link
                                                key={index}
                                                className="bg-[#fff] py-2 px-10 rounded-full text"
                                                to={items.path}
                                            >
                                                {items.btnName}
                                            </Link>
                                        );
                                    })
                                }

                            </div>
                        </div>
                        <div className="map">
                            <img src={map} alt="map" />
                        </div>
                    </div>
                </div>
            </div>

            {/* last section  */}
            <PageLastSec />
        </div>
    );
};

//complete page

export default About;
