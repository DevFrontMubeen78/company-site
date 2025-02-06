// remain ul li 
import Header from "../components/Header";
import PageLastSec from "../components/PageLastSec";
import TeamEx from "/images/cs-development/team-ex.png";
import productive from "/images/cs-development/productive=team.png";
import collab from "/images/cs-development/collab.png";

const CsDevelopments = {
  logos: [
    {
      title: "React Js",
      logo1: "/images/cs-development/react.png",
      alt: "React Js",
    },
    {
      title: "Python",
      logo1: "/images/cs-development/python.png",
      alt: "Python",
    },
    {
      title: ".Net",
      logo1: "/images/cs-development/net.png",
      alt: ".Net",
    },
    {
      title: "Node Js",
      logo1: "/images/cs-development/node.js.png",
      alt: "Node Js",
    },
    {
      title: "C++",
      logo1: "/images/cs-development/c++.png",
      alt: "C++",
    },
    {
      title: "Php",
      logo1: "/images/cs-development/php.png",
      alt: "Php",
    },
    {
      title: "Javascript",
      logo1: "/images/cs-development/JS.png",
      alt: "Javascript",
    },
    {
      title: "Sales Force",
      logo1: "/images/cs-development/salesforce.png",
      alt: "Sales Force",
    },
    {
      title: "Dev Oop",
      logo1: "/images/cs-development/devop.png",
      alt: "Dev Oop",
    },
  ],
  DesSer: [
    {
      title: "Tech Consulting",
      desc: "We specialize in the best practices of custom software engineering and are ready to help you maintain a competitive edge. Our expert consultants provide strategic insights and solutions tailored to your needs, ensuring your business stays ahead in the market.",
    },
    {
      title: "Full-cycle software development",
      desc: "From goal setting to deployment and ongoing maintenance, we handle every phase of the development process to deliver a seamless, complete solution.",
    },
    {
      title: "Enterprise software development",
      desc: "We create custom software solutions tailored to help businesses run more efficiently, addressing their unique needs and driving operational success.",
    },
  ],
  DesSer1: [
    {
      title: "Mobile App Development",
      desc: "We develop mobile apps for all platforms, leveraging our expertise from numerous successful projects to address industry-specific needs and deliver high-performance solutions.",
    },
    {
      title: "Web App Development",
      desc: "As a custom software development company, we specialize in creating a wide range of business and customer-facing web applications tailored to your specific needs and goals.",
    },
    {
      title: "SaaS Development",
      desc: "We offer expert guidance and support to companies involved in product management and SaaS app development, helping you build scalable and efficient solutions for your business.",
    },
  ],
  DTechKrewBen: [
    {
      title: "Fully customized product",
      desc: "Start strong with a team of experts dedicated to delivering software that perfectly aligns with your business needs and vision. We’ll discuss all project details upfront, ensuring every requirement is met, down to the smallest detail, while staying within your budget.",
    },
    {
      title: "Scalability",
      desc: "In our custom software services, we prioritize scalability to support your future growth. When you partner with us, you can be confident that your project will be built to scale as your business evolves.",
    }
  ],
  DTechKrewBen1: [
    {
      title: "Cost-Efficiency",
      desc: "We respect your time and resources, striving to keep our software solutions within the agreed budget and deadline. By automating routine processes, our specialists can quickly develop a customized app tailored to your needs, ensuring both speed and cost-effectiveness.",
    },
    {
      title: "Client orientation",
      desc: "At DTechKrew, we prioritize your needs and strive to make your experience as smooth as possible. We focus on clear communication, anticipating your requirements, and exceeding your expectations throughout the software development process.",
    }
  ],
  stages: [
    {
      title: "Kickoff meeting",
      desc: "The initial phase of the project where the team and client align on objectives, ensuring everyone is on the same page and set up for success from the start.",
    },
    {
      title: "Discovery phase",
      desc: "Once we’ve gathered and analyzed the necessary information, we clarify the goals, limitations, and scope of the project, bridging the gap between concept and execution to ensure a clear path forward.",
    },
    {
      title: "Testing",
      desc: "We perform rigorous QA testing involving both internal teams and external users. This collaborative process helps uncover areas for improvement, ensuring optimal performance, and is followed by a detailed summary of the results for your review.",
    }
  ],
  stages1: [
    {
      title: "Gathering requirements",
      desc: "As a software development company, we focus on identifying the key requirements essential for the project's success and determining the right tools, technologies, and resources to execute it efficiently.",
    },
    {
      title: "Development",
      desc: "Our engineers initiate the development process by building a comprehensive end-to-end solution, leveraging the appropriate tech stack outlined in the project roadmap.",
    },
    {
      title: "Deployment & Support",
      desc: "Our team provides comprehensive technical support while sharing expertise with your internal support team to ensure seamless knowledge transfer. Additionally, we assist with marketing efforts both before and after the product’s deployment to maximize its success.",
    }
  ],
  IndWork: [
    {
      title: "Manufacturing",
      desc: "We can build efficient IoT systems for the industrial sector, enabling factories to gain full control over their production systems.",
    },
    {
      title: "Manufacturing",
      desc: "We can build efficient IoT systems for the industrial sector, enabling factories to gain full control over their production systems.",
    },
  ],
  IndWork1: [
    {
      title: "Agriculture",
      desc: "IoT in agriculture can revolutionize farming practices.",
    },
    {
      title: "Agriculture",
      desc: "IoT in agriculture can revolutionize farming practices.",
    },
  ],
};
const CsDevelopment = () => {
  return (
    <div>
      <Header/>
      <div
        style={{
          backgroundImage:
            "url('/images/cs-development/custom-software-development-services-bg-1-scaled.png')",
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
                <h1 className="md:text-5xl sm:text-4xl text-2xl font-bold uppercase leading-snug text-[#fff]">
                  Custom Software
                  <span className="text-[#FF0066]"> Development Services</span>
                </h1>
                <p className="md:text-lg text-base leading-normal text-center md:w-6/12 w-full heading_content text-[#fff]">
                  We are dedicated to creating end-to-end solutions for you.
                  Partner with DTechKrew custom software development services to
                  enjoy tailor-made products that perfectly fit your needs and
                  goals.
                </p>
              </div>
              <div className="text-center flex flex-col gap-3">
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#fff]">
                  Custom Software Development
                  <span className="text-[#FF0066]"> Services <br className="inline" /> We Provide
                  </span>
                </h1>
              </div>
            </div>

            <div className="corporate">
              <div className="content_corporate grid md:grid-cols-2 grid-cols-1 xl:gap-40 md:gap-20 gap-10">
                <div className="flex flex-col gap-20">
                  {CsDevelopments.DesSer.map((items, index) => {
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
                  {CsDevelopments.DesSer1.map((items, index) => {
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

      {/* Benefits of DTechKrew */}
      <div className="DTechKrewBen padTop">
        <div className="container">
          <div className="main flex flex-col gap-16">
            <div className="section_title text-center">
              <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#000]">
                Benefits of DTechKrew Custom
                <span className="text-[#FF0066]">
                  {" "}
                  Software <br className="inline" />
                  Development Services{" "}
                </span>
              </h1>
            </div>
            <div className="content_corporate grid md:grid-cols-2 grid-cols-1 xl:gap-40 md:gap-20 gap-10">
              <div className="flex flex-col gap-20">
                {CsDevelopments.DTechKrewBen.map((items, index) => {
                  return (
                    <div key={index} className="innertext flex flex-col gap-2">
                      <h6 className="font-bold text-2xl">{items.title}</h6>
                      <p className="text-base text">{items.desc}</p>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col gap-20">
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

      {/* // collaboration  */}
      <div className="collaboration padTop">
        <div className="container">
          <div className="main flex flex-col gap-20">
            <div className="section_title text-center">
              <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#000]">
                Collaboration
                <span className="text-[#FF0066]"> models</span>
              </h1>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-40 gap-10">
              <div className="map">
                <img src={collab} alt="python" />
              </div>
              <div className="flex flex-col gap-5 justify-center">
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#000]">
                  Dedicated Team
                </h1>
                <p className="md:text-lg text-base leading-normal w-full heading_content text">
                  Need a team of specialists focused entirely on your project?
                  Our dedicated development team will be with you every step of
                  the way, from initial architecture to post-release support,
                  ensuring your projects success.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-40 gap-10">
              <div className="flex flex-col gap-5 justify-center">
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#000]">
                  Team Extension
                </h1>
                <p className="md:text-lg text-base leading-normal w-full heading_content text">
                  Looking to strengthen your in-house development team? Let us
                  add top-tier talent to your lineup. We provide expert
                  developers who apply the best software development
                  methodologies and ensure professional task management for
                  seamless collaboration and results.
                </p>
              </div>
              <div className="map">
                <img src={TeamEx} alt="python" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-40 gap-10">
              <div className="map">
                <img src={productive} alt="python" />
              </div>
              <div className="flex flex-col gap-5 justify-center">
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#000]">
                  Product development
                </h1>
                <p className="md:text-lg text-base leading-normal w-full heading_content text">
                  Ready to bring your idea to life? With DTechKrew, we can
                  develop a custom product from scratch. Whether you are looking
                  for a fully functional product or an MVP, we tailor the
                  solution to your vision and budget, with room for future
                  refinement and expansion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* stages of development */}
      <div className="corporate padTop">
        <div className="container">
          <div className="main flex flex-col gap-16">
            <div className="section_title text-center">
              <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#000]">
                Stages of
                <span className="text-[#FF0066]"> Development</span>
              </h1>
            </div>
            <div className="content_corporate grid md:grid-cols-2 grid-cols-1 xl:gap-40 md:gap-20 gap-10">
              <div className="flex flex-col gap-20">
                {CsDevelopments.stages.map((items, index) => {
                  return (
                    <div key={index} className="innertext flex flex-col gap-2">
                      <h6 className="font-bold text-2xl">{items.title}</h6>
                      <p className="text-base text">{items.desc}</p>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col gap-20">
                {CsDevelopments.stages1.map((items, index) => {
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

      {/* Technology */}
      <div className="trust padTop">
        <div className="container">
          <div className="main flex flex-col gap-10">
            <div className="section_title text-center">
              <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#000]">
                Our
                <span className="text-[#FF0066]"> Technology stack</span>
              </h1>
            </div>
            <div className="logos grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
              {CsDevelopments.logos.map((items, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg md:p-5 p-3 flex flex-col gap-5 justify-center items-center"
                >
                  <img
                    src={items.logo1}
                    alt={items.alt}
                    className="w-full max-w-[120px] h-auto"
                  />
                  <h6 className="text text-base">{items.title}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* intdustries We work */}
      <div className="corporate padTop">
        <div className="container">
          <div className="main flex flex-col gap-16">
            <div className="section_title text-center">
              <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#FF0066]">
                Industries
                <span className="text-[#000]"> We Work With</span>
              </h1>
            </div>
            <div className="content_corporate grid md:grid-cols-2 grid-cols-1 xl:gap-40 md:gap-20 gap-10">
              <div className="flex flex-col gap-20">
                {CsDevelopments.IndWork.map((items, index) => {
                  return (
                    <div key={index} className="innertext flex flex-col gap-2">
                      <h6 className="font-bold text-2xl">{items.title}</h6>
                      <p className="text-base text">{items.desc}</p>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col gap-20">
                {CsDevelopments.IndWork1.map((items, index) => {
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

export default CsDevelopment;
