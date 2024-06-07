import { CartProduct } from '../CartProduct/CartProduct'
import styles from '../CartProductList/CartProductList.module.css'

export function CartProductList({ cartProducts }) {
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
					{cartProducts.map(cartProduct => {
						return <CartProduct key={cartProduct.id} cartProduct={cartProduct} />
					})}
				</div>
			</div>
		</>
	)
}
