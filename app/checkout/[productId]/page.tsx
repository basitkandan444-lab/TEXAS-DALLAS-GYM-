import { notFound } from "next/navigation"
import { getProduct, formatPrice } from "@/lib/products"
import { Checkout } from "@/components/checkout"
import { Navigation } from "@/components/navigation"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default async function CheckoutPage({
  params,
}: {
  params: Promise<{ productId: string }>
}) {
  const { productId } = await params
  const product = getProduct(productId)

  if (!product) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Pricing
          </Link>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Order Summary */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-2xl p-6 sticky top-24">
                <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-foreground">
                      {product.name} Membership
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {product.description}
                    </p>
                  </div>

                  <div className="border-t border-border pt-4">
                    <h4 className="text-sm font-medium mb-2">Includes:</h4>
                    <ul className="space-y-1.5">
                      {product.features.map((feature, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-primary mt-0.5">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between items-baseline">
                      <span className="text-muted-foreground">Total</span>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-foreground">
                          {formatPrice(product.priceInCents)}
                        </span>
                        <span className="text-muted-foreground">
                          /{product.interval}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Checkout Form */}
            <div className="lg:col-span-3">
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <Checkout productId={productId} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
