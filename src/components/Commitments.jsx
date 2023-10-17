import React from 'react'
import CommitmentsCard from '../components/CommitmentsCard';
import CommitmentsData from '../DummyData/CommitmentsData';

const Commitments = () => {
  return (
    <section className='lg:px-28 px-5 py-24'>
        <div className='lg:flex'>
            {CommitmentsData.map((item) => (
                < CommitmentsCard
                    key={item.heading}
                    image={item.image}
                    heading={item.heading}
                    description={item.description}
                />
            ))}
        </div>

    </section>
  );
};

export default Commitments;
