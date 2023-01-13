import ApartmentCard_cell from "./ApartmentCard_cell";
import ApartmentCard_list from "./ApartmentCard_list";
import styles from '../../styles/Apartments/Apartments.module.css';
import home from '../../images/home.svg';
import { useState } from "react";
import { IoOptionsOutline } from 'react-icons/io5';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { SlSocialVkontakte } from 'react-icons/sl';
import { ImFacebook } from 'react-icons/im';
import { FaViber } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import { ImWhatsapp } from 'react-icons/im';

//@ts-ignore
const Apartments = ({ apartments }) => {

    const [list, setList] = useState(false);

    const ChangeToList = () => {
        setList(true);
    }

    const ChangeToCells = () => {
        setList(false);
    }


    const showRoomsBlock = () => {

    }
    return (
        <div>
            <div className={styles.titleBlock}></div>
            <div className={styles.link}>
                <img src={home} alt="" />
                <div className={styles.ellipse}></div>
                <p>Квартиры в Минске</p>
            </div>
            <div className={styles.mainTitle}>Аренда квартир на сутки в Минске</div>
            <div className={styles.secondTitle}>Рекомендуем посмотреть</div>
            <div className={styles.buttons}>
                <button className={styles.titleButton}>Недорогие</button>
                <button className={styles.titleButton}>1-комнатные</button>
                <button className={styles.titleButton}>2-комнатные</button>
                <button className={styles.titleButton}>3-комнатные</button>
                <button className={styles.titleButton}>4-комнатные</button>
                <button className={styles.titleButton}>5-комнатные</button>
            </div>
            <nav className={styles.nav}>
                <div className={styles.selectRooms}>
                    <span className={styles.inputTitle}>Комнаты</span>
                    <button className={styles.selectButton}>Выберите
                        <IoIosArrowDown onClick={showRoomsBlock} className={styles.arrowDown} />
                    </button>
                </div>
                <div className={styles.selectPrices}>
                    <span className={styles.inputTitle}>Цена за сутки (BYN)</span>
                    <input type="text" placeholder='От' className={styles.priceInput} />
                    <p>-</p>
                    <input type="text" placeholder='До' className={styles.priceInput} />
                </div>
                <div className={styles.selectOptions}>
                    Больше опций
                    <IoOptionsOutline className={styles.options} size='1.5em' />
                </div>
                <button className={styles.clearButton}>Очистить</button>
                <button className={styles.showButton}>Показать объекты
                    <IoIosArrowForward />
                </button>
            </nav>
            <div className={styles.pageStyle}>
                <button>По умолчанию</button>
                <button onClick={ChangeToList}>Список</button>
                <button onClick={ChangeToCells}>Плитки</button>
                <button><FaMapMarkerAlt />Показать на карте</button>
            </div>
            <div className={list ? styles.listContainer : styles.cellContainer}>

                {
                    list ?
                        <>
                            {
                                apartments.map((a: any) =>
                                    <ApartmentCard_list
                                        image={require('../../images/apartments' + a.images[0])}
                                        title={a.title}
                                        price={a.price}
                                        persons={a.persons}
                                        rooms={a.rooms}
                                        city={a.city}
                                        address={a.address}
                                        subway={a.subway}
                                        location={a.location}
                                        description={a.description}
                                    />)
                            }</>
                        :
                        <>
                            {
                                apartments.map((a: any) =>
                                    <ApartmentCard_cell
                                        image={require('../../images/apartments' + a.images[0])}
                                        price={a.price}
                                        persons={a.persons}
                                        rooms={a.rooms}
                                        city={a.city}
                                        address={a.address}
                                        subway={a.subway}
                                        location={a.location}
                                        description={a.description}
                                    />)
                            }</>
                }
            </div>
            <div className={styles.bottomBlock}>
                <div>Номера страниц</div>
                <div className={styles.socialNetworks}>
                    <div className={styles.share}>Поделиться</div>
                    <div className={styles.iconBlock}><SlSocialVkontakte /></div>
                    <div className={styles.iconBlock}><ImFacebook /></div>
                    <div className={styles.iconBlock}><FaViber /></div>
                    <div className={styles.iconBlock}><FaTelegramPlane /></div>
                    <div className={styles.iconBlock}><ImWhatsapp /></div>
                </div>
            </div>
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
        </div>
    )
}

export default Apartments;