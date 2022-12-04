import styles from '../styles/LogIn.module.css';

const LogIn = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.backgroundImg}></div>
                <div className={styles.topImg}></div>
                <div className={styles.content}>
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
                    <div><button>Войти</button></div>
                    <div className={styles.createAccount}><span>Еще нет аккаунта?</span>  <a href="">Создайте акканут</a></div>
                </div>
            </div>
        </>
    )
}

export default LogIn;