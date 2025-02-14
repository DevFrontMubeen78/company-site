const role = [
    {
        img: "/images/glaze/role1.png",
        title: "UI Documentation",
        desc: "creation of ui documentation so that developers can code well."
    },
    {
        img: "/images/glaze/role2.png",
        title: "Provide Assets ",
        desc: "ensure Assets contained in the UI are usable and provide in multiple sizes."
    },
    {
        img: "/images/glaze/role3.png",
        title: "User testing",
        desc: "User testing using UT and AB testing, so that the App can be well received by the user."
    },
    {
        img: "/images/glaze/role4.png",
        title: "UI Audit",
        desc: "Perform UI audits. make sure nothing goes wrong when the App is made."
    },
    {
        img: "/images/glaze/role5.png",
        title: "Flow Documentation",
        desc: "when the application is continued, it can be easily carried out."
    },
    {
        img: "/images/glaze/role6.png",
        title: "Research",
        desc: "This process is made so that the requirements and problems obtained meet the target market."
    },
]

const MyRole = () => {
    return (
        <div>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-18">
                {
                    role.map((items, index) => {
                        return (
                            <div key={index} className="text-[#fff] flex flex-col md:gap-10 gap-5 items-center text-center">
                                <img className='w-12' src={items.img} alt="" />
                                <div className="flex flex-col gap-4">
                                    <h6 className="text-2xl font-bold">{items.title}</h6>
                                    <p className='text-lg'>{items.desc}</p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default MyRole
