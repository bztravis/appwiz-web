"use client"

import styleBuilder from "@/utils/styleBuilder"
import styles from "./HatButton.module.scss"

type ButtonColor =
  | "primary"
  | "secondary"
  | "accent"
  | "destructive"
  | "constructive"

type ButtonProps = {
  size?: "sm" | "md" | "lg"
  color?: ButtonColor
  icon?: React.ReactNode
  iconSide?: "left" | "right"
  disabled?: boolean
  onClick: () => void
  children?: React.ReactNode
}

export default function Button({
  size = "md",
  color = "primary",
  icon,
  iconSide = "left",
  disabled = false,
  onClick,
  children,
}: ButtonProps) {
  const className = styleBuilder([
    styles.base,
    styles[size],
    styles[color],
    [styles.disabled, disabled],
  ])

  return (
    <button className={className} onClick={onClick}>
      {icon && iconSide === "left" && icon}

      {children}

      {icon && iconSide === "right" && icon}
    </button>
  )
}
