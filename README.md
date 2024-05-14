# Express Application in Typescript with Stripe Integration

This is a simple Express server implemented using TypeScript and integrated with Stripe Checkout Session for handling payments.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/SahilMindbowser/stripe-node-ts.git
   ```

2. **Navigate into the project directory:**

   ```bash
   cd stripe-node-ts
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

## Configuration

1. **Set up your Stripe account and obtain your API keys from the [Stripe Dashboard](https://dashboard.stripe.com/).**

2. **Create a `.env` file in the root directory of the project and add your Stripe API keys:**
   ```
   STRIPE_SECRET_KEY="YOUR_STRIPE_SECRET_KEY_HERE"
   STRIPE_PUBLIC_KEY="YOUR_STRIPE_PUBLIC_KEY_HERE"
   ```

## Usage

1. **Start the server:**
   ```bash
   npm start
   ```

## Endpoints

- `POST /create-checkout-session`: Initiates a Stripe Checkout Session and returns the session ID.

- `GET /config`: Get the stripe secret keys.

## Dependencies

- [Express](https://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.js.
- [Stripe](https://stripe.com/): Payment processing platform for online businesses.
- [dotenv](https://github.com/motdotla/dotenv): Loads environment variables from a `.env` file into `process.env`.
- [typescript](https://www.typescriptlang.org/): Superset of JavaScript that compiles to clean JavaScript output.
- [typescript](https://nodemon.io/): Utility that monitors for changes in your source code and automatically restarts your server during development.
