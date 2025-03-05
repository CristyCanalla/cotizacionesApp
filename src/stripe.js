import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.post("/pagar", async (req, res) => {
    try {
        const { monto, paymentMethodId } = req.body;

        const paymentIntent = await stripe.paymentIntents.create({
            amount: monto * 100,
            currency: "usd",
            payment_method: paymentMethodId,
            confirm: true,
        });

        res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        console.error("Error en pago:", error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(5002, () => {
    console.log("Servidor Stripe escuchando en el puerto 5002");
});