type HatWidthClampProps = {
  sizeRem: string
  children?: React.ReactNode
}

export function HatWidthClamp({ sizeRem, children }: HatWidthClampProps) {
  return <div style={{ width: '100%', maxWidth: `${sizeRem}` }}>{children}</div>
}
