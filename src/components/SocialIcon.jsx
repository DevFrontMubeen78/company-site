import React from 'react'
import { MdOutlineFacebook } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialIcon = () => {
    return (
        <div>
            <div className="socialMedia flex gap-5">
                <Link to="https://www.facebook.com/DtechKrew/">
                    <MdOutlineFacebook className="text-[#fff] text-3xl" />
                </Link>
                <Link to="https://www.instagram.com/dtechkrew/">
                    <IoLogoInstagram className="text-[#fff] text-3xl" />
                </Link>
                <Link to="https://www.linkedin.com/company/104302596/admin/dashboard/">
                    <FaLinkedin className="text-[#fff] text-3xl" />
                </Link>
            </div>
        </div>
    )
}

export default SocialIcon
