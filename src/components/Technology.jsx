const logos = [
    {
        title: "React Js",
        logo1: "/images/cs-development/react.png",
        alt: "React Js",
    },
    {
        title: "Python",
        logo1: "/images/cs-development/python.png",
        alt: "Python",
    },
    {
        title: ".Net",
        logo1: "/images/cs-development/net.png",
        alt: ".Net",
    },
    {
        title: "Node Js",
        logo1: "/images/cs-development/node.js.png",
        alt: "Node Js",
    },
    {
        title: "C++",
        logo1: "/images/cs-development/c++.png",
        alt: "C++",
    },
    {
        title: "Php",
        logo1: "/images/cs-development/php.png",
        alt: "Php",
    },
    {
        title: "Javascript",
        logo1: "/images/cs-development/JS.png",
        alt: "Javascript",
    },
    {
        title: "Sales Force",
        logo1: "/images/cs-development/salesforce.png",
        alt: "Sales Force",
    },
    {
        title: "Dev Oop",
        logo1: "/images/cs-development/devop.png",
        alt: "Dev Oop",
    },
]

const Technology = () => {
    return (
        <div>
            <div className="trust padTop">
                <div className="main">
                    <div className="scroll-animate logos grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
                        {logos.map((items, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-md rounded-lg md:p-5 p-3 flex flex-col gap-5 justify-center items-center"
                            >
                                <img
                                    src={items.logo1}
                                    alt={items.alt}
                                    className="w-full max-w-[120px] h-auto"
                                />
                                <h6 className="text text-base">{items.title}</h6>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technology

