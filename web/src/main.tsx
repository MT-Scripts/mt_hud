import React from 'react'
import ReactDOM from 'react-dom/client'
import { VisibilityProvider } from './providers/VisibilityProvider'
import { MantineProvider } from '@mantine/core'
import Player from './components/Player'
import Vehicle from './components/Vehicle'
import Compass from './components/Compass'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider  theme={{ colorScheme:'dark' }}>
      <VisibilityProvider componentName="Player">
        <Player/>
      </VisibilityProvider>
      <VisibilityProvider componentName="Vehicle">
        <Vehicle/>
      </VisibilityProvider>
      <VisibilityProvider componentName="Compass">
        <Compass/>
      </VisibilityProvider>
    </MantineProvider>
  </React.StrictMode>
)