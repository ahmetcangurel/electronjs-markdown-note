import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export type ActionButtonProps = ComponentProps<'button'>

export const ActionButton = ({ children, className, ...props }: ActionButtonProps) => {
  return (
    <button
      {...props}
      className={twMerge(
        'px-2 py-1 rounded-md border border-zinc-400/50 transition-colors duration-100',
        className
      )}
    >
      {children}
    </button>
  )
}
