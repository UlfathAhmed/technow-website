import React from 'react'

const Gradient = () => {
  return (
    <section className=' items-center text-center '>
    <div className='bg-black '>
        <p className=' lg:py-28 py-10 px-3 lg:text-5xl text-2xl sm:text-4xl text-white font-worksansbold'>
            From <span className=' font-bold font-worksansbold text-transparent bg-clip-text bg-gradient-to-r from-[#e36392] via-[#ff5b5b] to-[#e66337]'>Sustainable Solutions</span><br />
            to <span className=' font-bold font-worksansbold text-transparent bg-clip-text bg-gradient-to-r from-[#01a1c3] from-0%  via-[#e36392] via-30% to-[#e66337] to-90%'> Sustainable Partnership: </span><br />
            Technow has a Vision <br />
            for a Better World
        </p>
        

    </div>


    </section>
  )
}

export default Gradient
