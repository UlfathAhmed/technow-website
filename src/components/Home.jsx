
import React from 'react'
import ourservicebtn from '../assets/Images/ourServiceBtn.png'
import contactusbtn from '../assets/Images/contactUsBtn.png'


const Home = () => {
  return (
    <section className='h-screen flex  bg-homeback bg-cover bg-fixed'>
        <div className='lg:px-28 lg:py-44 pt-56  px-2 xl:basis-2/3 lg:text-left text-center justify-between   '>
            <h1 className=' font-bold text-5xl lg:text-8xl text-white font-worksansbold '>
            We <span className='text-[#FF7069]'>enrich</span> lives through <span className='text-[#FF7069]'>better</span> user expirience
            </h1>
            <p className=' text-white text-2xl font-normal py-6 tracking-wide font-Inter'>
            Cloud E-Commerce Web Software Desktop <br /> Hardware Mobile
            </p>
            <div className=' lg:flex py-10 gap-5 '>
                <div className='pb-5 hover:scale-110 duration-300'>
                  <a href="#services">
                  <button>
                      <img src={ourservicebtn}  />
                  </button>
                  </a>
                </div>
                <div className='hover:scale-110 duration-300'>
                  <a href="#contact">
                  <button>
                      <img src={contactusbtn} />
                  </button>
                  </a>
                </div>
            </div>
        </div>
        
            
        
    </section>
    
  )
  

}

export default Home
