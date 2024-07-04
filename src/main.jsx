/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import './index.css'
import NewPost from './component/NewPost.jsx'
import RootLayout from './routes/RootLayout.jsx'

const router = createBrowserRouter([
  { path: '/' , element: <RootLayout/>, children: [
    { path: '/' , element: <App/> },
    { path: '/create-post' , element: <NewPost/>}, 
  ]},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
