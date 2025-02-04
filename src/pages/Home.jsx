import Header from "../components/Header";
import Footer from "../components/Footer";
import mobile from "../../public/images/Group 70 1.png";
import website from "../../public/images/website.png";
import iPhone from "../../public/images/iPhone.png";
import ai from "../../public/images/ai.png";
import about from "../../public/images/about.png";
import layer1 from "../../public/images/Layer 1.png";
import layer2 from "../../public/images/Layer 2.png";
import clint from "../../public/images/WhatsApp Image 2024-11-17 at 4.21.18 PM.png";
import clint2 from "../../public/images/Rectangle 7.png";
const Home = () => {
  return (
    <div>
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
              <p className="text-lg text leading-normal text-center md:w-6/12 heading_content">
                12 — SaaS companies we’ve helped in the past 24 months. Our
                holistic process takes care of discovery, branding, design, and
                development.
              </p>
            </div>
            <div className="mobileApp grid md:grid-cols-2 bg-[#EDF0F9] rounded-3xl p-10 gap-5">
              <div className="flex flex-col gap-5 justify-center bg-[url('../../public/images/Layer 1.png')] bg-containr bg-center h-screen w-ful">
                <h5 className="md:text-4xl sm:text-2xl text-lg font-bold uppercase leading-snug">
                  MOBILE APP DEVELOPMENT
                </h5>
                <ul className="md:text-2xl sm:text-lg text-sm flex flex-col gap-3 text list-disc ms-7">
                  <li>Custom iOS and Android app development</li>
                  <li>Cross-platform solutions (Flutter, React Native)</li>
                  <li>Native app development</li>
                  <li>App prototyping and testing</li>
                </ul>
                <div className="button relative">
                  <a href="#">
                    <span>View More</span>
                  </a>
                </div>
              </div>
              <div className="col">
                <img
                  src={iPhone}
                  alt="Mobile App Development"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="Website grid md:grid-cols-2 bg-[#EDF0F9] rounded-3xl p-10 gap-25">
              <div className="col sss">
                <img src={website} alt="" className="w-full h-auto" />
              </div>
              <div className="flex flex-col gap-5 justify-center">
                <h5 className="md:text-4xl sm:text-2xl text-lg font-bold uppercase leading-snug">
                  WEB DEVELOPMENT
                </h5>
                <ul className="md:text-2xl sm:text-lg text-sm flex flex-col gap-3 text list-disc ms-7">
                  <li>Responsive web applications</li>
                  <li>Progressive Web Apps (PWAs)</li>
                  <li>Frontend and backend development</li>
                  <li>API integration and development</li>
                </ul>
                <div className="button relative">
                  <a href="#">
                    <span>View More</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="AI grid md:grid-cols-2 bg-[#C7EBE4] rounded-3xl p-10 gap-5">
              <div className="flex flex-col gap-5 justify-center">
                <h5 className="md:text-4xl sm:text-2xl text-lg font-bold uppercase leading-snug">
                  DATA SCIENCE & AI DEVELOPMENT
                </h5>
                <ul className="md:text-2xl sm:text-lg text-sm flex flex-col gap-3 text list-disc ms-7">
                  <li>Data analysis and visualization</li>
                  <li>Machine learning model development</li>
                  <li>Natural Language Processing (NLP) applications</li>
                  <li>Predictive analytics and decision-making systems</li>
                </ul>
                <div className="button relative">
                  <a href="#">
                    <span>View More</span>
                  </a>
                </div>
              </div>
              <div className="col">
                <img
                  src={ai}
                  alt="Mobile App Development"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* team */}
      <div className="outTeam bg-[#fff] padTop">
        <div className="container flex flex-col gap-20">
          <div className="section_content">
            <h5 className="md:text-5xl sm:text-4xl text-2xl font-bold uppercase leading-snug text-center">
              Our <span className="text-[#FF0066]"> Team</span>
            </h5>
            <p className="text-lg text leading-normal text-center md:w-6/12 heading_content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              congue interdum ligula a dignissim. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed lobortis orci elementum egestas
              lobortis.
            </p>
          </div>



          <div className="teams grid grid-cols-12 flex gap-15">
            <div className="md:col-span-4 col-span-12">
              <div className="clineInfo  flex flex-col gap-5">
                <img src={clint2} className="w-full h-auto" alt="" />
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
            <div className="md:col-span-8 col-span-12 flex flex-col gap-5">
              <div className="">
                <h5 className="md:text-5xl sm:text-4xl text-2xl font-bold uppercase leading-snug">
                  meet <span className="text-[#FF0066]"> our expertise</span>
                </h5>
                <p className="md:text-lg text-base text leading-snug">
                  Meet the experts at Dtechkrew, where innovation and expertise
                  drive exceptional results. Our team combines years of
                  experience with cutting-edge technology to deliver top-tier
                  solutions. From AI to app development, we’re here to turn your
                  ideas into reality
                </p>
              </div>
              <div className="member flex gap-20">
                <div className="clineInfo  flex flex-col gap-5">
                  <img src={clint} alt="" />
                  <div className="client_content text-center flex flex-col gap-3">
                    <div className="stat">
                      <h6 className="font-bold lg:text-3xl text-2xl">
                        Dilshad Raza
                      </h6>
                      <span className="status text-sm text-[#FF0066]">
                        Co and co-founder
                      </span>
                    </div>
                    <p className="text-base">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
                <div className="clineInfo  flex flex-col gap-5">
                  <img src={clint} alt="" />
                  <div className="client_content text-center flex flex-col gap-3">
                    <div className="stat">
                      <h6 className="font-bold lg:text-3xl text-2xl">
                        Dilshad Raza
                      </h6>
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



          <div className="junior grid md:grid-cols-4 xs:grid-cols-12 lg:gap-20 gap-10">
            <div className="clineInfo  flex flex-col gap-5">
              <img src={clint} alt="" />
              <div className="client_content text-center flex flex-col gap-3">
                <div className="stat">
                  <h6 className="font-bold lg:text-3xl text-2xl">
                    Dilshad Raza
                  </h6>
                  <span className="status text-sm text-[#FF0066]">
                    Co and co-founder
                  </span>
                </div>
                <p className="text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="clineInfo  flex flex-col gap-5">
              <img src={clint} alt="" />
              <div className="client_content text-center flex flex-col gap-3">
                <div className="stat">
                  <h6 className="font-bold lg:text-3xl text-2xl">
                    Dilshad Raza
                  </h6>
                  <span className="status text-sm text-[#FF0066]">
                    Co and co-founder
                  </span>
                </div>
                <p className="text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="clineInfo  flex flex-col gap-5">
              <img src={clint} alt="" />
              <div className="client_content text-center flex flex-col gap-3">
                <div className="stat">
                  <h6 className="font-bold lg:text-3xl text-2xl">
                    Dilshad Raza
                  </h6>
                  <span className="status text-sm text-[#FF0066]">
                    Co and co-founder
                  </span>
                </div>
                <p className="text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="clineInfo  flex flex-col gap-5">
              <img src={clint} alt="" />
              <div className="client_content text-center flex flex-col gap-3">
                <div className="stat">
                  <h6 className="font-bold lg:text-3xl text-2xl">
                    Dilshad Raza
                  </h6>
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

      {/* about us */}
      <div className="aboutUs padTop">
        <div className="container flex flex-col gap-20">
          <div className="section_content">
            <h5 className="md:text-5xl sm:text-4xl text-2xl font-bold uppercase leading-snug text-center">
              About <span className="text-[#FF0066]"> Us</span>
            </h5>
            <p className="text-lg text leading-normal text-center md:w-6/12 heading_content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              voluptas ducimus tempore iste beatae dicta, dolore eligendi et
              blanditiis aspernatur aliquam illum voluptatem dolores accusamus
              voluptate, porro, amet provident voluptatum!
            </p>
          </div>
          <div className="aboutUsCols grid grid-cols-2">
            <div className="flex flex-col gap-5">
              <p className="text-2xl">About Our Company</p>
              <h6 className="text-4xl font-medium">How We Can Help You</h6>
              <div className="detail flex flex-col gap-5">
                <p className="text-2xl text">
                  DTechKrew is a dynamic software solutions company dedicated to
                  empowering businesses worldwide.
                </p>
                <p className="text-2xl text">
                  With innovative technology, we transform challenges into
                  lasting value, operational efficiency, and revenue growth.
                </p>
                <p className="text-2xl text">
                  Our tailored engineering services and advanced solutions drive
                  business success, enabling our clients to thrive in a rapidly
                  evolving digital landscape.
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <img src={about} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
