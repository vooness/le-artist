"use client"

import React, { useState } from "react"
import Slider from "react-slick"
import { motion } from "framer-motion"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// Data pro bannery
const banners = [
  { id: 1, image: "/imgs/kolagen.png", alt: "Banner 1" },
  { id: 2, image: "/imgs/malate.png", alt: "Banner 2" },
]



// Data pro PlayStation Store grafiky
const psStoreGraphics = [
  { id: 1, image: "/imgs/playstation.png", alt: "PS Graphic 1" },
  { id: 2, image: "/imgs/playstation-8.png", alt: "PS Graphic 2" },
  { id: 3, image: "/imgs/playstation-2.png", alt: "PS Graphic 3" },
  { id: 4, image: "/imgs/playstation-3.png", alt: "PS Graphic 4" },
  { id: 5, image: "/imgs/playstation-4.png", alt: "PS Graphic 5" },
  { id: 6, image: "/imgs/playstation-5.png", alt: "PS Graphic 6" },
  { id: 7, image: "/imgs/playstation-6.png", alt: "PS Graphic 7" },
  { id: 8, image: "/imgs/playstation-7.png", alt: "PS Graphic 8" },
]

// Slider nastavení pro videa
const videoSliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
}

// Slider nastavení pro PlayStation Store grafiky
const psSliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
}

const Portfolio2 = () => {
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null)

  const handlePlayPause = (id: number, videoRef: HTMLVideoElement | null) => {
    if (videoRef) {
      if (playingVideoId === id) {
        // Pokud je video již přehráváno, pozastavit
        videoRef.pause()
        setPlayingVideoId(null)
      } else {
        // Zastavit ostatní videa a spustit aktuální
        const videos = document.querySelectorAll("video")
        videos.forEach((v) => v.pause())
        videoRef.play()
        setPlayingVideoId(id)
      }
    }
  }

  return (
    <section className="bg-gray-900 text-white py-16 px-8">
      {/* Ukázka bannerů */}
      <motion.div
        className="max-w-7xl mx-auto mb-16 lg:mb-32"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center mb-12">Ukázka bannerů</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {banners.map((banner) => (
            <motion.div
              key={banner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={banner.image}
                alt={banner.alt}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      

      {/* PlayStation Store grafika */}
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          PlayStation Store grafika
        </h2>
        <Slider {...psSliderSettings}>
          {psStoreGraphics.map((graphic) => (
            <div key={graphic.id} className="px-4">
              <motion.div
                className="rounded-lg overflow-hidden shadow-lg"
                // Odstraněn hover efekt
              >
                <img
                  src={graphic.image}
                  alt={graphic.alt}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </section>
  )
}

export default Portfolio2
