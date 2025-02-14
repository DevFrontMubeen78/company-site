// complete page
import Header from "../components/Header";
import GoogleLogo from "/images/about/Vector.png";
import ReactStars from "react-rating-stars-component";
import PageLastSec from "../components/PageLastSec";
import GetStarted from "../components/GetStarted";
import Teams from "../components/Teams";
import Recrutment from "../components/Recrutment";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const aboutContent = {
  logos: [
    {
      logo1: "/images/about/donw1.png",
      alt: "donw1",
    },
    {
      logo1: "/images/about/down2.png",
      alt: "donw1",
    },
    {
      logo1: "/images/about/down3.png",
      alt: "donw1",
    },
    {
      logo1: "/images/about/down4.png",
      alt: "donw1",
    },
    {
      logo1: "/images/about/down5.png",
      alt: "donw1",
    },
    {
      logo1: "/images/about/down2.png",
      alt: "donw1",
    },
    {
      logo1: "/images/about/down6.png",
      alt: "donw1",
    },
    {
      logo1: "/images/about/down7.png",
      alt: "donw1",
    },
    {
      logo1: "/images/about/down8.png",
      alt: "donw1",
    },
    {
      logo1: "/images/about/down9.png",
      alt: "donw1",
    },
    {
      logo1: "/images/about/down10.png",
      alt: "donw1",
    },
    {
      logo1: "/images/about/down11.png",
      alt: "donw1",
    },
  ],
  corporate: [
    {
      title: "Blood Donation Advocacy:",
      desc: "We actively engage in blood donation drives, emphasizing the significance of this vital contribution. Many of our team members are dedicated, regular donors, playing a part in supporting the health and welfare of our local and global communities.",
    },
    {
      title: "Employee Learning Initiatives:",
      desc: "Investing in our workforce's growth, we provide diverse learning programs, including skill enhancement workshops and educational sponsorships. This empowers our team to excel both personally and professionally.",
    },
    {
      title: "Human Rights and Labor Practices:",
      desc: "We uphold human rights and fair labor practices, ensuring a respectful and equitable workplace. Our inclusive policies promote equal opportunities, fostering a culture of respect, dignity, and continuous growth for all individuals.",
    },
  ],
  corporate1: [
    {
      title: "Stands with Ukraine:",
      desc: "Supporting Our Armed Forces: We proudly support our armed forces by donating funds and resources to meet their essential needs and initiatives, ensuring they receive the best possible assistance.",
    },
    {
      title: "Community Engagement:",
      desc: "We enrich our local communities through outreach programs, supporting local events, sponsoring educational initiatives, and volunteering our time. Our commitment is to make a positive impact and strengthen our connections close to home.",
    },
    {
      title: "Volunteering Commitment:",
      desc: "Embracing the spirit of giving back, we actively encourage and facilitate volunteering among our team members. From helping at local shelters to participating in environmental clean-ups or mentoring youth, we believe in the transformative power of volunteering.",
    },
  ],
  stages: [
    {
      title: "Defining needs and requirements",
      desc: "Defining the necessary skills, qualifications, and criteria needed for a candidate to excel in a specific role.",
    },
    {
      title: "Employee Learning Initiatives:",
      desc: "We prioritize the growth and development of our workforce by offering a variety of learning opportunities. From professional skill-building workshops to educational sponsorships, we empower our team members to succeed both personally and professionally.",
    },
    {
      title: "Job Offering",
      desc: "Extending a job offer to the selected candidate and moving forward with the employment process.",
    },
  ],
  stages1: [
    {
      title: "Talent Sourcing",
      desc: "Proactively sourcing and pinpointing potential candidates using a variety of recruitment channels and job platforms.",
    },
    {
      title: "Interviewing and Selection",
      desc: "Conducting interviews and assessments to evaluate candidates and ensure the best fit for the position.",
    },
    {
      title: "Onboarding",
      desc: "Onboarding the new hire and supporting their smooth integration into the DTechKrew team.",
    },
  ],
  btns: [
    {
      btnName: "Islamabad",
      path: "",
    },
    {
      btnName: "Karachi",
      path: "",
    },
    {
      btnName: "Okara",
      path: "",
    },
  ],
};

const About = () => {
  return (
    <div>
      <Helmet>
        <title>DTK - About</title>
      </Helmet>
      <Header />
      {/* About Hero Section */}
      <div
        style={{
          backgroundImage:
            "url('/images/about/digital-product-design-bg-scaled.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="hero padTop"
      >
        <div className="container">
          <div className="main flex flex-col gap-14">
            <div className="content text-center flex flex-col gap-3">
              <h1 className="md:text-6xl sm:text-4xl text-2xl font-bold uppercase leading-snug text-[#FF0066]">
                Software <br />
                <span className="text-[#fff]"> Development Company</span>
              </h1>
              <p className="md:text-lg text-base leading-normal text-center md:w-6/12 w-full heading_content text-[#fff]">
                DTechKrew combines cutting-edge technology with deep industry
                expertise to deliver impactful, scalable results.
              </p>
            </div>
            <div className="cardAbout">
              <div className="flex flex-col gap-5 bg-[#fff] items-center text-center rounded-xl p-10 w-98">
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
                    />
                    ,
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* get started */}
      <GetStarted />

      {/* trust us  */}
      <div className="trust padTop">
        <div className="container">
          <div className="main flex flex-col gap-10">
            <div className="section_title text-center">
              <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#FF0066]">
                Who
                <span className="text-[#000]">Trust Us</span>
              </h1>
            </div>
            <div className="logos grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
              {aboutContent.logos.map((items, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg md:p-5 p-3 flex justify-center items-center"
                >
                  <img
                    src={items.logo1}
                    alt={items.alt}
                    className="w-full max-w-[120px] h-auto"
                  />
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
              <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#FF0066]">
                Corporate Social
                <span className="text-[#000]"> Responsibility</span>
              </h1>
            </div>
            <div className="content_corporate grid md:grid-cols-2 grid-cols-1 xl:gap-40 md:gap-20 gap-10">
              <div className="flex flex-col gap-20">
                {aboutContent.corporate.map((items, index) => {
                  return (
                    <div key={index} className="innertext flex flex-col gap-2">
                      <h6 className="font-bold text-2xl">{items.title}</h6>
                      <p className="text-base text">{items.desc}</p>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col gap-20">
                {aboutContent.corporate1.map((items, index) => {
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

      {/* team  */}
      <Teams />

      {/* corportate stage */}
      <div className="corporate padTop">
        <div className="container flex flex-col gap-20">
          <div className="main flex flex-col gap-16">
            <div className="content text-center flex flex-col gap-8">
              <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#000]">
                Recruitment
                <span className="text-[#FF0066]"> stages</span>
              </h1>
              <p className="md:text-lg text-base leading-normal text-center md:w-6/12 w-full heading_content text">
                Our recruitment process takes 2-3 weeks on average, ensuring
                quick onboarding. Filling positions typically takes 5-6 weeks.
              </p>
            </div>
            <div className="content_corporate grid md:grid-cols-2 grid-cols-1 xl:gap-40 md:gap-20 gap-10">
              <div className="flex flex-col gap-20">
                {aboutContent.stages.map((items, index) => {
                  return (
                    <div key={index} className="innertext flex flex-col gap-2">
                      <h6 className="font-bold text-2xl">{items.title}</h6>
                      <p className="text-base text">{items.desc}</p>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col gap-20">
                {aboutContent.stages1.map((items, index) => {
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

          {/* // second section  */}
          <Recrutment />
        </div>
      </div>

      {/* last section  */}
      <PageLastSec />

      {/* footer  */}
      <Footer />
    </div>
  );
};

//complete page

export default About;
