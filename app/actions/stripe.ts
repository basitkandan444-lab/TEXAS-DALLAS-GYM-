"use server"

import { stripe } from "@/lib/stripe"
import { getProduct } from "@/lib/products"

export async function createCheckoutSession(productId: string) {
  const product = getProduct(productId)

  if (!product) {
    throw new Error("Product not found")
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000"

  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded",
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: `Texas Gym - ${product.name} Membership`,
            description: product.description,
          },
          unit_amount: product.priceInCents,
          recurring: {
            interval: product.interval,
          },
        },
        quantity: 1,
      },
    ],
    mode: "subscription",
    return_url: `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
  })

  return { clientSecret: session.client_secret }
}

export async function getCheckoutSession(sessionId: string) {
  const session = await stripe.checkout.sessions.retrieve(sessionId)
  return {
    status: session.status,
    customerEmail: session.customer_details?.email,
  }
}
