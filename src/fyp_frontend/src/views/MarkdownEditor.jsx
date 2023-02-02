import React from 'react'
import { Editor, rootCtx } from '@milkdown/core'
import { ReactEditor, useEditor } from '@milkdown/react'
import { nordLight } from "@milkdown/theme-nord"
import { history } from "@milkdown/plugin-history"
import { gfm } from "@milkdown/preset-gfm"
import { clipboard } from "@milkdown/plugin-clipboard"
import { cursor } from "@milkdown/plugin-cursor"
import { slash } from "@milkdown/plugin-slash"
import { emoji } from "@milkdown/plugin-emoji"
import { tooltip } from "@milkdown/plugin-tooltip"
import { upload } from "@milkdown/plugin-upload"
import { prism } from "@milkdown/plugin-prism"
import { indent, indentPlugin } from '@milkdown/plugin-indent'
import { listener, listenerCtx } from '@milkdown/plugin-listener'
import StandardLayout from '../layouts/StandardLayout'

import MainButton from '../components/MainButton'
import MailCover from '../components/MailCover'

import { mdiSend, mdiPencil } from "@mdi/js/mdi"

const MarkdownEditor = () => {
  const { editor } = useEditor((root) =>
    Editor.make()
      .config((ctx) => {
        ctx.set(rootCtx, root)
      })
      .use(nordLight)
      .use(gfm)
      .use(history)
      .use(listener)
      .use(clipboard)
      .use(cursor)
      .use(slash)
      .use(emoji)
      .use(tooltip)
      .use(upload)
      .use(prism)
      .use(
        indent.configure(indentPlugin, {
          type: 'space',
          size: 4,
        }),
      )
  );

  return (
    <StandardLayout>
      <div className='grid grid-cols-3 w-full'>
        <div>
            <div className='flex p-2 space-x-2'>
              <MainButton name="Create" icon={mdiPencil} onClick={() => {}} />
              <MainButton name="Send" icon={mdiSend} onClick={() => {}} />
            </div>
            <MailCover />
            <MailCover />
            <MailCover />
        </div>
        <div className='bg-white col-span-2 h-screen overflow-y-scroll'>
          <ReactEditor editor={editor} />
        </div>
      </div>
    </StandardLayout>
  )
};

export default MarkdownEditor