import React from 'react';
import { motion } from 'framer-motion';

/* Video Editing Card with 9:16 Aspect Ratio */
interface ProjectCardVerticalProps {
  title: string;
  video: string;
  description: string;
  comment: string;
}

const ProjectCardVertical: React.FC<ProjectCardVerticalProps> = ({ title, video, description, comment }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="relative group bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
  >
    <video
      src={video}
      title={title}
      className="aspect-[9/16] w-full object-cover transition-transform duration-300 group-hover:scale-105"
      controls
      loop
      muted
      autoPlay
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
      <h3 className="font-bold text-lg mb-1">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
      <p className="text-xs text-orange-400 mt-1">{comment}</p>
    </div>
  </motion.div>
);

export default ProjectCardVertical;
