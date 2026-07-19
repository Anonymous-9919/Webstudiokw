import { SITE } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import Link from "next/link"

interface WhatsAppButtonProps {
  message?: string
  variant?: "default" | "outline" | "ghost" | "secondary"
  size?: "default" | "sm" | "lg" | "icon" | "xs" | "icon-sm" | "icon-lg" | "icon-xs"
  className?: string
  children?: React.ReactNode
  showIcon?: boolean
}

export function WhatsAppButton({
  message,
  variant = "default",
  size = "default",
  className,
  children,
  showIcon = true,
}: WhatsAppButtonProps) {
  const url = message
    ? `${SITE.whatsapp}?text=${encodeURIComponent(message)}`
    : SITE.whatsapp

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      nativeButton={false}
      render={
        <Link href={url} target="_blank" rel="noopener noreferrer" />
      }
    >
      {showIcon && <MessageCircle className="mr-2 h-4 w-4" aria-hidden="true" />}
      {children || "Get Free Quote"}
    </Button>
  )
}
