import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link'
import styles from '../styles/Home.module.css';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <script src="https://kit.fontawesome.com/117d4d8bac.js" crossorigin="anonymous"></script>
        <title>Ian Digital Talent App</title> 
        <link rel="icon" href="/logo.png" />
      </Head>

      <header className={styles.header}>
            <div className={styles.topBar}>
              <span className={styles.logo}>
                <Image src="/idtapp.png" alt="Logo" width={60} height={60} ></Image>
              </span>
              <form action="/" method="GET" className={styles.formularioBusqueda}>
                <input type="text" className={styles.barraBusqueda} placeholder="Buscar " />
                <button className={styles.lupaBusqueda}><i className="fas fa-search"></i></button>
                </form>
                <p className={styles.carrito}><i class="fas fa-shopping-cart"></i></p>
            </div>
            <div className={styles.navBar}>
              <Link href="/">
                <a className={styles.active}>Home</a>
              </Link>
              <Link href="/products">
                <a>Detalle de producto</a>
              </Link>
          </div>
      </header>

      <main className={styles.main}>
         <h2 className={styles.tituloHome}>Nuestros productos</h2>
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

      <footer className={styles.footer}>
              <span className={styles.logoFooter}>
                <Image src="/idtapp.png" alt="Logo" width={120} height={120} ></Image>
              </span>
      </footer>
    </div>
  )
}
