import { Link } from "react-router-dom"
const PageLastSec = () => {
    return (
        <div>
            <div className="last padTop">
                <div className="container">
                    <div style={{
                        backgroundImage:
                            "url('/images/last.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "bottom right",
                        backgroundSize: "contain",
                    }} className="LsContent flex flex-col gap-30 bg-white rounded-2xl md:p-20 p-10">
                        <div className="flex flex-col gap-3">
                            <h1 className="md:text-3xl text-2xl font-bold leading-snug text-black">
                                Are you ready to brainstorm the <br className="inline" />
                                <span className="text-[#FF0066]">next big thing?</span>
                            </h1>
                            <p className="text-base leading-normal text-gray-700">
                                Once you have completed the form, our manager will send <br className="inline" />
                                you an email with the information within the next two hours.
                            </p>
                        </div>
                        <Link className="text py-2 bg-[#fff] px-10 md:border-none border border-[#5353531c] rounded-full shadow-lg w-fit md:mx-auto md:mx-0" to="#"> Let’s talk</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PageLastSec
