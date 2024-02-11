import { ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export const RootLayout = ({
  children,
  className,
  ...props
}: ComponentProps<'main'>): JSX.Element => {
  return (
    <main className={twMerge('flex flex-row h-screen')} {...props}>
      {children}
    </main>
  )
}

export const Sidebar = ({
  className,
  children,
  ...props
}: ComponentProps<'aside'>): JSX.Element => {
  return (
    <aside
      className={twMerge(
        'mt-[35px] h-[100vh+10px] bg-zinc-700 overflow-auto',
        className,
        'sm:w-[180px] md:w-[230px] lg:w-[250px] xl:w-[300px]'
      )}
      {...props}
    >
      {children}
    </aside>
  )
}

export const Content = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ children, className, ...props }, ref) => (
    <div ref={ref} className={twMerge('flex-1 mt-[35px] overflow-auto', className)} {...props}>
      {children}
    </div>
  )
)

Content.displayName = 'Content'
