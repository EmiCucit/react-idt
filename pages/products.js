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
              <button type="submit" className={styles.lupaBusqueda}><i class="fas fa-search"></i></button>
              </form>
              <p className={styles.carrito}><i class="fas fa-shopping-cart"></i></p>
          </div>
          <div className={styles.navBar}>
              <Link href="/">
                <a>Home</a>
              </Link>
              <Link href="/products">
                <a className={styles.active}>Detalle de producto</a>
              </Link>
          </div>
      </header>

      <main className={styles.main}>
        <h1>Detail</h1>
        <p>Hola </p>
        <p>Hola </p>
        <p>Hola </p>
        <p>Hola </p>
        <p>Hola </p>
        <p>Hola </p>
        <p>Hola </p>
      </main>

      <footer className={styles.footer}>
              <span className={styles.logoFooter}>
                <Image src="/idtapp.png" alt="Logo" width={120} height={120} ></Image>
              </span>
      </footer>
    </div>
  )
}
