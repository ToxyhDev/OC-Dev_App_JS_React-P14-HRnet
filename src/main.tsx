import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './global.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { Provider } from 'react-redux'
import Employees from './pages/Employees/index.tsx'
import Home from './pages/Home/index.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/employees',
        element: <Employees />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <Provider store={store}>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  // </Provider>
)
