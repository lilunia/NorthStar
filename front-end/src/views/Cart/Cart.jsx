import { useContext } from 'react'
import { CartProductList } from '../../components/CartProductList/CartProductList'
import { CartSummary } from '../../components/CartSummary/CartSummary'
import { CenteredContent } from '../../components/CenteredContent/CenteredContent'
import { CartContext } from '../../contexts/CartContext'

export function Cart() {
	
	const [cartProducts] = useContext(CartContext)

	return (
		<CenteredContent>
			<CartProductList products={cartProducts} />
			<CartSummary products={cartProducts} />
		</CenteredContent>
	)
}
