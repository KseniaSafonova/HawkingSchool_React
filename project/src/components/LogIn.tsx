import styles from '../styles/LogIn.module.css';

const LogIn = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.backgroundImg}></div>
                <div className={styles.topImg}></div>
                <div className={styles.content}>
                    <div>Авторизация</div>
                    <div>Авторизируйтесь, чтобы начать
                        публиковать свои объявления</div>
                    <div><input type="text" /></div>
                    <div><input type="text" /></div>
                    Запомнить меня
                    <a href="">Забыли пароль?</a>
                    <div><button>Войти</button></div>
                    Еще нет аккаунта? <a href="">Создайте акканут</a>
                </div>
            </div>
        </>
    )
}

export default LogIn;