
// import Swiper core and required modules
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import video1 from '../../public/images/home/video1.jpg';
import video2 from '../../public/images/home/video2.png';
import video3 from '../../public/images/home/video3.png';

const PicTestimonial = () => {
    return (
        <div className="padTop PicTestimonial">
            <div className="main flex flex-col gap-20">
                <div className="section_content flex flex-col gap-5">
                    <h5 className="md:text-5xl sm:text-4xl text-2xl font-bold uppercase leading-snug text-center">
                        Testimonials That <br className='inline' /> Speak to <span className="text-[#FF0066]"> Our Results</span>
                    </h5>
                    <p className="text-lg text leading-normal text-center xl:w-6/12 heading_content">
                        Our clients' success stories are a testament to our commitment and expertise. At Dtechkrew, we take pride in delivering innovative solutions that drive real impact. Hear from our satisfied clients and see how we turn ideas into reality
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
                            320: { slidesPerView: 1, spaceBetween: 20 },
                            640: { slidesPerView: 2, spaceBetween: 30 },
                            1024: { slidesPerView: 3, spaceBetween: 40 },
                            1280: { slidesPerView: 3, spaceBetween: 50 },
                        }}
                    >
                        <SwiperSlide>
                            <div className="testSlider">
                                <img src={video1} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testSlider">
                                <img src={video2} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testSlider">
                                <img src={video3} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testSlider">
                                <img src={video1} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testSlider">
                                <img src={video2} alt="" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default PicTestimonial;




