import {Outlet, ReactLocation, Router} from '@tanstack/react-location'

import {Home} from './home'
import {JotaiCharacterCounter, RecoilCharacterCounter} from './examples'

const location = new ReactLocation()

const routes = [
  {path: '/', element: <Home />},
  {path: 'recoil', element: <RecoilCharacterCounter />},
  {path: 'jotai', element: <JotaiCharacterCounter />},
]

function App() {
  return (
    <Router location={location} routes={routes}>
      <Outlet />
    </Router>
  )
}

export default App
