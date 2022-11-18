import logo from '../images/logo.svg';
import NavButton from './NavButton';
import styles from './../styles/HeaderNav.module.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
//@ts-ignore
const HeaderNav = () => {
    return (
        <div className={styles.container}>
            <img src={logo} className={styles.logo} alt="" />
            <div className={styles.links}>
                <a href="">
                    <span>Квартиры на сутки</span>
                </a>
                <FaMapMarkerAlt className={styles.point} />
                <a href="">Коттеджи и усадьбы</a>
                <a href="">Бани и Сауны</a>
                <a href="">Авто напрокат</a>
            </div>
            <NavButton />
        </div>
    )
}

export default HeaderNav;