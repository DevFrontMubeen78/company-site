import { useState } from "react";

const points = [
    {
        id: 1,
        quote: "/images/Quotes.png",
        desc: "I am very proud of the team at DevDimensions, they are a very smart group of people and I highly recommend them.",
        name: "Paul McGuire",
        designation: "Co-founder & CEO, Tru.id",
        clientImg: "/images/Ellipse 87(1).png",
        position: { top: "15%", left: "25%" }
    },
    {
        id: 2,
        quote: "/images/Quotes.png",
        desc: "The DevDimensions team is exceptionally skilled and professional in their work. Highly recommended!",
        name: "John Doe",
        designation: "CTO, XYZ Inc.",
        clientImg: "/images/Ellipse 87.png",
        position: { top: "30%", left: "55%" }
    },
    {
        id: 3,
        quote: "/images/Quotes.png",
        desc: "DevDimensions has been a game changer for our business. Their team is outstanding!",
        name: "Alice Johnson",
        designation: "Marketing Head, ABC Corp.",
        clientImg: "/images/ssas.png",
        position: { top: "20%", left: "70%" }
    },
    {
        id: 4,
        quote: "/images/Quotes.png",
        desc: "An amazing experience working with DevDimensions. They deliver high-quality results.",
        name: "Michael Smith",
        designation: "Lead Developer, TechSolutions",
        clientImg: "/images/s.png",
        position: { top: "65%", left: "25%" }
    },
    {
        id: 5,
        quote: "/images/Quotes.png",
        desc: "Superb service and highly skilled developers. Would work with them again!",
        name: "Sophia Lee",
        designation: "Project Manager, InnovateX",
        clientImg: "/images/Group 9148.png",
        position: { top: "80%", left: "50%" }
    },
];

const MapComponent = () => {
    const [selectedPoint, setSelectedPoint] = useState(points[0]);

    return (
        <div className="relative w-full h-[500px]">
            {/* Background Image */}
            <img
                src="/images/map (2).png"
                alt="Map"
                className="w-full h-full object-cover"
            />

            {/* Points on Image */}
            {points.map((point) => (
                <div
                    key={point.id}
                    className={`absolute w-7 h-7 rounded-full cursor-pointer transition-all duration-300 ${
                        selectedPoint.id === point.id ? "bg-[#000]" : "bg-red-500"
                    }`}
                    style={{ top: point.position.top, left: point.position.left }}
                    onClick={() => setSelectedPoint(point)}
                ></div>
            ))}

            {/* Popup (Ek waqt mein ek hi active hoga) */}
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
