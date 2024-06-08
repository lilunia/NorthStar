import styles from './Product.module.css'
import { Link, useFetcher } from 'react-router-dom'
import { ENDPOINT_TO_PATH_MAPING_GENDER} from '../../constants/api'
import { Price } from '../Price/Price'

export function Product({ product }) {
	const { Form } = useFetcher()

	return (
		<Link
			to={`/shop/${ENDPOINT_TO_PATH_MAPING_GENDER[product.gender]}/${product.subcategory}/${
				product.id
			}`}
			className={styles.product}
		>
			<div className={styles.photoContainer}>
				<img src={product.photos[0]} />
			</div>
			<h4>{product.productName}</h4>
			<p>
				<Price product={product} />
			</p>
			<Form
				onClick={e => {
					e.stopPropagation()
				}}
				method='POST'
				action={`/add-to-favourites/${product.id}`}
			>
				<button>
					<div className={styles.heart}></div>
				</button>
			</Form>
		</Link>
	)
}
