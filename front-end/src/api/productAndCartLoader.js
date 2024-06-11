import { BACK_END_URL } from '../constants/api'

export async function productAndCartLoader({ params: { productId } }) {
	const productUrl = fetch(`${BACK_END_URL}/products/${productId}`)
	const cartUrl = fetch(`${BACK_END_URL}/cart?_expand=product`)

	return Promise.all([productUrl, cartUrl])
		.then(ress => Promise.all(ress.map(res => res.json())))
		.then(products => {
			return products
		})
}
