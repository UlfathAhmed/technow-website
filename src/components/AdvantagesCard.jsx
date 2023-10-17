import React from 'react'

const AdvantagesCard = ( { heading, keayheading, visionheading, description, visiondes, className } ) => {
  return (
    <div className={` p-3 ${className}`}>
    <div className=' p-5 border-2 border-[#e36392] border-t-[#e66337] rounded-tl-3xl rounded-br-3xl  '>
        <h1 className='text-2xl font-semibold font-worksansnormal'> {heading} </h1>
        <h1 className='text-2xl font-semibold font-worksansbold text-slate-400 py-2'> { keayheading } </h1>
        <h1 className=' lg:text-6xl text-5xl font-bold pb-8 font-worksansbold '> {visionheading} </h1>
        <p className =' text-base font-normal pb-5 tracking-widest font-Inter '> {description} </p>
        <p className=' text-base font-normal lg:pr-20 font-Inter '> {visiondes} </p>

    </div>
    </div>
  )
}

export default AdvantagesCard
