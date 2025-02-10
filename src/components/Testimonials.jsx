import ReactStars from "react-rating-stars-component";

const testimonialsFirst = [
  {
    ClientName: "Michael Johnson",
    country: "United States",
    rating: 5.0,
    review:
      "Exceptional service! The team at Dtechkrew exceeded my expectations. They delivered a high-quality product with excellent attention to detail. Highly recommended!",
    images: "/images/home/cl2.png",
  },
  {
    ClientName: "Sophie Martinez",
    country: "Canada",
    rating: 4.5,
    review:
      "Working with Dtechkrew was a seamless experience. Their technical expertise and ability to understand my requirements made the process smooth and hassle-free.",
    images: "/images/home/cl1.png",
  },
  {
    ClientName: "Daniel O'Connor",
    country: "Ireland",
    rating: 4.1,
    review:
      "Amazing work! They took my project to the next level with their skills and dedication. The team was highly responsive and always available to address any concerns.",
    images: "/images/home/cl3.png",
  },
];

const testimonialsSecond = [
  {
    ClientName: "Emily Brown",
    country: "Australia",
    rating: 4.7,
    review:
      "I am thoroughly impressed with the quality and professionalism of Dtechkrew. They delivered on time and ensured that every aspect of my project was perfect!",
    images: "/images/home/cl2.png",
  },
  {
    ClientName: "Rajesh Kumar",
    country: "India",
    rating: 5.0,
    review:
      "Dtechkrew provided outstanding service! Their communication was top-notch, and they understood exactly what I needed. Will definitely work with them again.",
    images: "/images/home/cl1.png",
  },
  {
    ClientName: "Isabella Rossi",
    country: "Italy",
    rating: 4.8,
    review:
      "Superb work! They delivered a well-optimized and beautifully designed website. The entire process was smooth, and their expertise shined through in every step.",
    images: "/images/home/cl3.png",
  },
];



const Testimonials = () => {
  return (
    <div className="bg-[#FFB5CA] pt-16 overflow-hidden">
      <div className="mx-auto flex flex-col gap-10">

        {/* First Slider (Left to Right) */}
        <div className="relative w-full">
          <div className="animate-marquee flex gap-8">
            {testimonialsFirst.concat(testimonialsFirst).map((item, index) => (
              <div
                key={index}
                className="testimonial-box bg-[#ffffff24] p-5 rounded-2xl flex flex-col gap-5 shadow-md"
              >
                <div className="flex justify-between">
                  <div className="flex gap-3">
                    <img className="rounded-full w-12" src={item.images} alt="Client" />
                    <div>
                      <h6 className="text-lg font-semibold text-white">{item.ClientName}</h6>
                      <p className="text-sm text-white">{item.country}</p>
                    </div>
                  </div>
                  <img className="w-10" src="/images/home/quote-down.png" alt="Quotes" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2 items-center">
                    <ReactStars value={item.rating} size={30} edit={false} />
                    <span className="text-lg text-white">{item.rating}</span>
                  </div>
                  <p className="text-sm text-white">{item.review}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Slider (Right to Left) */}
        <div className="relative w-full">
          <div className="animate-marquee-reverse flex gap-8">
            {testimonialsSecond.concat(testimonialsSecond).map((item, index) => (
              <div
                key={index}
                className="testimonial-box bg-[#ffffff24] p-5 rounded-2xl flex flex-col gap-5 shadow-md"
              >
                <div className="flex justify-between">
                  <div className="flex gap-3">
                    <img className="rounded-full w-12" src={item.images} alt="Client" />
                    <div>
                      <h6 className="text-lg font-semibold text-white">{item.ClientName}</h6>
                      <p className="text-sm text-white">{item.country}</p>
                    </div>
                  </div>
                  <img className="w-10" src="/images/home/quote-down.png" alt="Quotes" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2 items-center">
                    <ReactStars value={item.rating} size={30} edit={false} />
                    <span className="text-lg text-white">{item.rating}</span>
                  </div>
                  <p className="text-sm text-white">{item.review}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Frames Image */}
        <div className="mt-10">
          <img className="w-full" src="/images/home/Framessss.png" alt="Frames" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
