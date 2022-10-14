import type {ChangeEvent} from 'react'
import {
  atom,
  RecoilRoot,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil'

const textState = atom({
  key: 'textState',
  default: '',
})

const charCountState = selector({
  key: 'charCountState',
  get: ({get}) => {
    const text = get(textState)
    return text.length
  },
})

function TextInput() {
  const [text, setText] = useRecoilState(textState)

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
  const count = useRecoilValue(charCountState)
  return <>Character Count: {count}</>
}

function RecoilCharacterCounter() {
  return (
    <RecoilRoot>
      <TextInput />
      <CharacterCount />
    </RecoilRoot>
  )
}

export {RecoilCharacterCounter}
