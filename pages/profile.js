import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Profile(){
    return(
        <div className={styles.container}>
            <Header/>
            <Footer/>
        </div>
    )
}