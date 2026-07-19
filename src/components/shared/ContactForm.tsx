"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Send } from "lucide-react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [service, setService] = useState("")

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="mb-2 text-xl font-semibold">Message Sent!</h3>
        <p className="mb-6 text-muted-foreground">
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
        <Button variant="outline" onClick={() => { setSubmitted(false); setService("") }}>
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
      className="space-y-6"
    >
      <h2 className="text-xl font-semibold">Send Us a Message</h2>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Your name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="your@email.com" required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone (Optional)</Label>
        <Input id="phone" placeholder="+965 XXXX XXXX" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">Service Interested In</Label>
        <select
          id="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <option value="">Select a service</option>
          <option value="business-website">Business Website</option>
          <option value="ecommerce">Ecommerce Website</option>
          <option value="custom-app">Custom Web Application</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Tell us about your project..."
          rows={5}
          required
        />
      </div>

      <Button type="submit" className="w-full" size="lg">
        <Send className="mr-2 h-4 w-4" aria-hidden="true" />
        Send Message
      </Button>
    </form>
  )
}
