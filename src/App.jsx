import './styles/App.css'
import { RouterProvider } from 'react-router'
import { router } from './router'
import { Suspense } from 'react'
import Loader from './components/loader/Loader'

function App() {
    return (
        <div className='App'>
            <Suspense fallback={<Loader />}>
                <RouterProvider router={router} />
            </Suspense>
        </div>
    )
}

export default App
