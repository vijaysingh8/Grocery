import express from 'express'
import { authUser } from '../middlewares/authUser.js';
import { getAllOrders, getUserOrders, placeOrder } from '../controllers/order.controller.js';
import { authSeller } from '../middlewares/authSeller.js';
const router=express.Router();
router.post("/cod",authUser,placeOrder);
router.get("/user",authUser,getUserOrders);
router.get("/seller",authSeller,getAllOrders);


export default router;