import {
  ActionButtonsRow,
  Content,
  DraggableTopBar,
  FloatingNoteTitle,
  NotePreviewList,
  RootLayout,
  Sidebar
} from '@/components'

import React, { useRef } from 'react'
import { MarkdownEditor } from './components/MarkdownEditor'

const App: React.FC = () => {
  const contentContainerRef = useRef<HTMLDivElement>(null)

  const resetScroll = (): void => {
    contentContainerRef.current?.scrollTo(0, 0)
  }

  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <Sidebar className="p-2">
          <ActionButtonsRow className="flex justify-between mt-1" />
          <NotePreviewList className="mt-3 space-y-1" onSelect={resetScroll} />
        </Sidebar>
        <Content ref={contentContainerRef} className="border-l bg-zinc-800 border-l-white/20">
          <FloatingNoteTitle className="pt-1" />
          <MarkdownEditor />
        </Content>
      </RootLayout>
    </>
  )
}

export default App
