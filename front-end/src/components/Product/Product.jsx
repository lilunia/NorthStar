import styles from './Product.module.css'
import { Link } from 'react-router-dom'
export function Product({ product }) {
	return (
		<Link className={styles.product}>
			<img src={product.photos[0]} />
			<h4>{product.productName}</h4>
			<p>${product.pricePLN}</p>
			<div className={styles.heart}></div>
		</Link>
	)
}
