import React from 'react'

const CommitmentsCard = ( {image, heading, description} ) => {
  return (
    
    
      <div className=' basis-1/3 p-5 m-2 border-2 rounded-3xl  border-[#e36392] border-t-[#e66337]  '>
      <div className='flex justify-between py-7'>
        <h1 className='text-2xl font-semibold font-worksansnormal '>{heading}</h1>
        <img src={image} />
      </div>
        <p className='text-2xl font-normal pb-20 pr-10 font-worksansnormal ' > {description} </p>
      
    </div>
    
  );
};

export default CommitmentsCard;
