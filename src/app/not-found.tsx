import Link from "next/link"
import { Container } from "@/components/shared/Container"
import { WhatsAppButton } from "@/components/shared/WhatsAppButton"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Page Not Found | WebStudioKW",
  description: "The page you're looking for doesn't exist or has been moved.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-6xl font-bold text-primary/20">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Page Not Found
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              variant="default"
              size="lg"
              nativeButton={false}
              render={<Link href="/" />}
            >
              <Home className="mr-2 h-4 w-4" aria-hidden="true" />
              Back to Home
            </Button>
            <WhatsAppButton variant="outline" size="lg">
              Contact Us
            </WhatsAppButton>
          </div>
        </div>
      </Container>
    </section>
  )
}
