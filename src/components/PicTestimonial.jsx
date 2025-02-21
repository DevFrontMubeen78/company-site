
// import Swiper core and required modules
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const swiperSlider = [
    "/images/home/video2.png",
    "/images/home/video3.png",
    "/images/home/video1.jpg",
    "/images/home/video3.png",
]

const PicTestimonial = () => {
    return (
        <div className="padTop PicTestimonial">
            <div className="main flex flex-col gap-20">
                <div className="scroll-animate section_content flex flex-col gap-5">
                    <h5 className="md:text-5xl sm:text-4xl text-2xl font-bold uppercase leading-snug text-center">
                        Testimonials That <br className='inline' /> Speak to <span className="text-[#FF0066]"> Our Results</span>
                    </h5>
                    <p className="text-lg text leading-normal text-center xl:w-6/12 heading_content">
                        Our clients success stories are a testament to our commitment and expertise. At Dtechkrew, we take pride in delivering innovative solutions that drive real impact. Hear from our satisfied clients and see how we turn ideas into reality
                    </p>
                </div>
                <div className="slider">
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, A11y]}
                        spaceBetween={90}
                        slidesPerView={3}
                        navigation={{ clickable: true }}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 3 },
                        }}
                    >
                        {
                            swiperSlider.map((items, index) => {
                                return (
                                    <SwiperSlide key={index} >
                                        <div className="testSlider h-[250px] w-full overflow-hidden rounded-4xl">
                                            <img className="w-full h-full object-cover" src={items} alt="" />
                                        </div>

                                    </SwiperSlide>
                                )
                            })
                        }


                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default PicTestimonial;




