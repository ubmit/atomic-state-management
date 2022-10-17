import type {MouseEvent} from 'react'
import {useNavigate} from '@tanstack/react-location'

function Home() {
  const navigate = useNavigate()

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    // @ts-ignore
    const text = e.target.textContent
    const path = text.toLowerCase()
    navigate({to: path})
  }

  return (
    <div>
      <button onClick={onClick}>Recoil</button>
      <button onClick={onClick}>Jotai</button>
    </div>
  )
}

export {Home}
