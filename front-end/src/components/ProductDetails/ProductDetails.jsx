import styles from './ProductDetails.module.css'
import { Button } from '../Button/Button'
import { ProductDescription } from '../ProductDescription/ProductDescription'
import { useFetcher } from 'react-router-dom'
import { useState } from 'react'
import { Price } from '../Price/Price'
import REFRESH_IMG from '../../assets/return.svg'
import { editQuantity } from '../../api/editQuantity'

export function ProductDetails({ product, currentCart, currentFavs }) {
	const [selectedSize, setSelectedSize] = useState(null)
	const [errorText, setErrorText] = useState('Please select a size')
	const [isOnFavs, setIsOnFavs] = useState(false)
	const [showPopup, setShowPopup] = useState(false)
	const [popupText, setPopupText] = useState('')
	const [quantity, setQuantity] = useState(1)
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

	const checkACart = (id, size) => {
		setShowPopup(true)
		setPopupText('Item added to cart!')
		currentCart.map(cartItem => {
			if (cartItem.productId === id && cartItem.size === size) {
				setSelectedSize(null)
				setQuantity(cartItem.quantity++)
				editQuantity(cartItem, quantity)
			}
		})
	}
	const checkAFavs = id => {
		currentFavs.map(favItem => {
			if (favItem.productId === id) {
				setIsOnFavs(true)
				setShowPopup(false)
			} else {
				setIsOnFavs(false)
				setShowPopup(true)
				setPopupText('Item added to favourites list!')
			}
		})
	}

	return (
		<>
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
								setErrorText('Select a size')
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
						action={
							selectedSize !== null
								? `/add-to-cart/${product.id}/${sizeArray[selectedSize]}/${quantity}`
								: ''
						}
						onClick={() => {
							checkACart(product.id, sizeArray[selectedSize])
							setErrorText('')
						}}
					>
						<Button disabled={selectedSize === null ? true : false} border={true}>
							Add to cart
						</Button>
					</Form>
					<Form
						onClick={e => {
							e.stopPropagation()
							checkAFavs(product.id)
						}}
						method='POST'
						action={
							isOnFavs === false
								? `/add-to-favourites/${product.id}/${sizeArray[selectedSize]}`
								: ''
						}
					>
						<button disabled={isOnFavs} className={styles.heart}></button>
					</Form>
				</div>
				<ProductDescription infos={descriptionContent} />
			</div>
			{showPopup && (
				<div className={styles.popup} onClick={() => setShowPopup(prev => !prev)}>
					<div className={styles.popupInfo}>
						<p>{popupText}</p>
					</div>
				</div>
			)}
		</>
	)
}
