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