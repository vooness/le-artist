"use client"

import React from "react"
import { motion } from "framer-motion"
import CountUp from "react-countup"

export const HeroSection = () => {
  return (
    <section className="relative bg-[#0f172a] text-white py-12 sm:py-20 lg:py-28 flex items-center justify-center overflow-hidden px-6 sm:px-8 lg:px-20 min-h-screen">
      {/* Wrapper pro obsah */}
      <div className="flex flex-col items-center w-full max-w-7xl mt-12">
        {/* Horní část: Text a obrázek */}
        <div className="flex flex-col lg:flex-row items-center justify-center w-full flex-wrap">
          {/* Levá strana: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4 sm:gap-6 text-center lg:text-left flex-1"
          >
            <p className="text-base sm:text-lg text-gray-300 mb-6">
              Web Developer • Grafik • Lektor • Střihač
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight relative">
              Vytvořím vám{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text">
                  webové stránky
                </span>
                {/* Animace podtržení */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: 1,
                    ease: "easeOut",
                    delay: 0.3,
                  }}
                  className="absolute left-0 right-0 bottom-[-5px] mx-auto h-1 w-[100%] bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full origin-center"
                ></motion.div>
              </span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-md sm:max-w-lg mx-auto lg:mx-0 mt-4">
              Věnuji se tvorbě moderních a funkčních webů, grafice,
              stříhání videí a vzdělávání dalších tvůrců.
            </p>
            <div className="flex gap-4 mt-4 justify-center lg:justify-start">
              <a
                href="/sluzby"
                className="px-5 py-2 sm:px-6 sm:py-3 bg-orange-500 text-white font-medium rounded-full hover:bg-orange-600 transition"
              >
                Chci svůj web!
              </a>
              <a
                href="/kontakt"
                className="px-5 py-2 sm:px-6 sm:py-3 bg-orange-500 text-white font-medium rounded-full hover:bg-orange-600 transition"
              >
                Kontakt
              </a>
              
            </div>
          </motion.div>

          {/* Pravá strana: Animace/Ikona */}
          <div className="relative flex justify-center items-center w-full lg:w-1/2">
            {/* Glow Animace - nejdřív fade in, pak pulzuje */}
            <motion.div
              className="absolute w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] xl:w-[350px] xl:h-[350px] bg-orange-500 rounded-full blur-3xl hidden lg:block"
              initial={{ opacity: 0 }} // Start invisible
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                // We'll use separate "opacity" fade in:
                opacity: { duration: 0.8 },
                // And the scale+opacity cycle repeats infinitely:
                scale: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                // By default, it merges them:
                repeat: Infinity,
              }}
            />

            {/* Rotující kruh - fade in, pak infinite rotation */}
            <motion.div
              className="absolute w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] rounded-full hidden lg:block"
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 1, rotate: 360 }}
              transition={{
                // Fade in over 0.8s, but keep rotating forever
                opacity: { duration: 0.8 },
                rotate: { duration: 12, repeat: Infinity, ease: "linear" },
              }}
            >
              <div className="absolute inset-0 border-[6px] border-transparent border-t-orange-500 border-dotted rounded-full"></div>
            </motion.div>

            {/* Obrázek */}
            <motion.img
              src="/imgs/banner3.png"
              alt="Tvoje fotka"
              className="relative z-20 w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] xl:w-[500px] xl:h-[500px] object-cover rounded-full hidden lg:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </div>

        {/* Sekce se statistikami */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 gap-6 text-center mt-24 lg:mt-36 xl:grid-cols-4 w-full max-w-5xl"
        >
          <div className="flex flex-col items-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-orange-500">
              <CountUp start={0} end={12} duration={2} />+
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">let praxe</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-orange-500">
              <CountUp start={0} end={150} duration={2} />+
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">Hotových projektů</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-orange-500">
              <CountUp start={0} end={40} duration={2} />+
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">Použité technologie</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-orange-500">
              <CountUp start={0} end={5000} duration={2} />+
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">Dodaných návrhů</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
