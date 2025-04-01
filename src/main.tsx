import '@/theme/index.scss'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import { App } from '@/App.tsx'
import { NotFound } from '@/layout/not-found/NotFound.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={ <App /> } />
      <Route path='/*' element={ <NotFound /> } />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
