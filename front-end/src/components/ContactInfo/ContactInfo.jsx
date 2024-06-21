import { CenteredContent } from '../CenteredContent/CenteredContent'
import styles from '../ContactInfo/ContactInfo.module.css'

export function ContactInfo() {
	return (
		<CenteredContent>
			<h3>Contact us</h3>
			<div className={styles.description}>
				<p>We would love to hear from you.</p>
				<p>
					If you have any query or any type of suggestion, you can contact us here. We
					would love to hear from you.
				</p>
			</div>
			<div className={styles.detailsInfo}>
				<div className={styles.place}>
					<p className={styles.contactHeader}>Visit us</p>
					<p>Bergen, Norway</p>
					<p>Mon-Fri 11:00 a.m - 6:00 p.m</p>
					<p>Phone: +4703989897</p>
				</div>
				<div className={styles.email}>
					<p className={styles.contactHeader}>Get In Touch</p>
					<p>You can get in touch with us on this provided email. </p>
					<p>Email: contact@northstar.com</p>
				</div>
			</div>
		</CenteredContent>
	)
}
