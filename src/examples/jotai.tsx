import type {ChangeEvent} from 'react'
import {atom, useAtom} from 'jotai'

const textAtom = atom('')

const charCountAtom = atom(get => {
  const text = get(textAtom)
  return text.length
})

function TextInput() {
  const [text, setText] = useAtom(textAtom)

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }
  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  )
}

function CharacterCount() {
  const count = useAtom(charCountAtom)
  return <>Character Count: {count}</>
}

function JotaiCharacterCounter() {
  return (
    <>
      <h1>Jotai</h1>
      <TextInput />
      <CharacterCount />
    </>
  )
}

export {JotaiCharacterCounter}
