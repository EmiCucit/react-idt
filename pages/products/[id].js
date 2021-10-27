import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import styles from '../../styles/Home.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useContext } from 'react';



export default function Products(detail) {
    const router = useRouter();

    if(router.isFallback) return <h1>Cargando... </h1>
  
    return (
    <div className={styles.container}>
      <Head>
        <script src="https://kit.fontawesome.com/117d4d8bac.js" crossorigin="anonymous"></script>
        <title>Ian Digital Talent App</title> 
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header/>
      <h2 className={styles.tituloHome}>Detalle de producto</h2>
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
      <Footer/>

    </div>
  )
}

export async function getStaticPaths(){
    return{
        paths : [{ params : { id :1 } }],
        fallback : true
    }
}

export async function getStaticProps() {
    const { params } = context;
    const { id } = params
    console.log(id)
    console.log(params)
    const client = new ApolloClient({
      uri:"http://localhost:3000/shop-api",
      cache: new InMemoryCache()
    })
  
    const {data} = await client.query({
      query: gql`
        query ObtenerProductos{
          products{
            items{
              id,
              assets{
                source
              },
              name,
              collections{
                name 
              },
              variants{
                price
              },
            }
          }
        }
      `
    })
    
  
    return{
      props:{
        detail: data.products.items,
      }
    }
  }