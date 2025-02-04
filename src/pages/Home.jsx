import Header from "../components/Header"
import Footer from "../components/Footer"
import mobile from "../../public/images/Group 70 1.png"
const Home = () => {
    return (
        <div>
            <Header />
            <div className="hero_section text-center padTop">
                <div className="container">
                    <div className="content flex flex-col gap-10">
                        <h1 className="text-6xl font-bold uppercase leading-snug">Software <br /> <span className="text-[#FF0066]"> Development Company</span></h1>
                        <p className="text-2xl leading-snug">At DTechKrew, we specialize in crafting innovative software solutions tailored
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
                            <h5 className="text-5xl font-bold uppercase leading-snug text-center">Our <span className="text-[#FF0066]"> Expertise</span></h5>
                            <p className="text-lg text leading-snug text-center">12 — SaaS companies we’ve helped in the past 24 months.
                                Our holistic <br /> process takes care of discovery, branding, design, and development.
                            </p>
                        </div>
                        <div className="ourExpertiseContent grid grid-cols-2 bg-[#fff] rounded-3xl p-10">
                            <div className="flex flex-col gap-5 justify-center">
                                <h5 className="text-3xl font-bold uppercase leading-snug">MOBILE APP DEVELOPMENT</h5>
                                <ul className="flex flex-col gap-3 text list-disc ms-7">
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
                                <img src={mobile} alt="" />
                            </div>
                        </div>
                        <div className="ourExpertiseContent grid grid-cols-2 bg-[#fff] rounded-3xl p-10">
                            <div className="col">
                                <img src={mobile} alt="" />
                            </div>
                            <div className="flex flex-col gap-5 justify-center">
                                <h5 className="text-3xl font-bold uppercase leading-snug">WEB DEVELOPMENT</h5>
                                <ul className="flex flex-col gap-3 text list-disc ms-7">
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
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home
