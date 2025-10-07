
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function App() {
  return (
    <Swiper
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div
        className="flex justify-center items-center w-[326px] h-[579px] rounded-[20px] relative p-8 bg-cover bg-center"
        style={{ backgroundImage: `url(https://i.ibb.co.com/mrqZnnSs/captain.png)` }}
      >
        <img className="w-[60px]!" src="images/playicon.svg" alt="play icon" />
        <p className="absolute left-8 right-5 bottom-8 text-white text-[18px] leading-[22px] max-w-[200px]">
          Captain Elias Monroe, U.S. Marine Corps Pilot
        </p>
      </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
        className="flex justify-center items-center w-[326px] h-[579px] rounded-[20px] relative p-8 bg-cover bg-center"
        style={{ backgroundImage: `url(https://i.ibb.co.com/ksjQNGrv/laura-bg.png)` }}
      >
        <img className="w-[60px]!" src="images/playicon.svg" alt="play icon" />
        <p className="absolute left-8 right-5 bottom-8 text-white text-[18px] leading-[22px] max-w-[200px]">
          Laura Campbell, Artistic gymnast
        </p>
      </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
        className="flex justify-center items-center w-[326px] h-[579px] rounded-[20px] relative p-8 bg-cover bg-center"
        style={{ backgroundImage: `url(https://i.ibb.co.com/8SZZLGM/captain-elias.png)` }}
      >
        <img className="w-[60px]!" src="images/playicon.svg" alt="play icon" />
        <p className="absolute left-8 right-5 bottom-8 text-white text-[18px] leading-[22px] max-w-[200px]">
          Captain Elias Monroe, Commercial Airline Pilot
        </p>
      </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
        className="flex justify-center items-center w-[326px] h-[579px] rounded-[20px] relative p-8 bg-cover bg-center"
        style={{ backgroundImage: `url(https://i.ibb.co.com/5gRPwBxk/paula-bg.png)` }}
      >
        <img className="w-[60px]!" src="images/playicon.svg" alt="play icon" />
        <p className="absolute left-8 right-5 bottom-8 text-white text-[18px] leading-[22px] max-w-[200px]">
          Paula Berger, Neurosurgeon
        </p>
      </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
        className="flex justify-center items-center w-[326px] h-[579px] rounded-[20px] relative p-8 bg-cover bg-center"
        style={{ backgroundImage: `url(https://i.ibb.co/359p9YQr/jasmin-bg.png)` }}
      >
        <img className="w-[60px]!" src="images/playicon.svg" alt="play icon" />
        <p className="absolute left-8 right-5 bottom-8 text-white text-[18px] leading-[22px] max-w-[200px]">
          Jasmine Lavoie, Senior Operations Manager
        </p>
      </div>
      </SwiperSlide>
    </Swiper>
  );
}
