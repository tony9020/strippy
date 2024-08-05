import React,{useState} from 'react';
import { motion } from 'framer-motion';
import MyModal from './Modal';

interface SectionProps {
  title: string;
  description: string;
  images?: string[];
  button?: { text: string};
  className?: string;
  sub?: string;
}

const Section: React.FC<SectionProps> = ({ title, description, images, button, className, sub }) => {

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <motion.section
      className={`py-10 px-5 min-h-screen ${className}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1 className="text-7xl mb-12 text-yellow-400" whileHover={{ scale: 1.2 }}>
        {title}
      </motion.h1>
      <motion.p className="text-2xl mb-10 text-pink-500" whileHover={{ scale: 1.1 }}>
        {description}
      </motion.p>
      {images && (
        <div className="flex justify-center gap-4 mb-4">
          {images.map((src, index) => (
            <motion.img
              key={index}
              src={src}
              alt={`Image ${index + 1}`}
              className="w-[450px] rounded-lg"
              whileHover={{ scale: 1.10 }}
            />
          ))}
        </div>
      )}
      <motion.p className="text-xl mb-10 text-brown-500" whileHover={{ scale: 1.02 }}>
        {sub}
      </motion.p>
      {button && button.text ==='Open Modal' &&(
        <motion.button
          className="bg-buttonBg text-buttonText px-4 py-2 rounded"
          whileHover={{ scale: 1.1 }}
          onClick={openModal}
        >
          {button.text}
        </motion.button>
      )}
       <MyModal isOpen={isOpen} onClose={closeModal} />
    </motion.section>
  );
};

export default Section;
