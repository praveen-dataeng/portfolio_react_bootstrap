import React from 'react';
import './experience.css';
import IBM from './../../assets/images/IBM_logo.png';
import Cryptograph from './../../assets/images/cgt.png';
import ValueC from './../../assets/images/valueC.png';

// Bootstrap Imports

// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Companies details as Array
const data = [
  {
    logo  : ValueC,
    name  : "Value C consulting Services Pvt., Ltd.,",
    experience  : "Woking as Senior Web Developer",
  },
  {
    logo : Cryptograph,
    name : "Cryptograph India",
    experience : "Worked as ETL Engineer"
  },
  {
    logo : IBM,
    name : "IBM India Pvt., Ltd.,",
    experience : "Worked as Mainframe Engineer"
  },  
]

const Experience = () => {
  return (
    <section id='experience'>
      <h5 className='text-center text-white'>Companie worked</h5>    
      <h1 className='text-center text-white'>Experience</h1>
      <hr />      
      <Swiper className="container experience__container"
        // install Swiper modules
      modules={[Pagination ]}
      spaceBetween={40}
      slidesPerView={1}      
      pagination={{ clickable: true }}
      >
        {
          data.map(({logo, name, experience}, index) => {
            return (
              <SwiperSlide key={index} className='companies'>
                <div className="company__logo">
                  <img className='fit-picture' src={logo} alt="Image+'${logo}'"/>
                </div>
                <h2>{name}</h2>
                <small>{experience}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Experience