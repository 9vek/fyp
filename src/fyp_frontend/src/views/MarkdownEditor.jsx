import React from 'react'
import { Editor, rootCtx } from '@milkdown/core'
import { nord } from '@milkdown/theme-nord'
import { ReactEditor, useEditor } from '@milkdown/react'
import { commonmark } from '@milkdown/preset-commonmark'
import StandardLayout from '../layouts/StandardLayout'

const MarkdownEditor = () => {
  const { editor } = useEditor((root) =>
    Editor.make()
      .config((ctx) => {
        ctx.set(rootCtx, root)
      })
      .use(nord)
      .use(commonmark),
  );

  return (
    <StandardLayout>
      <div className='max-w-[21cm] mx-auto mt-8'>
        <ReactEditor editor={editor} />
      </div>

    </StandardLayout>
  )
};

export default MarkdownEditor