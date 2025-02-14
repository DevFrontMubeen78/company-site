import Heart from "../../public/images/siply/heart.png"
import facebook from "../../public/images/siply/facebook.png"
const ThanksTw = () => {
    return (
        <div>
            <div className="last flex justify-center items-center py-8">
                <div className="container">
                    <div className="main flex flex-col gap-8 text-center justify-center items-center">
                        <div className="flex flex-col gap-2 max-w-max items-center">
                            {/* Updated div with justify-end */}
                            <div className="flex justify-end items-center w-full">
                                <img className="w-16" src={Heart} alt="Heart" />
                            </div>
                            <h6 className="md:text-6xl text-4xl text-[#000]">Thank you for your time</h6>
                        </div>
                        <div className="flex flex-col gap-2 items-center">
                            <p className="text-lg text-[#000]">
                                If You Like My Project <br className="inline" />
                                Please Click On Appreciate
                            </p>
                            <div className="fb">
                                <img className="w-14 bg-[#000] rounded-full p-2" src={facebook} alt="Facebook" />
                            </div>
                        </div>
                        <p className="text-lg text-[#000] text-center">
                            Please let me know your valuable feedback in the comment section. <br className="inline" />
                            I will be very grateful for that.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ThanksTw
