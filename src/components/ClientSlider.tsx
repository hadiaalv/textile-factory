"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { CLIENTS } from '../data/clients';

export default function ClientSlider(){
  return (
    <Swiper slidesPerView={3} spaceBetween={20} loop>
      {CLIENTS.map(c=> (
        <SwiperSlide key={c.id}>
          <img src={c.logo} alt={c.name} className="w-full h-16 object-contain" />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
