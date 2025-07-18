import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

const MyBooking = () => {
  const { axios, user, currency } = useAppContext();
  const [bookings, setBooking] = useState([]);

  const fetchMyBookings = async () => {
    try {
      const { data } = await axios.get('/api/bookings/user');
      if (data.success) {
        setBooking(data.bookings);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    user && fetchMyBookings();
  }, [user]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className='px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-48 mt-16 text-sm max-w-7xl'
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Title
          title='My Booking'
          subTitle='View and manage your all car bookings'
          align='left'
        />
      </motion.div>

      <div>
        {bookings.map((booking, index) => (
          <motion.div
            key={booking._id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className='grid grid-cols-1 md:grid-cols-4 gap-6 p-6 border border-borderColor rounded-lg mt-5 first:mt-12'
          >
            {/* Car Image & Info */}
            <div>
              <div className='rounded-md overflow-hidden mb-3'>
                <img src={booking.car.image} alt="" className='w-full h-auto aspect-video object-cover' />
                <p className='text-lg font-medium mt-2'>{booking.car.brand} {booking.car.model}</p>
                <p className='text-gray-500'>{booking.car.year} {booking.car.category} {booking.car.location}</p>
              </div>
            </div>

            {/* Booking Info */}
            <div className='md:col-span-2'>
              <div className='flex items-center gap-2'>
                <p className='px-3 py-1.5 bg-light rounded'>Booking #{index + 1}</p>
                <p className={`px-3 py-1 text-xs rounded-full ${booking.status === 'confirmed' ? 'bg-green-400/15 text-green-600' : 'bg-red-400/15 text-red-600'}`}>
                  {booking.status}
                </p>
              </div>

              <div className='flex items-start gap-2 mt-3'>
                <img src={assets.calendar_icon_colored} alt="" className='w-h h-4 mt-1' />
                <div className='text-gray-500'>
                  <p>Rental Period</p>
                  <p>{booking.pickupDate.split('T')[0]} To {booking.returnDate.split('T')[0]}</p>
                </div>
              </div>

              <div className='flex items-start gap-2 mt-3'>
                <img src={assets.location_icon_colored} alt="" className='w-h h-4 mt-1' />
                <div className='text-gray-500'>
                  <p>{booking.car.location}</p>
                </div>
              </div>
            </div>

            {/* Price Info */}
            <div className='flex flex-col justify-between gap-6 text-right'>
              <div className='text-sm text-gray-500'>
                <p>Total Price</p>
                <h1 className='text-2xl font-semibold text-primary'>{currency}{booking.price}</h1>
                <p>Booked on {booking.createdAt.split('T')[0]}</p>
              </div>
            </div>

          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MyBooking;
