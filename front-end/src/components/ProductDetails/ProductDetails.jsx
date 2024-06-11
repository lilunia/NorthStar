import styles from './ProductDetails.module.css'
import { Button } from '../Button/Button'
import { ProductDescription } from '../ProductDescription/ProductDescription'
import { useFetcher } from 'react-router-dom'
import { useContext, useState } from 'react'
import { Price } from '../Price/Price'
import REFRESH_IMG from '../../assets/return.svg'
import { CartContext } from '../../contexts/CartContext'

export function ProductDetails({ product, currentCart }) {
	const [selectedSize, setSelectedSize] = useState(null)
	const [errorText, setErrorText] = useState('Please select a size')
	const [chosenSize, setChosenSize] = useContext(CartContext)
	const { Form } = useFetcher()
	const price = <Price product={product} />
	const sizeArray = ['XS', 'S', 'M', 'L', 'XL', 'XXL']
	const descriptionContent = [
		{
			title: 'Description',
			content: product.description,
		},
		{
			title: 'Material',
			content: product.material,
		},
		{ title: 'Care instructions', content: product.maintenanceInfo },
	]

	const checkACart = id => {
		currentCart.map(cartItem => {
			if (cartItem.productId === id) {
				setSelectedSize(null)
				setErrorText('You already have this item in your cart')
			}
		})
		console.log(product)
	}

	return (
		<div className={styles.details}>
			<h3 className={styles.productName}>{product.productName}</h3>
			<p className={styles.productBrand}>{product.brand}</p>
			<p className={styles.productPrice}>{price}</p>
			<div>
				<p className={styles.size}>Select size:</p>
				<div className={styles.sizeList}>
					{sizeArray.map((size, index) => {
						return (
							<p
								onClick={() => {
									setSelectedSize(index)
									setChosenSize(size)
								}}
								key={size}
								className={`${styles.sizeNumber} ${
									selectedSize === index
										? styles.selectedSize
										: ''
								}`}
							>
								{size}
							</p>
						)
					})}
					<button
						className={styles.clear}
						onClick={() => {
							setSelectedSize(null)
							setErrorText('')
							product.size = `${chosenSize}`
						}}
					>
						<img src={REFRESH_IMG} alt='' />
					</button>
				</div>

				{selectedSize === null && <p className={styles.error}>{errorText}</p>}
			</div>
			<div className={styles.buttons}>
				<Form
					method='POST'
					action={selectedSize !== null ? `/add-to-cart/${product.id}` : ''}
					onClick={() => {
						checkACart(product.id)
					}}
				>
					<Button disabled={selectedSize === null ? true : false} border={true}>
						Add to cart
					</Button>
				</Form>
				<Form
					onClick={e => {
						e.stopPropagation()
					}}
					method='POST'
					action={`/add-to-favourites/${product.id}`}
				>
					<button className={styles.heart}></button>
				</Form>
			</div>
			<ProductDescription infos={descriptionContent} />
		</div>
	)
}
