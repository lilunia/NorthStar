import styles from './CartSummary.module.css'
import { Button } from '../Button/Button'
import CAR from '../../assets/shipping.svg'
export function CartSummary({ products }) {
	const shippingCost = 20
	const minSumForFreeShipping = 100

	let sum = 0
	products.forEach(product => {
		sum += product.priceUSD
	})

	const totalCost = sum > minSumForFreeShipping ? sum : sum + shippingCost

	return (
		<div className={styles.cartSummary}>
			<div className={styles.cartContainer}>
				<h3>Cart Totals</h3>
				<div className={styles.cartInfoLine}>
					<p>Subtotal:</p>
					<p>${sum}</p>
				</div>
				<div className={styles.cartInfoLine}>
					<p>Shipping costs:</p>
					<p>${sum > minSumForFreeShipping ? '0' : shippingCost}</p>
				</div>
				<div className={styles.cartInfoTotal}>
					<p>Total:</p>
					<p>${totalCost}</p>
				</div>
				<div className={styles.cartButton}>
					<Button fullWidth={true} border={true}>
						Proceed to checkout
					</Button>
				</div>

				<div className={styles.cartInfoDelivery}>
					<img src={CAR} />
					<p>Free shipping from ${minSumForFreeShipping}</p>
				</div>
			</div>
		</div>
	)
}
