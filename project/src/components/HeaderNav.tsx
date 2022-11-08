import logo from './../images/logo.svg';
import NavButton from './NavButton';
import styles from './../styles/HeaderNav.module.css';

const HeaderNav = () => {
    return (
        <div className={styles.container}>
            <img src={logo} alt="" />
            <a href="">Квартиры на сутки</a>
            <a href="">Коттеджи и усадьбы</a>
            <a href="">Бани и Сауны</a>
            <a href="">Авто напрокат</a>
            <NavButton />
        </div>
    )
}

export default HeaderNav;