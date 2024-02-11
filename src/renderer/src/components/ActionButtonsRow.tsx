import { DeleteNoteButton, NewNoteButton } from '@/components'
import { ComponentProps } from 'react'

export const ActionButtonsRow = ({ ...props }: ComponentProps<'div'>): JSX.Element => {
  return (
    <div {...props} className="flex justify-evenly items-center">
      <NewNoteButton />
      <DeleteNoteButton />
    </div>
  )
}
