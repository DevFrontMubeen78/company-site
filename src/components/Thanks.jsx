import React from 'react'
import { MdOutlineFacebook } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Thanks = () => {
    return (
        <div>
            <div style={{
                backgroundImage:
                    "url('/images/glaze/footer.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top center",
                backgroundSize: "contain",
            }} className="thanks bg-[#fff]">
                <div className="container">
                    <h6 className="text-center text-2xl text-[#000] md:py-[100px] py-[50px]">THANKS FOR WATCHING</h6>
                    <div className="socialMedia flex justify-end gap-5 md:pb-5 pb-[20px]">
                        <Link to="#">
                            <MdOutlineFacebook className="text-[#000] text-3xl" />
                        </Link>
                        <Link to="#">
                            <IoLogoInstagram className="text-[#000] text-3xl" />
                        </Link>
                        <Link to="#">
                            <FaLinkedin className="text-[#000] text-3xl" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Thanks
