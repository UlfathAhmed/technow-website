import React from 'react'
import footerlogo from '../assets/Images/technowlogo.png'
import topArrow from '../assets/Images/up.png'


const Footer = () => {
return (
    <section className=' text-left flex flex-col  bg-black '> 
    
        <div className='flex flex-col lg:flex-row pb-5 lg:px-28 px-10'>
                <img src={footerlogo} alt="Technow" className='  pr-6  pt-16 pb-4 flex flex-1 ' width={100} />
                <p className=' lg:pt-14 pt-5 lg:w-2/3 lg:pr-10  text-sm text-white font-normal leading-6 font-Inter' >
                From Consumer centric to Enterprise, Telecom and Government, Technow LDA works alongside our clients to design and develop mobile, web and desktop software applications to deliver context-aware and adaptive experience. 
                </p>
            <div className='justify-start w-2/3'>
                <p className='text-white lg:pl-24 lg:pt-12 pt-5 font-semibold uppercase lg:pb-0 pb-5 font-Inter'>
                Contact
                </p>
                <p className='text-white lg:pl-24  font-normal text-sm font-Inter'>
                Technow LDA <br />
                Bairro AlvaladeRua Cmdte. <br /> 
                GikaEdif n 279, 2 AndarMaianga, Luanda, Angola
                </p>
            
            </div>
            
        </div>
        <div className='flex flex-col lg:flex-row  text-white pt-5 pb-4 justify-between border-t-2  lg:px-28 px-10 font-Inter' >
                    <p className=' text-sm font-normal py-1 lg:py-0 '>
                    © 2017 Technow LDA. All rights reserved.

                    </p>
                    <p className='text-sm font-normal lg:pr-28   '>
                    Developed By <span className='text-blue-700 duration-300 hover:text-[#ff7069] '> <a href="https://www.btracsolutions.com/" target='_blank'> B-Trac Solution Team </a> </span>
                    </p>
                    <div className='flex'>
                    <p className='text-sm font-normal py-1 lg:py-0'>
                    To the top
                    </p>
                    <a href="#">
                        <button className='duration-300  '>
                            <img src={topArrow} alt="up arrow" width={25} />
                        </button>
                    </a>
                    </div>
        </div>


    </section>
    )
}

export default Footer
