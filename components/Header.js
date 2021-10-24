import Image from 'next/image';
import Link from 'next/link'
import styles from '../styles/Home.module.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.topBar}>
                <Link href="/" className={styles.logo}>
                    <Image src="/idtapp.png" alt="Logo" width={60} height={60} ></Image>
                </Link>
                <form action="/" method="GET" className={styles.formularioBusqueda}>
                    <input type="text" className={styles.barraBusqueda} placeholder="Buscar " />
                    <button className={styles.lupaBusqueda}><FontAwesomeIcon icon={faSearch}/></button>
                </form>
                <p className={styles.burgerMenu}><FontAwesomeIcon icon={faBars}/></p>
                <p className={styles.carrito}><FontAwesomeIcon icon={faShoppingCart}/></p>
            </div>
        </header>

    )
}

export default Header;