"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconPalette,
  IconDeviceLaptop,
  IconShoppingCart,
  IconVideo,
  IconGift,
} from "@tabler/icons-react";
import { motion } from "motion/react";

export function BentoGridThirdDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] gap-6 mb-12 px-10 md:px-16">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={<span className="text-orange-500">{item.title}</span>}
          description={<span className="text-gray-300">{item.description}</span>}
          header={item.header}
          icon={React.cloneElement(item.icon, {
            className: "text-orange-500",
            style: { filter: "drop-shadow(0 0 8px rgba(249,115,22,0.7))" }
          })}
          className={cn(
            "bg-gray-800 text-white rounded-2xl shadow-lg shadow-orange-500/50 flex flex-col border-2 border-orange-500",
            "[&>p]:text-gray-300",
            "hover:shadow-lg hover:shadow-orange-500/75",
            item.className
          )}
        />
      ))}
    </BentoGrid>
  );
}

// Skeleton components (unchanged)
const SkeletonOne = () => {
  const v1 = { initial: { x: 0 }, animate: { x: 10, rotate: 5, transition: { duration: 0.2 } } };
  const v2 = { initial: { x: 0 }, animate: { x: -10, rotate: -5, transition: { duration: 0.2 } } };
  return (
    <motion.div initial="initial" whileHover="animate" className="flex flex-1 w-full h-full min-h-[6rem] bg-gray-800 flex-col space-y-2">
      <motion.div variants={v1} className="flex items-center space-x-2 p-2 bg-gray-700 border border-gray-600 rounded-full">
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500" />
        <div className="flex-1 h-4 bg-gray-600 rounded-full" />
      </motion.div>
      <motion.div variants={v2} className="flex items-center space-x-2 p-2 bg-gray-700 border border-gray-600 rounded-full w-3/4 ml-auto">
        <div className="flex-1 h-4 bg-gray-600 rounded-full" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500" />
      </motion.div>
      <motion.div variants={v1} className="flex items-center space-x-2 p-2 bg-gray-700 border border-gray-600 rounded-full">
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500" />
        <div className="flex-1 h-4 bg-gray-600 rounded-full" />
      </motion.div>
    </motion.div>
  );
};
const SkeletonTwo = () => {
  const [widths] = useState(() => new Array(6).fill(0).map(() => `${Math.floor(Math.random() * 60) + 40}%`));
  const variants = { initial: { width: 0 }, animate: { width: "100%", transition: { duration: 0.2 } }, hover: { width: ["0%","100%"], transition: { duration: 2 } } };
  return (
    <motion.div initial="initial" animate="animate" whileHover="hover" className="flex flex-1 w-full h-full min-h-[6rem] bg-gray-800 flex-col space-y-2 p-2 border border-gray-600 rounded-lg">
      {widths.map((w,i) => <motion.div key={i} variants={variants} style={{ maxWidth: w }} className="h-4 bg-gray-700 rounded-full" />)}
    </motion.div>
  );
};
const SkeletonThree = () => {
  const variants = { initial: { backgroundPosition: "0% 50%" }, animate: { backgroundPosition: ["0% 50%","100% 50%","0% 50%"] } };
  return (
    <motion.div initial="initial" animate="animate" variants={variants} transition={{ duration:5, repeat: Infinity, repeatType: "reverse" }} className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 bg-[length:400%_400%]" />
  );
};
const SkeletonFour = () => {
  const f = { initial:{ x:20, rotate:-5 }, hover:{ x:0, rotate:0 } };
  const s = { initial:{ x:-20, rotate:5 }, hover:{ x:0, rotate:0 } };
  return (
    <motion.div initial="initial" animate="animate" whileHover="hover" className="flex flex-1 w-full h-full min-h-[6rem] bg-gray-800 space-x-2">
      {[
        ["Delusional","red"],["Sensible","green"],["Helpless","orange"],
      ].map(([label,color],idx) => (
        <motion.div key={idx} variants={idx===0?f:idx===2?s:undefined} className="flex-1 bg-gray-700 p-4 border border-gray-600 rounded-2xl flex flex-col items-center">
          <img src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg" alt="avatar" className="rounded-full h-10 w-10" />
          <p className="mt-4 text-xs text-white text-center font-semibold">{["Just code in Vanilla Javascript","Tailwind CSS is cool, you know","I love angular, RSC, and Redux"][idx]}</p>
          <span className={cn("mt-4 px-2 py-0.5 text-xs rounded-full", color==="red"?"text-red-500 bg-red-100":color==="green"?"text-green-500 bg-green-100":"text-orange-500 bg-orange-100")}>{label}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};
const SkeletonFive = () => {
  const v1 = { initial:{ x:0 }, animate:{ x:10, rotate:5, transition:{ duration:0.2 } } };
  const v2 = { initial:{ x:0 }, animate:{ x:-10, rotate:-5, transition:{ duration:0.2 } } };
  return (
    <motion.div className="flex flex-1 w-full h-full min-h-[6rem] bg-gray-800 flex-col space-y-2">
      <motion.div variants={v1} className="flex items-start space-x-2 p-2 bg-gray-700 border border-gray-600 rounded-2xl"><img src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg" alt="avatar" className="rounded-full h-10 w-10" /><p className="text-xs text-white">There are a lot of cool frameworks out there like React, Angular, Vue, Svelte that can make your life …</p></motion.div>
      <motion.div variants={v2} className="flex items-center justify-end space-x-2 p-2 bg-gray-700 border border-gray-600 rounded-full w-3/4 ml-auto"><p className="text-xs text-white">Use PHP.</p><div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500" /></motion.div>
    </motion.div>
  );
};

// Updated items array for services theme
const items = [
  {
    title: "Grafický design",
    description: "Kompletní návrh loga, vizitek a firemní identity na míru.",
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconPalette />,
  },
  {
    title: "Webové stránky",
    description: "Moderní a responzivní weby, které prodávají a rostou s vámi.",
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconDeviceLaptop />,
  },
  {
    title: "Úprava Shoptetu",
    description: "Customizace a optimalizace vašeho e-shopu na platformě Shoptet.",
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconShoppingCart />,
  },
  {
    title: "Tvorba videí",
    description: "Profesionální střih, motion grafika a editace pro sociální sítě.",
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconVideo />,
  },
  {
    title: "Marketingové materiály",
    description: "Letáky, bannery a online kampaně, které zaujmou vaše publikum.",
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconGift />,
  },
];
