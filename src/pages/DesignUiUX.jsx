// remain one section 
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageLastSec from "../components/PageLastSec";
import TeamEx from "/images/cs-development/team-ex.png";
import productive from "/images/cs-development/productive=team.png";
import collab from "/images/cs-development/collab.png";
// import uix from "../../public/images/ux-ui/uix.png";
import { Helmet } from "react-helmet-async";

const DesignUiUXs = {
  clients: [
    {
      logo1: "/images/ux-ui/client1.png",
      alt: "client1",
    },
    {
      logo1: "/images/ux-ui/client2.png",
      alt: "client2",
    },
    {
      logo1: "/images/ux-ui/client3.png",
      alt: "client3",
    },
    {
      logo1: "/images/ux-ui/client4.png",
      alt: "client4",
    },
    {
      logo1: "/images/ux-ui/client5.png",
      alt: "client5",
    },
    {
      logo1: "/images/ux-ui/client6.png",
      alt: "client6",
    },
    {
      logo1: "/images/ux-ui/client7.png",
      alt: "client7",
    },
    {
      logo1: "/images/ux-ui/client8.png",
      alt: "client8",
    },
    {
      logo1: "/images/ux-ui/client9.png",
      alt: "client9",
    },
    {
      logo1: "/images/ux-ui/client10.png",
      alt: "client10",
    },
    {
      logo1: "/images/ux-ui/client11.png",
      alt: "client11",
    },
    {
      logo1: "/images/ux-ui/client12.png",
      alt: "client12",
    },
  ],
  desingProcess: [
    {
      title: "User Research",
      desc: "Our research begins with asking the right questions,. What follows next is choosing appropriate research method to be able to investigate the problem or issue in the right direction and then finally come up with the appropriate solution.",
    },
    {
      title: "Hi-fidelity & Visuals",
      desc: "Given the previous stage, we move to high-fidelity prototypes – realistic and detailed design — all interface elements, spacing, and graphics just like the real version of the product.",
    },
  ],
  desingProcess1: [
    {
      title: "Wireframes & Prototypes",
      desc: "We believe that wireframes are the foundation of good design. This is the “skeleton” of your website that may look very basic from a visual standpoint, the purpose of the wireframe is to develop the layout of content on a page and to determine how elements of functionality can be integrated.",
    },
    {
      title: "Motion & Handoff",
      desc: "For large projects, we typically create a system of components, patterns, and styles that help developers stay on the same page regarding the design.",
    },
  ],
  DtechKrewDesign: [
    {
      title: "Agile Mindset",
      desc: "We are everyday learners who seek growth and development. We are researchers who believe that reaching higher levels of achievement depends on tests and experiments. We are thinkers who seek new and alternative ways of designing complex things.",
    },
    {
      title: "Dedicated Team",
      desc: "A dedicated only to your project design team or single designer, who will work with you as a part of your team.",
    },
    {
      title: "Competitive pricing",
      desc: "Get a discount on your first project. We offer an ideal price/quality ratio.",
    },
  ],
  DtechKrewDesign1: [
    {
      title: "From Strategy to Implementation",
      desc: "We believe that the holistic design approach, which involves every aspect of the intersection between business profitability, value for people, and ease of use, as well as the well-planned design phase, which includes research, prototyping, test, and implementation is a key element for a successful product.",
    },
    {
      title: "Flexibility",
      desc: "We work on 2 different pricing models: Fixed Price and Time & Material.",
    },
    {
      title: "Transparency",
      desc: "Transparency breeds trust and trust is the foundation of a successful partnership.",
    },
  ],
  whatYouGet: [
    {
      title: "Individual Approuch for each client ",
    },
    {
      title: "Product efficiency and usability",
    },
    {
      title: "Eliminating pain-points",
    },
  ],
  whatYouGet1: [
    {
      title: "Meeting Users Expectations",
    },
    {
      title: "Marketing and Sales Practices",
    },
    {
      title: "Increasing conversions",
    },
  ],

};
const DesignUiUX = () => {
  return (
    <div>
      <Helmet>
        <title>DTK - UI/UX Design Consult</title>
      </Helmet>
      <Header />
      <div
        style={{
          backgroundImage:
            "url('/images/ux-ui/uix.png')",
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
                  We’re a digital
                  <span className="text-[#FF0066]"> <br className="inline" /> Product Design Agency</span>
                </h1>
                <p className="md:text-lg text-base leading-normal text-center w-full heading_content text-[#fff]">
                  Hire Objective-C Developers
                  Want to create an efficient iOS app that works fast and is easy to use for your target audience? DTechKrew will help. Objective-C is an object-oriented programming language intended for building top iOS applications. Pick our staff augmentation services and get quality custom web projects
                </p>
              </div>
              {/* clients */}
              <div className="clients">
                <div className="main flex flex-col gap-10">
                  <div className="section_title text-center">
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#fff]">
                      Our Clients
                    </h1>
                  </div>
                  <div className="logos grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
                    {DesignUiUXs.clients.map((items, index) => (
                      <div
                        key={index}
                        className="bg-white shadow-md rounded-lg md:p-5 p-3 flex flex-col gap-5 justify-center items-center"
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
          </div>
        </div>
      </div>

      {/* Our Agency */}
      <div className="Our Agency padTop">
        <div className="container">
          <div className="main flex flex-col gap-16">
            <div className="section_title text-center">
              <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#000]">
                Our Agency
                <span className="text-[#FF0066]"> Agency</span>
              </h1>
            </div>

            <div className="content_corporate flex flex-col md:gap-20 gap-10">
              <div className="flex flex-col gap-3">
                <h1 className="md:text-3xl text-2xl font-bold leading-snug text-[#000]">
                  Expert Designers Driving Digital Innovation
                </h1>
                <p className="md:text-lg text-base leading-normal w-full text">
                  As a digital product agency, we evolved exceptional expertise
                  in different areas to launch effective products, build strong
                  brands and better interfaces. We hire only the best designers,
                  who went through “fire and ice” to become real design gurus,
                  the designers who worked on Silicon Valley start-ups. Our
                  hiring approach includes diligent vetting through numerous
                  different tests. We value our designer’s exceptional
                  analytical mind, fast learning, strategical thinking, and
                  top-notch design skills. Since 2014 we keep in step with
                  clients ’business and their customers. We design custom Mobile
                  Apps, Web & Enterprise Solutions for Startups, Enterprises &
                  Mid-Scale Businesses. Our clients successfully launched their
                  IoT, Fintech, SaaS, E-commerce products with our design on
                  board.
                </p>
              </div>
              <div className="grid grid-cols-3">
                <div className="">
                  <h1 className="md:text-3xl text-base font-bold leading-snug text-[#000]">
                    5+ years
                  </h1>
                  <p className="md:text-lg text-base leading-normal w-full text">
                    in the market
                  </p>
                </div>
                <div className="">
                  <h1 className="md:text-3xl text-base font-bold leading-snug text-[#000]">
                    10+ clients
                  </h1>
                  <p className="md:text-lg text-base leading-normal w-full text">
                    were satisfied
                  </p>
                </div>
                <div className="">
                  <h1 className="md:text-3xl text-base font-bold leading-snug text-[#000]">
                    7+ designers
                  </h1>
                  <p className="md:text-lg text-base leading-normal w-full text">
                    in our team
                  </p>
                </div>
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

      {/* How we design Process */}
      <div className="DesignProcess padTop">
        <div className="container">
          <div className="main flex flex-col gap-16">
            <div className="section_title text-center">
              <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#000]">
                How we
                <span className="text-[#FF0066]"> design Process</span>
              </h1>
            </div>
            <div className="content_corporate grid md:grid-cols-2 grid-cols-1 xl:gap-40 md:gap-20 gap-10">
              <div className="flex flex-col gap-20">
                {DesignUiUXs.desingProcess.map((items, index) => {
                  return (
                    <div key={index} className="innertext flex flex-col gap-2">
                      <h6 className="font-bold text-2xl">{items.title}</h6>
                      <p className="text-base text">{items.desc}</p>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col gap-20">
                {DesignUiUXs.desingProcess1.map((items, index) => {
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

      {/* Why DtechKrew Design? */}
      <div className="DtechKrewDesign padTop">
        <div className="container">
          <div className="main flex flex-col gap-16">
            <div className="section_title text-center">
              <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#000]">
                Why DtechKrew
                <span className="text-[#FF0066]"> Design?</span>
              </h1>
            </div>
            <div className="content_corporate grid md:grid-cols-2 grid-cols-1 xl:gap-40 md:gap-20 gap-10">
              <div className="flex flex-col gap-20">
                {DesignUiUXs.DtechKrewDesign.map((items, index) => {
                  return (
                    <div key={index} className="innertext flex flex-col gap-2">
                      <h6 className="font-bold text-2xl">{items.title}</h6>
                      <p className="text-base text">{items.desc}</p>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col gap-20">
                {DesignUiUXs.DtechKrewDesign1.map((items, index) => {
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

      {/* What You Get */}
      <div className="whatYouGet padTop">
        <div className="container">
          <div className="main flex flex-col gap-16">
            <div className="section_title text-center">
              <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#000]">
                Why DtechKrew
                <span className="text-[#FF0066]"> Design?</span>
              </h1>
            </div>
            <div className="content_corporate grid md:grid-cols-2 grid-cols-1 xl:gap-40 md:gap-20 gap-5">
              <div className="flex flex-col md:gap-20 gap-5">
                {DesignUiUXs.whatYouGet.map((items, index) => {
                  return (
                    <div key={index} className="innertext flex flex-col gap-2">
                      <h6 className="font-bold text-lg">{items.title}</h6>
                      <p className="text-base text">{items.desc}</p>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col md:gap-20 gap-5">
                {DesignUiUXs.whatYouGet1.map((items, index) => {
                  return (
                    <div key={index} className="innertext flex flex-col gap-2">
                      <h6 className="font-bold font-bold text-lg">{items.title}</h6>
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

export default DesignUiUX;
