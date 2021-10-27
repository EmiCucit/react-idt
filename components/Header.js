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
                        <Link href="/" passHref>
                            <a>
                                <Image src="/idtapp.png" alt="Logo" width={60} height={60} ></Image>
                            </a>
                        </Link>
                    </span>
                    <form action="/" method="GET" className={styles.formularioBusqueda}>
                        <input type="text" className={styles.barraBusqueda} placeholder="Buscar " />
                        <button className={styles.lupaBusqueda}><FontAwesomeIcon icon={faSearch}/></button>
                    </form>
                    <p className={styles.burgerMenu} key="burger"><FontAwesomeIcon icon={faBars}/></p>
                    <Link href="/profile" passHref>
                        <a>
                            <p className={styles.carrito} key="perfil"><FontAwesomeIcon icon={faUserCircle}/></p>
                        </a>
                    </Link>
                    <Link href="/cart" passHref>
                        <a>    
                            <p className={styles.carrito} key="carrito"><FontAwesomeIcon icon={faShoppingCart}/></p>
                        </a>
                    </Link>
                </div>
            </div>
        </header>

    )
}

export default Header;