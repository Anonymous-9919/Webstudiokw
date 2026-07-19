import { Container } from "@/components/shared/Container"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { PACKAGES } from "@/lib/constants"
import { WhatsAppButton } from "@/components/shared/WhatsAppButton"
import { Check, Star } from "lucide-react"
import { cn } from "@/lib/utils"

export function PricingPreview() {
  return (
    <section className="section-alt py-20 sm:py-28">
      <Container>
        <SectionHeading
          badge="Pricing"
          title="Simple, Transparent Pricing"
          description="Choose the package that fits your business. All packages include our quality guarantee."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={cn(
                "relative rounded-2xl border bg-white p-6 backdrop-blur-sm transition-all duration-300 sm:p-8",
                pkg.popular
                  ? "border-primary shadow-lg shadow-primary/10 scale-[1.02]"
                  : "border-black/[0.08] hover:border-primary/30"
              )}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                    <Star className="h-3 w-3 fill-current" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-heading text-lg font-bold">{pkg.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{pkg.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="font-heading text-4xl font-bold text-primary">
                    {pkg.offerPrice}
                  </span>
                  <span className="text-sm text-muted-foreground">KWD</span>
                </div>
                <div className="mt-1 text-sm text-muted-foreground line-through">
                  {pkg.originalPrice} KWD
                </div>
              </div>

              <ul className="mb-8 space-y-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <WhatsAppButton
                message={pkg.whatsappMessage}
                className="w-full"
                variant={pkg.popular ? "default" : "outline"}
              >
                {pkg.cta}
              </WhatsAppButton>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Need something custom?{" "}
          <a
            href="https://wa.me/96565664793?text=Hi%20WebStudioKW!%20I%20need%20a%20custom%20quote%20for%20my%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary transition-colors hover:text-primary/80"
          >
            Contact us for a custom quote
          </a>
        </p>
      </Container>
    </section>
  )
}
