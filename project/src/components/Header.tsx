import styles from './../styles/Header.module.css';
import { BiHeart } from 'react-icons/bi';
import point from '../images/point.svg'

// @ts-igmore
const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.leftBlock}>
                <div><a href="" className={styles.link}>Главная</a></div>
                <div><a href="" className={styles.link}>Новости</a></div>
                <div><a href="" className={styles.link}>Размещение и тарифы </a></div>
                <div><a href="" className={styles.link}>
                    <img src={point} alt="" />
                    Объявления на карте
                </a></div>
                <div>
                    <a href="" className={styles.link}>Контакты</a></div>
            </div>
            <div className={styles.rightBlock}>
                <a href="" className={styles.link}>Закладки</a>
                <BiHeart className={styles.heart} />
                <a href="" className={styles.login}>Вход и регистрация</a></div>
        </div>
    )
}

export default Header;