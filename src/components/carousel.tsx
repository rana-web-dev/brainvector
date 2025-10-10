import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

interface SlideData {
  bgImage: string;
  title: string;
  videoUrl: string;
}

const slidesData: SlideData[] = [
  {
    bgImage: 'https://i.ibb.co/mrqZnnSs/captain.png',
    title: 'Captain Elias Monroe, U.S. Marine Corps Pilot',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', // Replace with actual video URL
  },
  {
    bgImage: 'https://i.ibb.co/ksjQNGrv/laura-bg.png',
    title: 'Laura Campbell, Artistic gymnast',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', // Replace with actual video URL
  },
  {
    bgImage: 'https://i.ibb.co/8SZZLGM/captain-elias.png',
    title: 'Captain Elias Monroe, Commercial Airline Pilot',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', // Replace with actual video URL
  },
  {
    bgImage: 'https://i.ibb.co/5gRPwBxk/paula-bg.png',
    title: 'Paula Berger, Neurosurgeon',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', // Replace with actual video URL
  },
  {
    bgImage: 'https://i.ibb.co/359p9YQr/jasmin-bg.png',
    title: 'Jasmine Lavoie, Senior Operations Manager',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', // Replace with actual video URL
  },
];

const App: React.FC = () => {
  const [playingSlide, setPlayingSlide] = useState<number | null>(null);

  const toggleVideo = (index: number) => {
    setPlayingSlide(playingSlide === index ? null : index);
  };

  return (
    <Swiper
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="mySwiper"
      slidesPerView={1}
      spaceBetween={20}
      slidesOffsetAfter={50}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 5 },
      }}
    >
      {slidesData.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="relative w-full h-[579px] rounded-[20px] p-8 bg-cover bg-center flex justify-center items-center"
            style={{ backgroundImage: playingSlide !== index ? `url(${slide.bgImage})` : 'none' }}
          >
            {playingSlide === index && (
              <video
                className="absolute inset-0 w-full h-full rounded-[20px] object-cover"
                src={slide.videoUrl}
                autoPlay
                loop
                muted
                onEnded={() => setPlayingSlide(null)}
              />
            )}
            <button onClick={() => toggleVideo(index)} className="z-10">
              <img
                className="w-[60px]"
                src="https://via.placeholder.com/60?text=Play" // Replace with actual play icon URL
                alt="play icon"
              />
            </button>
            <p className="absolute left-8 right-5 bottom-8 text-white text-[18px] leading-[22px] max-w-[200px] z-10">
              {slide.title}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default App;