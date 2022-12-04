import styles from '../styles/LogIn.module.css';
import { useState } from 'react';

const LogIn = () => {

    const [pressed, setPressed] = useState(false);

    const OpenRegistration = () => {
        setPressed(true)
    }

    return (
        <>
            {
                pressed ?
                    <div className={styles.containerRegistration}>
                        <div className={styles.backgroundImg}></div>
                        <div className={styles.topImg}></div>
                        <div className={styles.contentRegistration}>
                            <div className={styles.leftBlock}>
                                <div className={styles.title}>Регистрация</div>
                                <div className={styles.input}>
                                    <input type="text" placeholder='Логин' />
                                    <input type="text" placeholder='Электроннная почта' />
                                    <input type="text" placeholder='Пароль' />
                                    <input type="text" placeholder='Повторите пароль' />
                                </div>
                                <div><button className={styles.button}>Зарегистрироваться</button></div>
                            </div>
                            <div className={styles.rightBlock}>
                                <div className={styles.userMust}>
                                    <span>Пользователь обязуется:</span>
                                    <div>предоставлять достоверную и актуальную информацию при регистрации и добавлении объекта;</div>
                                    <div> добавлять фотографии объектов соответствующие действительности. Администрация сайта sdaem.by оставляет за собой право удалять любую информацию, размещенную пользователем, если сочтет, что информация не соответствует действительности, носит оскорбительный характер, нарушает права и законные интересы других граждан либо действующее законодательство Республики Беларусь.</div>
                                </div>
                                <div>Уже есть аккаунт?
                                    <button onClick={() => setPressed(false)} className={styles.link}>Войдите</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    :

                    <div className={styles.containerLogIn}>
                        <div className={styles.backgroundImg}></div>
                        <div className={styles.topImg}></div>
                        <div className={styles.contentLogIn}>
                            <div className={styles.title}>Авторизация</div>
                            <div className={styles.description}>Авторизируйтесь, чтобы начать
                                публиковать свои объявления</div>
                            <div className={styles.input}>
                                <input type="text" placeholder='Логин' />
                                <input type="text" placeholder='Пароль' />
                            </div>
                            <div className={styles.password}>
                                <label className={styles.switch}>
                                    <input type="checkbox" className={styles.checkbox} />
                                    <span className={styles.slider}></span>
                                </label>
                                <span className={styles.rememberMe}>Запомнить меня</span>
                                <a href="">Забыли пароль?</a>
                            </div>
                            <div><button className={styles.button}>Войти</button></div>
                            <div className={styles.createAccount}>
                                <span>Еще нет аккаунта?</span>
                                <button onClick={OpenRegistration} className={styles.link}>Создайте акканут</button>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default LogIn;