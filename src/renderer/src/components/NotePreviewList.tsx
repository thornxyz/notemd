import { noteMocks } from '@/store/mocks'
import { ComponentProps } from 'react'

export const NotePreviewList = ({ ...props }: ComponentProps<'ul'>) => {
  return (
    <ul {...props}>
      {noteMocks.map((note) => (
        <li key={note.title}>{note.title}</li>
      ))}
    </ul>
  )
}
