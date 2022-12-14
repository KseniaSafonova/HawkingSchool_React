import styles from '../../styles/Main/Main.module.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoOptionsOutline } from 'react-icons/io5';

const Main = () => {
    return (
        <>
            <div className={styles.topConainer}>
                <div className={styles.backgroundImg}></div>
                <div className={styles.topImg}></div>
                <div className={styles.title}>Sdaem.by - у нас живут <span>ваши объявления</span></div>
                <div className={styles.buttons}>
                    <button className={styles.button}>Квартиры на сутки</button>
                    <button className={styles.button}>Коттеджи и усадьбы</button>
                    <button className={styles.button}>Бани и сауны</button>
                    <button className={styles.button}>Авто напрокат</button>
                </div>
                <nav className={styles.nav}>
                    <div>
                        <div>Город</div>
                        <button>Выберите</button>
                    </div>
                    <div>
                        <div>Комнаты</div>
                        <button>Выберите</button>
                    </div>
                    <div>
                        <div>Цена за сутки (BYN)</div>
                        <input type="text" placeholder='От' /> - <input type="text" placeholder='До' />
                    </div>
                    <div>Больше опций
                        <IoOptionsOutline className={styles.options} size='1.5em' />
                    </div>
                    <div>На карте
                        <FaMapMarkerAlt className={styles.point} />
                    </div>
                    <div>
                        <button>Показать</button>
                    </div>
                </nav>
            </div>

        </>
    )
}

export default Main;