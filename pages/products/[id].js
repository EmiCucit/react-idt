import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import styles from '../../styles/Home.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';



export default function Products({ detail }) {
    const router = useRouter();
    if(router.isFallback) return <h1>Cargando... </h1>
  
    return (
    <div className={styles.container}>
      <Head>
        <script src="https://kit.fontawesome.com/117d4d8bac.js" crossOrigin="anonymous"></script>
        <title>Ian Digital Talent App</title> 
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header/>
      <h2 className={styles.tituloHome}>Detalle de producto</h2>
      <main className={styles.main}>
            <div className={styles.detalleProducto}>
                <div className={styles.displayDetalle}>
                    <div className={styles.imagenDetalle}>
                        <Image src={detail.assets[0].source} alt="Laptop" width={290} height={290}></Image>
                    </div>
                    <div className={styles.displayFlex}>
                        <div className={styles.caracteristicasProducto}>
                            <div className={styles.displayNombre}>
                                <p className={styles.nombreProducto}>{detail.name}</p>
                                <p className={styles.precioProducto}>${detail.variants[0].price}</p>
                            </div>
                            <p className={styles.categoriaProducto}>{detail.collections[0].name}</p>
                            <p className={styles.categoriaProducto}>{detail.collections[1].name}</p>
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
      <Footer/>

    </div>
  )
}

export async function getStaticPaths() {
  const client = new ApolloClient({
    uri:"http://localhost:3000/shop-api",
    cache: new InMemoryCache()
  })

  const { data } = await client.query({
    query: gql`
      query ObtenerIds{
        products{
          items{
            id
          }
        }
      } 
    `
  })
  const paths = data.products.items.map((path) => ({
    params: { id: path.id },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps( paths ) {
  const id = paths.params.id
  const client = new ApolloClient({
    uri:"http://localhost:3000/shop-api",
    cache: new InMemoryCache()
  })

  const { data } = await client.query({
    query: gql`
      query ObtenerProducto{
        product(id:${id}){
          id,
          name,
          description,
          collections{
            name
          },
          assets{
            source
          },
          variants{
            price
          }
        }
      }    
    `
  })

  return{
    props:{
      detail: data.product,
    }
  }
} 