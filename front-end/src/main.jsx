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
import { SingleProduct } from './views/SingleProduct/SingleProduct'
import { productListLoader } from './api/productListLoader'
import { productAndCartLoader } from './api/productAndCartLoader'
import { addToFavourites } from './api/addToFavourites'
import { favouritesLoader } from './api/favouritesLoader'
import { deleteFromFavourites } from './api/deleteFromFavourites'
import { addToCart } from './api/addToCart'
import { cartLoader } from './api/cartLoader'
import { deleteFromCart } from './api/deleteFromCart'
import { newsAndBestsLoader } from './api/newsAndBestsLoader'

const router = createBrowserRouter([
	{
		path: '/add-to-favourites/:productId',
		action: addToFavourites,
	},
	{
		path: '/delete-from-favourites/:favouriteId',
		action: deleteFromFavourites,
	},
	{
		path: '/add-to-cart/:productId',
		action: addToCart,
	},
	{
		path: '/delete-from-cart/:productId',
		action: deleteFromCart,
	},
	{
		path: '',
		element: <Layout />,
		loader: cartLoader,
		children: [
			{
				path: '/cart',
				element: <Cart />,
				loader: cartLoader,
			},
			{
				path: '/favourites',
				element: <Favourites />,
				loader: favouritesLoader,
			},
			{
				path: '/:category?',
				element: <Home />,
				loader: newsAndBestsLoader,
			},
			{
				path: '/:category/:gender?/:subcategory?',
				element: <ProductsList />,
				loader: productListLoader,
			},
			{
				path: '/:category/:gender?/:subcategory/:productId',
				element: <SingleProduct />,
				loader: productAndCartLoader,
			},
		],
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>
)
