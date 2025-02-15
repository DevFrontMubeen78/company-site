import { Link } from "react-router-dom";
import map from "/images/about/maps.png"
const btns = [
    {
        btnName: "Islamabad",
        path: "#"

    },
    {
        btnName: "Lahore",
        path: "#"

    },
    {
        btnName: "Okara",
        path: "#"

    }
]

const Recrutment = () => {
    return (
        <div>
            <div className="contentMap grid md:grid-cols-2 grid-cols-1 md:gap-40 gap-10">
                <div className="flex flex-col gap-5">
                    <p className="md:text-lg text-base leading-normal w-full heading_content text">
                        Our Multiple offices work in unison to serve clients across the globe, ensuring seamless collaboration across regions and time zones to deliver tailored support and solutions that meet each client’s specific requirements.
                    </p>
                    <div className="btns flex gap-5">
                        {
                            btns.map((items, index) => {
                                return (
                                    <Link
                                        key={index}
                                        className="bg-[#fff] py-2 px-10 rounded-full text"
                                        to={items.path}
                                    >
                                        {items.btnName}
                                    </Link>
                                );
                            })
                        }

                    </div>
                </div>
                <div className="map">
                    <img src={map} alt="map" />
                </div>
            </div>
        </div>
    )
}

export default Recrutment
