import gallery from "/images/about/every.png"

const Teams = () => {
    return (
        <div>
            <div className="team padTop">
                <div className="container">
                    <div className="main flex flex-col gap-20">
                        <div className="section_title text-center">
                            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold leading-snug text-[#FF0066]">Team that makes
                                <span className="text-[#000]"> everything possible</span>
                            </h1>
                        </div>
                        <div className="gallery">
                            <img src={gallery} alt="gallery" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Teams
