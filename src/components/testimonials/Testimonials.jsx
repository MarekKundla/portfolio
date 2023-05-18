import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: 'Marek Kundla',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut reiciendis recusandae quia culpa laborum assumenda! Esse optio adipisci dolorum, minus impedit, modi alias aliquam repellendus ducimus unde animi ullam cupiditate?',
  },
  {
    avatar: AVTR1,
    name: 'Martina Zemancová',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut reiciendis recusandae quia culpa laborum assumenda! Esse optio adipisci dolorum, minus impedit, modi alias aliquam repellendus ducimus unde animi ullam cupiditate?',
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, id) => {
            return(
              <SwiperSlide key={id} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar 1" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials