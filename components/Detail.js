import Image from 'next/image';
import Link from 'next/link'
import styles from '../styles/Home.module.css';

function Detail(){
    return(
        <main className={styles.main}>
            <div className={styles.detalleProducto}>
                <div className={styles.displayDetalle}>
                    <div className={styles.imagenDetalle}>
                        <Image src="/laptop.jpg" alt="Laptop" width={290} height={290}></Image>
                    </div>
                    <div className={styles.displayFlex}>
                        <div className={styles.caracteristicasProducto}>
                            <div className={styles.displayNombre}>
                                <p className={styles.nombreProducto}>Nombre</p>
                                <p className={styles.precioProducto}>$150000</p>
                            </div>
                            <p className={styles.categoriaProducto}>Categoria</p>
                        </div>
                        <div className={styles.displayBotones}>
                            <Link href="/cart">
                                <button className={styles.agregarCarrito}>
                                    Comprar
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <p className={styles.tituloDescripcion}>Descripción del producto</p>
            <p className={styles.descripcion}>
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like.
            </p>
        </main>
    )
}

export default Detail;