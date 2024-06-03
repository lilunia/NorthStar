import { BACK_END_URL } from '../constants/api'

export function ProductLoader({ params: { productId } }) {
	return fetch(`${BACK_END_URL}/products/${productId}`)
}
