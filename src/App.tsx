import {Outlet, ReactLocation, Router} from '@tanstack/react-location'

import {Home} from './home'
import {RecoilCharacterCounter} from './examples/recoil'

const location = new ReactLocation()

const routes = [
  {path: '/', element: <Home />},
  {path: 'recoil', element: <RecoilCharacterCounter />},
]

function App() {
  return (
    <Router location={location} routes={routes}>
      <Outlet />
    </Router>
  )
}

export default App
