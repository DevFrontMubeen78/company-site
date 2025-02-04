import Header from "../components/Header"
import Footer from "../components/Footer"
import mobile from "../../public/images/Group 70 1.png"
import website from "../../public/images/website.png"
// import clint from "../../public/images/WhatsApp Image 2024-11-17 at 4.21.18 PM.png"
// import clint2 from "../../public/images/Rectangle 7.png"
const Home = () => {
    return (
        <div>
            <Header />
            <div className="hero_section text-center padTop">
                <div className="container">
                    <div className="content flex flex-col sm:gap-10 gap-5">
                        <h1 className="md:text-6xl sm:text-4xl text-2xl font-bold uppercase leading-snug">Software <br /> <span className="text-[#FF0066]"> Development Company</span></h1>
                        <p className="md:text-2xl sm:text-lg text-sm leading-snug text">At DTechKrew, we specialize in crafting innovative software solutions tailored
                            to meet the unique needs of your business. Our team of expert developers and designers is dedicated to transforming
                            your ideas into cutting-edge applications that drive growth and efficiency.
                        </p>
                        <img src={mobile} alt="Group 70 1.png" />
                    </div>
                </div>
            </div>
            <div className="expertise padTop">
                <div className="container">
                    <div className="content flex flex-col gap-20">
                        <div className="textss flex flex-col gap-4">
                            <h5 className="md:text-5xl sm:text-4xl text-2xl font-bold uppercase leading-snug text-center">Our <span className="text-[#FF0066]"> Expertise</span></h5>
                            <p className="md:text-2xl sm:text-lg text-sm text-lg text leading-snug text-center">12 — SaaS companies we’ve helped in the past 24 months.
                                Our holistic <br className="inline" /> process takes care of discovery, branding, design, and development.
                            </p>
                        </div>
                        <div className="ourExpertiseContent grid md:grid-cols-2 bg-[#EDF0F9] rounded-3xl p-10 gap-5">
                            <div className="flex flex-col gap-5 justify-center">
                                <h5 className="md:text-4xl sm:text-2xl text-lg font-bold uppercase leading-snug">MOBILE APP DEVELOPMENT</h5>
                                <ul className="md:text-2xl sm:text-lg text-sm flex flex-col gap-3 text list-disc ms-7">
                                    <li>Custom iOS and Android app development</li>
                                    <li>Cross-platform solutions (Flutter, React Native)</li>
                                    <li>Native app development</li>
                                    <li>App prototyping and testing</li>
                                </ul>
                                <div className="button relative">
                                    <a href="#"><span>View More</span></a>
                                </div>
                            </div>
                            <div className="col">
                                <img src={mobile} alt="Mobile App Development" className="w-full h-auto" />
                            </div>
                        </div>
                        <div className="ourExpertiseContent grid md:grid-cols-2 bg-[#EDF0F9] rounded-3xl p-10 gap-25">
                            <div className="col sss">
                                <img src={website} alt="" className="w-full h-auto" />
                            </div>
                            <div className="flex flex-col gap-5 justify-center">
                                <h5 className="md:text-4xl sm:text-2xl text-lg font-bold uppercase leading-snug">WEB DEVELOPMENT</h5>
                                <ul className="md:text-2xl sm:text-lg text-sm flex flex-col gap-3 text list-disc ms-7">
                                    <li>Responsive web applications</li>
                                    <li>Progressive Web Apps (PWAs)</li>
                                    <li>Frontend and backend development</li>
                                    <li>API integration and development</li>
                                </ul>
                                <div className="button relative">
                                    <a href="#"><span>View More</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="ourExpertiseContent grid md:grid-cols-2 bg-[#C7EBE4] rounded-3xl p-10 gap-5">
                            <div className="flex flex-col gap-5 justify-center">
                                <h5 className="md:text-4xl sm:text-2xl text-lg font-bold uppercase leading-snug">DATA SCIENCE & AI DEVELOPMENT</h5>
                                <ul className="md:text-2xl sm:text-lg text-sm flex flex-col gap-3 text list-disc ms-7">
                                    <li>Data analysis and visualization</li>
                                    <li>Machine learning model development</li>
                                    <li>Natural Language Processing (NLP) applications</li>
                                    <li>Predictive analytics and decision-making systems</li>
                                </ul>
                                <div className="button relative">
                                    <a href="#"><span>View More</span></a>
                                </div>
                            </div>
                            <div className="col">
                                <img src={mobile} alt="Mobile App Development" className="w-full h-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home
