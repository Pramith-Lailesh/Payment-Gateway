// import express from "express";
// import { checkout } from "../controller/paymentController.js";

// const router = express.Router();
// router.post("/checkout", checkout);
// export default router;

import express from "express";

import {
  checkout,
  getKey,
  paymentVerification,
} from "../controller/paymentController.js";

const router = express.Router();

router.post("/checkout", checkout);
router.get("/getKey", getKey);
router.post("/paymentverification", paymentVerification);

export default router;
