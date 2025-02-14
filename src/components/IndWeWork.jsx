const CsDevelopments = {
  IndWork: [
    {
      title: "Manufacturing",
      desc: "We can build efficient IoT systems for the industrial sector, enabling factories to gain full control over their production systems.",
      useCases: [
        "Monitoring the production flow",
        "Supply chain optimization",
        "Remote tracking of equipment",
      ],
    },
  ],
  IndWork1: [
    {
      title: "Agriculture",
      desc: "IoT in agriculture can revolutionize farming practices.",
      useCases: [
        "Control of internal processes",
        "Greenhouse automation",
        "Monitoring climate conditions",
      ],
    },
  ],
};

const IndWeWork = () => {
  return (
    <div className="corporate padTop">
      <div className="container">
        <div className="main flex flex-col gap-16">
          <div className="section_title text-center">
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#FF0066]">
              Industries <span className="text-[#000]">We Work With</span>
            </h1>
          </div>
          <div className="content_corporate grid md:grid-cols-2 grid-cols-1 xl:gap-40 md:gap-20 gap-10">

            {/* Manufacturing Section */}
            <div className="flex flex-col gap-20">
              {CsDevelopments.IndWork.map((item, index) => (
                <div key={index} className="innertext flex flex-col gap-8">
                  <div className="flex flex-col gap-3">
                    <h6 className="font-bold text-2xl">{item.title}</h6>
                    <p className="text-base text text-base leading-snug">{item.desc}</p>
                  </div>
                  <div className="list flex flex-col gap-2">
                    <h6 className="uppercase">Use Cases:</h6>
                    <ul className="list-disc ms-8">
                      {item.useCases.map((useCase, i) => (
                        <li key={i} className="text-base text">{useCase}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Agriculture Section */}
            <div className="flex flex-col gap-20">
              {CsDevelopments.IndWork1.map((item, index) => (
                <div key={index} className="innertext flex flex-col gap-8">
                  <div className="flex flex-col gap-3">
                    <h6 className="font-bold text-2xl">{item.title}</h6>
                    <p className="text-base text text-base leading-snug">{item.desc}</p>
                  </div>
                  <div className="list flex flex-col gap-2">
                    <h6 className="uppercase">Use Cases:</h6>
                    <ul className="list-disc ms-8">
                      {item.useCases.map((useCase, i) => (
                        <li key={i} className="text-base text">{useCase}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default IndWeWork;
