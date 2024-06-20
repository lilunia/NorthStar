import { useEffect } from 'react'
import { CartProductList } from '../../components/CartProductList/CartProductList'
import { CartSummary } from '../../components/CartSummary/CartSummary'
import { CenteredContent } from '../../components/CenteredContent/CenteredContent'
import { useLoaderData } from 'react-router-dom'

export function Cart() {
	const cartProducts = useLoaderData()

	useEffect(() => {}, [cartProducts])

	return (
		<CenteredContent>
			<CartProductList cartProducts={cartProducts} />
			<CartSummary cartProducts={cartProducts} />
		</CenteredContent>
	)
}
