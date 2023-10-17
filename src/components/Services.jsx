import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React, { useRef } from 'react'

import ServicesData from '../DummyData/ServicesData';
import next from '../assets/Images/next.png'

const Services = () => {
    const swiperRef = useRef()
    return (
        <section>
            <div className=" lg:px-20 px-9 py-12 text-center">
        <h3 className=" pt-20 text-2xl text-slate-400 font-semibold font-worksansnormal"> SERVICES</h3>
        <h1 className="lg:text-6xl text-5xl pb-10 font-bold font-worksansbold">What we do</h1>
        <p className="text-base font-normal lg:px-64 pb-14 font-Inter">Technow strives to be a reliable and trusted partner, working closely with our clients to ensure their success in today's rapidly evolving technology landscape. Our team of experts is committed to delivering high-quality services and exceptional customer support, helping our clients achieve their goals and stay ahead of the competition. Explore our services below to learn more.</p>

        </div>
            <div className='container mx-auto lg:px-28 px-5 relative ' >
            <div className='grid lg:grid-cols-3 gap-5'>
                {ServicesData.map((item) => (
                    
                    <div className="border-2 border-[#e36392] border-t-[#e66337] rounded-br-3xl rounded-tl-3xl " >
                        <img src={item.image} alt="" className="w-full rounded-tl-3xl" />
                        <div className='p-5'>
                            <h1 className=" text-2xl font-semibold pb-2 font-worksansnormal" >{ item.heading } </h1>
                            <h3  className=" tex4t-base font-normal font-Inter pb-2 text-[#e66337] " > { item.subHeading }</h3>
                            <p className=" text-base font-normal font-Inter " > { item.description } </p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
        <div className='py-16'>
        <p className="loopslider py-2 border-[#DBE0F2] ">
            <infinity className='text-xl font-semibold font-Inter'> <span className='bg-[#F0F2F6] p-2 border-2'>Indepth requirement analysis</span> <span className='bg-[#F0F2F6] p-2 border-2  '>Overall system architecture</span>  <span className='bg-[#F0F2F6] p-2 border-2'>Efficient Programming</span> <span className='bg-[#F0F2F6] p-2 border-2'>Customization</span> <span className='bg-[#F0F2F6] p-2 border-2'>Automated quality testing</span> <span className='bg-[#F0F2F6] p-2 border-2'>Indepth requirement analysis</span> <span className='bg-[#F0F2F6] p-2 border-2  '>Overall system architecture</span>  <span className='bg-[#F0F2F6] p-2 border-2'>Efficient Programming</span> <span className='bg-[#F0F2F6] p-2 border-2'>Customization</span> <span className='bg-[#F0F2F6] p-2 border-2'>Automated quality testing</span> <span className='bg-[#F0F2F6] p-2 border-2'>Indepth requirement analysis</span> <span className='bg-[#F0F2F6] p-2 border-2  '>Overall system architecture</span>  <span className='bg-[#F0F2F6] p-2 border-2'>Efficient Programming</span> <span className='bg-[#F0F2F6] p-2 border-2'>Customization</span> <span className='bg-[#F0F2F6] p-2 border-2'>Automated quality testing</span> <span className='bg-[#F0F2F6] p-2 border-2'>Indepth requirement analysis</span> <span className='bg-[#F0F2F6] p-2 border-2  '>Overall system architecture</span>  <span className='bg-[#F0F2F6] p-2 border-2'>Efficient Programming</span> <span className='bg-[#F0F2F6] p-2 border-2'>Customization</span> <span className='bg-[#F0F2F6] p-2 border-2'>Automated quality testing</span> <span className='bg-[#F0F2F6] p-2 border-2'>Indepth requirement analysis</span> <span className='bg-[#F0F2F6] p-2 border-2  '>Overall system architecture</span>  <span className='bg-[#F0F2F6] p-2 border-2'>Efficient Programming</span> <span className='bg-[#F0F2F6] p-2 border-2'>Customization</span> <span className='bg-[#F0F2F6] p-2 border-2'>Automated quality testing</span> </infinity>
        </p>
    </div>
        </section>
    )
}

export default Services
