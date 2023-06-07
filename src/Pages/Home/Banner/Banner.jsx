import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';
import './Banner.css'

const Banner = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <Swiper

                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://i.ibb.co/3MWtH6M/full-shot-physical-education-class-23-2149038771.jpg" alt="full-shot-physical-education-class-23-2149038771" border="0" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/3MWtH6M/full-shot-physical-education-class-23-2149038771.jpg" alt="full-shot-physical-education-class-23-2149038771" border="0" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/3MWtH6M/full-shot-physical-education-class-23-2149038771.jpg" alt="full-shot-physical-education-class-23-2149038771" border="0" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/3MWtH6M/full-shot-physical-education-class-23-2149038771.jpg" alt="full-shot-physical-education-class-23-2149038771" border="0" />
                </SwiperSlide>


                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    );
};

export default Banner;