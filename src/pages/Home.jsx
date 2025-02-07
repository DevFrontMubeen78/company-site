import Header from "../components/Header";
import Footer from "../components/Footer";
import PageLastSec from "../components/PageLastSec";
import mobile from "../../public/images/Group 70 1.png";
import caseONe from "/images/case-studies/Group 1686555501.png"
import caseTwo from "/images/case-studies/website.jpg"
import caseThree from "/images/case-studies/ai.png"
import about from "../../public/images/about.png";
// import layer1 from "../../public/images/Layer 1.png";
// import layer2 from "../../public/images/Layer 2.png";
import clint from "../../public/images/WhatsApp Image 2024-11-17 at 4.21.18 PM.png";
import clint2 from "../../public/images/Rectangle 7.png";
import video from "../../public/images/videos.png";
import quotes from "../../public/images/Quotes.png";
import { Link } from "react-router-dom";
// import homebg from "../../public/images/home/teambg.jpg"

import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>DTK</title>
      </Helmet>

      <Header />

      {/* home */}
      <div className="hero_section text-center padTop">
        <div className="container">
          <div className="content flex flex-col gap-8">
            <h1 className="md:text-6xl sm:text-4xl text-2xl font-bold uppercase leading-snug">
              Software <br />
              <span className="text-[#FF0066]"> Development Company</span>
            </h1>
            <p className="text-lg text leading-normal text-center md:w-4/5 heading_content">
              At DTechKrew, we specialize in crafting innovative software
              solutions tailored to meet the unique needs of your business. Our
              team of expert developers and designers is dedicated to
              transforming your ideas into cutting-edge applications that drive
              growth and efficiency.
            </p>
            <img src={mobile} alt="Group 70 1.png" />
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
              backgroundSize: "8.5%, 19.5%",
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
                <Link className='px-10 py-4 text-[#000] rounded-lg relative max-w-max' to="#"><span className='lines'>View More</span></Link>
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
              backgroundSize: "8.5%, 27%",
            }} className="grid md:grid-cols-2 grid-cols-1 xl:gap-20 gap-0 bg-[#f4f7ff] md:px-20 md:pt-10 px-5 md:py-0 rounded-3xl">
              <div className="flex justify-end">
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
                <Link className='px-10 py-4 text-[#000] rounded-lg relative max-w-max' to="#"><span className='lines'>View More</span></Link>
              </div>
            </div>
            {/* case 3 */}
            <div style={{
              backgroundImage:
                "url('/images/case-studies/Pattern(5).png'), url('/images/case-studies/Pattern789.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top left, bottom right",
              backgroundSize: "8.5%, 28%",
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
                <Link className='px-10 py-4 text-[#000] rounded-lg relative max-w-max' to="#"><span className='lines'>View More</span></Link>
              </div>
              <div className="flex justify-end">
                <img className='w-full' src={caseThree} alt="" />
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
              <div className="section_content">
                <h5 className="md:text-5xl sm:text-4xl text-2xl font-bold uppercase leading-snug text-center">
                  Our <span className="text-[#FF0066]"> Team</span>
                </h5>
                <p className="text-lg text leading-normal text-center md:w-8/12 heading_content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  congue interdum ligula a dignissim. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed lobortis orci elementum egestas
                  lobortis.
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
                    <div className="own md:col-span-5 col-span-12 flex flex-col gap-5">
                      <img className="w-full h-auto" src={clint2} alt="" />
                      <div className="client_content text-center flex flex-col gap-3">
                        <div className="stat">
                          <h6 className="font-bold text-3xl">Dilshad Raza</h6>
                          <span className="status text-sm text-[#FF0066]">
                            Co and co-founder
                          </span>
                        </div>
                        <p className="text-base">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                      </div>
                    </div>
                    {/* member  */}
                    <div className="member md:col-span-7 col-span-12 flex flex-col gap-5">
                      <div className="mem_content flex flex-col gap-2">
                        <h5 className="md:text-4xl sm:text-3xl text-2xl font-bold uppercase">
                          meet{" "}
                          <span className="text-[#FF0066]"> our expertise</span>
                        </h5>
                        <p className="md:text-md text-base text leading-snug">
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
                            <img className="w-full h-auto" src={clint2} alt="" />
                            <div className="client_content text-center flex flex-col gap-3">
                              <div className="stat">
                                <h6 className="font-bold text-3xl">Dilshad Raza</h6>
                                <span className="status text-sm text-[#FF0066]">
                                  Co and co-founder
                                </span>
                              </div>
                              <p className="text-base">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="mem2">
                          <div className="own flex flex-col gap-5">
                            <img className="w-full h-auto" src={clint2} alt="" />
                            <div className="client_content text-center flex flex-col gap-3">
                              <div className="stat">
                                <h6 className="font-bold text-3xl">Dilshad Raza</h6>
                                <span className="status text-sm text-[#FF0066]">
                                  Co and co-founder
                                </span>
                              </div>
                              <p className="text-base">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
                <div className="mem1">
                  <div className="own flex flex-col gap-5">
                    <img className="w-full h-auto" src={clint2} alt="" />
                    <div className="client_content text-center flex flex-col gap-3">
                      <div className="stat">
                        <h6 className="font-bold text-3xl">Dilshad Raza</h6>
                        <span className="status text-sm text-[#FF0066]">
                          Co and co-founder
                        </span>
                      </div>
                      <p className="text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mem2">
                  <div className="own flex flex-col gap-5">
                    <img className="w-full h-auto" src={clint2} alt="" />
                    <div className="client_content text-center flex flex-col gap-3">
                      <div className="stat">
                        <h6 className="font-bold text-3xl">Dilshad Raza</h6>
                        <span className="status text-sm text-[#FF0066]">
                          Co and co-founder
                        </span>
                      </div>
                      <p className="text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mem3">
                  <div className="own flex flex-col gap-5">
                    <img className="w-full h-auto" src={clint2} alt="" />
                    <div className="client_content text-center flex flex-col gap-3">
                      <div className="stat">
                        <h6 className="font-bold text-3xl">Dilshad Raza</h6>
                        <span className="status text-sm text-[#FF0066]">
                          Co and co-founder
                        </span>
                      </div>
                      <p className="text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mem4">
                  <div className="own flex flex-col gap-5">
                    <img className="w-full h-auto" src={clint2} alt="" />
                    <div className="client_content text-center flex flex-col gap-3">
                      <div className="stat">
                        <h6 className="font-bold text-3xl">Dilshad Raza</h6>
                        <span className="status text-sm text-[#FF0066]">
                          Co and co-founder
                        </span>
                      </div>
                      <p className="text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* about us */}
      <div className="aboutUs padTop">
        <div className="container flex flex-col gap-20">
          <div className="section_content">
            <h5 className="md:text-5xl sm:text-4xl text-2xl font-bold uppercase leading-snug text-center">
              About <span className="text-[#FF0066]"> Us</span>
            </h5>
            <p className="text-lg text leading-normal text-center xl:w-6/12 heading_content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              voluptas ducimus tempore iste beatae dicta, dolore eligendi et
              blanditiis aspernatur aliquam illum voluptatem dolores accusamus
              voluptate, porro, amet provident voluptatum!
            </p>
          </div>
          <div className="aboutUsCols grid xl:grid-cols-2 gap-20">
            <div className="flex flex-col gap-5">
              <p className="text-2xl">About Our Company</p>
              <h6 className="text-4xl font-medium">How We Can Help You</h6>
              <div className="detail flex flex-col gap-10">
                <p className="md:text-2xl text-lg text xl:w-9/12 xs:w-full">
                  DTechKrew is a dynamic software solutions company dedicated to
                  empowering businesses worldwide.
                </p>
                <p className="md:text-2xl text-lg text xl:w-9/12 xs:w-full">
                  With innovative technology, we transform challenges into
                  lasting value, operational efficiency, and revenue growth.
                </p>
                <p className="md:text-2xl text-lg text xl:w-9/12 xs:w-full">
                  Our tailored engineering services and advanced solutions drive
                  business success, enabling our clients to thrive in a rapidly
                  evolving digital landscape.
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <img src={about} alt="" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* testimonials */}
      <div className="testimonial padTop">
        <div className="container">
          <div className="main flex flex-col gap-20">
            <div className="section_content flex flex-col gap-5">
              <h5 className="md:text-5xl sm:text-4xl text-2xl font-bold uppercase leading-snug text-center">
                Testimonials That <br className="inline" /> Speak to{" "}
                <span className="text-[#FF0066]"> Our Results</span>
              </h5>
              <p className="text-lg text leading-normal text-center xl:w-6/12 heading_content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                voluptas ducimus tempore iste beatae dicta, dolore eligendi et
                blanditiis aspernatur aliquam illum voluptatem dolores accusamus
                voluptate, porro, amet provident voluptatum!
              </p>
            </div>
            <div className="tests">
              <Swiper
                // install Swiper modules
                modules={[Navigation, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation={{ clickable: true }}
                breakpoints={{
                  // Small Screens (Mobile)
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  // Medium Screens (Tablets)
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  // Large Screens (Laptops)
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  // Extra Large Screens (Desktops)
                  1280: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                }}
              >
                <SwiperSlide>
                  <img src={video} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={video} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={video} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={video} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={video} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={video} alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      {/* our clients */}
      <div className="Outclients padTop">
        <div className="container">
          <div className="main flex flex-col gap-20">
            <div className="section_content flex flex-col gap-5">
              <h5 className="md:text-5xl sm:text-4xl text-2xl font-bold uppercase leading-snug text-center">
                Testimonials That <br className="inline" /> Speak to{" "}
                <span className="text-[#FF0066]"> Our Results</span>
              </h5>
              <p className="text-lg text leading-normal text-center xl:w-6/12 heading_content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                voluptas ducimus tempore iste beatae dicta, dolore eligendi et
                blanditiis aspernatur aliquam illum voluptatem dolores accusamus
                voluptate, porro, amet provident voluptatum!
              </p>
            </div>
            <div className="cards grid grid-cols-2 gap-144">
              <div className="bg-[#FF0066] p-5 rounded flex flex-col gap-5">
                <img className="w-12" src={quotes} alt="" />
                <p>
                  I am very proud of the team at DevDimensions, they are a very
                  smart group of people and I highly recommend them.
                </p>
                <div className="footer flex gap-5">
                  <img className="w-12 rounded-full" src={clint} alt="" />
                  <div className="footr_content">
                    <h6 className="font-bold">Paul McGruire</h6>
                    <p>Co-fonder & CEO, Tru.id</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#FF0066] p-5 rounded flex flex-col gap-5">
                <img className="w-12" src={quotes} alt="" />
                <p>
                  I am very proud of the team at DevDimensions, they are a very
                  smart group of people and I highly recommend them.
                </p>
                <div className="footer flex gap-5">
                  <img className="w-12 rounded-full" src={clint} alt="" />
                  <div className="footr_content">
                    <h6 className="font-bold">Paul McGruire</h6>
                    <p>Co-fonder & CEO, Tru.id</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* our clients */}
      <div className="Outclients padTop">
        <div className="container">
          <div className="main flex flex-col gap-20">
            <div className="section_content flex flex-col gap-5">
              <h5 className="md:text-5xl sm:text-4xl text-2xl font-bold uppercase leading-snug text-center">
                Staff <span className="text-[#FF0066]"> Augmentation</span>
              </h5>
            </div>
            <div className="grid grid-cols-2">
              <div className="">
                <p>S T A F F A U G E M E N T A T I O N</p>
                <h6>
                  IT Staff augmentation
                  <span className="text-[#FF0066]"> services</span>
                </h6>
                <p>
                  Expand your technology team with the top Latin American
                  Talent, Boost your productivity, reduce timeframes, or
                  implemont a specific skillset for a limited time.
                </p>
              </div>
              <div className="">
                <img src={clint} alt="" />
              </div>
            </div>
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
