import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <script src="https://kit.fontawesome.com/117d4d8bac.js" crossorigin="anonymous"></script>
        <title>Ian Digital Talent App</title> 
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header/>
      
      
      
      <Footer/>

    </div>
  )
}
