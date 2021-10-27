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
        <script src="https://kit.fontawesome.com/117d4d8bac.js" crossOrigin="anonymous"></script>
        <title>Ian Digital Talent App</title> 
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header/>
      <h2 className={styles.tituloHome}>Nuestros productos</h2>
      <main className={styles.main} key="Home">
      {cards.map(card=>{
        return(
            <div className={styles.articulosConteiner} key={card.id}>
                <div className={styles.displayContainer} >
                    <Link href={"/products/"+card.id} passHref>
                      <a>
                        <Image src={card.assets[0].source} alt={card.name} width={190} height={190}></Image>
                      </a>
                    </Link>
                    <div className={styles.centrarContenido}>
                        <Link href={"/products/"+card.id} passHref>
                            <a>    
                              <div className={styles.paddingLeft}>
                                  <p className={styles.nombreProducto}>{card.name}</p>
                                  <p className={styles.precioProducto}>${card.variants[0].price}</p>
                              </div>
                            </a>
                        </Link>
                        <Link href={"/products/"+card.id} passHref>
                          <a>    
                            <p className={styles.categoriaProducto} key={card.id+card.collections[0].id}>{card.collections[0].name}</p>
                          </a>
                        </Link>
                        <Link href={"/products/"+card.id} passHref>
                          <a>    
                            <p className={styles.categoriaProducto} key={card.id+card.collections[1].id}>{card.collections[1].name}</p>
                          </a>
                        </Link>
                        <Link href={"/products/"+card.id} passHref>
                            <a>
                              <p className={styles.enStock}>En stock</p>
                            </a>
                        </Link>
                        <Link href="/cart" passHref>
                          <a>
                            <button className={styles.agregarCarrito}>Comprar</button>
                          </a>
                        </Link>
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
              name,
              id 
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