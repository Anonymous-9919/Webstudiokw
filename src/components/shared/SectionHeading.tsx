import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  badge?: string
  title: string
  description?: string
  className?: string
  align?: "left" | "center"
}

export function SectionHeading({
  badge,
  title,
  description,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 space-y-4",
        align === "center" && "text-center",
        align === "left" && "text-left",
        className
      )}
    >
      {badge && (
        <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          {badge}
        </span>
      )}
      <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  )
}
