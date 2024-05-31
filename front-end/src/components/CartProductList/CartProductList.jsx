import { CartProduct } from '../CartProduct/CartProduct'
import styles from '../CartProductList/CartProductList.module.css'

export function CartProductList({ products }) {
	return (
		<>
			<h3>Cart</h3>
			<div className={styles.favouriteList}>
				<tr>
					<th className={styles.productName}>Product</th>
					<th>Price</th>
					<th>Quantity</th>
					<th>Total</th>
					<th></th>
				</tr>

				<div className={styles.favouriteProducts}>
					{products.map(product => {
						return <CartProduct key={product.id} product={product} />
					})}
				</div>
			</div>
		</>
	)
}
