import express, { Express } from "express";
const app: Express = express();

import { paymentRoutes } from "../routes/payment";

import { config } from "dotenv";

const PORT = process.env.PORT || 8000;

config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/payment", paymentRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port 8000");
});
