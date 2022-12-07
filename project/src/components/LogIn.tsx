import styles from '../styles/LogIn.module.css';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    input1: string,
    input2: number,
};

interface LogInProps {
    OpenRegistration: () => boolean;
}

const LogIn: React.FC<LogInProps> = ({ OpenRegistration }) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
    return (
        <>
            <div className={styles.containerLogIn}>
                <div className={styles.backgroundImg}></div>
                <div className={styles.topImg}></div>
                <div className={styles.contentLogIn}>
                    <div className={styles.title}>Авторизация</div>
                    <div className={styles.description}>Авторизируйтесь, чтобы начать
                        публиковать свои объявления</div>
                    <div className={styles.input}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" placeholder='Логин' className={styles.loginInput} />
                            <input type="text" placeholder='Пароль' className={styles.passwordInput} />
                        </form>
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
                        <button onClick={() => OpenRegistration()} className={styles.link}>Создайте акканут</button>
                    </div>
                </div>
            </div></>
    )
}

export default LogIn;