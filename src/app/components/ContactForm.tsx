"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaEnvelope, FaPhone, FaIdCard, FaUser, FaArrowLeft } from "react-icons/fa";
import Image from "next/image";

type FieldName = "name" | "email" | "subject" | "message";

// Čisté pozadí bez gradientních prvků (stejné jako ServicesGrid)
const BackgroundAnimation: React.FC<{ isDesktop: boolean }> = ({ isDesktop }) => {
  if (!isDesktop) {
    // Pro mobilní zařízení - bez pozadí
    return null;
  }
  
  // Pro desktop - pouze jemná mřížka a kódový vzor
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Jemný overlay kódového vzoru */}
      <div className="absolute inset-0 opacity-[0.015] font-mono text-[0.6rem] text-white overflow-hidden select-none">
        <div className="absolute -left-20 top-10 transform -rotate-3 opacity-50">
          {`// Contact form
const formData = {
  name: '',
  email: '',
  message: ''
};
export const submitForm = async () => {
  // Handle form submission
};`}
        </div>
      </div>
      
      {/* Jemná mřížka */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>
    </div>
  );
};

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [focusedField, setFocusedField] = useState<FieldName | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  
  // Detekce desktop zařízení
  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1024);
    
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormState(prev => ({ ...prev, [id]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulujeme odeslání formuláře
    setTimeout(() => {
      console.log("Form submitted:", formState);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset formuláře po 5 sekundách
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      }, 5000);
    }, 1500);
  };

  return (
    <section
      id="kontakt"
      className="relative py-24 bg-[#0f172a] text-white min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Čisté pozadí bez gradientních prvků */}
      <BackgroundAnimation isDesktop={isDesktop} />

      <div className="max-w-5xl w-full px-6 lg:px-8 z-10 relative">
        {/* Zpět na hlavní stránku odkaz */}
        <div className="mb-8">
          <motion.a
            href="/"
            className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <FaArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            <span className="font-medium">Zpátky na hlavní stránku</span>
          </motion.a>
        </div>

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
              <div className="absolute -bottom-2 left-0 right-0 h-[3px]">
                <div className="h-full w-full bg-gradient-to-r from-orange-600 via-orange-500 to-transparent"></div>
              </div>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <motion.div 
              className="mb-8 flex justify-center lg:justify-start"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <div className="relative p-1">
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
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-orange-500" />
                <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-orange-500" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-orange-500" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-orange-500" />
                <div className="bg-slate-800/60 backdrop-blur-lg rounded-lg p-4 relative overflow-hidden">
                  <div className="relative z-10">
                    <Image
                      src="/imgs/kontakt.svg"
                      alt="Kontakt"
                      width={400}
                      height={250}
                      className="object-contain"
                    />
                  </div>
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
          
            {[{ icon: <FaEnvelope />, title: "Email", value: "vooness@stream.cz" },
              { icon: <FaPhone />, title: "Telefon", value: "+420 605 707 036" },
              { icon: <FaIdCard />, title: "IČO", value: "11834153" },
              { icon: <FaUser />, title: "Jméno", value: "Marek Frňka" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(249, 115, 22, 0.2)" }}
                className="relative bg-slate-800/60 backdrop-blur-lg rounded-lg p-4 border border-white/10 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-orange-500/40" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-orange-500/40" />
                <div className="flex items-center">
                  <div className="mr-4 p-3 bg-orange-600/20 rounded-lg text-orange-500">
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
          
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="relative bg-slate-800/60 backdrop-blur-lg rounded-lg p-6 shadow-lg space-y-5 border border-white/10 overflow-hidden"
            onSubmit={handleSubmit}
          >
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-orange-500/30" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-orange-500/30" />
            
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

            {/* Animace překrývající formulář po odeslání */}
            <AnimatePresence>
              {isSubmitted && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-slate-800/95 backdrop-blur-lg flex flex-col items-center justify-center z-50"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="text-green-500 mb-4 p-4 rounded-full bg-green-500/10"
                  >
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">Děkuji za zprávu!</h3>
                  <p className="text-gray-400 text-center">Ozvu se vám co nejdříve to bude možné.</p>
                </motion.div>
              )}
            </AnimatePresence>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="relative">
                <label htmlFor="name" className="block text-gray-300 mb-2 text-sm font-medium">Jméno</label>
                <div className={`relative ${focusedField === "name" ? "z-20" : "z-10"}`}>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-gray-900/70 text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-orange-500 transition-all duration-300"
                    placeholder="Vaše jméno"
                    required
                  />
                  {focusedField === "name" && (
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
              
              <div className="relative">
                <label htmlFor="email" className="block text-gray-300 mb-2 text-sm font-medium">E-mail</label>
                <div className={`relative ${focusedField === "email" ? "z-20" : "z-10"}`}>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-gray-900/70 text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-orange-500 transition-all duration-300"
                    placeholder="Váš e-mail"
                    required
                  />
                  {focusedField === "email" && (
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
            
            <div className="relative">
              <label htmlFor="subject" className="block text-gray-300 mb-2 text-sm font-medium">Předmět</label>
              <div className={`relative ${focusedField === "subject" ? "z-20" : "z-10"}`}>
                <input
                  type="text"
                  id="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("subject")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-gray-900/70 text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-orange-500 transition-all duration-300"
                  placeholder="Předmět zprávy"
                  required
                />
                {focusedField === "subject" && (
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
            
            <div className="relative">
              <label htmlFor="message" className="block text-gray-300 mb-2 text-sm font-medium">Zpráva</label>
              <div className={`relative ${focusedField === "message" ? "z-20" : "z-10"}`}>
                <textarea
                  id="message"
                  value={formState.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-gray-900/70 text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-orange-500 transition-all duration-300 min-h-[150px] resize-none"
                  placeholder="Váš dotaz nebo zpráva"
                  required
                />
                {focusedField === "message" && (
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
            
            <div className="mt-6">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="relative w-full overflow-hidden group flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-medium rounded-lg transition-all duration-300 disabled:opacity-70"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 w-full h-full">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                    <div className="absolute inset-0" style={{
                      backgroundSize: "20px 20px",
                      backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)"
                    }} />
                  </div>
                  <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/20" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/20" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/20" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/20" />
                </div>
                
                {isSubmitting ? (
                  <div className="flex items-center">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="mr-2 w-5 h-5"
                    >
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </motion.div>
                    Odesílám...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <span>Odeslat zprávu</span>
                    <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                )}
              </motion.button>
            </div>
            
            {/* Dekorativní prvek na tlačítku */}
            <motion.div
              className="absolute bottom-6 right-6 h-[30px] w-[30px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="w-full h-full border-r-2 border-b-2 border-orange-500/30" />
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;