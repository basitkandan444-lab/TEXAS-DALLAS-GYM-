export interface Product {
  id: string
  name: string
  description: string
  priceInCents: number
  interval: "month" | "year"
  features: string[]
  popular?: boolean
}

// Texas Gym Membership Plans
// All prices are stored server-side to prevent manipulation
export const PRODUCTS: Product[] = [
  {
    id: "starter-monthly",
    name: "Starter",
    description: "Perfect for beginners ready to start their fitness journey",
    priceInCents: 4900, // $49/month
    interval: "month",
    features: [
      "Full gym access",
      "Locker room access",
      "2 group classes/week",
      "Fitness assessment",
      "Mobile app access",
    ],
  },
  {
    id: "pro-monthly",
    name: "Pro",
    description: "Our most popular plan for serious fitness enthusiasts",
    priceInCents: 9900, // $99/month
    interval: "month",
    popular: true,
    features: [
      "Everything in Starter",
      "Unlimited group classes",
      "2 PT sessions/month",
      "Nutrition consultation",
      "Sauna & steam access",
      "Guest passes (2/month)",
    ],
  },
  {
    id: "elite-monthly",
    name: "Elite",
    description: "The ultimate fitness experience with premium perks",
    priceInCents: 19900, // $199/month
    interval: "month",
    features: [
      "Everything in Pro",
      "8 PT sessions/month",
      "Custom meal plans",
      "Recovery zone access",
      "Priority class booking",
      "Unlimited guest passes",
      "VIP locker",
    ],
  },
]

export function getProduct(productId: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === productId)
}

export function formatPrice(priceInCents: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(priceInCents / 100)
}
