import styles from '../../styles/Main/Main.module.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoOptionsOutline } from 'react-icons/io5';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';


//@ts-ignore
const Main = ({ cities }) => {

    const [citiesList, showCitiesList] = useState(false);
    const [apartmentMenu, setApartmentMenu] = useState(true);
    const [autoMenu, setAutoMenu] = useState(false);

    const showCitiesBlock = () => {
        showCitiesList(!citiesList)
    }

    const openApartmentMenu = () => {
        setApartmentMenu(true)
        setAutoMenu(false)
    }

    const openAutoMenu = () => {
        setAutoMenu(true)
        setApartmentMenu(false)
    }

    return (
        <>
            <div className={styles.topConainer}>
                <div className={styles.backgroundImg}></div>
                <div className={styles.topImg}></div>
                <div className={styles.pageTitle}>Sdaem.by - у нас живут <span>ваши объявления</span></div>
                <div className={styles.buttons}>

                    {
                        apartmentMenu ?
                            <button className={styles.buttonDefaultFocus}>Квартиры на сутки</button>
                            :
                            <button className={styles.button} onClick={openApartmentMenu}>Квартиры на сутки</button>
                    }
                    <button className={styles.button} onClick={() => { setApartmentMenu(false); setAutoMenu(false) }}>Коттеджи и усадьбы</button>
                    <button className={styles.button} onClick={() => { setApartmentMenu(false); setAutoMenu(false) }}>Бани и сауны</button>
                    <button className={styles.button} onClick={openAutoMenu}>Авто напрокат</button>
                </div>
                <nav className={styles.nav}>
                    <div className={styles.selectCity}>
                        <div className={styles.inputTitle}>Город</div>
                        <button className={styles.selectButton}>Выберите<IoIosArrowDown size='1.2em' onClick={showCitiesBlock} className={styles.arrowDown} /></button>
                        {
                            citiesList &&
                            <ul className={styles.citiesList}>
                                {
                                    cities.map((city: any) => <li>{city.city}</li>)
                                }
                            </ul>
                        }
                    </div>
                    {
                        autoMenu ?
                            <div className={styles.selectRooms}>
                                <div className={styles.inputTitle}>Вместимость</div>
                                <button className={styles.selectButton}>Выберите<IoIosArrowDown className={styles.arrowDown} size='1.2em' /></button>
                            </div>
                            :
                            <div className={styles.selectRooms}>
                                <div className={styles.inputTitle}>Комнаты</div>
                                <button className={styles.selectButton}>Выберите<IoIosArrowDown className={styles.arrowDown} size='1.2em' /></button>
                            </div>
                    }

                    <div className={styles.selectPrices}>
                        <div className={styles.inputTitle}>Цена за сутки (BYN)</div>
                        <input type="text" placeholder='От' className={styles.priceInput} /> - <input type="text" placeholder='До' className={styles.priceInput} />
                    </div>
                    <div className={styles.selectOptions}>
                        Больше опций
                        <IoOptionsOutline className={styles.options} size='1.5em' />
                    </div>
                    <div className={styles.showMap}>
                        На карте
                        <FaMapMarkerAlt className={styles.point} />
                        <button>Показать <IoIosArrowForward size='1.2em' /></button>
                    </div>
                </nav>
            </div>
            <section className={styles.catalog}>
                <div className={styles.leftBlock}>
                    <div className={styles.apartmentsForDay}>
                        <div className={styles.cardDescription}>СНЯТЬ КВАРТИРУ</div>
                        <div className={styles.cardTitle}>Квартиры на сутки</div>
                        <div className={styles.cardCities}>
                            {
                                cities.map((city: any) => <Link to='/apartments' className={styles.cardCity}>{city.city}</Link>)
                            }
                        </div>
                    </div>
                    <div className={styles.cottages}>
                        <div className={styles.cardDescription}>СНЯТЬ КОТТЕДЖ НА ПРАЗДНИК</div>
                        <div className={styles.cardTitle}>Коттеджи и усадьбы</div>
                    </div>
                    <div className={styles.baths}>
                        <div className={styles.cardDescription}>ПОПАРИТЬСЯ В БАНЕ С ДРУЗЬЯМИ</div>
                        <div className={styles.cardTitle}>Бани и сауны</div>
                    </div>
                    <div className={styles.carRental}>
                        <div className={styles.cardDescription}>ЕСЛИ СРОЧНО НУЖНА МАШИНА</div>
                        <div className={styles.cardTitle}>Авто на прокат</div>
                    </div>
                </div>
                <div className={styles.rightBlock}>
                    <ul>Квартиры
                        <li>Квартиры в Минске</li>
                        <li>Квартиры в Гомеле</li>
                        <li>Квартиры в Гродно</li>
                        <li>Квартиры в Могилеве</li>
                        <li>Квартиры в Бресте</li>
                        <li>Квартиры в Витебск</li>
                    </ul>
                    <ul>Коттеджи и усадьбы
                        <li>Агроусадьбы</li>
                        <li>Коттеджи</li>
                        <li>Загородный комплекс</li>
                        <li>Базы отдыха</li>
                        <li>Ещё</li>
                    </ul>
                    <ul>Популярные направления
                        <li>Коттеджи и усадьбы на о. Брасласких </li>
                        <li>Коттеджи и усадьбы (жилье) на Нарочи</li>
                        <li>Коттеджи и усадьбы (жилье) у воды,
                            на берегу, на озере</li>
                    </ul>
                </div>
            </section>
            <div className={styles.mapBlock}>
                <div className={styles.backgroundImg}></div>
                <div className={styles.topImg}></div>
                <div className={styles.mapBlockContent}>
                    <p>Показать найденные квартиры на карте</p>
                    <p>Ищите новостройки рядом с работой,
                        парком или родственниками</p>
                    <button><FaMapMarkerAlt className={styles.buttonImg} /> Открыть карту</button>
                </div>
            </div>
        </>
    )
}

export default Main;