import React from 'react'
import glazeTitle from "../../public/images/fitsician/fseb.png"
import figma from "../../public/images/fitsician/Group 1597883730.png"
import mobiles from "../../public/images/fitsician/Group 1686555516.png"
import desktop from "../../public/images/fitsician/Desktop - 2.png"
import primary from "../../public/images/fitsician/primary.png"
import girl from "../../public/images/glaze/girl.png"
import flow from "../../public/images/fitsician/vlow.png"
import bold from "../../public/images/fitsician/Bold.png"
import light from "../../public/images/fitsician/Light - (Border).png"
import TwoTone from "../../public/images/fitsician/Two tone.png"
import Thanks from '../components/Thanks'
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet-async";


const designProcess = [
    {
        img: "/images/fitsician/Group 1686555424.png",
        title: "Understand",
        sub: [
            "User Research",
            "User Interview",
            "Competitive Analysis"
        ]
    },
    {
        img: "/images/fitsician/Group 1686555427.png",
        title: "Define",
        sub: [
            "User Personas",
            "Empathy Map",
            "User Journey"
        ]
    },
    {
        img: "/images/fitsician/Group 1686555428.png",
        title: "Ideate",
        sub: [
            "User Flow",
            "Information-",
            "Architecture"
        ]
    },
    {
        img: "/images/fitsician/Group 1686555429.png",
        title: "Design",
        sub: [
            "Wireframe",
            "Hi-Fi Designs",
            "Prototype"
        ]
    },
    {
        img: "/images/fitsician/Group 1686555430.png",
        title: "Test",
        sub: [
            "Feedback",
            "Conclusion",
            "Future Concept"
        ]
    },
]

const Poppins = [
    "/images/fitsician/Auto Layout Vertical.png",
    "/images/fitsician/Auto Layout Vertical(1).png",
    "/images/fitsician/Auto Layout Vertical(2).png",
    "/images/fitsician/Auto Layout Vertical(3).png",
]

const Headings = [
    "/images/fitsician/heading 1.png",
    "/images/fitsician/heading 2.png",
    "/images/fitsician/heading 3.png",
    "/images/fitsician/heading 4.png",
    "/images/fitsician/heading 5.png",
    "/images/fitsician/heading 6.png",
]

const body = {
    XLarge: [
        {
            title: "Body XLarge",
            desc: "The quick brown fox jumps over the lazy dog",
            font: "Body XLarge / Bold / 18px",
        },
        {
            title: "Body XLarge",
            desc: "The quick brown fox jumps over the lazy dog",
            font: "Body XLarge / Semibold / 18px",
        },
        {
            title: "Body XLarge",
            desc: "The quick brown fox jumps over the lazy dog",
            font: "Body XLarge / Medium / 18px",
        },
        {
            title: "Body XLarge",
            desc: "The quick brown fox jumps over the lazy dog",
            font: "Body XLarge / Regular / 18px",
        }
    ],
    Large: [
        {
            title: "Body Large",
            desc: "The quick brown fox jumps over the lazy dog",
            font: "Body Large / Bold / 16px",
        },
        {
            title: "Body Large",
            desc: "The quick brown fox jumps over the lazy dog",
            font: "Body Large / Semibold / 16px",
        },
        {
            title: "Body Large",
            desc: "The quick brown fox jumps over the lazy dog",
            font: "Body Large / Medium / 16px",
        },
        {
            title: "Body Large",
            desc: "The quick brown fox jumps over the lazy dog",
            font: "Body Large / Regular / 16px",
        }
    ],
    Medium: [
        {
            title: "Body Medium",
            desc: "The quick brown fox jumps over the lazy dog",
            font: "Body Medium / Bold / 14px",
        },
        {
            title: "Body Medium",
            desc: "The quick brown fox jumps over the lazy dog",
            font: "Body Medium / Semibold / 14px",
        },
        {
            title: "Body Medium",
            desc: "The quick brown fox jumps over the lazy dog",
            font: "Body Medium / Medium / 14px",
        },
        {
            title: "Body Medium",
            desc: "The quick brown fox jumps over the lazy dog",
            font: "Body Medium / Regular / 14px",
        }
    ],
    Small: [
        {
            title: "Body Small",
            desc: "The quick brown fox jumps over the lazy dog",
            font: "Body Small / Bold / 12px",
        },
        {
            title: "Body Small",
            desc: "The quick brown fox jumps over the lazy dog",
            font: "Body Small / Semibold / 12px",
        },
        {
            title: "Body Small",
            desc: "The quick brown fox jumps over the lazy dog",
            font: "Body Small / Medium / 12px",
        },
        {
            title: "Body Small",
            desc: "The quick brown fox jumps over the lazy dog",
            font: "Body Small / Regular / 12px",
        }
    ]
};

const colors = {
    alart: [
        {
            img: "/images/colors/Rectangled.png",
            name: "Success",
            code: "#07BD74",
        },
        {
            img: "/images/colors/Rectangle(d1).png",
            name: "Info",
            code: "#246BFD",
        },
        {
            img: "/images/colors/Rectangle(d2).png",
            name: "Warning",
            code: "#FACC15",
        },
        {
            img: "/images/colors/Rectangle(d3).png",
            name: "Error",
            code: "#F75555",
        },
        {
            img: "/images/colors/Rectangle(d4).png",
            name: "Disabled",
            code: "#D8D8D8",
        },
        {
            img: "/images/colors/Rectangle(d5).png",
            name: "Disabled Button",
            code: "#3062C8",
        },
    ],
    Greyscale: [
        {
            img: "/images/colors/Rectangle.png",
            name: "900",
            code: "#212121",
        },
        {
            img: "/images/colors/Rectangle(1).png",
            name: "800",
            code: "#424242",
        },
        {
            img: "/images/colors/Rectangle(2).png",
            name: "700",
            code: "#616161",
        },
        {
            img: "/images/colors/Rectangle(3).png",
            name: "600",
            code: "#757575",
        },
        {
            img: "/images/colors/Rectangle(4).png",
            name: "500",
            code: "#9E9E9E",
        },
        {
            img: "/images/colors/Rectangle(5).png",
            name: "400",
            code: "#BDBDBD",
        },
        {
            img: "/images/colors/Rectangle(6).png",
            name: "300",
            code: "#E0E0E0",
        },
        {
            img: "/images/colors/Rectangle(7).png",
            name: "200",
            code: "#EEEEEE",
        },
        {
            img: "/images/colors/Rectangle(8).png",
            name: "100",
            code: "#F5F5F5",
        },
        {
            img: "/images/colors/Rectangle(9).png",
            name: "50",
            code: "#FAFAFA",
        },
    ],
    Gradients: [
        {
            img: "/images/colors/Rectangle(10).png",
            name: "Gradient Blue",
        },
        {
            img: "/images/colors/Rectangle(11).png",
            name: "Gradient Yellow",
        },
        {
            img: "/images/colors/Rectangle(12).png",
            name: "Gradient Green",
        },
        {
            img: "/images/colors/Rectangle(13).png",
            name: "Gradient Orange",
        },
        {
            img: "/images/colors/Rectangle(14).png",
            name: "Gradient Red",
        }
    ],
    Dark: [
        {
            img: "/images/colors/dark1.png",
            name: "Dark 1",
            code: "#181A20",
        },
        {
            img: "/images/colors/dark2.png",
            name: "Dark 2",
            code: "#1F222A",
        },
        {
            img: "/images/colors/dark3.png",
            name: "Dark 3",
            code: "#35383F",
        },
    ],
    other: [
        {
            img: "/images/colors/Rectangle(15).png",
            name: "White",
            code: "#FFFFFF",
        },
        {
            img: "/images/colors/Rectangle(16).png",
            name: "Black",
            code: "#000000",
        },
        {
            img: "/images/colors/Rectangle(17)1.png",
            name: "Red",
            code: "#FF0000",
        },
        {
            img: "/images/colors/Rectangle(18).png",
            name: "Pink",
            code: "#FFC0CB",
        },
        {
            img: "/images/colors/Rectangle(19).png",
            name: "Purple",
            code: "#800080",
        },
        {
            img: "/images/colors/Rectangle(20).png",
            name: "Deep Purple",
            code: "#673AB7",
        },
        {
            img: "/images/colors/Rectangle(21).png",
            name: "Indigo",
            code: "#3F51B5",
        },
        {
            img: "/images/colors/Rectangle(22).png",
            name: "Blue",
            code: "#2196F3",
        },
        {
            img: "/images/colors/Rectangle(23).png",
            name: "Light Blue",
            code: "#03A9F4",
        },
        {
            img: "/images/colors/Rectangle(24).png",
            name: "Cyan",
            code: "#00BCD4",
        },
        {
            img: "/images/colors/Rectangle(25).png",
            name: "Teal",
            code: "#009688",
        },
        {
            img: "/images/colors/Rectangle(26).png",
            name: "Green",
            code: "#4CAF50",
        },
        {
            img: "/images/colors/Rectangle(27).png",
            name: "Light Green",
            code: "#8BC34A",
        },
        {
            img: "/images/colors/Rectangle(28).png",
            name: "Lime",
            code: "#CDDC39",
        },
        {
            img: "/images/colors/Rectangle(29).png",
            name: "Yellow",
            code: "#FFEB3B",
        },
        {
            img: "/images/colors/Rectangle(30).png",
            name: "Amber",
            code: "#FFC107",
        },
        {
            img: "/images/colors/Rectangle(31).png",
            name: "Orange",
            code: "#FF9800",
        },
        {
            img: "/images/colors/Rectangle(32).png",
            name: "Deep Orange",
            code: "#FF5722",
        },
        {
            img: "/images/colors/Rectangle(33).png",
            name: "Brown",
            code: "#795548",
        },
        {
            img: "/images/colors/Rectangle(34).png",
            name: "Blue Grey",
            code: "#607D8B",
        },
    ],
    background: [
        {
            img: "/images/colors/Rectangle(35).png",
            name: "Blue",
            code: "#2196F3",
        },
        {
            img: "/images/colors/Rectangle(36).png",
            name: "Green",
            code: "#4CAF50",
        },
        {
            img: "/images/colors/Rectangle(37).png",
            name: "Orange",
            code: "#FF9800",
        },
        {
            img: "/images/colors/Rectangle(38).png",
            name: "Pink",
            code: "#FFC0CB",
        },
        {
            img: "/images/colors/Rectangle(39).png",
            name: "Yellow",
            code: "#FFEB3B",
        },
        {
            img: "/images/colors/Rectangle(40).png",
            name: "Purple",
            code: "#800080",
        },
    ],
    transparent: [
        {
            img: "/images/colors/Rectangle(41).png",
            name: "Blue",
            code: "#2196F3",
        },
        {
            img: "/images/colors/Rectangle(42).png",
            name: "Orange",
            code: "#FF9800",
        },
        {
            img: "/images/colors/Rectangle(43).png",
            name: "Yellow",
            code: "#FFEB3B",
        },
        {
            img: "/images/colors/Rectangle(44).png",
            name: "Red",
            code: "#FF0000",
        },
        {
            img: "/images/colors/Rectangle(45).png",
            name: "Green",
            code: "#4CAF50",
        },
        {
            img: "/images/colors/Rectangle(46).png",
            name: "Purple",
            code: "#800080",
        },
        {
            img: "/images/colors/Rectangle(47).png",
            name: "Cyan",
            code: "#00BCD4",
        },
    ]
};

const HighFidelity = [
    {
        img: "/images/fitsician/flow1.png",
        desc: "Our app's splash screen introduces users to our brand, while onboarding seamlessly guides them through features. The login screen ensures secure access to personalized profiles, prioritizing user data protection. In 50 words, our app's initial screens offer a smooth, secure, and informative entry into the health and fitness journey.",
    },
    {
        img: "/images/fitsician/flow2.png",
        desc: "The home screen of our app serves as the central hub for users' health and fitness journey. It features personalized recommendations for workouts and meal plans based on individual goals and preferences. Users can easily access their progress tracking, community feed, expert advice, and explore new content for continuous inspiration and motivation.",
    },
    {
        img: "/images/fitsician/flow3.png",
        desc: "Our progress tracker is a comprehensive tool designed to monitor and visualize users' fitness journey. It allows users to input and track various metrics such as weight, body measurements, and performance data over time. Graphical representations and trend analysis provide insights into progress and areas for improvement, empowering users to stay motivated and informed on their path to achieving their health and fitness goals.",
    },
    {
        img: "/images/fitsician/flow4.png",
        desc: "Our subscription model offers users exclusive access to premium features and content within the app. Subscribers enjoy benefits such as personalized workout plans, advanced analytics, ad-free experience, and priority support. With flexible pricing options, users can choose a subscription plan that best suits their needs, ensuring a tailored and enhanced health and fitness experience.",
    },
    {
        img: "/images/fitsician/flow5.png",
        desc: "Our app integrates profile management, a vibrant community space, and insightful blogs to create a holistic user experience. Profiles enable personalized tracking, while the community fosters support and motivation. Expertly curated blogs offer valuable insights, enriching users' journey towards improved health and fitness.",
    }
]


const Fitsician = () => {
    return (
        <div className=' bg-[#fff] h-full'>
            <Helmet>
                <title> DTK - Fitsician</title>
            </Helmet>

            {/* // hero section  */}
            <div style={{
                backgroundImage:
                    "url('/images/fitsician/Group 1686555548.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top center",
                backgroundSize: "cover",
            }} className="fitscian pt-[50px]">
                <div className="container">
                    <div className="">
                        <Link className='flex items-center gap-5 text-2xl text-[#000]' to="/case-studies"><IoIosArrowBack /> <span>Back</span></Link>
                        <div className="main flex flex-col gap-5 items-center text-center">
                            <img className='md:w-56 w-42' src={glazeTitle} alt={glazeTitle} />
                            <h6 className="font-bold text-2xl">Mobile Fitness App</h6>
                            <img className='w-8' src={figma} alt={figma} />
                            <img className='w-3/5' src={mobiles} alt={mobiles} />
                        </div>
                    </div>
                </div>
            </div>

            {/* // project overview */}
            <div className="projectOver padTop">
                <div className="container">
                    <div className="main flex flex-col items-center gap-10 text-center">
                        <h6 className='font-bold text-[#008080] border-b-2 md:text-5xl sm:text-4xl  text-3xl max-w-max pb-3'>Project Overview</h6>
                        <div className="flex flex-col gap-10">
                            <p className='text-lg text-[#000]'>Our comprehensive health and fitness platform is designed to empower users on their wellness journey through personalized guidance, community support, and expert insights. With a range of features tailored to individual needs, our app aims to revolutionize the way users approach their diet, exercise, and overall well-being.</p>
                            <p className='text-lg text-[#000]'> our app provides a holistic approach to health and fitness, empowering users to make informed choices, stay motivated, and achieve their wellness goals effectively. Join our community and embark on a journey towards a healthier, happier you!</p>
                        </div>
                        <img className='w-full' src={desktop} alt={desktop} />
                    </div>
                </div>
            </div>

            {/* // design Process  */}
            <div className="designProcess padTop">
                <div className="container">
                    <div className="main flex flex-col items-center gap-18">
                        <h6 className='font-bold text-[#008080] border-b-2 md:text-5xl sm:text-4xl  text-3xl max-w-max pb-3'>Design Process</h6>
                        <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 md:gap-30 gap-10">
                            {
                                designProcess.map((items, index) => {
                                    return (
                                        <div key={index} className=" flex flex-col gap-10 items-center text-center">
                                            <img className='w-32' src={items.img} alt="" />
                                            <div className="flex flex-col gap-4">
                                                <h6 className="text-2xl font-bold text-[#000]">{items.title}</h6>
                                                <ul className="text">

                                                    {
                                                        items.sub.map((items, index) => {
                                                            return (
                                                                <li key={index}>{items}</li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* // Typography  */}
            <div className="Typography padTop">
                <div className="container">
                    <div className="main flex flex-col gap-18">
                        <div className="flex justify-center">
                            <h6 className='font-bold text-[#008080] border-b-2 md:text-5xl sm:text-4xl  text-3xl max-w-max pb-3'>Typography</h6>
                        </div>

                        {/* // first  */}
                        <div className="flex flex-col gap-10">
                            <h6 className="font-bold text-[#000] text-left text-2xl">Poppins </h6>
                            <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:gap-20 gap-10">
                                {
                                    Poppins.map((items, index) => {
                                        return (
                                            <img key={index} src={items} alt={items} />
                                        )
                                    })
                                }
                            </div>
                        </div>

                        {/* // Heading  */}
                        <div className="flex flex-col gap-10">
                            <h6 className="font-bold text-[#000] text-left text-2xl">Heading </h6>
                            <div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 md:gap-20 gap-10">
                                {
                                    Headings.map((items, index) => {
                                        return (
                                            <img key={index} src={items} alt={items} />
                                        )
                                    })
                                }
                            </div>
                        </div>

                        {/* // body  */}
                        <div className="flex flex-col gap-10">
                            <h6 className="font-bold text-[#000] text-left text-3xl">Body </h6>
                            {/* // xl body  */}
                            <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:gap-20 gap-10">
                                {
                                    body.XLarge.map((items, index) => {
                                        return (
                                            <div key={index} className="flex flex-col gap-3">
                                                <h6 className='font-semibold text-2xl'>{items.title}</h6>
                                                <div className='flex flex-col gap-1'>
                                                    <p className='text text-2xl'>{items.desc}</p>
                                                    <p className='text text-2xl'>{items.font}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            {/* // large body  */}
                            <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:gap-20 gap-10">
                                {
                                    body.Large.map((items, index) => {
                                        return (
                                            <div key={index} className="flex flex-col gap-3">
                                                <h6 className='font-semibold text-lg'>{items.title}</h6>
                                                <div className='flex flex-col gap-1'>
                                                    <p className='text text-lg'>{items.desc}</p>
                                                    <p className='text text-lg'>{items.font}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            {/* // medium body  */}
                            <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:gap-20 gap-10">
                                {
                                    body.Medium.map((items, index) => {
                                        return (
                                            <div key={index} className="flex flex-col gap-3">
                                                <h6 className='font-semibold text-base'>{items.title}</h6>
                                                <div className='flex flex-col gap-1'>
                                                    <p className='text text-base'>{items.desc}</p>
                                                    <p className='text text-base'>{items.font}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            {/* // small body  */}
                            <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:gap-20 gap-10">
                                {
                                    body.Small.map((items, index) => {
                                        return (
                                            <div key={index} className="flex flex-col gap-3">
                                                <h6 className='font-semibold text-sm'>{items.title}</h6>
                                                <div className='flex flex-col gap-1'>
                                                    <p className='text text-sm'>{items.desc}</p>
                                                    <p className='text text-sm'>{items.font}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* // color  */}
            <div className="Typography padTop">
                <div className="container">
                    <div className="main flex flex-col gap-18">
                        <div className="flex justify-center">
                            <h6 className='font-bold text-[#008080] border-b-2 md:text-5xl sm:text-4xl  text-3xl max-w-max pb-3'>Colors</h6>
                        </div>

                        <div className="main flex flex-col gap-10">
                            <h6 className="font-bold text-[#000] text-left text-2xl">Main </h6>
                            <img src={primary} alt={primary} />
                        </div>

                        {/* // Alert & Status  */}
                        <div className="flex flex-col gap-10">
                            <h6 className="font-bold text-[#000] text-left text-2xl">Alert & Status</h6>
                            <div className="grid md:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-10">
                                {colors.alart.map((items, index) => (
                                    <div key={index} className="flex flex-col gap-5">
                                        <div className="flex justify-between">
                                            <div className="colorName text-sm font-semibold">{items.name}</div>
                                            <div className="code text-sm">{items.code}</div>
                                        </div>
                                        <img src={items.img} alt={items.img} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* // Greyscale  */}
                        <div className="flex flex-col gap-10">
                            <h6 className="font-bold text-[#000] text-left text-2xl">Greyscale</h6>
                            <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-10">
                                {colors.Greyscale.map((items, index) => (
                                    <div key={index} className="flex flex-col gap-5">
                                        <div className="flex justify-between">
                                            <div className="colorName text-sm font-semibold">{items.name}</div>
                                            <div className="code text-sm">{items.code}</div>
                                        </div>
                                        <img src={items.img} alt={items.img} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* // Gradients  */}
                        <div className="flex flex-col gap-10">
                            <h6 className="font-bold text-[#000] text-left text-2xl">Greyscale</h6>
                            <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-10">
                                {colors.Gradients.map((items, index) => (
                                    <div key={index} className="flex flex-col gap-5">
                                        <div className="colorName text-sm font-semibold">{items.name}</div>
                                        <img src={items.img} alt={items.img} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* // Dark  */}
                        <div className="flex flex-col gap-10">
                            <h6 className="font-bold text-[#000] text-left text-2xl">Dark Colors</h6>
                            <div className="grid md:grid-cols-3 sm:grid-cols-3 grid-cols-1 gap-10">
                                {colors.Dark.map((items, index) => (
                                    <div key={index} className="flex flex-col gap-5">
                                        <div className="flex justify-between">
                                            <div className="colorName text-sm font-semibold">{items.name}</div>
                                            <div className="code text-sm">{items.code}</div>
                                        </div>
                                        <img src={items.img} alt={items.img} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* // other  */}
                        <div className="flex flex-col gap-10">
                            <h6 className="font-bold text-[#000] text-left text-2xl">Others</h6>
                            <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-10">
                                {colors.other.map((items, index) => (
                                    <div key={index} className="flex flex-col gap-5">
                                        <div className="flex justify-between">
                                            <div className="colorName text-sm font-semibold">{items.name}</div>
                                            <div className="code text-sm">{items.code}</div>
                                        </div>
                                        <img src={items.img} alt={items.img} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* // Background  */}
                        <div className="flex flex-col gap-10">
                            <h6 className="font-bold text-[#000] text-left text-2xl">Background</h6>
                            <div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-10">
                                {colors.background.map((items, index) => (
                                    <div key={index} className="flex flex-col gap-5">
                                        <div className="flex justify-between">
                                            <div className="colorName text-sm font-semibold">{items.name}</div>
                                            <div className="code text-sm">{items.code}</div>
                                        </div>
                                        <img src={items.img} alt={items.img} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* // Transparent  */}
                        <div className="flex flex-col gap-10">
                            <h6 className="font-bold text-[#000] text-left text-2xl">Transparent</h6>
                            <div className="grid md:grid-cols-7 sm:grid-cols-3 grid-cols-2 gap-10">
                                {colors.transparent.map((items, index) => (
                                    <div key={index} className="flex flex-col gap-5">
                                        <div className="flex justify-between">
                                            <div className="colorName text-sm font-semibold">{items.name}</div>
                                            <div className="code text-sm">{items.code}</div>
                                        </div>
                                        <img src={items.img} alt={items.img} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* // Iconography & Components  */}
            <div className="Iconography padTop">
                <div className="container">
                    <div className="main flex flex-col gap-18">
                        <div className="flex justify-center text-center">
                            <h6 className='font-bold text-[#008080] border-b-2 md:text-5xl sm:text-4xl  text-3xl max-w-max pb-3'>Iconography & Components</h6>
                        </div>

                        <div className="main flex flex-col gap-20">
                            <img src={bold} alt={bold} />
                            <img src={light} alt={light} />
                            <img src={TwoTone} alt={TwoTone} />
                        </div>
                    </div>
                </div>
            </div>

            {/* // User Persona */}
            <div className="UserPersona padTop">
                <div className="container">
                    <div className="main flex flex-col gap-10 md:gap-16">
                        {/* Heading */}
                        <div className="flex justify-center">
                            <h6 className='font-bold text-[#008080] border-b-2 md:text-5xl sm:text-4xl  text-3xl max-w-max pb-3'>User Persona</h6>
                        </div>

                        {/* Main Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                            {/* Image Section */}
                            <div className="md:col-span-4">
                                <img className="w-full h-auto rounded-lg shadow-lg" src={girl} alt="User Persona" />
                            </div>

                            {/* Text Content Section */}
                            <div className="md:col-span-8 flex flex-col gap-10">
                                {/* Bio Section */}
                                <div className="flex flex-col gap-5">
                                    <h6 className="font-bold text-2xl md:text-3xl text-[#008080]">Bio</h6>
                                    <p className="text-base md:text-lg">
                                        Sarah is a busy young professional who values self-care and staying up-to-date with the latest beauty trends.
                                        She leads a hectic lifestyle, juggling her career, social life, and personal wellness.
                                        Sarah is tech-savvy and relies on her smartphone for various aspects of her life, including shopping, entertainment, and health.
                                    </p>
                                </div>

                                {/* Pain Points & Goals Section */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    {/* Pain Points */}
                                    <div className="flex flex-col gap-4">
                                        <h6 className="font-bold text-2xl md:text-3xl text-[#008080]">Pain Points</h6>
                                        <ul className="list-disc pl-5 flex flex-col gap-3 text-base md:text-lg">
                                            <li>Limited time for extensive beauty routines or browsing through numerous products.</li>
                                            <li>Sarah may have specific skin concerns or sensitivities, making it challenging to find suitable products.</li>
                                            <li>The beauty market is saturated, and Sarah may feel overwhelmed with the multitude of products available. She needs guidance on what will work best for her.</li>
                                        </ul>
                                    </div>

                                    {/* Goals */}
                                    <div className="flex flex-col gap-4">
                                        <h6 className="font-bold text-2xl md:text-3xl text-[#008080]">Goals</h6>
                                        <ul className="list-disc pl-5 flex flex-col gap-3 text-base md:text-lg">
                                            <li>Sarah is looking for a beauty app that streamlines her beauty routine.</li>
                                            <li>She wants to stay current with beauty trends and discover new products or techniques easily.</li>
                                            <li>Sarah appreciates personalized recommendations based on her skin type, tone, and preferences.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* // User flow */}
            <div className="UserFlow padTop">
                <div className="container">
                    <div className="main flex flex-col gap-10 md:gap-16">
                        {/* Heading */}
                        <div className="flex justify-center">
                            <h6 className='font-bold text-[#008080] border-b-2 md:text-5xl sm:text-4xl  text-3xl max-w-max pb-3'>User Flow</h6>
                        </div>
                        <img src={flow} alt={flow} />
                    </div>
                </div>
            </div>

            {/* // High Fidelity Designs */}
            <div className="HighFidelity padTop">
                <div className="container">
                    <div className="main flex flex-col gap-10 md:gap-16">
                        {/* Heading */}
                        <div className="flex justify-center">
                            <h6 className='font-bold text-[#008080] border-b-2 md:text-5xl sm:text-4xl  text-3xl max-w-max pb-3'>High Fidelity Designs</h6>
                        </div>
                        {
                            HighFidelity.map((items, index) => {
                                return (
                                    <div key={index} className="main flex flex-col gap-10">
                                        <img src={items.img} alt={items.img} />
                                        <p className="text-lg leading-snug text-center">{items.desc}</p>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>

            {/* // Take Aways */}
            <div className="TakeAways padTop">
                <div className="container">
                    <div className="main flex flex-col gap-10 md:gap-16">
                        {/* Heading */}
                        <div className="flex justify-center">
                            <h6 className='font-bold text-[#008080] border-b-2 md:text-5xl sm:text-4xl  text-3xl max-w-max pb-3'>Take Aways</h6>
                        </div>
                        <div className="main grid md:grid-cols-2 grid-cols-1 gap-18">
                            <div className="flex flex-col gap-5">
                                <h6 className="font-bold text-2xl md:text-3xl text-[#008080]">Impact</h6>
                                <p className="text-base md:text-lg">
                                    The health and fitness platform empowers users with personalized guidance, community support, and expert insights. It revolutionizes wellness journeys by fostering motivation, accountability, and knowledge sharing for transformative lifestyle changes.
                                </p>
                            </div>
                            <div className="flex flex-col gap-5">
                                <h6 className="font-bold text-2xl md:text-3xl text-[#008080]">Feedback from a peer</h6>
                                <p className="text-base md:text-lg text-[#008080]">
                                    Your app's interface is sleek and user-friendly, making it easy to navigate. I particularly appreciate the personalized recommendations and progress tracking features, which have helped me stay motivated on my fitness journey. The community aspect is fantastic; it's inspiring to connect with others and share experiences. However, I'd love to see more diverse content in the blogs section, covering a broader range of topics. Overall, great job!"
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-5">
                            <h6 className="font-bold text-2xl md:text-3xl text-[#008080]">What I learned </h6>
                            <p className="text-base md:text-lg">
                                Through using the health and fitness platform, I learned the importance of personalized guidance and community support in achieving my wellness goals. Tracking my progress and accessing expert insights have empowered me to make informed decisions and stay motivated on my journey to better health.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* // Next Step */}
            <div className="NextStep padTop">
                <div className="container">
                    <div className="main flex flex-col gap-10 md:gap-16">
                        {/* Heading */}
                        <div className="flex justify-center">
                            <h6 className='font-bold text-[#008080] border-b-2 md:text-5xl sm:text-4xl  text-3xl max-w-max pb-3'>Next Step</h6>
                        </div>
                        <div className="flex flex-col gap-5">
                            <p className="text-base md:text-lg">
                                There are a few next steps that will  be taken after the development of the  B. Mental Health app  is finished to keep the product getting better include :
                            </p>
                            <div className="flex flex-col gap-4">
                                <ul className="list-disc pl-5 flex flex-col gap-3 text-base md:text-lg ml-5">
                                    <li><strong className='text-[#008080]'>Tests with users:</strong> Using user testing to get feedback from real users and figure out where improvements can be made.</li>
                                    <li><strong className='text-[#008080]'>Implementing feedback from users: </strong> Incorporating user requests into the design of the app, such as by adding new features or modifying existing ones.</li>
                                    <li><strong className='text-[#008080]'>Continuous advancement:</strong> Collecting data and feedback on a regular basis and utilizing this information to continuously enhance the app.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* footer  */}
            <Thanks />
        </div>
    )
}

export default Fitsician

//complete