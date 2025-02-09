import { Link } from "react-router-dom"
const GetStarted = () => {
  return (
    <div>
       {/* get started */}
       <div className="getStarted padTop">
                <div className="container">
                    <div className="main flex flex-col gap-18">
                        <div className="content text-center flex flex-col gap-8">
                            <div className="flex flex-col gap-1">
                                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#FF0066]">Get started
                                    <span className="text-[#000]"> with us</span>
                                </h1>
                                <p className="md:text-lg text-base leading-normal text-center md:w-6/12 w-full heading_content text">
                                    Start with us today—fill out the form, and our sales team will help tailor the perfect solution for you.
                                </p>
                            </div>
                            <Link className="bg-[#fff] p-3 rounded-full w-max block mx-auto px-10" to="/Contact-us">Contact sales</Link>
                        </div>
                        <div className="grid grid-cols-12 md:gap-10 gap-5">
                            {/* Left Side Box */}
                            <div className="md:col-span-4 col-span-12 rounded-lg bg-white md:p-8 p-5">
                                <h6 className="xl:text-3xl text-2xl font-bold leading-snug text-[#FF0066]">
                                    Innovative Solutions
                                    <span className="text-black"> for Business Growth</span>
                                </h6>
                            </div>

                            {/* Right Side Box */}
                            <div className="md:col-span-8 col-span-12 rounded-lg bg-white md:p-8 p-5 flex flex-col md:gap-5 gap-3">
                                <p className="md:text-lg text-base leading-relaxed text-gray-700">
                                    DTechKrew is a dynamic software solutions company dedicated to empowering businesses worldwide.
                                </p>
                                <p className="md:text-lg text-base leading-relaxed text-gray-700">
                                    With innovative technology, we transform challenges into lasting value, operational efficiency, and revenue growth.
                                </p>
                                <p className="md:text-lg text-base leading-relaxed text-gray-700">
                                    Our tailored engineering services and advanced solutions drive business success, enabling our clients to thrive in a rapidly evolving digital landscape.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
    </div>
  )
}

export default GetStarted
