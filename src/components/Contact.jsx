import React from 'react'
import sentbtn from '../assets/Images/sentBtn.png'
import Map from '../components/Map'




const Contact = () => {
    
return (
    <section className='lg:px-28 px-5 py-24 flex flex-wrap' id='contact'>
        <div className='basis-full lg:basis-3/5 lg:pr-10 h-screen lg:h-auto rounded-xl overflow-clip '>
            <Map />
        </div>
        <div className='basis-full lg:basis-2/5 '> 
            <h3 className='uppercase text-2xl font-semibold text-slate-400 font-worksansnormal ' > contacts </h3>
            <h1 className='lg:text-6xl text-5xl font-bold pb-10 font-worksansbold '> Get in touch </h1>
            <p className=' text-base font-normal pb-12 font-Inter '>We are always looking forward to new challenges, opportunities and interesting projects. So feel free to contact us. <br /><br />
                        Office hours: Sunday to Thursday, 9:30 am – 6:30 pm.</p>
        <form action="submit" className="">
    
                
                <p className='text-base font-normal font-Inter'>Email</p>
                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email Addres"
                    className="w-full bg-transparent font-nasalization rounded-lg border border-slate-400 py-3 px-3 placeholder:font-nasalization focus-within:outline-none my-2"
                />
                <p className='pt-5 text-base font-normal font-Inter' >Name</p>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    className="w-full bg-transparent font-nasalization rounded-lg border border-slate-400 py-3 px-3 placeholder:font-nasalization focus-within:outline-none my-2"
                />
                <p className='pt-5 text-base font-normal font-Inter'>Message</p>
                <input
                    type="text"
                    name="message"
                    id="message"
                    placeholder="How can we help you?"
                    className="w-full bg-transparent font-nasalization rounded-lg border border-slate-400 py-5 px-3 placeholder:font-nasalization focus-within:outline-none my-2"
                />

                <button type="submit" className=" pt-10 py-2 focus:outline-none">
                    <img src={sentbtn} />
                </button>
        </form>
                        
        </div>
    </section>
  )
}

export default Contact

