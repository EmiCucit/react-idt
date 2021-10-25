import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Cart(){
    return(
        <div className={styles.container}>
            <Header/>
            <h1> Carrito de compras!!! </h1>
            <Footer/>
        </div>
    )
}