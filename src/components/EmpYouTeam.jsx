import Technology from "../components/Technology";
const EmpYouTeam = () => {
  return (
    <div>
        <div className="trust padTop">
        <div className="container">
          <div className="main flex flex-col gap-10">
            <div className="scroll-animate content text-center flex flex-col gap-3">
              <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#000]">
              Empower
                <span className="text-[#FF0066]"> Your Team</span>
              </h1>
              <p className="md:text-lg text-base leading-normal text-center heading_content text">
              DTechKrew specialists exclusively utilize proven technologies to build reliable and efficient software. Hire dedicated Mobile App developers to procure a top-notch business solution that attracts users and yields profit.
              </p>
            </div>
            {/* <>Technology</> */}
            <Technology />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmpYouTeam
