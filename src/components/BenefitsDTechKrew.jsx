const CsDevelopments = {
    DTechKrewBen: [
      {
        title: "Fully customized product",
        desc: "Start strong with a team of experts dedicated to delivering software that perfectly aligns with your business needs and vision. We’ll discuss all project details upfront, ensuring every requirement is met, down to the smallest detail, while staying within your budget.",
      },
      {
        title: "Scalability",
        desc: "In our custom software services, we prioritize scalability to support your future growth. When you partner with us, you can be confident that your project will be built to scale as your business evolves.",
      }
    ],
    DTechKrewBen1: [
      {
        title: "Cost-Efficiency",
        desc: "We respect your time and resources, striving to keep our software solutions within the agreed budget and deadline. By automating routine processes, our specialists can quickly develop a customized app tailored to your needs, ensuring both speed and cost-effectiveness.",
      },
      {
        title: "Client orientation",
        desc: "At DTechKrew, we prioritize your needs and strive to make your experience as smooth as possible. We focus on clear communication, anticipating your requirements, and exceeding your expectations throughout the software development process.",
      }
    ]
  };
const BenefitsDTechKrew = () => {
  return (
    <div>
      <div className="DTechKrewBen padTop">
        <div className="container">
          <div className="main flex flex-col gap-16">
            <div className="section_title text-center">
              <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#000]">
                Benefits of DTechKrew Custom
                <span className="text-[#FF0066]">
                  {" "}
                  Software <br className="inline" />
                  Development Services{" "}
                </span>
              </h1>
            </div>
            <div className="content_corporate grid md:grid-cols-2 grid-cols-1 xl:gap-40 md:gap-20 gap-10">
              <div className="flex flex-col gap-20">
                {CsDevelopments.DTechKrewBen.map((items, index) => {
                  return (
                    <div key={index} className="innertext flex flex-col gap-2">
                      <h6 className="font-bold text-2xl">{items.title}</h6>
                      <p className="text-base text">{items.desc}</p>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col gap-20">
                {CsDevelopments.DTechKrewBen1.map((items, index) => {
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

export default BenefitsDTechKrew
