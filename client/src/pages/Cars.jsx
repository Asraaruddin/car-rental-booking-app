import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import CarCard from '../components/CarCard'
import { useAppContext } from '../context/AppContext'
import { useSearchParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import { motion } from 'framer-motion'

const Cars = () => {
  const [searchParams] = useSearchParams()
  const pickupLocation = searchParams.get('pickupLocation')
  const pickupDate = searchParams.get('pickupDate')
  const returnDate = searchParams.get('returnDate')

  const { cars, axios } = useAppContext()

  const [input, setInput] = useState('')
  const isSearchData = pickupLocation && pickupDate && returnDate
  const [filteredCars, setFilteredCars] = useState([])

  const applyFilter = () => {
    if (input === '') {
      setFilteredCars(cars)
      return
    }
    const filtered = cars.filter((car) =>
      [car.brand, car.model, car.category, car.transmission].some((field) =>
        field.toLowerCase().includes(input.toLowerCase())
      )
    )
    setFilteredCars(filtered)
  }

  const searchCarAvailabilty = async () => {
    const { data } = await axios.post('/api/bookings/check-availablity', { location: pickupLocation, pickupDate, returnDate })
    if (data.success) {
      setFilteredCars(data.availableCars)
      if (data.availableCars.length === 0) toast('No cars available')
    }
  }

  useEffect(() => {
    isSearchData && searchCarAvailabilty()
  }, [])

  useEffect(() => {
    if (cars.length > 0 && !isSearchData) applyFilter()
  }, [input, cars])

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className='flex flex-col items-center py-20 bg-light max-md:px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Title
            title='Available Cars'
            subTitle='Browse our selection of premium vehicles available for your next adventure'
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='flex items-center bg-white px-4 mt-1 max-w-lg w-full h-12 rounded-full shadow'
        >
          <img src={assets.search_icon} alt="" className='w-4 h-4 mr-2' />
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder='Search by make, model, or features'
            className='w-full outline-none text-gray-500 text-sm'
          />
          <img src={assets.filter_icon} alt="" className='w-4 h-4 ml-2' />
        </motion.div>
      </div>

      <div className='px-6 md:px-16 lg:px-24 xl:px-32 mt-10'>
        <p className='text-gray-500 xl:px-20 max-w-7xl mx-auto'>
          Showing {filteredCars.length} Cars
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 xl:px-20 max-w-7xl mx-auto'
        >
          {filteredCars.map((car, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <CarCard car={car} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Cars
