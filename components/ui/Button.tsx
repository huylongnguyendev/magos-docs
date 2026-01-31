import { cn } from "@/lib/cn"

const styleVar = {
  primary: "bg-fd-primary text-fd-primary-foreground hover:bg-fd-primary/90",
  secondary: "bg-secondary text-fd-primary hover:bg-secondary/80",
  outline: "border border-fd-primary text-fd-primary bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
  ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50"
}

const sizeVar = {
  default: "h-9 px-4 py-2 has-[>svg]:px-3",
  sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
  lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
  icon: "size-9",
  "icon-sm": "size-8",
  "icon-lg": "size-10",
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: keyof typeof styleVar
  size?: keyof typeof sizeVar
  className?: string
}

function Button({
  children,
  variant = "primary",
  size = "default",
  className,
  ...props
}: ButtonProps) {
  const styleVarValue = styleVar[variant]
  const sizeVarValue = sizeVar[size]

  return (
    <button
      className={cn("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", styleVarValue, sizeVarValue, className)}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button