"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaEnvelope, FaPhone, FaIdCard, FaUser } from "react-icons/fa";
import Image from "next/image";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [focusedField, setFocusedField] = useState(null);
  
  const handleChange = (e: { target: { id: any; value: any; }; }) => {
    const { id, value } = e.target;
    setFormState(prev => ({ ...prev, [id]: value }));
  };
  
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
    alert("Formulář byl odeslán! (demo)");
  };

  return (
    <section
      id="kontakt"
      className="relative py-24 bg-[#0A0F23] text-white min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Tech background effect */}
      <div className="absolute inset-0 z-0">
        {/* Grid background */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundSize: "50px 50px",
            backgroundImage:
              "linear-gradient(to right, rgba(30,64,175,0.05) 1px, transparent 1px), " +
              "linear-gradient(to bottom, rgba(30,64,175,0.05) 1px, transparent 1px)",
          }}
        />
        
        {/* Animated scan line */}
        <motion.div
          className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"
          initial={{ top: "-10%" }}
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "linear",
            repeatDelay: 1
          }}
        />
        
        {/* Background gradients */}
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-orange-500/5 blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/3 w-[350px] h-[350px] rounded-full bg-blue-500/5 blur-[80px]" />
      </div>

      <div className="max-w-5xl w-full px-6 lg:px-8 z-10 relative">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-block relative">
            <div className="relative">
              <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mt-12">
                Kontaktujte <span className="text-orange-500">mě</span>
              </h2>
              
              {/* Orange underline */}
              <div className="absolute -bottom-2 left-0 right-0 h-[3px]">
                <div className="h-full w-full bg-gradient-to-r from-orange-600 via-orange-500 to-transparent"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -left-4 -top-4 w-8 h-8 border-l-2 border-t-2 border-orange-500"></div>
              <div className="absolute -right-4 -bottom-4 w-8 h-8 border-r-2 border-b-2 border-orange-500"></div>
            </div>
          </div>
          
          <motion.p 
            className="text-gray-400 text-lg mt-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Máte nápad na projekt? Spojme se a vytvořme něco úžasného společně.
          </motion.p>
        </motion.div>

        {/* Main grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left column - Contact info cards */}
          <div className="space-y-6">
            {/* Contact image with frame */}
            <motion.div 
              className="mb-8 flex justify-center lg:justify-start"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <div className="relative p-1">
                {/* Glowing frame */}
                <motion.div 
                  className="absolute inset-0 rounded-lg"
                  animate={{
                    boxShadow: [
                      '0 0 10px rgba(249, 115, 22, 0.3)',
                      '0 0 20px rgba(249, 115, 22, 0.5)',
                      '0 0 10px rgba(249, 115, 22, 0.3)'
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Corner decorations */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-orange-500" />
                <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-orange-500" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-orange-500" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-orange-500" />
                
                {/* Image placeholder */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4 relative overflow-hidden">
                  <div className="relative z-10">
                    <Image
                      src="/imgs/kontakt.svg"
                      alt="Kontakt"
                      width={400}
                      height={250}
                      className="object-contain"
                    />
                  </div>
                  
                  {/* Tech background for image */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="h-full w-full"
                      style={{
                        backgroundSize: "20px 20px",
                        backgroundImage: "radial-gradient(circle, rgba(249,115,22,0.3) 1px, transparent 1px)"
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          
            {/* Contact info cards */}
            {[
              { icon: <FaEnvelope />, title: "Email", value: "vooness@stream.cz" },
              { icon: <FaPhone />, title: "Telefon", value: "+420 605 707 036" },
              { icon: <FaIdCard />, title: "IČO", value: "11834153" },
              { icon: <FaUser />, title: "Jméno", value: "Marek Frňka" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(249, 115, 22, 0.2)" }}
                className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-lg p-4 border border-gray-700/50 overflow-hidden group"
              >
                {/* Highlight on hover */}
                <div className="absolute inset-0 bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-orange-500/40" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-orange-500/40" />
                
                <div className="flex items-center">
                  <div className="mr-4 p-3 bg-gradient-to-br from-orange-600/20 to-orange-500/10 rounded-lg text-orange-500">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{item.title}</p>
                    <p className="text-gray-200 font-medium">{item.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Right column - Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-lg p-6 shadow-lg space-y-5 border border-gray-700/50 overflow-hidden"
            onSubmit={handleSubmit}
          >
            {/* Tech decoration */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-orange-500/30" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-orange-500/30" />
            
            {/* Form title */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white flex items-center">
                <span className="mr-2 bg-orange-500/10 p-2 rounded-lg">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-6 h-6 relative"
                  >
                    <FaPaperPlane className="text-orange-500" />
                  </motion.div>
                </span>
                Napište mi
              </h3>
              <div className="mt-1 h-[2px] w-20 bg-gradient-to-r from-orange-500 to-transparent" />
            </div>
            
            {/* Name & Email fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Name field */}
              <div className="relative">
                <label htmlFor="name" className="block text-gray-300 mb-2 text-sm font-medium">
                  Jméno
                </label>
                <div className={`relative ${focusedField === 'name' ? 'z-20' : 'z-10'}`}>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-gray-900/70 text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-orange-500 transition-all duration-300"
                    placeholder="Vaše jméno"
                    required
                  />
                  {focusedField === 'name' && (
                    <motion.div 
                      layoutId="focusHighlight"
                      className="absolute -inset-[1px] rounded-lg border border-orange-500"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="absolute left-0 top-0 w-2 h-2 border-t border-l border-orange-500" />
                      <div className="absolute right-0 top-0 w-2 h-2 border-t border-r border-orange-500" />
                      <div className="absolute left-0 bottom-0 w-2 h-2 border-b border-l border-orange-500" />
                      <div className="absolute right-0 bottom-0 w-2 h-2 border-b border-r border-orange-500" />
                    </motion.div>
                  )}
                </div>
              </div>
              
              {/* Email field */}
              <div className="relative">
                <label htmlFor="email" className="block text-gray-300 mb-2 text-sm font-medium">
                  E-mail
                </label>
                <div className={`relative ${focusedField === 'email' ? 'z-20' : 'z-10'}`}>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-gray-900/70 text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-orange-500 transition-all duration-300"
                    placeholder="Váš e-mail"
                    required
                  />
                  {focusedField === 'email' && (
                    <motion.div 
                      layoutId="focusHighlight"
                      className="absolute -inset-[1px] rounded-lg border border-orange-500"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="absolute left-0 top-0 w-2 h-2 border-t border-l border-orange-500" />
                      <div className="absolute right-0 top-0 w-2 h-2 border-t border-r border-orange-500" />
                      <div className="absolute left-0 bottom-0 w-2 h-2 border-b border-l border-orange-500" />
                      <div className="absolute right-0 bottom-0 w-2 h-2 border-b border-r border-orange-500" />
                    </motion.div>
                  )}
                </div>
              </div>
            </div>

            {/* Subject field */}
            <div className="relative">
              <label htmlFor="subject" className="block text-gray-300 mb-2 text-sm font-medium">
                Předmět
              </label>
              <div className={`relative ${focusedField === 'subject' ? 'z-20' : 'z-10'}`}>
                <input
                  type="text"
                  id="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-gray-900/70 text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-orange-500 transition-all duration-300"
                  placeholder="Předmět"
                  required
                />
                {focusedField === 'subject' && (
                  <motion.div 
                    layoutId="focusHighlight"
                    className="absolute -inset-[1px] rounded-lg border border-orange-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="absolute left-0 top-0 w-2 h-2 border-t border-l border-orange-500" />
                    <div className="absolute right-0 top-0 w-2 h-2 border-t border-r border-orange-500" />
                    <div className="absolute left-0 bottom-0 w-2 h-2 border-b border-l border-orange-500" />
                    <div className="absolute right-0 bottom-0 w-2 h-2 border-b border-r border-orange-500" />
                  </motion.div>
                )}
              </div>
            </div>
            
            {/* Message field */}
            <div className="relative">
              <label htmlFor="message" className="block text-gray-300 mb-2 text-sm font-medium">
                Zpráva
              </label>
              <div className={`relative ${focusedField === 'message' ? 'z-20' : 'z-10'}`}>
                <textarea
                  id="message"
                  value={formState.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-gray-900/70 text-white px-4 py-3 rounded-lg border border-gray-700 h-32 resize-none focus:outline-none focus:border-orange-500 transition-all duration-300"
                  placeholder="Vaše zpráva"
                  required
                ></textarea>
                {focusedField === 'message' && (
                  <motion.div 
                    layoutId="focusHighlight"
                    className="absolute -inset-[1px] rounded-lg border border-orange-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="absolute left-0 top-0 w-2 h-2 border-t border-l border-orange-500" />
                    <div className="absolute right-0 top-0 w-2 h-2 border-t border-r border-orange-500" />
                    <div className="absolute left-0 bottom-0 w-2 h-2 border-b border-l border-orange-500" />
                    <div className="absolute right-0 bottom-0 w-2 h-2 border-b border-r border-orange-500" />
                  </motion.div>
                )}
              </div>
            </div>
            
            {/* Submit button */}
            <div className="text-center pt-4">
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(249, 115, 22, 0.4)" }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="relative inline-flex items-center bg-gradient-to-r from-orange-600 to-orange-500 text-white px-8 py-3 rounded-lg font-medium shadow-lg overflow-hidden group"
              >
                {/* Button content */}
                <span className="relative z-10 flex items-center">
                  Odeslat zprávu 
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                    className="ml-2"
                  >
                    <FaPaperPlane />
                  </motion.span>
                </span>
                
                {/* Button glow effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400"
                  animate={{
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Button highlight effect */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000"></span>
                </span>
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;