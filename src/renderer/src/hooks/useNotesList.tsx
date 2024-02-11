import { notesAtom, selectedNoteIndexAtom } from '@renderer/store'
import { NoteInfo } from '@shared/models'
import { useAtom, useAtomValue } from 'jotai'

export const useNotesList = ({
  onSelect
}: {
  onSelect?: (() => void) | undefined
}): {
  notes: NoteInfo[] | undefined
  selectedNoteIndex: number | null
  handleNoteSelect: (index: number) => () => Promise<void>
} => {
  const notes = useAtomValue(notesAtom)
  const [selectedNoteIndex, setSelectedNoteIndex] = useAtom(selectedNoteIndexAtom)

  const handleNoteSelect = (index: number) => async () => {
    setSelectedNoteIndex(index)

    if (onSelect) {
      onSelect()
    }
  }

  return {
    notes,
    selectedNoteIndex,
    handleNoteSelect
  }
}
