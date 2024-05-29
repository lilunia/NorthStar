import styles from './Footer.module.css'
import img_masterCard from '../../icons/mastercard.jpg'
import img_payPal from '../../icons/payPal.jpg'
import img_visa from '../../icons/visa.jpg'
import img_visaElectron from '../../icons/visaElectron.jpg'
import ARROW from '../../assets/arrow.svg'
import { CenteredContent } from '../CenteredContent/CenteredContent'

export function Footer() {
	return (
		<div className={styles.footer}>
			<CenteredContent>
				<div className={styles.footerMainInfo}>
					<div className={styles.footerColumn}>
						<h5>Company info</h5>
						<p>About Us</p>
						<p>Latest Posts</p>
						<p>Contact Us</p>
						<p>Shop</p>
					</div>
					<div className={styles.footerColumn}>
						<h5>Help links</h5>
						<p>Tracking</p>
						<p>Order Status</p>
						<p>Delivery</p>
						<p>Shipping Info</p>
						<p>FAQ</p>
					</div>
					<div className={styles.footerColumn}>
						<h5>Useful links</h5>
						<p>Special Offers</p>
						<p>Gift Cards</p>
						<p>Advetising</p>
						<p>Terms of Use</p>
					</div>
					<div className={styles.footerColumn}>
						<h5>Get in the know</h5>
						<div>
							<input
								className={styles.footerInput}
								type='text'
								placeholder='Enter email'
							/>
							<img src={ARROW} alt='' />
						</div>
					</div>
				</div>
			</CenteredContent>
			<hr />
			<div className={styles.footerAddInfo}>
				<div className={styles.footerPolicy}>
					<p>© 2024 NorthStar eCommerce</p>
					<p>Privacy Policy Terms & Conditions</p>
				</div>
				<div className={styles.footerCards}>
					<img src={img_masterCard} />
					<img src={img_visa} />
					<img src={img_visaElectron} />
					<img src={img_payPal} />
				</div>
			</div>
		</div>
	)
}
