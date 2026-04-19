import type { ReactElement } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { About } from '../../pages/About'
import { Contact } from '../../pages/Contact'
import { Home } from '../../pages/Home'
import { NotFound } from '../../pages/NotFound'
import { Services } from '../../pages/Services'

type AppRoutesProps = {
  layout: ReactElement
}

export function AppRoutes({ layout }: AppRoutesProps) {
  return (
    <Routes>
      <Route element={layout}>
        <Route index element={<Home />} />
        <Route path="home" element={<Navigate replace to="/" />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
