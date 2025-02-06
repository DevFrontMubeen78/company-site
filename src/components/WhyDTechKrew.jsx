const WebDevs = {
    DTeckrew: [
        {
            title: "Proven Credibility",
            desc: "We are proud to be a leading firm in mobile app development, specializing in high-quality solutions. Our company holds a 4.8-star rating on Clutch and has received numerous positive reviews from satisfied clients.",
        },
        {
            title: "Expertise across industries",
            desc: "Turn to DTechKrew to hire remote mobile app developers who can build scalable and robust iOS applications for industries like fintech, retail, and e-commerce, empowering businesses to drive success and stay ahead in the market.",
        },
        {
            title: "Clear communication",
            desc: "Our developers possess excellent soft skills, ensuring they integrate seamlessly with your team, adapt quickly, and collaborate effectively with other members. You can trust them to communicate openly and address any challenges comfortably.",
        },
    ],
    DTeckrew1: [
        {
            title: "Best specialists",
            desc: "DTechKrew offers results-driven mobile app developers who integrate seamlessly with your team and meet your project needs. Our developers are skilled in modern technologies and trends, ensuring your app stays ahead of the curve.",
        },
        {
            title: "Competitive pricing",
            desc: "At DTechKrew, you can hire experienced mobile app developers at competitive rates. We assess your business needs and recommend the specialist with the most suitable tech background to help you achieve your goals effectively.",
        },
    ],
};

const WhyDTechKrew = () => {
    return (
        <div>
            <div className="DTeckrew padTop">
                <div className="container">
                    <div className="main flex flex-col gap-16">
                        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#000] text-center">
                            Why <span className="text-[#FF0066]"> DTeckrew?</span></h1>
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
        </div>
    )
}

export default WhyDTechKrew
