import Image from 'next/image';
import Link from 'next/link'
import styles from '../styles/Home.module.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'


function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.maxWidth}>
                <div className={styles.topBar}>
                    <span className={styles.logo}>
                        <Link href="/" >
                            <Image src="/idtapp.png" alt="Logo" width={60} height={60} ></Image>
                        </Link>
                    </span>
                    <form action="/" method="GET" className={styles.formularioBusqueda}>
                        <input type="text" className={styles.barraBusqueda} placeholder="Buscar " />
                        <button className={styles.lupaBusqueda}><FontAwesomeIcon icon={faSearch}/></button>
                    </form>
                    <p className={styles.burgerMenu} key="burger"><FontAwesomeIcon icon={faBars}/></p>
                    <Link href="/profile">
                        <p className={styles.carrito} key="perfil"><FontAwesomeIcon icon={faUserCircle}/></p>
                    </Link>
                    <Link href="/cart">
                        <p className={styles.carrito} key="carrito"><FontAwesomeIcon icon={faShoppingCart}/></p>
                    </Link>
                </div>
            </div>
        </header>

    )
}

export default Header;