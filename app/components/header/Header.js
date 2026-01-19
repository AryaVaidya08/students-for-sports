import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/logo_with_name.avif"
            alt="Students For Sports"
            width={200}
            height={60}
            priority
            className={styles.logoImage}
          />
        </Link>
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/mission" className={styles.navLink}>Our Mission</Link>
          <Link href="/meet-the-team" className={styles.navLink}>Meet the Team</Link>
          <Link href="/partners" className={styles.navLink}>Partners</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
