import styles from './FavouriteList.module.css'
import { CenteredContent } from '../CenteredContent/CenteredContent'
import { FavouriteProduct } from '../FavouriteProduct/FavouriteProduct'

export function FavouriteList({ favourites }) {
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
					{favourites.map(favourite => {
						return <FavouriteProduct key={favourite.id} favourite={favourite} />
					})}
				</div>
			</div>
		</CenteredContent>
	)
}
