import Header from "../components/Header";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import PageLastSec from "../components/PageLastSec";
import mobile from "../../public/images/Group 70 1.png";
import caseONe from "/images/case-studies/Group 1686555501.png"
import caseTwo from "/images/case-studies/website.jpg"
import caseThree from "../../public/images/case-studies/ai.png"
import about from "../../public/images/about.png";
import hamza from "../../public/images/home/ali-hamza.png";
import awais from "../../public/images/home/awais.png";
import ownersss from "../../public/images/home/ownersss.png";
import augmentation from "../../public/images/home/staff augmentation.png";
import Calendar from "../components/Calendar";
import { Link } from "react-router-dom";
import PicTestimonial from "../components/PicTestimonial";
import MapComponent from "../components/MapComponent";
import CountUp from 'react-countup';
import { Helmet } from "react-helmet-async";



const TeamMember = [
  {
    memName: "Muhammad Raheel",
    status: "Product Manager",
    profile: "/images/home/m.raheel.png"
  },
  {
    memName: "Muhammad Ramzan",
    status: "Senior UI UX Designer",
    profile: "/images/home/ramzan.png"
  },
  {
    memName: "Ali Hassan",
    status: "Business  Development ",
    profile: "/images/home/ali-hasan.png"
  },
  {
    memName: "Anum Noor",
    status: "Data Science project Manager",
    profile: "/images/home/anam.png"
  },
]

const counter = [
  {
    counter: <CountUp className="md:text-6xl text-4xl font-bold" end={125} suffix="+" />,
    text: "Mobile Application"
  },
  {
    counter: <CountUp className="md:text-6xl text-4xl font-bold" end={45} suffix="+" />,
    text: "Web Applications"
  },
  {
    counter: <CountUp className="md:text-6xl text-4xl font-bold" end={101} suffix="+" />,
    text: "Logos & Branding"
  },
  {
    counter: <CountUp className="md:text-6xl text-4xl font-bold" end={11} suffix="+" />,
    text: "AI Systems"
  },
  {
    counter: <CountUp className="md:text-6xl text-4xl font-bold" end={20} suffix="+" />,
    text: "Staff Augmentation"
  },
];


const Home = () => {
  const scrollToSection = () => {
    const section = document.getElementById("booking");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <Helmet>
        <title>DTK</title>
      </Helmet>

      <Header />

      {/* home */}
      <div className="hero_section padTop">
        <div className="container">
          <div className="main grid md:grid-cols-2 grid-cols-1 gap-20">
            <div className="content flex flex-col justify-center gap-8">
              <h1 className="md:text-6xl sm:text-5xl text-3xl font-bold uppercase">
                Software <br />
                <span className="text-[#FF0066] md:text-4xl sm:text-3xl text-2xl"> Development Company</span>
              </h1>
              <p className="text-lg text leading-normal">
                At DTechKrew, we specialize in crafting innovative software
                solutions tailored to meet the unique needs of your business. Our
                team of expert developers and designers is dedicated to
                transforming your ideas into cutting-edge applications that drive
                growth and efficiency.
              </p>
              <Link onClick={() => scrollToSection()} className="bg-[#fff] py-3 px-10 rounded-full text-[#79BCCF] text-lg max-w-max" to="#booking">Book a free consultation</Link>
            </div>
            <div className="img">
              <img src={mobile} alt="Group 70 1.png" />
            </div>
          </div>
        </div>
      </div>

      {/* expertise */}
      <div className="expertise padTop">
        <div className="container">
          <div className="content flex flex-col gap-20">
            <div className="textss flex flex-col gap-4">
              <h5 className="md:text-5xl sm:text-4xl text-2xl font-bold uppercase leading-snug text-center">
                Our <span className="text-[#FF0066]"> Expertise</span>
              </h5>
              <p className="text-lg text leading-normal text-center xl:w-6/12 heading_content">
                12 — SaaS companies we’ve helped in the past 24 months. Our
                holistic process takes care of discovery, branding, design, and
                development.
              </p>
            </div>
            {/* case 1 */}
            <div style={{
              backgroundImage:
                "url('/images/case-studies/Pattern(1).png'), url('/images/case-studies/Pattern1234.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top left, bottom right",
              backgroundSize: "8.5%, 17%",
            }} className="grid md:grid-cols-2 grid-cols-1 xl:gap-20 gap-0 bg-[#edf0f9] md:px-20 px-5 md:py-0 rounded-3xl">
              <div className="flex flex-col md:gap-20 gap-0 justify-center py-15">
                <div className="content flex flex-col gap-3">
                  <div className="flex flex-col gap-2">
                    <h6 className='font-bold xl:text-3xl text-lg'>MOBILE APP DEVELOPMENT</h6>
                  </div>
                  <ul className="text md:text-lg text-base list-disc ms-8">
                    <li>Custom iOS and Android app development</li>
                    <li>Cross-platform solutions (Flutter, React Native)</li>
                    <li>Native app development</li>
                    <li>App prototyping and testing</li>
                  </ul>
                </div>
                <Link className='px-10 py-4 text-[#000] rounded-lg relative max-w-max' to="/mobile-app-development"><span className='lines'>View More</span></Link>
              </div>
              <div className="flex justify-end">
                <img className='xl:w-80 w-96' src={caseONe} alt="" />
              </div>
            </div>
            {/* case 2 */}
            <div style={{
              backgroundImage:
                "url('/images/case-studies/webs.png'), url('/images/case-studies/Pattern456.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top right, bottom right",
              backgroundSize: "8.5%, 23%",
            }} className="grid md:grid-cols-2 grid-cols-1 xl:gap-20 gap-0 bg-[#f4f7ff] md:px-20 md:pt-10 px-5 md:py-0 rounded-3xl">
              <div className="">
                <img className='xl:w-80 w-96' src={caseTwo} alt="" />
              </div>
              <div className="flex flex-col md:gap-20 gap-0 justify-center py-15">
                <div className="content flex flex-col gap-3">
                  <div className="flex flex-col gap-2">
                    <h6 className='font-bold xl:text-3xl text-lg'>WEB DEVELOPMENT</h6>
                  </div>
                  <ul className="text md:text-lg text-base list-disc ms-8">
                    <li>Responsive web applications</li>
                    <li>Progressive Web Apps (PWAs)</li>
                    <li>Frontend and backend development</li>
                    <li>API integration and development</li>
                  </ul>
                </div>
                <Link className='px-10 py-4 text-[#000] rounded-lg relative max-w-max' to="/web-development"><span className='lines'>View More</span></Link>
              </div>
            </div>
            {/* case 3 */}
            <div style={{
              backgroundImage:
                "url('/images/case-studies/Pattern(5).png'), url('/images/case-studies/Pattern789.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top left, bottom right",
              backgroundSize: "8.5%, 24%",
            }} className="grid md:grid-cols-2 grid-cols-1 xl:gap-20 gap-0 bg-[#abebff] md:px-20 px-5 md:py-0 rounded-3xl">
              <div className="flex flex-col md:gap-20 gap-0 justify-center py-15">
                <div className="content flex flex-col gap-3">
                  <div className="flex flex-col gap-2">
                    <h6 className='font-bold xl:text-3xl text-lg'>DATA SCIENCE & AI DEVELOPMENT</h6>
                  </div>
                  <ul className="text md:text-lg text-base list-disc ms-8">
                    <li>Data analysis and visualization</li>
                    <li>Machine learning model development</li>
                    <li>Natural Language Processing (NLP) applications</li>
                    <li>Predictive analytics and decision-making systems</li>
                  </ul>
                </div>
                <Link className='px-10 py-4 text-[#000] rounded-lg relative max-w-max' to="/data-science-and-ai-development"><span className='lines'>View More</span></Link>
              </div>

              <div className="flex justify-end items-center">
                <img className='w-full h-56' src={caseThree} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* team */}
      <div className="team">
        <div className="flex flex-col gap-20">
          <div className="main">
            <div className="flex flex-col gap-20">
              <div className="section_content flex flex-col gap-5">
                <h5 className="md:text-5xl sm:text-4xl text-2xl font-bold uppercase leading-snug text-center">
                  Our <span className="text-[#FF0066]"> Team</span>
                </h5>
                <p className="text-lg leading-normal text-center xl:w-8/12 heading_content">
                  We are a dedicated team of experts specializing in mobile app design, development, and AI solutions. Our goal is to deliver innovative and high-quality digital experiences that drive success for businesses.
                </p>
              </div>


              {/* team member  */}
              <div style={{
                backgroundImage: "url('/images/home/teambg.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }} className="padTop">
                <div className="container">
                  <div className="grid grid-cols-12 md:gap-10 gap-5">
                    {/* own  */}
                    <div className="own md:col-span-4 col-span-12 flex flex-col gap-5">
                      <img className="w-full h-auto" src={ownersss} alt="" />
                      <div className="client_content text-center flex flex-col gap-3">
                        <div className="stat">
                          <h6 className="font-bold text-3xl">Dilshad Raza</h6>
                          <span className="status text-sm text-[#FF0066]">
                            Co-Founder & CEO
                          </span>
                        </div>
                        <p className="text-base">
                          Meet our talented CEO & Co-Founder, leading innovation and excellence at Dtechkrew.
                        </p>
                      </div>
                    </div>
                    {/* member  */}
                    <div className="member md:col-span-8 col-span-12 flex flex-col gap-5">
                      <div className="mem_content flex flex-col gap-2">
                        <h5 className="md:text-4xl sm:text-3xl text-2xl font-bold uppercase">
                          meet{" "}
                          <span className="text-[#FF0066]"> our expertise</span>
                        </h5>
                        <p className="md:text-md text-base leading-snug text-[#000]">
                          Meet the experts at Dtechkrew, where innovation and
                          expertise drive exceptional results. Our team combines
                          years of experience with cutting-edge technology to
                          deliver top-tier solutions. From AI to app development,
                          we’re here to turn your ideas into reality
                        </p>
                      </div>
                      <div className="members grid md:grid-cols-2 gap-10">
                        <div className="mem1">
                          <div className="own flex flex-col gap-5">
                            <img className="w-full h-auto" src={awais} alt="" />
                            <div className="client_content text-center flex flex-col gap-3">
                              <div className="stat">
                                <h6 className="font-bold text-3xl">M Awais</h6>
                                <span className="status text-sm text-[#FF0066]">
                                  Project Manager
                                </span>
                              </div>
                              <p className="text-base">
                                Meet our Project Manager, expertly guiding teams to deliver projects on time, within scope, and beyond expectations
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="mem2">
                          <div className="own flex flex-col gap-5">
                            <img className="w-full h-auto" src={hamza} alt="" />
                            <div className="client_content text-center flex flex-col gap-3">
                              <div className="stat">
                                <h6 className="font-bold text-3xl">Ali Hamza</h6>
                                <span className="status text-sm text-[#FF0066]">
                                  Senior Developer
                                </span>
                              </div>
                              <p className="text-base">
                                Meet our Senior Developer, crafting robust and scalable solutions with advanced coding expertise and innovative problem-solving
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* second member section  */}
          <div style={{
            backgroundImage: "url('/images/home/member.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }} className="allMembers padTop">
            <div className="container">
              <div className="grid md:grid-cols-4 grid-cols-1 gap-10">
                {
                  TeamMember.map((items, index) => {
                    return (
                      <div key={index} className="mem1">
                        <div className="own flex flex-col gap-5">
                          <img className="w-full h-auto" src={items.profile} alt="" />
                          <div className="client_content text-center flex flex-col gap-1">
                            <h6 className="font-bold text-2xl">{items.memName}</h6>
                            <span className="status text-sm text-[#000]">
                              {items.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* about us */}
      <div className="about padTop">
        <div className="container">
          <div className="main flex flex-col gap-20">
            <div className="section_content flex flex-col gap-5">
              <h5 className="md:text-5xl sm:text-4xl text-2xl font-bold uppercase leading-snug text-center">
                About <span className="text-[#FF0066]"> Us</span>
              </h5>
              <p className="text-lg text leading-normal text-center xl:w-8/12 heading_content">
                At Dtechkrew, we transform ideas into reality with cutting-edge technology. Specializing in mobile app development, AI solutions, and UI/UX design, we help businesses innovate and grow. From custom software to AI-powered applications, our expert team is dedicated to delivering high-quality digital solutions. Let’s build something extraordinary together
              </p>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
              {/* //content  */}
              <div className="aboutCon flex flex-col md:gap-5 gap-3">
                <p className="text-2xl">About Our Company</p>
                <h6 className="text-4xl font-bold">How We Can Help You</h6>
                <div className="detail flex flex-col gap-5">
                  <p className="md:text-lg text-base text xl:w-9/12 xs:w-full">
                    DTechKrew is a dynamic software solutions company dedicated to
                    empowering businesses worldwide.
                  </p>
                  <p className="md:text-lg text-base text xl:w-9/12 xs:w-full">
                    With innovative technology, we transform challenges into
                    lasting value, operational efficiency, and revenue growth.
                  </p>
                  <p className="md:text-lg text-base text xl:w-9/12 xs:w-full">
                    Our tailored engineering services and advanced solutions drive
                    business success, enabling our clients to thrive in a rapidly
                    evolving digital landscape.
                  </p>
                  <Link onClick={() => scrollToSection()} className="bg-[#fff] py-3 px-10 rounded-full text-[#79BCCF] text-lg max-w-max" to="#booking">Book a free consultation</Link>
                </div>
              </div>
              {/* // about img  */}
              <div className="aboutIMg">
                <img src={about} alt="" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* counter */}
      <div className="counter padTop bg-[#e8c6d7] p-5">
        <div className="container">
          <div className="main grid md:grid-cols-5 grid-cols-2 md:gap-20 gap-10">
            {
              counter.map((items, index) => {
                return (
                  <div key={index} className="flex flex-col gap-5 items-center text-[#FF0066]">
                    {items.counter}
                    <p className="text-[#000] text-lg">{items.text}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>

      {/* testimonials */}
      <PicTestimonial />

      {/* testimonials two */}
      <Testimonials />

      {/* Speak to Our Results */}
      <div className="Results padTop md:block hidden">
        <div className="container">
          <div className="main flex flex-col gap-20">
            <div className="section_content flex flex-col gap-5">
              <div className="content">
                <h5 className="md:text-5xl sm:text-4xl text-2xl font-bold uppercase leading-snug text-center">
                  Our <span className="text-[#FF0066]"> Clients</span>
                </h5>
                <p className="text-lg text leading-normal text-center xl:w-8/12 heading_content">
                  See what our customer say about us
                </p>
              </div>
              <div className="btns flex gap-10 flex justify-center">
                <div className="flex gap-1 items-center bg-[#fff] max-w-max p-2 rounded-full">
                  <span className="bg-[#000] rounded-full">hel</span>
                  <p className="text-[#000] text-lg">Satisfied customers</p>
                </div>
                <div className="flex gap-1 items-center bg-[#fff] max-w-max p-2 rounded-full">
                  <span className="bg-[#FF4C70] text-[#FF4C70] rounded-full">hel</span>
                  <p className="text-[#000] text-lg">customers reviews</p>
                </div>
              </div>
            </div>
            {/* <img src={MapResult} alt="MapResult" /> */}
            <MapComponent />
          </div>
        </div>
      </div>

      {/* Staff Augmentation */}
      <div className="Augmentation padTop">
        <div className="container">
          <div className="main flex flex-col gap-20">
            <div className="section_content flex flex-col gap-5">
              <h5 className="md:text-5xl sm:text-4xl text-3xl font-bold uppercase leading-snug text-center">
                Staff <span className="text-[#FF0066]"> Augmentation</span>
              </h5>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-20">
              <div className="flex flex-col gap-5">
                <p className="md:text-2xl text-lg">S T A F F A U G E M E N T A T I O N</p>
                <h6 className="md:text-4xl sm:text-3xl text-2xl font-bold uppercase">
                  IT Staff augmentation
                  <span className="text-[#FF0066]"> services</span>
                </h6>
                <p className="md:text-lg text-base text">
                  Expand your technology team with the top Latin American talent and take your business to the next level. Enhance productivity, streamline workflows, and accelerate project timelines with highly skilled professionals. Whether you need to bridge a talent gap, reduce development time, or implement a specialized skill set for a specific project, our experts are ready to deliver high-quality results tailored to your needs. Partner with us to access a diverse pool of top-tier talent and drive innovation effortlessly.
                </p>
                <Link className='px-10 py-4 text-[#000] rounded-lg relative max-w-max' to="/staff-augmentation"><span className='lines'>View More</span></Link>
              </div>
              <div className="">
                <img src={augmentation} alt="augmentation" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* // calendar */}
      <div id="booking" className="calendar">
        <div className="container">
          <div className="main flex flex-col gap-20">
            <div className="content flex flex-col gap-5">
              <h5 className="md:text-5xl sm:text-4xl text-2xl font-bold uppercase leading-snug">
                READY TO FIND OUT IF <span className="text-[#FF0066]"> <br className="inline" /> WE’RE THE ONES FOR YOU?</span>
              </h5>
              <p className="text-lg text leading-normal">
                Schedule your FREE, 20 minutes strategy <br className="inline" />
                session with our founder, Dilshad Raza
              </p>
            </div>
            <Calendar />
          </div>
        </div>
      </div>

      {/* last section  */}
      <PageLastSec />
      <Footer />
    </div >
  );
};

export default Home;
