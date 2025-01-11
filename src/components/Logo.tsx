import { useId } from 'react'
import LogoMain from '@/images/logo.png'
import LogoWhite from '@/images/logo-w.png'
import LogoMainLone from '@/images/logo-alone.png'
import LogoWhiteLone from '@/images/logo-w-alone.png'
import Image from 'next/image'

export function Logomark({
  invert = false,
  filled = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
}) {
  let id = useId()
  return invert ? (
    <Image
      src={LogoWhite}
      className="hidden h-[32px] sm:block"
      width={130}
      height={42}
      alt="Logo"
    />
  ) : (
    <Image
      src={LogoMain}
      className="hidden h-[32px] sm:block"
      width={130}
      height={42}
      alt="Logo"
    />
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
  fillOnHover?: boolean
}) {
  return invert ? (
    <Image
      className="h-8 sm:hidden"
      src={LogoWhiteLone}
      width={32}
      height={32}
      alt="Logo"
    />
  ) : (
    <Image
      className="h-8 sm:hidden"
      src={LogoMainLone}
      width={32}
      height={32}
      alt="Logo"
    />
  )
}
