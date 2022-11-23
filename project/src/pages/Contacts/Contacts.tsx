import styles from '../../styles/Contacts/Contacts.module.css';
import Header from '../../components/Header';
import HeaderNav from '../../components/HeaderNav';
import Footer from '../../components/Footer';
import instagram from '../../images/Contacts/instagram.svg';
import vk from '../../images/Contacts/vk.svg';
import facebook from '../../images/Contacts/facebook.svg';
import point from '../../images/Contacts/point.svg';
import phone from '../../images/Contacts/phone.svg';
import letter from '../../images/Contacts/letter.svg';
import time from '../../images/Contacts/time.svg';
import viber from '../../images/Contacts/viber.svg';
import telegram from '../../images/Contacts/telegram.svg';
import whatsapp from '../../images/Contacts/whatsapp.svg';
import alert from '../../images/Contacts/alert.svg'

const Contacts = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.backgroundImg}></div>
                <div className={styles.topImg}></div>
                <div className={styles.content}>
                    <div className={styles.contentLeft}>
                        <div className={styles.title}>Контакты</div>
                        <div className={styles.feedback}>Если у Вас есть пожелания, предложения или претензии по организации работы сайта мы всегда рады услышать Ваше мнение.</div>
                        <div className={styles.address}>
                            <img src={point} alt="" />
                            <div>220068, РБ, г. Минск, ул. Осипенко, 21, кв.23</div>
                        </div>
                        <div className={styles.phoneNumber}>
                            <img src={phone} alt="" />
                            <div>+375 29 621-48-33</div>
                            <img src={viber} alt="viber" className={styles.viber} />
                            <img src={telegram} alt="telegram" className={styles.telegram} />
                            <img src={whatsapp} alt="whatsapp" className={styles.whatsapp} />
                        </div>
                        <div className={styles.emailAddress}>
                            <img src={letter} alt="" />
                            <div>sdaem@sdaem.by</div>
                        </div>
                        <div className={styles.workTime}>
                            <img src={time} alt="" />
                            <div>Режим работы: 08:00-22:00</div>
                        </div>
                        <div className={styles.ip}>ИП Шушкевич Андрей Викторович</div>
                        <div className={styles.unp}>УНП 192602485 Минским горисполкомом 10.02.2016 </div>
                        <div className={styles.info}>
                            <img src={alert} alt="" />
                            <div>Администрация сайта не владеет информацией
                                о наличии свободных квартир</div>
                        </div>
                    </div>
                    <div className={styles.contentRight}>
                        <section>
                            <div>
                                <div className={styles.name}>Ваше имя</div>
                                <input type="text" className={styles.nameInput} />
                            </div>
                            <div>
                                <div className={styles.email}>Ваша электронная почта</div>
                                <input type="text" className={styles.emailInput} placeholder="Введите" />
                            </div>
                        </section>
                        <div className={styles.message}>Ваше сообщение</div>
                        <textarea className={styles.messageInput} placeholder="Сообщение" />
                        <div><button className={styles.button}>Отправить</button></div>
                    </div>
                    <div className={styles.socialNetworks}>
                        <div><img src={instagram} alt="instagram" /></div>
                        <div><img src={vk} alt="vk" /></div>
                        <div><img src={facebook} alt="facebook" /></div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Contacts;