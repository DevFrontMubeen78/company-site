import { useState } from "react";

const points = [
    { id: 2, quote: "/images/Quotes.png", desc: "Highly professional and exceptionally skilled! They understood our needs and delivered a robust solution with great efficiency.", name: "William Anderson", designation: "CTO, TechWave", clientImg: "/images/clients/client8.png", position: { top: "45%", left: "20%" } },
    { id: 3, quote: "/images/Quotes.png", desc: "Their work speaks for itself! The level of attention to detail and commitment they showed was truly impressive.", name: "Henry Roberts", designation: "Lead Engineer, SoftSolutions", clientImg: "/images/clients/client9.png", position: { top: "25%", left: "60%" } },
    { id: 4, quote: "/images/Quotes.png", desc: "Absolutely wonderful to work with! Their ability to turn ideas into reality is remarkable, and they do it with absolute professionalism.", name: "Matthew Carter", designation: "Head of Product, InnoCorp", clientImg: "/images/clients/client10.png", position: { top: "70%", left: "30%" } },
    { id: 6, quote: "/images/Quotes.png", desc: "Exceptional service and attention to detail! Their expertise made a significant impact on the success of our project.", name: "Samuel Green", designation: "Director, CloudSync", clientImg: "/images/clients/client12.png", position: { top: "25%", left: "10%" } },
    { id: 7, quote: "/images/Quotes.png", desc: "Fantastic job on our project! They understood our business needs and implemented the perfect solution with efficiency and precision.", name: "Andrew Harris", designation: "CEO, DataFlow", clientImg: "/images/clients/client13.png", position: { top: "65%", left: "50%" } },
    { id: 8, quote: "/images/Quotes.png", desc: "A very professional and efficient team! Their commitment to quality and innovation is truly commendable.", name: "Joseph King", designation: "CTO, FutureTech", clientImg: "/images/clients/client14.png", position: { top: "30%", left: "75%" } },
    { id: 9, quote: "/images/Quotes.png", desc: "Impressed with their dedication and expertise! Their work made a huge difference in our company's growth.", name: "Brian Adams", designation: "Tech Lead, DevMasters", clientImg: "/images/clients/client15.png", position: { top: "35%", left: "45%" } },
    { id: 10, quote: "/images/Quotes.png", desc: "They deliver on time, every time! Their ability to meet tight deadlines while maintaining top quality is commendable.", name: "Kevin White", designation: "COO, CloudTech", clientImg: "/images/clients/client16.png", position: { top: "50%", left: "75%" } },
    { id: 11, quote: "/images/Quotes.png", desc: "Super talented developers! Their technical knowledge and problem-solving abilities set them apart from the rest.", name: "Eric Brown", designation: "CTO, SmartSolutions", clientImg: "/images/clients/client17.png", position: { top: "60%", left: "20%" } },
    { id: 12, quote: "/images/Quotes.png", desc: "A pleasure to work with! Their communication and project management skills made the process smooth and stress-free.", name: "Jason Miller", designation: "Founder, GoTech", clientImg: "/images/clients/client18.png", position: { top: "75%", left: "55%" } },
    { id: 13, quote: "/images/Quotes.png", desc: "Outstanding technical skills and innovative thinking! They helped us take our product to the next level.", name: "Mark Robinson", designation: "Tech Consultant, NextBigThing", clientImg: "/images/clients/client19.png", position: { top: "45%", left: "40%" } },
    { id: 14, quote: "/images/Quotes.png", desc: "One of the best teams I've worked with! Their ability to understand and execute our vision was truly remarkable.", name: "George Evans", designation: "CEO, AlphaTech", clientImg: "/images/clients/client20.png", position: { top: "20%", left: "50%" } },
];


const MapComponent = () => {
    const [selectedPoint, setSelectedPoint] = useState(points[0]);

    return (
        <div className="relative w-full h-[500px]">
            {/* Background Image */}
            <img src="/images/map (2).png" alt="Map" className="w-full h-full object-cover" />

            {/* Points on Image */}
            {points.map((point) => (
                <div
                    key={point.id}
                    className={`absolute w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
                        selectedPoint.id === point.id ? "bg-[#000]" : "bg-red-500"
                    }`}
                    style={{ top: point.position.top, left: point.position.left }}
                    onMouseEnter={() => setSelectedPoint(point)}
                ></div>
            ))}

            {/* Popup */}
            {selectedPoint && (
                <div
                    className="absolute bg-[#FF4C70] text-white p-4 shadow-lg rounded-lg transition-all duration-300 max-w-[250px]"
                    style={{ top: selectedPoint.position.top, left: `calc(${selectedPoint.position.left} + 30px)` }}
                >
                    <div className="flex flex-col gap-5">
                        <img src={selectedPoint.quote} alt="Quote" className="w-8 h-8" />
                        <p className="text-base leading-snug text-[#000]">{selectedPoint.desc}</p>
                        <div className="flex gap-3 items-center">
                            <img src={selectedPoint.clientImg} alt={selectedPoint.name} className="w-12 h-12 rounded-full" />
                            <div className="flex flex-col">
                                <h6 className="font-semibold text-lg text-[#000]">{selectedPoint.name}</h6>
                                <p className="text-base leading-snug text-[#000]">{selectedPoint.designation}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MapComponent;
