import { CurrencySelector } from '../CurrencySelector/CurrencySelector'
import { Footer } from '../Footer/Footer'
import { GenderMenu } from '../GenderMenu/GenderMenu'
import { IconMenu } from '../IconMenu/IconMenu'
import { MainContent } from '../MainContent/MainContent'
import { MainMenu } from '../MainMenu/MainMenu'
import { TopBar } from '../TopBar/TopBar'
import { Logo } from '../Logo/Logo'

export function Layout({ children }) {
	return (
		<>
			<MainContent>
				<TopBar>
					<Logo />
					<MainMenu />
					<div>
						<CurrencySelector />
						<IconMenu />
					</div>
				</TopBar>
				<GenderMenu />
				{children}
			</MainContent>
			<Footer />
		</>
	)
}
