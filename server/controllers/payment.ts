import { Request, Response } from "express";

import Stripe from "stripe";

interface Product {
  dish: string;
  price: number;
  qnty: number;
  imgdata: string;
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

/**
 * Get the Stripe public key
 * @param _
 * @param res Response object
 */
const getConfig = (_: Request, res: Response) => {
  res.json({
    publicKey: process.env.STRIPE_PUBLIC_KEY,
  });
};

/**
 * Controller to create a payment checkout session
 * @param req Request object
 * @param res Response object
 */
const createCheckoutSession = async (req: Request, res: Response) => {
  const { products } = req.body;

  const lineItems = products.map((product: Product) => ({
    price_data: {
      currency: "inr",
      product_data: {
        name: product.dish,
        images: [product.imgdata],
      },
      unit_amount: product.price * 100,
    },
    quantity: product.qnty,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:3000/sucess",
    cancel_url: "http://localhost:3000/cancel",
  });

  res.json({ id: session.id });
};

export { getConfig, createCheckoutSession };
