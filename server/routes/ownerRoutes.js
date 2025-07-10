import express from "express";
import { Protect } from "../middleware/auth.js";
import { addCar, changeRoleToOwner, deleteCar, getOwnerCars, toggleCarAvailability } from "../controllers/ownercontroller.js";
import upload from "../middleware/multer.js";

const ownerRouter = express.Router();

ownerRouter.post("/change-role",Protect,changeRoleToOwner)
ownerRouter.post("/add-car",upload.single("image"),Protect,addCar)
ownerRouter.post("/cars",Protect,getOwnerCars)
ownerRouter.post("/toggle-car",Protect,toggleCarAvailability)
ownerRouter.post("/delete-car",Protect,deleteCar)

export default ownerRouter;