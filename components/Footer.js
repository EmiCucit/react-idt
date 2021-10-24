import Image from 'next/image';
import Link from 'next/link'
import styles from '../styles/Home.module.css';

function Footer(){
    return(
        <footer className={styles.footer}>
            <span className={styles.logoFooter}>
                <Image src="/idtapp.png" alt="Logo" width={120} height={120} ></Image>
            </span>
        </footer>
    )
}

export default Footer;