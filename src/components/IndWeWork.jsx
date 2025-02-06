const CsDevelopments = {
    IndWork: [
      {
        title: "Manufacturing",
        desc: "We can build efficient IoT systems for the industrial sector, enabling factories to gain full control over their production systems.",
      },
      {
        title: "Manufacturing",
        desc: "We can build efficient IoT systems for the industrial sector, enabling factories to gain full control over their production systems.",
      },
    ],
    IndWork1: [
      {
        title: "Agriculture",
        desc: "IoT in agriculture can revolutionize farming practices.",
      },
      {
        title: "Agriculture",
        desc: "IoT in agriculture can revolutionize farming practices.",
      },
    ],
  };

const IndWeWork = () => {
  return (
    <div>
       <div className="corporate padTop">
        <div className="container">
          <div className="main flex flex-col gap-16">
            <div className="section_title text-center">
              <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#FF0066]">
                Industries
                <span className="text-[#000]"> We Work With</span>
              </h1>
            </div>
            <div className="content_corporate grid md:grid-cols-2 grid-cols-1 xl:gap-40 md:gap-20 gap-10">
              <div className="flex flex-col gap-20">
                {CsDevelopments.IndWork.map((items, index) => {
                  return (
                    <div key={index} className="innertext flex flex-col gap-2">
                      <h6 className="font-bold text-2xl">{items.title}</h6>
                      <p className="text-base text">{items.desc}</p>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col gap-20">
                {CsDevelopments.IndWork1.map((items, index) => {
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

export default IndWeWork
