import styles from './CartProduct.module.css'
import REMOVE from '../../assets/remove.svg'

import { Price } from '../Price/Price'
import { useState } from 'react'
import { useFetcher } from 'react-router-dom'

export function CartProduct({ cartProduct }) {
	const product = cartProduct.product
	const [quantity, setQuantity] = useState(1)

	const price = <Price product={product} />
	const { Form } = useFetcher()

	return (
		<tr className={styles.favouriteProduct}>
			<td className={styles.photo}>
				<img src={product.photos[0]} alt='' />
				<h5>{product.productName}</h5>
			</td>
			<td className={styles.price}>
				<span>Price:</span>
				<p>{price}</p>
			</td>
			<td className={styles.quantity}>
				<span>Quantity:</span>
				<input
					type='number'
					className={styles.quantityNumber}
					value={quantity}
					min={1}
					onChange={e => setQuantity(Number(e.target.value))}
				/>
			</td>
			<td className={styles.totalPrice}>
				<span>Total price:</span>
				<p>{price}</p>
			</td>
			<td className={styles.manageFavourite}>
				<Form action={`/delete-from-cart/${cartProduct.id}`} method='DELETE'>
					<button>
						<img className={styles.removeProduct} src={REMOVE} />
					</button>
				</Form>
			</td>
		</tr>
	)
}
