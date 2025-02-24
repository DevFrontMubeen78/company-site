import Header from "../components/Header";
import Footer from "../components/Footer";
import PageLastSec from "../components/PageLastSec";
import WhyDTechKrew from "../components/WhyDTechKrew"
import EmpYouTeam from "../components/EmpYouTeam";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const HireMobileApps = {
  DesSer: [
    {
      title: "Strong programming skills",
      desc: "Our developers bring extensive experience, including proficiency in key libraries and frameworks such as UI Kit and Core Data. By hiring our mobile app developers, you'll receive an app built with clean, efficient, and maintainable code, ensuring a high-performing and scalable solution for your business needs.",
    },
    {
      title: "Credible reputation",
      desc: "We’ve developed high-quality mobile apps for industries like e-commerce, fintech, and IoT. Clients trust our developers for their top-tier expertise and tailored staff augmentation solutions, ensuring project success.",
    }
  ],
  DesSer1: [
    {
      title: "Flexibility and adaptability",
      desc: "We develop mobile apps for all platforms, leveraging our expertise from numerous successful projects to address industry-specific needs and deliver high-performance solutions.",
    },
    {
      title: "Cost-effective solutions",
      desc: "Save on full-time hire costs like training and overhead by hiring mobile app developers from DTechKrew, optimizing your budget for growth and innovation.",
    }
  ],
  hireProcessing: [
    {
      title: "Review candidates",
      desc: "Evaluate each mobile app developer’s skills and project portfolio. Review your options and select the developers you wish to interview, ensuring the perfect fit for your project needs.",
    },
    {
      title: "Onboard a new developer",
      desc: "It’s time to expand your team by hiring a mobile app developer. Once onboard, you can kick off your project with your new team member, whether on a part-time or full-time basis, ensuring smooth progress and successful results.",
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
      desc: "We craft secure, high-performing, and feature-rich mobile apps designed to deliver a seamless user experience and help your app stand out in the competitive market.",
    },
    {
      title: "Debugging and testing",
      desc: "We ensure your app's stability and performance through rigorous debugging and thorough testing, delivering a seamless and reliable user experience as your audience expands.",
    },
    {
      title: "Maintenance and support",
      desc: "We provide expert mobile app maintenance and support. DTechKrew’s developers monitor performance, implement security updates, and identify opportunities for future enhancements to ensure your app remains efficient and secure.",
    }
  ],
  ProductsTypes1: [
    {
      title: "Mobile app development",
      desc: "Mobile apps offer unmatched scalability, perfectly supporting your business growth and adapting to dynamic industries like e-commerce.",
    },
    {
      title: "IoT & Connected Device Apps",
      desc: "Mobile apps that seamlessly connect and control smart devices, offering enhanced automation, monitoring, and data insights for IoT solutions.",
    },
    {
      title: "E-Learning Platforms",
      desc: "Provide your learners with a personalized and engaging experience on your platform. With advanced analytics, interactive content, and secure authentication, we ensure a standout customer journey that delivers exceptional value and enhances user satisfaction.",
    },
  ]
};
const HireMobileApp = () => {
  return (
    <div>
      <Helmet>
        <title>DTK - Hire Mobile App Developer</title>
      </Helmet>
      <Header />
      <div className="hero padTop bg-[#001876]">
        <div className="container">
          <div className="main flex flex-col gap-18">
            <div className="content text-center flex flex-col gap-20">
              <div className="content text-center flex flex-col gap-3">
                <h1 className="md:text-5xl sm:text-4xl text-2xl font-bold leading-snug text-[#fff]">
                  Hire Mobile App
                  <span className="text-[#FF0066]"> Developers</span>
                </h1>
                <p className="md:text-lg text-base leading-normal text-center w-full heading_content text-[#fff]">
                  Looking to develop a fast, user-friendly mobile app for your target audience? DTechKrew is here to help. Our expert mobile app developers specialize in creating top-tier applications, ensuring seamless functionality and performance. With our staff augmentation services, you’ll get high-quality, customized solutions tailored to your project needs.
                </p>
              </div>
              <div className="text-center flex flex-col gap-3">
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#fff]">
                  Benefits f Our Mobile App <br className="inline" />
                  <span className="text-[#FF0066]"> Developers for Hire
                  </span>
                </h1>
              </div>
            </div>

            <div className="corporate">
              <div className="content_corporate grid md:grid-cols-2 grid-cols-1 xl:gap-40 md:gap-20 gap-10">
                <div className="flex flex-col gap-20">
                  {HireMobileApps.DesSer.map((items, index) => {
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
                  {HireMobileApps.DesSer1.map((items, index) => {
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
                <span className="text-[#FF0066]"> Mobile App Developers Build</span>
              </h1>
            </div>
            <div className="content_corporate grid md:grid-cols-2 grid-cols-1 xl:gap-40 md:gap-20 gap-10">
              <div className="slide-in-left flex flex-col gap-20">
                {HireMobileApps.ProductsTypes.map((items, index) => {
                  return (
                    <div key={index} className="innertext flex flex-col gap-2">
                      <h6 className="font-bold text-2xl">{items.title}</h6>
                      <p className="text-base text">{items.desc}</p>
                    </div>
                  );
                })}
              </div>
              <div className="slide-in-right flex flex-col gap-20">
                {HireMobileApps.ProductsTypes1.map((items, index) => {
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
                Need skilled Mobile App developers? <br className="inline" /> Turn to DTechKrew to get the best talents.
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
                {HireMobileApps.hireProcessing.map((items, index) => {
                  return (
                    <div key={index} className="innertext flex flex-col gap-2">
                      <h6 className="font-bold text-2xl">{items.title}</h6>
                      <p className="text-base text">{items.desc}</p>
                    </div>
                  );
                })}
              </div>
              <div className="slide-in-right flex flex-col gap-20">
                {HireMobileApps.hireProcessing1.map((items, index) => {
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

export default HireMobileApp;

