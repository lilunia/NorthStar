import './styles/theme.css'
import './styles/globals.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { ProductsList } from './views/ProductsList/ProductsList'
import { SingleProduct } from './views/SingleProduct/SingleProduct'
// import { Home } from './views/Home/Home'

const router = createBrowserRouter([
	{
		path: '/',
		element: <SingleProduct/>,
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>
)
