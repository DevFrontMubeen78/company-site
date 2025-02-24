// complete page 
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageLastSec from "../components/PageLastSec";
import python from "../../public/images/mobile/python.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const mobileApp = {
  customMobile: [
    {
      title: "Custom Mobile App Development",
      desc: "We create tailored mobile applications that align with your unique business needs, ensuring a seamless user experience and robust functionality.",
    },
    {
      title: "Performance Optimization",
      desc: "We optimize mobile app performance for speed and efficiency, ensuring smooth operation even with complex features and large-scale user bases.",
    },
  ],
  customMobile1: [
    {
      title: "Cross-Platform Solutions",
      desc: "Our expertise in cross-platform development ensures your app works flawlessly across iOS and Android, maximizing reach while minimizing development costs.",
    },
    {
      title: "Secure Mobile Solutions",
      desc: "Our mobile apps are built with the highest security standards in mind, protecting user data and ensuring safe transactions, keeping your app and users secure.",
    },
  ],
  AppDevType: [
    {
      title: "Web Apps ",
      desc: "Our team excels at building secure, high-performance mobile applications tailored to your business goals. We integrate cutting-edge security features to safeguard your app from evolving risks. With a focus on user-centric design, we ensure a seamless and engaging experience across all platforms, delivering apps that are reliable, scalable, and optimized for performance.",
    },
    {
      title: "Web design",
      desc: "We craft visually appealing, user-friendly websites that offer a smooth and engaging experience for visitors. Our focus on responsive layouts, intuitive navigation, and optimized performance ensures your website is both functional and aesthetically pleasing, driving higher user engagement and satisfaction.",
    },
  ],
  AppDevType1: [
    {
      title: "Mobile Apps",
      desc: "We specialize in designing and developing secure mobile applications customized to meet your business needs. Our apps combine top-notch functionality with exceptional performance, ensuring robust security features to protect sensitive data. With a focus on delivering a seamless user experience, we ensure your app works flawlessly across all devices.",
    },
    {
      title: "SaaS",
      desc: "We create secure, scalable Software as a Service (SaaS) solutions to enhance and streamline your business operations. Our cloud-based platforms offer flexible access, seamless integration, and top-tier security, ensuring your team and clients have a smooth, reliable experience.",
    },
  ],
  mobileAPp: [
    {
      title: "Evaluating candidates beyond technical skills",
      desc: "We evaluate candidates holistically, factoring in their problem-solving abilities, communication skills, and cultural fit alongside technical expertise. This approach ensures we select individuals who not only excel in their technical roles but also contribute effectively to team dynamics and align with organizational goals.",
    },
    {
      title: "Matching deadlines",
      desc: "We prioritize meeting project deadlines by ensuring that all tasks are completed on time. Our efficient project management and streamlined processes guarantee that deadlines are consistently met without compromising on quality or attention to detail.",
    },
  ],
  mobileAPp1: [
    {
      title: "Organizing the fitting format of cooperation",
      desc: "We design custom collaboration models that align with your business objectives, ensuring seamless teamwork and clear communication. Our approach focuses on creating flexible structures that enhance productivity, foster innovation, and build strong, lasting partnerships.",
    },
    {
      title: "Financial agreement",
      desc: "We establish transparent and straightforward financial agreements that ensure mutual understanding and alignment on project scope, costs, and payment terms, providing clarity and avoiding any surprises throughout the project.",
    },
  ],
  whyDTeckrew: [
    {
      title: "Ambitious",
      desc: "We are fueled by a relentless drive to achieve excellence, constantly striving to surpass expectations and push the boundaries of innovation and success.",
    },
    {
      title: "Responsible",
      desc: "We take full ownership of our actions and decisions, ensuring that we honor our commitments with integrity, accountability, and a dedication to delivering the best results.",
    },
    {
      title: "Quality oriented",
      desc: "We are dedicated to delivering high-quality solutions, ensuring that every project adheres to the highest standards of excellence, reliability, and performance.",
    },
  ],
  whyDTeckrew1: [
    {
      title: "Trendy",
      desc: " We stay ahead of the curve, embracing the latest trends and technologies to ensure your projects are modern, relevant, and in tune with current industry standards.",
    },
    {
      title: "Supportive",
      desc: "We are committed to providing ongoing support, offering guidance and assistance whenever needed. Our team is always ready to help you overcome challenges and ensure the success of your projects.",
    },
  ],
};
const MobileApp = () => {
  return (
    <div>
      <Helmet>
        <title>DTK - Mobile App Development</title>
      </Helmet>
      <Header />
      <div
        style={{
          backgroundImage:
            "url('/images/hire-dev/hire1.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="hero padTop"
      >
        <div className="container">
          <div className="main flex flex-col gap-18">
            <div className="content text-center flex flex-col gap-3">
              <h1 className="md:text-5xl sm:text-4xl text-2xl font-bold uppercase leading-snug text-[#fff]">
                Mobile App Development
              </h1>
              <p className="md:text-lg text-base leading-normal text-center w-full heading_content text-[#fff]">
                Entrepreneurs looking to hire mobile app developers seek
                versatile professionals capable of handling a wide range of
                tasks. The top-tier mobile app developers at DTechKrew go beyond
                basic development, offering expertise in user-centric design,
                performance optimization, cross-platform solutions, and seamless
                integrations.
              </p>
            </div>
            <div className="content text-center flex flex-col gap-3">
              <h1 className="md:text-4xl sm:text-4xl text-2xl font-bold leading-snug text-[#fff]">
                Benefits of Our
                <span className="text-[#FF0066] ">
                  {" "}
                  Mobile App Developers for Hire
                </span>
              </h1>
              <p className="md:text-lg text-base leading-normal text-center heading_content text-[#fff]">
                Entrepreneurs looking to hire mobile app developers seek
                versatile professionals who can handle a range of tasks. The
                top-tier mobile app developers at DTechKrew go beyond basic
                coding, offering expertise in app design, development,
                performance optimization, cross-platform solutions, automation,
                and seamless integration.
              </p>
            </div>
            <div className="corporate">
              <div className="content_corporate grid md:grid-cols-2 grid-cols-1 xl:gap-40 md:gap-20 gap-10">
                <div className="flex flex-col gap-20">
                  {mobileApp.customMobile.map((items, index) => {
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
                  {mobileApp.customMobile1.map((items, index) => {
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

      {/* Types of Applications Our Developers Build */}
      <div className="AppDevType padTop">
        <div className="container">
          <div className="main flex flex-col gap-16">
            <div className="scroll-animate content text-center flex flex-col gap-3">
              <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#000]">
                Types of Applications Our
                <span className="text-[#FF0066]"> Developers Build</span>
              </h1>
              <p className="md:text-lg text-base leading-normal text-center heading_content text">
                Entrepreneurs looking to hire a mobile app developer seek a
                versatile professional capable of handling a variety of tasks.
                The top-tier mobile app developers at DTechKrew go beyond basic
                development, offering expertise in app design, performance
                optimization, user experience, cross-platform solutions, and
                seamless integration with existing systems.
              </p>
            </div>
            <div className="content_corporate grid md:grid-cols-2 grid-cols-1 xl:gap-40 md:gap-20 gap-10">
              <div className="slide-in-left flex flex-col gap-20">
                {mobileApp.AppDevType.map((items, index) => {
                  return (
                    <div key={index} className="innertext flex flex-col gap-2">
                      <h6 className="font-bold text-2xl">{items.title}</h6>
                      <p className="text-base text">{items.desc}</p>
                    </div>
                  );
                })}
              </div>
              <div className="slide-in-right flex flex-col gap-20">
                {mobileApp.AppDevType1.map((items, index) => {
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

      {/* Mobile App Developers */}
      <div className="mobileAPp padTop">
        <div className="container">
          <div className="main flex flex-col gap-16">
            <div className="scroll-animate content text-center flex flex-col gap-3">
              <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#000]">
                Our Process of Hiring
                <span className="text-[#FF0066]"> Mobile App Developers</span>
              </h1>
              <p className="md:text-lg text-base leading-normal text-center heading_content text">
                Let’s begin by identifying the specific skills and expertise
                your project requires. Clearly defined business goals are
                essential for strategic planning. Our specialists provide
                guidance at every step, whether you’re looking to build mobile
                apps from scratch or optimize your existing mobile solutions for
                enhanced performance and user engagement.
              </p>
            </div>
            <div className="content_corporate grid md:grid-cols-2 grid-cols-1 xl:gap-40 md:gap-20 gap-10">
              <div className="slide-in-left flex flex-col gap-20">
                {mobileApp.mobileAPp.map((items, index) => {
                  return (
                    <div key={index} className="innertext flex flex-col gap-2">
                      <h6 className="font-bold text-2xl">{items.title}</h6>
                      <p className="text-base text">{items.desc}</p>
                    </div>
                  );
                })}
              </div>
              <div className="slide-in-right flex flex-col gap-20">
                {mobileApp.mobileAPp1.map((items, index) => {
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

      {/* // second section  */}
      <div className="contentMap padTop">
        <div className="container">
          <div className="main grid md:grid-cols-2 grid-cols-1 md:gap-40 gap-10">
            <div className="slide-in-left flex flex-col gap-5">
              <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#000]">
                Empower Your
                <span className="text-[#FF0066]"> Team</span>
              </h1>
              <p className="md:text-lg text-base leading-normal w-full heading_content text">
                We equip your team with the tools, resources, and training
                needed to unlock their full potential. By fostering a
                collaborative environment and prioritizing skill development, we
                empower your team to work more efficiently, drive innovation,
                and achieve outstanding results.
              </p>
              <Link className="bg-[#fff] rounded-full text-[#79BCCF] text-lg max-w-max hover:bg-[#FF0066] hover:text-[#fff] py-3 px-18" to="/Contact-us">Contact Us</Link>
            </div>
            <div className="slide-in-right map">
              <img src={python} alt="python" />
            </div>
          </div>
        </div>
      </div>

      {/* Why DTeckrew? */}
      <div className="whyDTeckrew padTop">
        <div className="container">
          <div className="main flex flex-col gap-16">
            <div className="scroll-animate flex flex-col gap-5">
              <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold text-center leading-snug text-[#000]">
                Why
                <span className="text-[#FF0066]"> DTeckrew?</span>
              </h1>
              <p className="md:text-lg text-base leading-normal w-full heading_content text ">
                Python developer hires in DTechKrew are a worthwhile investment because we are:
              </p>
            </div>
            <div className="content_corporate grid md:grid-cols-2 grid-cols-1 xl:gap-40 md:gap-20 gap-10">
              <div className="slide-in-left flex flex-col gap-20">
                {mobileApp.whyDTeckrew.map((items, index) => {
                  return (
                    <div key={index} className="innertext flex flex-col gap-2">
                      <h6 className="font-bold text-2xl">{items.title}</h6>
                      <p className="text-base text">{items.desc}</p>
                    </div>
                  );
                })}
              </div>
              <div className="slide-in-right flex flex-col gap-20">
                {mobileApp.whyDTeckrew.map((items, index) => {
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

      {/* last section  */}
      <PageLastSec />

      {/* footer  */}
      <Footer />
    </div>
  );
};

export default MobileApp;
