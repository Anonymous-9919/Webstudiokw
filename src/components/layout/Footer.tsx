import Link from "next/link"
import { NAV_LINKS, SITE, SERVICES } from "@/lib/constants"
import { Container } from "@/components/shared/Container"
import { WhatsAppButton } from "@/components/shared/WhatsAppButton"
import { Zap, MessageCircle, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="section-darker border-t border-white/10">
      <Container as="div" className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <Zap className="h-6 w-6 fill-primary text-primary" aria-hidden="true" />
              <span className="font-heading">{SITE.brand}</span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {SITE.tagline}
            </p>
            <div className="space-y-2">
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                {SITE.phone}
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {SITE.location}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold">Services</h3>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold">Ready to Start?</h3>
            <p className="text-sm text-muted-foreground">
              Get a professional website for your business in Kuwait. Contact us today for a free consultation.
            </p>
            <WhatsAppButton className="w-full">
              Chat on WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <Container as="div" className="flex flex-col items-center justify-between gap-4 py-6 text-sm text-muted-foreground sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {SITE.brand}. All rights reserved.</p>
          <p>Made for businesses in Kuwait</p>
        </Container>
      </div>
    </footer>
  )
}
