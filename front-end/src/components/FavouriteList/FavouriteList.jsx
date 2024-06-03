import styles from './FavouriteList.module.css'
import { CenteredContent } from '../CenteredContent/CenteredContent'
import { FavouriteProduct } from '../FavouriteProduct/FavouriteProduct'

export function FavouriteList({ products }) {
	return (
		<CenteredContent>
			<h3>Favourites</h3>
			<div className={styles.favouriteList}>
				<tr>
					<th>Product</th>
					<th>Price</th>
					<th>Quantity</th>
					<th>Total</th>
					<th></th>
				</tr>

				<div className={styles.favouriteProducts}>
					{products.map(product => {
						return <FavouriteProduct key={product.id} product={product} />
					})}
				</div>
			</div>
		</CenteredContent>
	)
}
