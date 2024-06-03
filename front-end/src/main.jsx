import './styles/theme.css'
import './styles/globals.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Layout } from './components/Layout/Layout'
import { Cart } from './views/Cart/Cart'
import { Favourites } from './views/Favourites/Favourites'
import { Home } from './views/Home/Home'
import { ProductsList } from './views/ProductsList/ProductsList'
import { productListLoader } from './api/productListLoader'

const router = createBrowserRouter([
	{
		path: '',
		element: <Layout />,
		children: [
			{
				path: '/cart',
				element: <Cart />,
			},
			{
				path: '/favourites',
				element: <Favourites />,
			},
			{
				path: '/:category?',
				element: <Home />,
			},
			{
				path: '/:category/:gender?/:subcategory?',
				element: <ProductsList />,
				loader: productListLoader,
			},
		],
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>
)
