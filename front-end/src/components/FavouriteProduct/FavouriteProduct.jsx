import styles from './FavouriteProduct.module.css'
import REMOVE from '../../assets/remove.svg'
import BAG from '../../assets/shopping-bag.svg'
import { useState } from 'react'
export function FavouriteProduct({ product }) {
	const [quantity, setQuantity] = useState(1)
	return (
		<tr className={styles.favouriteProduct}>
			<td className={styles.manageFavourite}>
				<img className={styles.removeProduct} src={REMOVE} />
				<p className={styles.addFavourite}>
					<img className={styles.bag} src={BAG} alt='' />
					Add to cart
				</p>
			</td>
			<td className={styles.photo}>
				<img src='' alt='' />
				<h5>{product.productName}</h5>
			</td>
			<td className={styles.price}>
				<p>${product.priceUSD}</p>
			</td>
			<td className={styles.quantity}>
				<input
					type='number'
					className={styles.quantityNumber}
					value={quantity}
					min={1}
					onChange={e => setQuantity(Number(e.target.value))}
				/>
			</td>
			<td className={styles.totalPrice}>
				<p>${product.priceUSD}</p>
			</td>
		</tr>
	)
}
