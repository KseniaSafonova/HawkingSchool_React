import Header from "../../components/Header";
import HeaderNav from "../../components/HeaderNav";
import Footer from "../../components/Footer";
import styles from '../../styles/Error/Error.module.css';
import topImage from '../../images/topImage.png'


const Error = () => {
    return (
        <>
            <Header />
            <HeaderNav />
            <div className={styles.container}>
                <div className={styles.backgroundImg}></div>
                <div className={styles.topImg}></div>
                <div className={styles.content}>
                    <div className={styles.error}>Ошибка 404</div>
                    <div className={styles.description}>Возможно, у вас опечатка в адресе страницы, или её просто не существует</div>
                    <div className={styles.button}><button>Вернуться на главную</button></div>
                    <div>404</div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Error;