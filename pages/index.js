import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';


export default function Home({cards}) {
  return (
    <div className={styles.container}>
      <Head>
        <script src="https://kit.fontawesome.com/117d4d8bac.js" crossorigin="anonymous"></script>
        <title>Ian Digital Talent App</title> 
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header/>
      <h2 className={styles.tituloHome}>Nuestros productos</h2>
      <main className={styles.main}>
      {cards.map(card=>{
        return(
            <div className={styles.articulosConteiner} key={card.id}>
                <div className={styles.displayContainer}>
                    <Link href={"/products/"+card.id}>
                        <Image src={card.assets[0].source} alt={card.name} width={190} height={190}></Image>
                    </Link>
                    <div>
                        <Link href="/products">
                            <div className={styles.paddingLeft}>
                                <p className={styles.nombreProducto}>{card.name}</p>
                                <p className={styles.precioProducto}>${card.variants[0].price}</p>
                            </div>
                        </Link>
                        <Link href="/products">
                            <p className={styles.categoriaProducto}>{card.collections[0].name} & {card.collections[1].name}</p>
                        </Link>
                        <Link href="/products">
                            <p className={styles.enStock}>En stock</p>
                        </Link>
                            <button className={styles.agregarCarrito}>Comprar</button>
                    </div>
                </div>
            </div>            
        )
      })}
         </main>
      <Footer/>

    </div>
  )
}

export async function getStaticProps() {
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
      cards: data.products.items,
    }
  }
}