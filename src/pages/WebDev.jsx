// complete page 
import PageLastSec from "../components/PageLastSec";
import python from "../../public/images/mobile/python.png";

const WebDevs = {
  heroCont: [
    {
      title: "SaaS Web App Development",
      desc: "We help you meet market demands and surpass niche competition through flexible, accessible, and efficient software-as-a-service solutions crafted by our experienced web app developers.",
    },
    {
      title: "Frontend and Backend Web Development",
      desc: "We handle custom web app development of any scale, from coding algorithms and integrating features to managing back-end servers, data storage, APIs, and crafting user-centric front-end designs.",
    },
  ],
  heroCont1: [
    {
      title: "Progressive Web App Development",
      desc: "We create progressive web apps that deliver native-like performance, offline data access, and out-of-browser functionality, all while ensuring seamless compatibility across platforms.",
    },
    {
      title: "Fast-loading SPA & Responsive Websites",
      desc: "Our development experts leverage years of experience to build responsive single-page web applications that ensure fast development and deliver an exceptional user experience across all devices and platforms.",
    },
  ],
  AppType: [
    {
      title: "Web Apps ",
      desc: "Our team specializes in building secure and scalable web applications that meet your specific business needs. We focus on integrating advanced security measures to protect your web platforms from evolving threats. With a user-centric approach, we ensure seamless functionality and an excellent experience for your users.",
    },
    {
      title: "Web design",
      desc: "We create visually appealing and user-friendly websites, ensuring a seamless experience for visitors. Our web design services focus on responsive layouts, intuitive navigation, and optimized performance to enhance user engagement and satisfaction.",
    },
  ],
  AppType1: [
    {
      title: "Mobile Apps",
      desc: "We design and develop secure mobile applications tailored to your business needs, ensuring both functionality and performance. Our mobile apps are equipped with advanced security features to protect sensitive data and offer a seamless user experience across devices.",
    },
    {
      title: "SaaS",
      desc: "We design and develop secure mobile applications tailored to your business needs, ensuring both functionality and performance. Our mobile apps are equipped with advanced security features to protect sensitive data and offer a seamless user experience across devices.",
    },
  ],
  benefits: [
    {
      title: "SaaS Web App Development",
      desc: "We help you meet market demands and surpass niche competition through flexible, accessible, and efficient software-as-a-service solutions crafted by our experienced web app developers.",
    },
    {
      title: "Frontend and Backend Web Development",
      desc: "We handle custom web app development of any scale, from coding algorithms and integrating features to managing back-end servers, data storage, APIs, and crafting user-centric front-end designs.",
    },
  ],
  benefits1: [
    {
      title: "Progressive Web App Development",
      desc: "We create progressive web apps that deliver native-like performance, offline data access, and out-of-browser functionality, all while ensuring seamless compatibility across platforms.",
    },
    {
      title: "Fast-loading SPA & Responsive Websites",
      desc: "Our development experts leverage years of experience to build responsive single-page web applications that ensure fast development and deliver an exceptional user experience across all devices and platforms.",
    },
  ],
  ProcessHiring: [
    {
      title: "Evaluating candidates beyond technical skills",
      desc: "When hiring, it's essential to look beyond technical expertise. Assessing problem-solving abilities, communication skills, adaptability, and a collaborative mindset ensures you bring on board developers who align with your project goals and team dynamics.",
    },
    {
      title: "Matching deadlines",
      desc: "We prioritize your project’s timeline, ensuring that deadlines are met without compromising on quality. Our team works efficiently and collaboratively to deliver on time, keeping you informed at every step to ensure smooth progress and timely results.",
    },
  ],
  ProcessHiring1: [
    {
      title: "Organizing the fitting format of cooperation",
      desc: "We design tailored collaboration models that align with your business objectives, ensuring efficient teamwork and clear communication. Our approach focuses on creating flexible structures that foster productivity, promote adaptability, and strengthen partnerships throughout the development process.",
    },
    {
      title: "Financial agreement",
      desc: "We establish clear and transparent financial agreements that align with your budget and project scope. Our flexible pricing models ensure you receive high-quality development services while maintaining financial control throughout the process.",
    },
  ],
  DTeckrew: [
    {
      title: "Ambitious",
      desc: "We are fueled by an unwavering commitment to excellence, continually pushing the boundaries of innovation and success to exceed expectations in everything we do.",
    },
    {
      title: "Responsible",
      desc: "We take full ownership of our actions and decisions, honoring our commitments with integrity, accountability, and a dedication to delivering the best possible results.",
    },
    {
      title: "Quality oriented",
      desc: "We are dedicated to delivering high-quality solutions, ensuring that every project meets the highest standards of excellence, reliability, and performance for optimal results.",
    },
  ],
  DTeckrew1: [
    {
      title: "Trendy",
      desc: "We embrace the latest trends and technologies to ensure your projects remain modern, relevant, and aligned with current industry standards, keeping you ahead of the competition.",
    },
    {
      title: "Supportive",
      desc: "We are committed to providing continuous support, offering guidance and help whenever needed. Our team is always ready to assist you in overcoming challenges and ensuring the success of your projects.",
    },
  ],
};
const WebDev = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url('/images/web/hire-python-developers-bg-scaled.png')",
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
                Web App Development
              </h1>
              <p className="md:text-lg text-base leading-normal text-center w-full heading_content text-[#fff]">
                Entrepreneurs looking to develop web applications need versatile
                professionals capable of managing diverse tasks. The top-tier
                developers at DTechKrew go beyond basic coding, offering
                expertise in responsive web design, performance optimization,
                scalability, user-friendly interfaces, and seamless
                integrations.
              </p>
            </div>

            <div className="content text-center flex flex-col gap-3">
              <h1 className="md:text-4xl sm:text-4xl text-2xl font-bold leading-snug text-[#fff]">
                Benefits of Our Web App
                <span className="text-[#FF0066] "> Developers for Hire</span>
              </h1>
              <p className="md:text-lg text-base leading-normal text-center heading_content text-[#fff]">
                Entrepreneurs looking to build web applications need versatile
                developers capable of handling a wide range of tasks. The expert
                developers at DTechKrew go beyond basic coding, offering
                expertise in web design, development, optimization, automation,
                and seamless integrations to deliver high-performing web
                applications tailored to your business needs.
              </p>
            </div>
            <div className="corporate">
              <div className="content_corporate grid md:grid-cols-2 grid-cols-1 xl:gap-40 md:gap-20 gap-10">
                <div className="flex flex-col gap-20">
                  {WebDevs.benefits.map((items, index) => {
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
                  {WebDevs.benefits1.map((items, index) => {
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
      <div className="AppType padTop">
        <div className="container">
          <div className="main flex flex-col gap-16">
            <div className="content text-center flex flex-col gap-3">
              <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#000]">
                Types of Applications Our
                <span className="text-[#FF0066]"> Developers Build</span>
              </h1>
              <p className="md:text-lg text-base leading-normal text-center heading_content text">
                Entrepreneurs looking to hire a Python software developer seek a
                versatile professional capable of handling a variety of tasks.
                The top-tier Python developers at DTechKrew go beyond basic
                programming, offering expertise in business data collection and
                analytics, web development, design, automation, and scripting.
              </p>
            </div>
            <div className="content_corporate grid md:grid-cols-2 grid-cols-1 xl:gap-40 md:gap-20 gap-10">
              <div className="flex flex-col gap-20">
                {WebDevs.AppType.map((items, index) => {
                  return (
                    <div key={index} className="innertext flex flex-col gap-2">
                      <h6 className="font-bold text-2xl">{items.title}</h6>
                      <p className="text-base text">{items.desc}</p>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col gap-20">
                {WebDevs.AppType1.map((items, index) => {
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

      {/* Our Process of Hiring Web App Developers */}
      <div className="corporate padTop">
        <div className="container">
          <div className="main flex flex-col gap-16">
            <div className="content text-center flex flex-col gap-3">
              <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#000]">
                Our Process of Hiring
                <span className="text-[#FF0066]"> Web App Developers</span>
              </h1>
              <p className="md:text-lg text-base leading-normal text-center heading_content text">
                Let’s start by identifying the specific skills and proficiencies
                your project requires. Clearly defined business goals are
                crucial for effective strategic planning. Our experts provide
                support at every stage of formulating a development strategy,
                whether you're building web applications from the ground up or
                optimizing existing software for better performance.
              </p>
            </div>
            <div className="content_corporate grid md:grid-cols-2 grid-cols-1 xl:gap-40 md:gap-20 gap-10">
              <div className="flex flex-col gap-20">
                {WebDevs.ProcessHiring.map((items, index) => {
                  return (
                    <div key={index} className="innertext flex flex-col gap-2">
                      <h6 className="font-bold text-2xl">{items.title}</h6>
                      <p className="text-base text">{items.desc}</p>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col gap-20">
                {WebDevs.ProcessHiring.map((items, index) => {
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
            <div className="flex flex-col gap-5">
              <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#000]">
                Empower Your
                <span className="text-[#FF0066]"> Team</span>
              </h1>
              <p className="md:text-lg text-base leading-normal w-full heading_content text">
                We provide the tools, resources, and training needed to help
                your team reach its full potential. By fostering a collaborative
                environment and supporting skill development, we enable your
                team to work more efficiently, innovate faster, and achieve
                greater success.
              </p>
            </div>
            <div className="map">
              <img src={python} alt="python" />
            </div>
          </div>
        </div>
      </div>

      {/* Why DTeckrew? */}
      <div className="DTeckrew padTop">
        <div className="container">
          <div className="main flex flex-col gap-16">
            <div className="content text-center flex flex-col gap-3">
              <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#000]">
              Why
                <span className="text-[#FF0066]"> DTeckrew?</span>
              </h1>
              <p className="md:text-lg text-base leading-normal text-center heading_content text">
              Web app developer hires in DTechKrew are a worthwhile investment because we are:
              </p>
            </div>
            <div className="content_corporate grid md:grid-cols-2 grid-cols-1 xl:gap-40 md:gap-20 gap-10">
              <div className="flex flex-col gap-20">
                {WebDevs.DTeckrew.map((items, index) => {
                  return (
                    <div key={index} className="innertext flex flex-col gap-2">
                      <h6 className="font-bold text-2xl">{items.title}</h6>
                      <p className="text-base text">{items.desc}</p>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col gap-20">
                {WebDevs.DTeckrew1.map((items, index) => {
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
    </div>
  );
};

export default WebDev;
