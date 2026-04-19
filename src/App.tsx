import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './app/routes/AppRoutes'
import { AppShell } from './components/templates/AppShell'

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes layout={<AppShell />} />
    </BrowserRouter>
  )
}
