import express from "express";
import { Protect } from "../middleware/auth.js";
import { changeRoleToOwner } from "../controllers/ownercontroller.js";

const ownerRouter = express.Router();

ownerRouter.post("/change-role",Protect,changeRoleToOwner)

export default ownerRouter;