const CsDevelopments = {
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
    ]
};

const StageOfDev = () => {
    return (
        <div>
            <div className="hireProcessing padTop">
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
        </div>
    )
}

export default StageOfDev
