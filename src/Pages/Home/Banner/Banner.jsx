import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';
import './Banner.css'
import logo from '../../../assets/Logo/logo.png'


const Banner = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div className='relative'>
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
                className="mySwiper md:h-screen"
            >
                <SwiperSlide>
                    <img src="https://i.ibb.co/3MWtH6M/full-shot-physical-education-class-23-2149038771.jpg" alt="full-shot-physical-education-class-23-2149038771" border="0" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/KGr2Ft4/baseball-player-posing-with-glove-ball-23-2148347976.jpg" alt="full-shot-physical-education-class-23-2149038771" border="0" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/6tHd9s0/football-trainer-teaching-his-pupils-23-2149708010.jpg" alt="full-shot-physical-education-class-23-2149038771" border="0" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/ZYms1sC/football-trainer-teaching-his-pupils-23-2149708008.jpg" alt="full-shot-physical-education-class-23-2149038771" border="0" />
                </SwiperSlide>


                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
            <div className="md:w-6/12 p-6 absolute md:top-[40%] top-[50%] left-6 z-50 bg-gradient-to-r from-slate-500 text-white">
                <div className="flex  items-center gap-4">
                    <img className='md:w-10 md:h-10 w-5' src={logo} alt="" />
                    <p className='md:text-2xl md:font-extrabold'>We will teach you How to Learn </p>
                </div>
                <h1 className='md:text-5xl text-1xl md:my-12 md:font-extrabold font-bold'>Best School & Anything to <span className='text-orange-600'>Learn</span> Smart Way</h1>
                <div className="">
                    <button className="btn btn-outline bg-white mr-8  md:btn-lg btn-xs md:px-6">Default</button>
                    <button className="btn btn-outline md:btn-lg btn-xs btn-warning md:px-6">Primary</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;