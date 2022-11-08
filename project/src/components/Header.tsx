import styles from './../styles/Header.module.css';

const Header = () => {
    return (
        <div className={styles.container}>
            <a href="">Главная</a>
            <a href="">Новости</a>
            <a href="">Размещение и тарифы </a>
            <a href="">Объявления на карте</a>
            <a href="">Контакты</a>
            <a href="">Закладки</a>
            <a href="">Вход и регистрация</a>
        </div>
    )
}

export default Header;