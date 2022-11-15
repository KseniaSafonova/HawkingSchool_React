import styles from '../../styles/Contacts/Contacts.module.css';
import Header from '../../components/Header';
import HeaderNav from '../../components/HeaderNav';
import Footer from '../../components/Footer';

const Contacts = () => {
    return (
        <>
            <Header />
            <HeaderNav />
            <div className={styles.container}>
                <div className={styles.backgroundImg}></div>
                <div className={styles.topImg}></div>
                <div className={styles.content}>
                    <div className={styles.contentLeft}>
                        <div>Контакты</div>
                        <div>Если у Вас есть пожелания, предложения или претензии по организации работы сайта мы всегда рады услышать Ваше мнение.</div>
                        <div>220068, РБ, г. Минск, ул. Осипенко, 21, кв.23</div>
                        <div> +375 29 621-48-33</div>
                        <div>sdaem@sdaem.by</div>
                        <div>Режим работы: 08:00-22:00</div>
                        <div>ИП Шушкевич Андрей Викторович
                            УНП 192602485 Минским горисполкомом 10.02.2016
                        </div>
                        <div>Администрация сайта не владеет информацией
                            о наличии свободных квартир</div>
                    </div>
                    <div className={styles.contentRight}>
                        Ваше имя
                        <input type="text" />
                        Ваша электронная почта
                        <input type="text" />
                        Ваше сообщение
                        <input type="text" />
                        <button>Отправить</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contacts;