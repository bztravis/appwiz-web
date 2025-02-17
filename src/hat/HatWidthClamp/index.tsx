type HatWidthClampProps = {
  sizeRem: string
  children?: React.ReactNode
}

export function HatWidthClamp({ sizeRem, children }: HatWidthClampProps) {
  return <div style={{ maxWidth: `${sizeRem}` }}>{children}</div>
}
