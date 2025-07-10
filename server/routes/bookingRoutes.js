import express from "express";
import { changeBookingStatus, checkAvailablityofCar, createBooking, getOwnerBookings, getUserBookings } from "../controllers/bookingController.js";
import { Protect } from "../middleware/auth.js";

const bookingRouter = express.Router();

bookingRouter.post('/check-availability',checkAvailablityofCar)
bookingRouter.post('/create',Protect,createBooking)
bookingRouter.get('/user',Protect,getUserBookings)
bookingRouter.get('/owner',Protect,getOwnerBookings)
bookingRouter.post('/change-status',Protect,changeBookingStatus)

export default bookingRouter

