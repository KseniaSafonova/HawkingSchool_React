import styles from './../styles/Header.module.css';
import { BiHeart } from 'react-icons/bi';
import { FaMapMarkerAlt } from 'react-icons/fa';
import {
    Link
} from "react-router-dom";

// @ts-igmore
const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.leftBlock}>
                <div><Link to='/' className={styles.link}>Главная</Link></div>
                <div>
                    <Link to='/newsList' className={styles.link}>Новости</Link>
                </div>
                <div><a href="" className={styles.link}>Размещение и тарифы </a></div>
                <div><a href="" className={styles.link}>
                    <FaMapMarkerAlt className={styles.point} />
                    <span>Объявления на карте</span>
                </a></div>
                <div>
                    <Link to='/contacts' className={styles.link}>Контакты</Link>
                </div>
            </div>
            <div className={styles.rightBlock}>
                <a href="" className={styles.link}>Закладки</a>
                <BiHeart className={styles.heart} />
                <Link to='/Registration' className={styles.login}>Вход и регистрация</Link>
            </div>
        </div>
    )
}

export default Header;