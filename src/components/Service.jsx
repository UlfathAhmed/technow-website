import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React, { useRef } from 'react'
import ServiceCard from "../components/ServiceCard";
import ServiceData from "../DummyData/ServiceData";
import next from '../assets/Images/next.png'

const Service = () => {
  const swiperRef = useRef() 
  return (
    <section className="" id='services'>
      <div className=" lg:px-20 px-9 py-12 text-center">
        <h3 className=" pt-20 text-2xl text-slate-400 font-semibold font-worksansnormal"> SERVICES</h3>
        <h1 className="lg:text-6xl text-5xl pb-10 font-bold font-worksansbold">What we do</h1>
        <p className="text-base font-normal lg:px-64 pb-14 font-Inter">Technow strives to be a reliable and trusted partner, working closely with our clients to ensure their success in today's rapidly evolving technology landscape. Our team of experts is committed to delivering high-quality services and exceptional customer support, helping our clients achieve their goals and stay ahead of the competition. Explore our services below to learn more.</p>

      </div>
      
      <div className=" lg:px-28 px-5 relative ">
        <Swiper
        breakpoints={{
          '640': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '768': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '1024': {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]} 
        onInit={(swiper) => (swiperRef.current = swiper)}
        className="mySwiper">
        {ServiceData.map((item) => (
          <SwiperSlide className='justify-between px-5 '>
          <ServiceCard
            key={item.id}
            image={item.image}
            altDesc={item.heading}
            heading={item.heading}
            subHeading={item.subHeading}
            description={item.description}
          />
          </SwiperSlide>
        ))}
        
        </Swiper>
        <div className=' absolute border-2 rounded-lg border-[#ff7069] w-10 lg:right-10 lg:top-1/2 right-1/2 '   >
          
            <button className='' >
              <img src={next} className='pt-1 pl-2' onClick={ ()  =>{
                  swiperRef.current?.slideNext();
          
        }}  />
            </button>
          
        </div>
        
      </div>
      
      
      
      
      {/* loop swiper */}
    
    <div className='py-16'>
      <p className="loopslider py-2 border-[#DBE0F2] ">
        <infinity className='text-xl font-semibold font-Inter'> <span className='bg-[#F0F2F6] p-2 border-2'>Indepth requirement analysis</span> <span className='bg-[#F0F2F6] p-2 border-2  '>Overall system architecture</span>  <span className='bg-[#F0F2F6] p-2 border-2'>Efficient Programming</span> <span className='bg-[#F0F2F6] p-2 border-2'>Customization</span> <span className='bg-[#F0F2F6] p-2 border-2'>Automated quality testing</span> <span className='bg-[#F0F2F6] p-2 border-2'>Indepth requirement analysis</span> <span className='bg-[#F0F2F6] p-2 border-2  '>Overall system architecture</span>  <span className='bg-[#F0F2F6] p-2 border-2'>Efficient Programming</span> <span className='bg-[#F0F2F6] p-2 border-2'>Customization</span> <span className='bg-[#F0F2F6] p-2 border-2'>Automated quality testing</span> <span className='bg-[#F0F2F6] p-2 border-2'>Indepth requirement analysis</span> <span className='bg-[#F0F2F6] p-2 border-2  '>Overall system architecture</span>  <span className='bg-[#F0F2F6] p-2 border-2'>Efficient Programming</span> <span className='bg-[#F0F2F6] p-2 border-2'>Customization</span> <span className='bg-[#F0F2F6] p-2 border-2'>Automated quality testing</span> <span className='bg-[#F0F2F6] p-2 border-2'>Indepth requirement analysis</span> <span className='bg-[#F0F2F6] p-2 border-2  '>Overall system architecture</span>  <span className='bg-[#F0F2F6] p-2 border-2'>Efficient Programming</span> <span className='bg-[#F0F2F6] p-2 border-2'>Customization</span> <span className='bg-[#F0F2F6] p-2 border-2'>Automated quality testing</span> <span className='bg-[#F0F2F6] p-2 border-2'>Indepth requirement analysis</span> <span className='bg-[#F0F2F6] p-2 border-2  '>Overall system architecture</span>  <span className='bg-[#F0F2F6] p-2 border-2'>Efficient Programming</span> <span className='bg-[#F0F2F6] p-2 border-2'>Customization</span> <span className='bg-[#F0F2F6] p-2 border-2'>Automated quality testing</span> </infinity>
      </p>
    </div>
  
    </section>
  );
};

export default Service;
