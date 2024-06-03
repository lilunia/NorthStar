import styles from './Product.module.css'
import { Link } from 'react-router-dom'
import { ENDPOINT_TO_PATH_MAPING_GENDER, ENDPOINT_TO_PATH_MAPING_SUBCATEGORY } from '../../constants/api'

export function Product({ product }) {
	return (
		<Link
			to={`/shop/${ENDPOINT_TO_PATH_MAPING_GENDER[product.gender]}/${
				ENDPOINT_TO_PATH_MAPING_SUBCATEGORY[product.subcategory]
			}/${product.id}`}
			className={styles.product}
		>
			<img src={product.photos[0]} />
			<h4>{product.productName}</h4>
			<p>${product.pricePLN}</p>
			<div className={styles.heart}></div>
		</Link>
	)
}
