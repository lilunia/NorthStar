import { CurrencySelector } from '../CurrencySelector/CurrencySelector'
import { Footer } from '../Footer/Footer'
import { GenderMenu } from '../GenderMenu/GenderMenu'
import { IconMenu } from '../IconMenu/IconMenu'
import { MainContent } from '../MainContent/MainContent'
import { MainMenu } from '../MainMenu/MainMenu'
import { TopBar } from '../TopBar/TopBar'
import { Logo } from '../Logo/Logo'
import { useState } from 'react'
import { MenuBar } from '../MenuBar/MenuBar'
import { useMediaQuery } from 'react-responsive'
import { MenuList } from '../MenuList/MenuList'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { Outlet } from 'react-router-dom'
import { CurrencyContext } from '../../contexts/CurrencyContext'
import { CURRENCIES } from '../../constants/currencies'
import { CartContext } from '../../contexts/CartContext'

export function Layout() {
	const [isShopHovering, setIsShopHovering] = useState(false)
	const [isMenuShowed, setIsMenuShowed] = useState(false)
	const [currency, setCurrency] = useState(localStorage['currentCurrency'] || CURRENCIES.EUR)

	const [cartProducts, setCartProducts] = useState(() => {
		return localStorage['cartProducts'] ? JSON.parse(localStorage['cartProducts']) : []
	})

	const isMobileOrTablet = useMediaQuery({ maxWidth: 768 })

	isMenuShowed ? disableBodyScroll(document) : enableBodyScroll(document)

	function addProductToCart(product) {
		setCartProducts(prevCartProducts => {
			const newState = [...prevCartProducts, product]
			localStorage['cartProducts'] = JSON.stringify(newState)
			return newState
		})
	}

	return (
		<>
			<CartContext.Provider value={[cartProducts, addProductToCart]}>
				<CurrencyContext.Provider value={[currency, setCurrency]}>
					<MainContent>
						<TopBar>
							<Logo />
							{isMobileOrTablet ? (
								''
							) : (
								<MainMenu setIsShopHovering={setIsShopHovering} />
							)}

							<div>
								<CurrencySelector />
								<IconMenu />
								{isMobileOrTablet ? (
									<MenuBar setIsMenuShowed={setIsMenuShowed} />
								) : (
									''
								)}
							</div>
						</TopBar>
						{isMenuShowed ? <MenuList setIsMenuShowed={setIsMenuShowed} /> : ''}
						{isShopHovering ? (
							<GenderMenu setIsShopHovering={setIsShopHovering} />
						) : (
							''
						)}
						<Outlet />
					</MainContent>
					<Footer />
				</CurrencyContext.Provider>
			</CartContext.Provider>
		</>
	)
}
