import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className='px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-gray-500'
    >
      <div className='flex flex-wrap justify-between items-start gap-8 pb-6 border-borderColor border-b'>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='flex-1'
        >
          <Link to='/' className='flex flex-col leading-tight'>
            <span className='text-xl font-extrabold tracking-wide text-primary italic'>
              A<span className='text-gray-800'>CarRental</span>
            </span>
            <span className='text-[10px] text-gray-500 uppercase tracking-widest'>Drive Your Dream</span>
          </Link>
          <p className='text-sm mt-2'>
            Premium car rental service with a wide selection of luxury and everyday vehicles for all your driving needs.
          </p>
          <div className='flex items-center gap-3 mt-4'>
            <a href="#"><img src={assets.facebook_logo} className='w-5 h-5' alt="" /></a>
            <a href="#"><img src={assets.instagram_logo} className='w-5 h-5' alt="" /></a>
            <a href="#"><img src={assets.gmail_logo} className='w-5 h-5' alt="" /></a>
          </div>
        </motion.div>

        {[
          { title: 'Quick Links', links: ['Home', 'Browse Cars', 'List Your Car', 'About Us'] },
          { title: 'Resources', links: ['Help Center', 'Terms of Service', 'Privacy Policy', 'Insurance'] },
          { title: 'Contact', links: ['1234 Luxury Drive', 'San Francisco, CA 94107', '+1 234 567890', 'infocarrental.com'] },
        ].map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
          >
            <h2 className='text-base font-medium text-gray-800 uppercase'>{section.title}</h2>
            <ul className='mt-3 flex flex-col gap-1.5'>
              {section.links.map((link, i) => (
                <li key={i}><a href="#">{link}</a></li>
              ))}
            </ul>
          </motion.div>
        ))}

      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'
      >
        <p>© {new Date().getFullYear()} Brand. All rights reserved.</p>
        <ul className='flex items-center gap-4'>
          <li><a href="#">Privacy</a></li>
          <li>|</li>
          <li><a href="#">Terms</a></li>
          <li>|</li>
          <li><a href="#">Cookies</a></li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
