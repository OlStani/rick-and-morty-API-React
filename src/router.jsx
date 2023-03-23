import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'

const Main = lazy(() => import('./components/pages/mainPage/MainPage'))
const Character = lazy(() => import('./components/pages/character/Character'))

export const router = createBrowserRouter([
    { path: '/', element: <Main /> },
    { path: '/character/:id', element: <Character /> },
])
