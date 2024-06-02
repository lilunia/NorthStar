import styles from './FavouriteProduct.module.css'
import REMOVE from '../../assets/remove.svg'
import BAG from '../../assets/shopping-bag.svg'
import { useState } from 'react'
export function FavouriteProduct({ product }) {
	const [quantity, setQuantity] = useState(1)
	return (
		<tr className={styles.favouriteProduct}>
			<td className={styles.photo}>
				<img src={product.photos[0]} alt='' />
				<h5>{product.productName}</h5>
			</td>
			<td className={styles.price}>
				<span>Price:</span>
				<p>${product.priceUSD}</p>
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
				<p>${product.priceUSD}</p>
			</td>
			<td className={styles.manageFavourite}>
				<p className={styles.addFavourite}>
					<img className={styles.bag} src={BAG} alt='' />
					<p>Add to cart</p>
				</p>
				<img className={styles.removeProduct} src={REMOVE} />
			</td>
		</tr>
	)
}