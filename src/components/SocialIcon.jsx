import React from 'react'
import { MdOutlineFacebook } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialIcon = () => {
    return (
        <div>
            <div className="socialMedia flex gap-5">
                <Link to="#">
                    <MdOutlineFacebook className="text-[#fff] text-3xl" />
                </Link>
                <Link to="#">
                    <IoLogoInstagram className="text-[#fff] text-3xl" />
                </Link>
                <Link to="#">
                    <FaLinkedin className="text-[#fff] text-3xl" />
                </Link>
            </div>
        </div>
    )
}

export default SocialIcon
