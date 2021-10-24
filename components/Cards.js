import Image from 'next/image';
import Link from 'next/link'
import styles from '../styles/Home.module.css';

function Cards(){
    return(
        <main className={styles.main}>
            <div className={styles.articulosConteiner}>
                <div className={styles.displayContainer}>
                    <Link href="/products">
                        <Image src="/laptop.jpg" alt="Laptop" width={190} height={190}></Image>
                    </Link>
                    <div>
                        <Link href="/products">
                            <div className={styles.paddingLeft}>
                                <p className={styles.nombreProducto}>Nombre producto</p>
                                <p className={styles.precioProducto}>$150000</p>
                            </div>
                        </Link>
                        <Link href="/products">
                            <p className={styles.categoriaProducto}>Categoría</p>
                        </Link>
                        <Link href="/products">
                            <p className={styles.enStock}>En stock</p>
                        </Link>
                            <button className={styles.agregarCarrito}>Comprar</button>
                    </div>
                </div>
            </div>
            <div className={styles.articulosConteiner}>
                <div className={styles.displayContainer}>
                <Link href="/products">
                    <Image src="/laptop.jpg" alt="Laptop" width={190} height={190}></Image>
                </Link>
                <div>
                <Link href="/products">
                    <div className={styles.paddingLeft}>
                        <p className={styles.nombreProducto}>Nombre producto</p>
                        <p className={styles.precioProducto}>$150000</p>
                    </div>
                </Link>
                <Link href="/products">
                    <p className={styles.categoriaProducto}>Categoría</p>
                </Link>
                <Link href="/products">
                    <p className={styles.enStock}>En stock</p>
                </Link>
                    <button className={styles.agregarCarrito}>
                        Comprar
                    </button>
                </div>
                </div>
            </div>
            <div className={styles.articulosConteiner}>
                <div className={styles.displayContainer}>
                <Link href="/products">
                    <Image src="/laptop.jpg" alt="Laptop" width={190} height={190}></Image>
                </Link>
                <div>
                <Link href="/products">
                    <div className={styles.paddingLeft}>
                        <p className={styles.nombreProducto}>Nombre producto</p>
                        <p className={styles.precioProducto}>$150000</p>
                    </div>
                </Link>
                <Link href="/products">
                    <p className={styles.categoriaProducto}>Categoría</p>
                </Link>
                <Link href="/products">
                    <p className={styles.enStock}>En stock</p>
                </Link>
                    <button className={styles.agregarCarrito}>
                        Comprar
                    </button>
                </div>
                </div>
            </div>
            <div className={styles.articulosConteiner}>
                <div className={styles.displayContainer}>
                <Link href="/products">
                    <Image src="/laptop.jpg" alt="Laptop" width={190} height={190}></Image>
                </Link>
                <div>
                <Link href="/products">
                    <div className={styles.paddingLeft}>
                        <p className={styles.nombreProducto}>Nombre producto</p>
                        <p className={styles.precioProducto}>$150000</p>
                    </div>
                </Link>
                <Link href="/products">
                    <p className={styles.categoriaProducto}>Categoría</p>
                </Link>
                <Link href="/products">
                    <p className={styles.enStock}>En stock</p>
                </Link>
                    <button className={styles.agregarCarrito}>
                        Comprar
                    </button>
                </div>
                </div>
            </div>            
         </main>
    )
}

export default Cards;