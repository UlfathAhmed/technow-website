import React from 'react'
import ProductCard from '../components/ProductCard'
import ProductData from '../DummyData/ProductData'

const Product = () => {
  return (
    <section className='lg:px-28 px-5 py-24' id='products'>
      <div className=' text-center  '>
        <h3 className='uppercase text-2xl font-semibold text-slate-400 font-worksansnormal'> Products </h3>
        <h1 className=' text-6xl font-bold pb-10 font-worksansbold '> Products </h1>
      </div>
        <div className='lg:flex gap-5'>
            {ProductData.map((item) => (
                < ProductCard
                    key={item.heading}
                    image={item.image}
                    heading={item.heading}
                    description={item.description}
                    subdescription={item.subdescription}
                />
            ))}
        </div>
    </section>
  );
};

export default Product;
