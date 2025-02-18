import Header from "../components/Header";
import Footer from "../components/Footer";
import PageLastSec from "../components/PageLastSec";
import { Helmet } from "react-helmet-async";

import mbile from "/images/staff-aug/mbile.png";
import web from "/images/staff-aug/web.png";
import uiux from "/images/staff-aug/uiux.png";

const WebDevs = {
    Benefits: [
        {
            title: "Mitigating the skill gap ",
            desc: "Hiring the professionals with the right skills and industry experience can be a major challenge for your project, especially when qualified engineers are scarce. IT staff augmentation provides access to a diverse talent pool with expertise in specialized areas like AI, cybersecurity, and software development. This approach offers a quick solution to fill skill gaps and meet project demands efficiently.",
        },
        {
            title: "Project flexibility",
            desc: "IT project workloads can be unpredictable, making it difficult for companies to maintain the right team size. IT staff augmentation provides the flexibility to quickly scale teams up or down based on project needs. This helps you adapt to changes in scope, timelines, and complexity without the challenges of recruitment or layoffs.",
        },
        {
            title: "Risk mitigation",
            desc: "With our staff augmentation services, you’re assured of a perfect talent match, as all engineers are thoroughly vetted and tested. Say goodbye to talent mismatches, experience gaps, and unexpected employee departures. Your project will be completed on schedule and within budget.",
        },
    ],
    Benefits1: [
        {
            title: "Cost Efficiency",
            desc: "Hiring full-time employees comes with significant expenses, such as salaries, benefits, training, and infrastructure. IT staff augmentation helps reduce these costs by offering skilled professionals for temporary or project-based work. This approach allows you to utilize external talent without long-term financial commitments, maximizing your budget efficiency.",
        },
        {
            title: "Faster time-to-market",
            desc: "Time-sensitive projects require quick deployment of skilled engineers. Staff augmentation lets you onboard experienced professionals who seamlessly integrate with your in-house team, saving you the time and effort of recruiting and managing new hires.",
        },
        {
            title: "Knowledge transfer",
            desc: "Outsourcing a team brings diverse experience from various projects and industries. Your in-house team will gain new perspectives, learn innovative approaches, and adopt best practices that enhance their skills and efficiency in handling tasks related to your product.",
        },
    ],
    DTeckrew: [
        {
            title: "Our Team Extension Process",
            desc: "At DTechKrew, our Team Extension services make scaling your team seamless. We provide highly skilled professionals who integrate effortlessly into your workflow, helping you accelerate projects without compromising on quality.",
        },
        {
            title: "Candidates selection and screening",
            desc: "Leveraging our vast network, we pinpoint top talent that aligns with your specific needs. Ukraine's IT market is home to over 270,000 skilled software engineers, ensuring the perfect match for your project. Additionally, we expand our talent pool by hiring developers across Europe to provide the best options available. Our thorough selection process includes technical interviews by senior engineers to verify technical expertise, followed by HR assessments to ensure cultural fit and soft skills for smooth team integration.",
        },
        {
            title: "Team integration",
            desc: "We go beyond matching your team with the right cultural and technical fit. Throughout the project, we hold weekly meetings for problem-solving and feedback, ensuring that your engineers meet performance expectations. Our managers and coordinators continuously review work processes to maximize efficiency and deliver optimal results.",
        },
        {
            title: "Ongoing support",
            desc: "We handle all administrative tasks, including paperwork, payroll, taxes, and providing necessary hardware and workspaces for your team extension specialists. Our competency center ensures that our engineers stay current with the latest skills, grow professionally, and are prepared to deliver top-tier solutions. At DTechKrew, we don’t just hire talent; we invest in their growth, resulting in a strong retention rate and high employee satisfaction.",
        },
    ],
    developers: [
        "/images/staff-aug/image(3).png",
        "/images/staff-aug/image(4).png",
        "/images/staff-aug/image(5).png",
        "/images/staff-aug/image(6).png",
        "/images/staff-aug/image(7).png",
        "/images/staff-aug/image(8).png",
        "/images/staff-aug/image(9).png",
        "/images/staff-aug/image(10).png",
        "/images/staff-aug/image(11).png",
    ],
    Choose: [
        {
            img: "/images/staff-aug/image-removebg-preview (32) 1.png",
            title: "Rapid team expansion",
        },
        {
            img: "/images/staff-aug/image-removebg-preview (33) 1.png",
            title: "Specific development abilities",
        },
        {
            img: "/images/staff-aug/image-removebg-preview (34) 1.png",
            title: "Cost-effective hiring",
        },
        {
            img: "/images/staff-aug/image-removebg-preview (35) 1.png",
            title: "Access to a huge talent pool",
        },
        {
            img: "/images/staff-aug/image-removebg-preview (36) 1.png",
            title: "Long-term project support ",
        },
        {
            img: "/images/staff-aug/image-removebg-preview (37) 1.png",
            title: "Seamless integration",
        },
    ],
    clients: [
        {
            img: "/images/staff-aug/clientr1.png",
            status: "Mobile Product Manager at Lesara",
            title: "John Doe",
            desc: "Our cooperation was successful because of the balance between quick turnaround and ensuring high quality in every feature. DTechKrew developers were fully integrated with the Lesara team. It enabled flexibility and clear communication.",
        },
        {
            img: "/images/staff-aug/clientr2.png",
            status: "Mobile Product Manager at Lesara",
            title: "David Wilson",
            desc: "Our cooperation was successful because of the balance between quick turnaround and ensuring high quality in every feature. DTechKrew developers were fully integrated with the Lesara team. It enabled flexibility and clear communication.",
        },
    ],
    clients1: [
        {
            img: "/images/staff-aug/clientr3.png",
            status: "Mobile Product Manager at Lesara",
            title: "Michael Brown",
            desc: "Our cooperation was successful because of the balance between quick turnaround and ensuring high quality in every feature. DTechKrew developers were fully integrated with the Lesara team. It enabled flexibility and clear communication.",
        },
        {
            img: "/images/staff-aug/clientr4.png",
            status: "Mobile Product Manager at Lesara",
            title: "Daniel Thomas",
            desc: "Our cooperation was successful because of the balance between quick turnaround and ensuring high quality in every feature. DTechKrew developers were fully integrated with the Lesara team. It enabled flexibility and clear communication.",
        },
    ]

};
const Augmentation = () => {
    return (
        <div>
            <Helmet>
                <title>DTK - Staff Augmentation</title>
            </Helmet>
            <Header />
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
                                Staff  <span className="text-[#FF0066] "> Augmentation</span>
                            </h1>
                            <p className="md:text-lg text-base leading-normal text-center w-full heading_content text-[#fff]">
                                Strengthen your company with expertise by entrusting your project to a team of dedicated developers. Effortlessly scale your development crew with our team extension services.
                            </p>
                        </div>
                        <div className="content text-center flex flex-col gap-10">
                            <h1 className="md:text-4xl sm:text-4xl text-2xl font-bold leading-snug text-[#fff]">
                                Scale up your Development  with <br /> our Expert Engineers
                            </h1>
                            <div className="flex flex-col gap-3 text-left">
                                <h1 className="text-2xl font-bold leading-snug text-[#fff]">
                                    Why Choose DTechKrew as Your Staff Augmentation Partner?
                                </h1>
                                <p className="md:text-lg text-base leading-normal heading_content text-[#fff]">
                                    Developing market-winning software requires having top-tier talent on your team. We understand the complexities of finding and hiring experienced in-house software engineers, project managers, designers, and other professionals. However, making the right personnel decisions is decisive for the success of your project. <br className="inline" />
                                    DTechKrew team has profound expertise in IT staff augmentation services with 9+ years on the market, 100+ successful projects, and a pool of 100+ engineers. Partnering with us means you’ll get years of relevant experience in your industry, best practices, and top-tier professionals to bring your ideas to life.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Benefits of IT Staff Augmentation */}
            <div className="Benefits padTop">
                <div className="container">
                    <div className="main flex flex-col gap-16">
                        <div className="scroll-animate content text-center flex flex-col gap-3">
                            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#000]">
                                Benefits of IT
                                <span className="text-[#FF0066]"> Staff Augmentation</span>
                            </h1>
                            <p className="md:text-lg text-base leading-normal text-center heading_content text">
                                Collaborating with IT staff augmentation providers will help you solve multiple <br className="inline" /> challenges.
                            </p>
                        </div>
                        <div className="content_corporate grid md:grid-cols-2 grid-cols-1 xl:gap-40 md:gap-20 gap-10">
                            <div className="slide-in-left flex flex-col gap-20">
                                {WebDevs.Benefits.map((items, index) => {
                                    return (
                                        <div key={index} className="innertext flex flex-col gap-2">
                                            <h6 className="font-bold text-2xl">{items.title}</h6>
                                            <p className="text-base text">{items.desc}</p>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="slide-in-right flex flex-col gap-20">
                                {WebDevs.Benefits1.map((items, index) => {
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

            {/* // Our Core Services  */}
            <div className="CoreServices padTop">
                <div className="container">
                    <div className="main flex flex-col gap-20">
                        <div className="scroll-animate section_title text-center">
                            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#000]">
                                Our
                                <span className="text-[#FF0066]"> Core Services</span>
                            </h1>
                        </div>
                        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-40 gap-10">
                            <div className="slide-in-left map">
                                <img src={mbile} alt="python" />
                            </div>
                            <div className="slide-in-right flex flex-col gap-5 justify-center">
                                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#000]">
                                    Mobile App Development
                                </h1>
                                <p className="md:text-lg text-base leading-normal w-full heading_content text">
                                    We craft intuitive, high-performance mobile apps for iOS and Android, ensuring user engagement and seamless functionality.
                                </p>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-40 gap-10">
                            <div className="slide-in-left flex flex-col gap-5 justify-center">
                                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#000]">
                                    Web Development
                                </h1>
                                <p className="md:text-lg text-base leading-normal w-full heading_content text">
                                    We build responsive, scalable websites that prioritize user experience, modern design, and cutting-edge technology.
                                </p>
                            </div>
                            <div className="slide-in-right map">
                                <img src={web} alt="python" />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-40 gap-10">
                            <div className="slide-in-left map">
                                <img src={uiux} alt="python" />
                            </div>
                            <div className="slide-in-right flex flex-col gap-5 justify-center">
                                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#000]">
                                    UI/UX Design
                                </h1>
                                <p className="md:text-lg text-base leading-normal w-full heading_content text">
                                    We design visually stunning, user-centric interfaces that ensure a seamless journey across all digital platforms.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Team Extension Process */}
            <div className="TeamExtensio padTop">
                <div className="container">
                    <div className="main flex flex-col gap-16">
                        <div className="scroll-animate content text-center">
                            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#000]">
                                Our Team
                                <span className="text-[#FF0066]"> Extension Process</span>
                            </h1>
                        </div>
                        <div className="scroll-animate content_corporate">
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
                        </div>
                    </div>
                </div>
            </div>

            {/* You can hire developers with the next skillset */}
            <div className="hireDevelopers padTop">
                <div className="container">
                    <div className="main flex flex-col gap-16">
                        <div className="scroll-animate content text-center">
                            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#000]">
                                You can hire
                                <span className="text-[#FF0066]"> developers </span>with the next<span className="text-[#FF0066]"> skillset</span>
                            </h1>
                        </div>
                        <div className="content_corporate">
                            <div className="scroll-animate flex flex-col gap-20">
                                <div className="grid md:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-10">
                                    {WebDevs.developers.map((item, index) => (
                                        <img key={index} src={item} alt={`Developer ${index}`} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Reasons to Choose Our Staff Augmentation */}
            <div className="Choose padTop">
                <div className="container">
                    <div className="main flex flex-col gap-16">
                        <div className="scroll-animate content text-center">
                            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#000]">
                                Reasons to Choose Our
                                <span className="text-[#FF0066]"> Staff Augmentation </span>
                            </h1>
                        </div>
                        <div className="content_corporate">
                            <div className="scroll-animate grid md:grid-cols-3 grid-cols-2 md:gap-30 gap-15">
                                {WebDevs.Choose.map((item, index) => (
                                    <div key={index} className="flex flex-col gap-3">
                                        <img className="w-16" src={item.img} alt={item} />
                                        <h1 className="text-lg font-semibold text-[#000]">
                                            {item.title}
                                        </h1>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* What our clients say about us */}
            <div className="Benefits padTop">
                <div className="container">
                    <div className="main flex flex-col gap-16">
                        <div className="scroll-animate content">
                            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#000]">
                                What our clients
                                <span className="text-[#FF0066]"> say about us</span>
                            </h1>
                        </div>
                        <div className="scroll-animate content_corporate grid md:grid-cols-2 grid-cols-1 xl:gap-40 md:gap-20 gap-10">
                            <div className="slide-in-left flex flex-col gap-20">
                                {WebDevs.clients.map((items, index) => {
                                    return (
                                        <div key={index} className="innertext flex flex-col gap-5">
                                            <img className="w-38 rounded-full" src={items.img} alt={items.img} />
                                            <div className="flex flex-col gap-2 ml-20">
                                                <p className="text-base text">{items.status}</p>
                                                <h6 className="font-bold text-2xl">{items.title}</h6>
                                                <p className="text-base text">{items.desc}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="slide-in-right flex flex-col gap-20">
                                {WebDevs.clients1.map((items, index) => {
                                    return (
                                        <div key={index} className="innertext flex flex-col gap-5">
                                            <img className="w-38 rounded-full" src={items.img} alt={items.img} />
                                            <div className="flex flex-col gap-2 ml-20">
                                                <p className="text-base text">{items.status}</p>
                                                <h6 className="font-bold text-2xl">{items.title}</h6>
                                                <p className="text-base text">{items.desc}</p>
                                            </div>
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

export default Augmentation;
