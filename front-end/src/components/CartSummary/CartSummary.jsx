import styles from './CartSummary.module.css'
import { Button } from '../Button/Button'
import CAR from '../../assets/shipping.svg'
import { useContext } from 'react'
import { CurrencyContext } from '../../contexts/CurrencyContext'
import { CURRENCIES, CURRENCY_SIGN } from '../../constants/currencies'

export function CartSummary({ products }) {
	const [currency] = useContext(CurrencyContext)

	const shippingCosts = {
		[CURRENCIES.USD]: 15,
		[CURRENCIES.EUR]: 10,
	}

	const minSumsForFreeShipping = {
		[CURRENCIES.USD]: 150,
		[CURRENCIES.EUR]: 100,
	}

	const currencySign = CURRENCY_SIGN[currency]
	const shippingCost = shippingCosts[currency]
	const minSumForFreeShipping = minSumsForFreeShipping[currency]

	let sum = 0
	products.forEach(product => {
		sum += currency === CURRENCIES.USD ? product.priceUSD : product.pricePLN
	})

	const totalCost = sum > minSumForFreeShipping ? sum : sum + shippingCost

	return (
		<div className={styles.cartSummary}>
			<div className={styles.cartContainer}>
				<h3>Cart Totals</h3>
				<div className={styles.cartInfoLine}>
					<p>Subtotal:</p>
					<p>
						{sum}
						{currencySign}
					</p>
				</div>
				<div className={styles.cartInfoLine}>
					<p>Shipping costs:</p>
					<p>
						{sum > minSumForFreeShipping ? '0' : shippingCost}
						{currencySign}
					</p>
				</div>
				<div className={styles.cartInfoTotal}>
					<p>Total:</p>
					<p>
						{totalCost}
						{currencySign}
					</p>
				</div>
				<div className={styles.cartButton}>
					<Button fullWidth={true} border={true}>
						Proceed to checkout
					</Button>
				</div>

				<div className={styles.cartInfoDelivery}>
					<img src={CAR} />
					<p>Free shipping from {minSumForFreeShipping}{currencySign}</p>
				</div>
			</div>
		</div>
	)
}
