import Image from 'next/image';
import Link from 'next/link'
import styles from '../styles/Home.module.css';


function Footer(){
    return(
        <footer className={styles.footer}>
            <Link href="/" passHref>    
                <a className={styles.logoFooter}>
                        <Image src="/idtapp.png" alt="Logo" width={120} height={120} ></Image>
                </a>
            </Link>
        </footer>
    )
}

export default Footer;