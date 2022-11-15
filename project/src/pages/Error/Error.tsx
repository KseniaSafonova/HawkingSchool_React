import Header from "../../components/Header";
import HeaderNav from "../../components/HeaderNav";
import Footer from "../../components/Footer";
import styles from '../../styles/Error/Error.module.css';
import error from '../../images/error.svg';
import pointsLeft from '../../images/pointsLeft.png';
import pointsRight from '../../images/pointsRight.png';

const Error = () => {
    return (
        <>
            <Header />
            <HeaderNav />
            <div className={styles.container}>
                <div className={styles.backgroundImg}></div>
                <div className={styles.topImg}></div>
                <div className={styles.pointsLeft}><img src={pointsLeft} /></div>
                <div className={styles.contentLeft}>
                    <div className={styles.error}>Ошибка 404</div>
                    <div className={styles.description}>Возможно, у вас опечатка в адресе страницы, или её просто не существует</div>
                    <div className={styles.button}><button>Вернуться на главную</button></div>
                </div>
                <div className={styles.contentRight}>
                    <div className={styles.errorNumber}><img src={error} alt="" /></div>
                </div>
                <div className={styles.pointsRight}><img src={pointsRight} /></div>
            </div>
            <Footer />
        </>
    )
}

export default Error;