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

export function Layout({ children }) {
	const [isShopHovering, setIsShopHovering] = useState(false)
	const [isMenuShowed, setIsMenuShowed] = useState(false)
	const isMobileOrTablet = useMediaQuery({ maxWidth: 768 })

	return (
		<>
			<MainContent>
				<TopBar>
					<Logo />
					{isMobileOrTablet ? (
						''
					) : (
						<MainMenu
							isShopHovering={isShopHovering}
							setIsShopHovering={setIsShopHovering}
						/>
					)}

					<div>
						<CurrencySelector />
						<IconMenu />
						{isMobileOrTablet ? <MenuBar setIsMenuShowed={setIsMenuShowed} /> : ''}
					</div>
				</TopBar>
				{isMenuShowed ? <MenuList /> : ''}
				{isShopHovering ? <GenderMenu setIsShopHovering={setIsShopHovering} /> : ''}
				{children}
			</MainContent>
			<Footer />
		</>
	)
}
