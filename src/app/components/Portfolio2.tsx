"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Data for banners (images) – now with a total of 6 banners
const banners = [
  { id: 1, image: "/imgs/kolagen.png", alt: "Banner 1" },
  { id: 2, image: "/imgs/malate.png", alt: "Banner 2" },
  { id: 3, image: "/imgs/banner8.jpg", alt: "Banner 3" },
  { id: 4, image: "/imgs/banner12.jpg", alt: "Banner 4" },
  { id: 5, image: "/imgs/g3.jpg", alt: "Banner 5" },
  { id: 6, image: "/imgs/Grounded---one.jpg", alt: "Banner 6" },
];

// New slider settings for the banners section
// Desktop: 1 row, 2 banners per slide (2x1)
// Mobile: 1 row, 1 banner per slide (1x1)
const bannerSliderSettings = {
  autoplay: true,
  autoplaySpeed: 1500, // changes every 1.5 seconds
  speed: 500,
  infinite: true,
  rows: 1,
  slidesPerRow: 2,
  responsive: [
    {
      breakpoint: 640,
      settings: {
        rows: 1,
        slidesPerRow: 1,
      },
    },
  ],
};

// Data for PlayStation Store graphics (images)
const psStoreGraphics = [
  { id: 1, image: "/imgs/playstation.png", alt: "PS Graphic 1" },
  { id: 2, image: "/imgs/playstation-8.png", alt: "PS Graphic 2" },
  { id: 3, image: "/imgs/playstation-2.png", alt: "PS Graphic 3" },
  { id: 4, image: "/imgs/playstation-3.png", alt: "PS Graphic 4" },
  { id: 5, image: "/imgs/playstation-4.png", alt: "PS Graphic 5" },
  { id: 6, image: "/imgs/playstation-5.png", alt: "PS Graphic 6" },
  { id: 7, image: "/imgs/playstation-6.png", alt: "PS Graphic 7" },
  { id: 8, image: "/imgs/playstation-7.png", alt: "PS Graphic 8" },
];

// Slider settings for PlayStation Store graphics
const psSliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
};

// Mobile slider settings for other sections
const sliderSettingsMobile = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 1000,
  slidesToShow: 2,
  slidesToScroll: 1,
};

// Data for Animované bannery (videos)
const animatedBannerVideos = [
  { id: 1, videoUrl: "/imgs/mag-banner.mp4", title: "Animovaný banner 1" },
  { id: 2, videoUrl: "/imgs/maleteban.mp4", title: "Animovaný banner 2" },
  { id: 3, videoUrl: "/imgs/kolagen.mp4", title: "Animovaný banner 3" },
  { id: 4, videoUrl: "/imgs/probiotika.mp4", title: "Animovaný banner 4" },
];

// Data for Krátké reklamy (videos)
const shortAdsVideos = [
  { id: 1, videoUrl: "/imgs/saty.mp4", title: "Krátká reklama 1" },
  { id: 2, videoUrl: "/imgs/magnesium.mp4", title: "Krátká reklama 2" },
  { id: 3, videoUrl: "/imgs/jimbo.mp4", title: "Krátká reklama 3" },
  { id: 4, videoUrl: "/imgs/serda.mp4", title: "Krátká reklama 4" },
];

// Data for Fotografování (photography) – 3 photos only.
const photographyItems = [
  { id: 1, image: "/imgs/tribulus---kmenweb.jpg", alt: "Photography 1", title: "Fotografie 1" },
  { id: 2, image: "/imgs/probiotika---kmenweb.jpg", alt: "Photography 2", title: "Fotografie 2" },
  { id: 3, image: "/imgs/_MG_7402.webp", alt: "Photography 3", title: "Fotografie 3" },
];

const Portfolio2 = () => {
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null);
  const router = useRouter();

  const handlePlayPause = (id: number, videoRef: HTMLVideoElement | null) => {
    if (videoRef) {
      if (playingVideoId === id) {
        videoRef.pause();
        setPlayingVideoId(null);
      } else {
        const videos = document.querySelectorAll("video");
        videos.forEach((v) => v.pause());
        videoRef.play();
        setPlayingVideoId(id);
      }
    }
  };

  return (
    <section className="bg-[#0f172a] text-white py-16 px-8">
      {/* Banners Section as Slider */}
      <div className="max-w-7xl mx-auto mb-16 lg:mb-32">
        <h2 className="text-4xl font-bold text-center mb-12">Ukázka bannerů</h2>
        <Slider {...bannerSliderSettings}>
          {banners.map((banner) => (
            <div key={banner.id} className="px-2">
              <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
                <Image
                  src={banner.image}
                  alt={banner.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* PlayStation Store Graphics Section */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          PlayStation Store grafika
        </h2>
        <Slider {...psSliderSettings}>
          {psStoreGraphics.map((graphic) => (
            <div key={graphic.id} className="px-4">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <div className="relative w-full aspect-square">
                  <Image
                    src={graphic.image}
                    alt={graphic.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Animované bannery Section */}
      <div className="max-w-7xl mx-auto mt-16">
        <h2 className="text-4xl font-bold text-center mb-8">
          Animované bannery
        </h2>
        {/* Desktop Grid: 4 items per row */}
        <div className="hidden md:grid grid-cols-4 gap-4">
          {animatedBannerVideos.map((video) => (
            <div key={video.id} className="px-2">
              <div className="relative w-full aspect-[9/16] rounded-lg overflow-hidden">
                <video
                  src={video.videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-center mt-2">{video.title}</p>
            </div>
          ))}
        </div>
        {/* Mobile Slider: 2 items per view */}
        <div className="md:hidden">
          <Slider {...sliderSettingsMobile}>
            {animatedBannerVideos.map((video) => (
              <div key={video.id} className="px-2">
                <div className="relative w-full aspect-[9/16] rounded-lg overflow-hidden">
                  <video
                    src={video.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-center mt-2">{video.title}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Krátké reklamy Section */}
      <div className="max-w-7xl mx-auto mt-16">
        <h2 className="text-4xl font-bold text-center mb-8">
          Krátké reklamy
        </h2>
        {/* Desktop Grid: 4 items per row */}
        <div className="hidden md:grid grid-cols-4 gap-4">
          {shortAdsVideos.map((video) => (
            <div key={video.id} className="px-2">
              <div className="relative w-full aspect-[9/16] rounded-lg overflow-hidden">
                <video
                  src={video.videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-center mt-2">{video.title}</p>
            </div>
          ))}
        </div>
        {/* Mobile Slider: 2 items per view */}
        <div className="md:hidden">
          <Slider {...sliderSettingsMobile}>
            {shortAdsVideos.map((video) => (
              <div key={video.id} className="px-2">
                <div className="relative w-full aspect-[9/16] rounded-lg overflow-hidden">
                  <video
                    src={video.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-center mt-2">{video.title}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Fotografování Section */}
      <div className="max-w-7xl mx-auto mt-16">
        <h2 className="text-4xl font-bold text-center mb-8">
          Fotografování
        </h2>
        {/* Desktop Grid: 3 items per row */}
        <div className="hidden md:grid grid-cols-3 gap-4">
          {photographyItems.map((item) => (
            <div key={item.id} className="px-2">
              <Image
                src={item.image}
                alt={item.alt}
                width={600}
                height={400}
                className="rounded-lg object-cover w-full"
              />
              <p className="text-center mt-2">{item.title}</p>
            </div>
          ))}
        </div>
        {/* Mobile Slider: 2 items per view */}
        <div className="md:hidden">
          <Slider {...sliderSettingsMobile}>
            {photographyItems.map((item) => (
              <div key={item.id} className="px-2">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={600}
                  height={400}
                  className="rounded-lg object-cover w-full"
                />
                <p className="text-center mt-2">{item.title}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Portfolio2;
