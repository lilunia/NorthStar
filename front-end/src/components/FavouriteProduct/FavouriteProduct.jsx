import styles from './FavouriteProduct.module.css'
import REMOVE from '../../assets/remove.svg'
import BAG from '../../assets/shopping-bag.svg'
import { Link, useFetcher } from 'react-router-dom'
import { Price } from '../Price/Price'
import { ENDPOINT_TO_PATH_MAPING_GENDER } from '../../constants/api'

export function FavouriteProduct({ favourite }) {
	const product = favourite.product

	const { Form } = useFetcher()

	const price = <Price product={product} />

	return (
		<tr className={styles.favouriteProduct}>
			<Link
				to={`/shop/${ENDPOINT_TO_PATH_MAPING_GENDER[product.gender]}/${product.subcategory}/${
					product.id
				}`}
				className={styles.photo}
			>
				<td className={styles.photo}>
					<img src={product.photos[0]} alt='' />
					<h5>{product.productName}</h5>
				</td>
			</Link>
			<td className={styles.price}>
				<span>Price:</span>
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
