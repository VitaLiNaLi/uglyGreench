import React from 'react';
import { Link } from 'react-router-dom';
import video from '../../public/videos/onePageSanta.mp4';

function SplashScreen(): JSX.Element {
  return (
    <div className="relative h-screen">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
        <track label="English" kind="subtitles" srcLang="en" src="subtitles_en.vtt" default />
        Ваш браузер не поддерживает тег video.
      </video>
      <div className="flex justify-center items-center h-full">
        <Link
          to="/register"
          className="bg-transparent hover:bg-blue-500 text-3xl text-white font-bold py-12 px-24 rounded-lg z-10 border-2 border-white"
        >
          Нажмите сюда
        </Link>
      </div>
    </div>
  );
}

export default SplashScreen;
