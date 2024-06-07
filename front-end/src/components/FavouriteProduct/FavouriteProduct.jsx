import styles from './FavouriteProduct.module.css'
import REMOVE from '../../assets/remove.svg'
import BAG from '../../assets/shopping-bag.svg'
import { useFetcher } from 'react-router-dom'
import { Price } from '../Price/Price'
import { useState } from 'react'

export function FavouriteProduct({ favourite }) {
	const product = favourite.product
	const [quantity, setQuantity] = useState(1)
	const { Form } = useFetcher()


	const price = <Price product={product} />

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
				<Form action={`/add-to-cart/${product.id}`} method='POST'>
					<button className={styles.addFavourite}>
						<img className={styles.bag} src={BAG} alt='' />
						<p>Add to cart</p>
					</button>
				</Form>
				<Form action={`/delete-from-favourites/${favourite.id}`} method='DELETE'>
					<button>
						<img className={styles.removeProduct} src={REMOVE} />
					</button>
				</Form>
			</td>
		</tr>
	)
}
