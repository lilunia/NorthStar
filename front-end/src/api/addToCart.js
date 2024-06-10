import { BACK_END_URL } from '../constants/api'

export function addToCart({ params: { productId } }) {
	return fetch(`${BACK_END_URL}/cart`, {
		method: 'POST',
		body: JSON.stringify({
			productId: Number(productId),
		}),
		headers: {
			'Content-Type': 'application/json',
		},
	})
}

// export function addToCart({ params: { productId } }) {
// 	let url = `${BACK_END_URL}/cart`

// 	return fetch(url)
// 		.then(response => response.json())
// 		.then(cartItems => {
// 			cartItems.map(item => {
// 				if (item.productId !== Number(productId)) {
// 					console.log('you already have this item in your cart')
// 					return fetch(url, {
// 						method: 'POST',
// 						body: JSON.stringify({
// 							productId: Number(productId),
// 						}),
// 						headers: {
// 							'Content-Type': 'application/json',
// 						},
// 					})
// 				} else return null
// 			})
// 			return cartItems
// 		})
// }
