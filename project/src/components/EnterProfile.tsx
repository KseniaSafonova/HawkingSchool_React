import { useState } from 'react';
import styles from '../styles/LogIn.module.css';
import point from '../images/login/point.svg';
import { useForm, SubmitHandler } from "react-hook-form";

interface EnterProfile {
    // OpenRegistration: () => void;
}

type Inputs = {
    login: string,
    password: string,
    email: string
};

const EnterProfile: React.FC = () => {
    const [pressed, setPressed] = useState(false);

    const OpenRegistration = () => {
        setPressed(!pressed)
    }

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
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
                                <form onSubmit={handleSubmit(onSubmit)} className={styles.inputs}>
                                    <input type="text"
                                        placeholder='Логин'
                                        className={styles.loginInput}
                                        {...register("login", { required: true })} />

                                    <input type="text"
                                        placeholder='Электроннная почта'
                                        className={styles.emailInput}
                                        {...register("email", { required: true })} />

                                    <input type="text"
                                        placeholder='Пароль'
                                        className={styles.passwordInput}
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: 'Ошибка ввода'
                                            },
                                            minLength: 10
                                        })} />

                                    <input type="text"
                                        placeholder='Повторите пароль'
                                        className={styles.passwordInput}
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: 'Ошибка ввода'
                                            },
                                            minLength: 10
                                        })} />

                                    <div className={styles.captcha}></div>
                                    {errors.password && <div>{errors.password.message}</div>}
                                    <div><input type="submit" className={styles.button} value={'Зарегистрироваться'} /></div>
                                </form>
                            </div>
                            <div className={styles.rightBlock}>
                                <div className={styles.userMust}>
                                    <span>Пользователь обязуется:</span>
                                    <div className={styles.item}>
                                        <div><img src={point} className={styles.point} /></div>
                                        <div>предоставлять достоверную и актуальную информацию при регистрации и добавлении объекта;</div>
                                    </div>
                                    <div className={styles.item}>
                                        <div><img src={point} className={styles.point} /></div>
                                        <div>добавлять фотографии объектов соответствующие действительности. Администрация сайта sdaem.by оставляет за собой право удалять любую информацию, размещенную пользователем, если сочтет, что информация не соответствует действительности, носит оскорбительный характер, нарушает права и законные интересы других граждан либо действующее законодательство Республики Беларусь.
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.login}>Уже есть аккаунт?
                                    <button onClick={() => OpenRegistration()} className={styles.link}>Войдите</button>
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

                            <form onSubmit={handleSubmit(onSubmit)} className={styles.inputs}>
                                <input type="text" placeholder='Логин' className={styles.loginInput} {...register("login", { required: true })} />

                                <input type="text" placeholder='Пароль' className={styles.passwordInput} {...register("password", { required: true })} />

                                <div className={styles.password}>
                                    <label className={styles.switch}>
                                        <input type="checkbox" className={styles.checkbox} />
                                        <span className={styles.slider}></span>
                                    </label>
                                    <span className={styles.rememberMe}>Запомнить меня</span>
                                    <a href="">Забыли пароль?</a>
                                </div>
                                {errors.password && <span>Ошибка ввода</span>}
                                <div><input type="submit" value={'Войти'} className={styles.button} /></div>
                            </form>
                            <div className={styles.createAccount}>
                                <span>Еще нет аккаунта?</span>
                                <button onClick={() => OpenRegistration()} className={styles.link}>Создайте акканут</button>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default EnterProfile;