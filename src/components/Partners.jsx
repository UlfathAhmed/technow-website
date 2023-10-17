import {  Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React from 'react'
import hplogo from '../assets/Images/hp.png'
import microsoftlogo from '../assets/Images/microsoft.png'
import delllogo from '../assets/Images/dell.png'
import logitechlogo from '../assets/Images/logitech.png'

const Partners = () => {
  return (
    <section className='text-center flex justify-center lg:px-28 px-5 py-24' id='partners'>
        <div className=' py-16 lg:px-48 px-5  border-2 border-[#e36392] border-t-[#e66337] rounded-3xl '>
                <h3 className='text-2xl text-slate-400 font-normal font-worksansnormal '>Partners</h3>
                <h1 className='font-bold lg:text-6xl text-4xl pb-10 font-worksansbold'>Unlock a brighter future together</h1>
                <p className='text-base font-normal pb-5 font-Inter'>At Technow, we work closely with our partners to foster a relationship that is built on shared values, objectives, and a commitment to excellence. Through our partner ecosystem, we collaborate to create innovative solutions to provide our clients with the best possible service and support to help them achieve their goals.</p>
              <div className='flex'>
                <Swiper
        
                    grabCursor={true}
                    centeredSlides={true}
                    pagination={true}
                    slidesPerView={'auto'}
                    
                  
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper flex"
                    
                    
                  >
                    <SwiperSlide className='flex items-center justify-center gap-5'>
                    <img src={hplogo} alt="hp" />
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center justify-center gap-5'>
                    <img src={microsoftlogo} alt="microsoft" />
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center justify-center gap-5'>
                    <img src={delllogo} alt="dell" />
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center justify-center gap-5'>
                    <img src={logitechlogo} alt="logitech" /> 
                    </SwiperSlide>
                </Swiper>
              </div>

        </div>
    </section>
  )
}

export default Partners
