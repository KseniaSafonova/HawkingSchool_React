import styles from './../styles/Header.module.css';
import { BiHeart } from 'react-icons/bi';

// @ts-igmore
const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.leftBlock}>
                <a href="" className={styles.link}>Главная</a>
                <a href="" className={styles.link}>Новости</a>
                <a href="" className={styles.link}>Размещение и тарифы </a>
                <a href="" className={styles.link}>Объявления на карте</a>
                <a href="" className={styles.link}>Контакты</a>
            </div>
            <div className={styles.rightBlock}>
                <a href="" className={styles.link}>Закладки</a>
                <BiHeart className={styles.heart} />
                <a href="" className={styles.login}>Вход и регистрация</a></div>
        </div>
    )
}

export default Header;