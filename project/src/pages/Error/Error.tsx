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
            <div>
                <div className={styles.background}>
                    <img src={topImage} alt="" className={styles.backgroundd} />

                </div>
                <div className={styles.block}>ошибка 404</div>
                {/* <div className={styles.backgroundd}></div> */}
            </div>
            <Footer />
        </>
    )
}

export default Error;