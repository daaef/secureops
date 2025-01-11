import clsx from 'clsx'

function Office({
  name,
  children,
  invert = false,
}: {
  name: string
  children: React.ReactNode
  invert?: boolean
}) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-primary-300' : 'text-primary-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-primary-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="US" invert={invert}>
          16192 Coastal Highway, Lewes,
          <br />
          Delaware 19958, United States of America.
        </Office>
      </li>
      <li>
        <Office name="Nigeria" invert={invert}>
          10B Tinubu Road,
          <br />
          Ilupeju, Lagos, Nigeria
        </Office>
      </li>
    </ul>
  )
}
