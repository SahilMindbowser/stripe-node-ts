import express, { Router } from "express";

import { getConfig, createCheckoutSession } from "../controllers/payment";

const router: Router = express.Router();

router.get("/config", getConfig);

router.post("/create-checkout-session", createCheckoutSession);

export { router as paymentRoutes };
