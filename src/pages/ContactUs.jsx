import GetStarted from "../components/GetStarted";
import Recrutment from "../components/Recrutment";
import Teams from "../components/Teams";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { MdOutlineFacebook } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ContactUs = () => {
  return (
    <div>
      <Helmet>
        <title>DTK - Contact Us</title>
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
              <h1 className="md:text-5xl sm:text-4xl text-2xl font-bold leading-snug text-[#FF0066]">
                Contact Us
              </h1>
              <p className="md:text-lg text-base leading-normal text-center md:w-8/12 w-full heading_content text-[#fff]">
                DTechKrew combines cutting-edge technology with deep industry
                expertise to deliver impactful, scalable results.
              </p>
            </div>
            <div className="form grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-10">
              <div className="form">
                <form>
                  <div className="mb-4">
                    <input
                      className="focus:outline-none md:w-90 w-80 px-4 py-2 border-b-1 border-white text-[#fff]"
                      type="text"
                      id="name"
                      placeholder="full name"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      className="focus:outline-none w-70 px-4 py-2 border-b-1 border-white text-[#fff]"
                      type="email"
                      id="email"
                      placeholder="email"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <textarea
                      className="focus:outline-none w-70 px-4 py-2 border-b-1 border-white text-[#fff]"
                      id="message"
                      rows="4"
                      placeholder="message"
                      required
                    ></textarea>
                  </div>
                  <button
                    className="mx-w-auto px-14 bg-[#fff] text-[#000] py-2 rounded-full cursor-pointer"
                    type="submit"
                  >
                    Send
                  </button>
                </form>
              </div>
              <div className="detail flex flex-col gap-20">
                <div className="flex flex-col gap-3">
                  <div className="contactDetail flex flex-col gap-1">
                    <h6 className="font-bold text-[#fff] text-2xl">Contact</h6>
                    <div>
                      <p className="text-[#fff] text-lg">info@dtechkrew.io</p>
                      <p className="text-[#fff] text-lg">+92 308 7625314</p>
                    </div>
                  </div>
                  <div className="location flex flex-col gap-1">
                    <h6 className="font-bold text-[#fff] text-2xl">Based In</h6>
                    <div>
                      <p className="text-[#fff] text-lg">Punjab Pakistan</p>
                      <p className="text-[#fff] text-lg">Chicago, USA</p>
                    </div>
                  </div>
                </div>
                <div className="socialMedia flex gap-5">
                  <Link to="#">
                    <MdOutlineFacebook className="text-[#fff] text-3xl" />
                  </Link>
                  <Link to="#">
                    <IoLogoInstagram className="text-[#fff] text-3xl" />
                  </Link>
                  <Link to="#">
                    <FaLinkedin className="text-[#fff] text-3xl" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* get started */}
      <GetStarted />

      {/* Teams */}
      <Teams />

      {/* get started */}
      <div className="container">
        <Recrutment />
      </div>

      {/* footer  */}
      <Footer />
    </div>
  );
};

export default ContactUs;
