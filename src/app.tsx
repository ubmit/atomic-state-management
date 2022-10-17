import {Outlet, ReactLocation, Router} from '@tanstack/react-location'

import {Home, JotaiCharacterCounter, RecoilCharacterCounter} from './pages'

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

export {App}
