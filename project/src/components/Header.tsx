import styles from './../styles/Header.module.css';
import { BiHeart } from 'react-icons/bi';
import { FaMapMarkerAlt } from 'react-icons/fa';

// @ts-igmore
const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.leftBlock}>
                <div><a href="" className={styles.link}>Главная</a></div>
                <div><a href="" className={styles.link}>Новости</a></div>
                <div><a href="" className={styles.link}>Размещение и тарифы </a></div>
                <div><a href="" className={styles.link}>
                    <FaMapMarkerAlt className={styles.point} />
                    <span>Объявления на карте</span>
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