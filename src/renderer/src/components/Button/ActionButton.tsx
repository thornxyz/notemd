import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export type ActionButtonProps = ComponentProps<'button'>

export const ActionButton = ({ className, children, ...props }: ActionButtonProps): JSX.Element => {
  return (
    <button
      className={twMerge(
        'px-3 py-3 rounded-md border border-zinc-400/50 hover:bg-zinc-500/50 transition-colors duration-100',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
