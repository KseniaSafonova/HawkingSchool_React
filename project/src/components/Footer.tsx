import logo from './../images/logo.svg';
import styles from './../styles/Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <img src={logo} className={styles.logo} alt="" />
                <div className={styles.companyName}>СДАЁМ БАЙ</div>
                <div className={styles.IPinfo}>
                    <div>ИП Шушкевич Андрей Викторович</div>
                    <div>УНП 192602485 Минским горисполкомом</div>
                    <div>10.02.2016</div>
                    <div>220068, РБ, г. Минск, ул. Осипенко, 21, кв.23</div>
                    <div>+375 29 621 48 33, sdaem@sdaem.by</div>
                    <div>Режим работы: 08:00-22:00</div>
                </div>
            </div>
            <div className={styles.menuLeft}>
                <div><a href="">Коттеджи и усадьбы</a></div>
                <div><a href="">Бани и сауны</a></div>
                <div><a href="">Авто на прокат</a></div>
            </div>
            <div>
                <div className={styles.apartments}>Квартиры</div>
                <div className={styles.apartmentsList}>
                    <a href="">Квартиры в Минске</a>
                    <a href="">Квартиры в Витебске</a>
                    <a href="">Квартиры в Гомеле</a>
                    <a href="">Квартиры в Гродно</a>
                    <a href="">Квартиры в Бресте</a>
                    <a href="">Квартиры в Могилеве</a>
                </div>
            </div>
            <div className={styles.menuRight}>
                <div><a href="">Новости</a></div>
                <div><a href="">Размещение и тарифы </a></div>
                <div><a href="">Объявления на карте</a></div>
                <div><a href="">Контакты</a></div>
            </div>
        </div>
    )
}

export default Footer;