import styles from '../../styles/Main/Main.module.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoOptionsOutline } from 'react-icons/io5';
import arrow from '../../images/arrow.svg'
import { useState } from 'react';


//@ts-ignore
const Main = ({ cities }) => {

    const [citiesList, showCitiesList] = useState(false);

    const showCitiesBlock = () => {
        showCitiesList(!citiesList)
    }
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
                    <div className={styles.selectCity}>
                        <div>Город</div>
                        <button className={styles.selectButton}>Выберите<img src={arrow} alt="" onClick={showCitiesBlock} /></button>
                        {
                            citiesList &&
                            <ul className={styles.citiesList}>
                                {
                                    cities.map((city: any) => <li>{city.city}</li>)
                                }
                            </ul>
                        }
                    </div>
                    <div className={styles.selectRooms}>
                        <div>Комнаты</div>
                        <button className={styles.selectButton}>Выберите<img src={arrow} alt="" /></button>
                    </div>
                    <div className={styles.selectPrices}>
                        <div>Цена за сутки (BYN)</div>
                        <input type="text" placeholder='От' className={styles.priceInput} /> - <input type="text" placeholder='До' className={styles.priceInput} />
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