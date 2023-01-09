import ApartmentCard_cell from "./ApartmentCard_cell";
import ApartmentCard_list from "./ApartmentCard_list";
import styles from '../../styles/Apartments/Apartments.module.css';
import home from '../../images/home.svg';
import { useState } from "react";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoOptionsOutline } from 'react-icons/io5';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import arrow from '../../images/arrow.svg';
import buttonArrow from '../../images/buttonArrow.svg'

//@ts-ignore
const Apartments = ({ apartments }) => {

    const [list, setList] = useState(false);

    const ChangeStyles = () => {
        setList(!list);
    }

    const showRoomsBlock = () => {

    }

    return (
        <div className={styles.container}>
            <div className={styles.titleBlock}>
                <div className={styles.link}>
                    <img src={home} alt="" />
                    <div className={styles.ellipse}></div>
                    <div>Квартиры в Минске</div>
                </div>
                <div>Аренда квартир на сутки в Минске</div>
                <div>Рекомендуем посмотреть</div>
                <div>
                    <button>Недорогие</button>
                    <button>1-комнатные</button>
                    <button>2-комнатные</button>
                    <button>3-комнатные</button>
                    <button>4-комнатные</button>
                    <button>5-комнатные</button>
                    <button>Заводской р.</button>
                    <button>Ленинский р.</button>
                    <button>Московский р.</button>
                    <button>Октябрьский р.</button>
                </div>
            </div>

            <nav className={styles.nav}>
                <div className={styles.selectRooms}>
                    <span className={styles.inputTitle}>Комнаты</span>
                    <button className={styles.selectButton}>Выберите
                        <IoIosArrowDown onClick={showRoomsBlock} />
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
            <button onClick={ChangeStyles}>Список</button>
            <button>Плитки</button>
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
        </div>
    )
}

export default Apartments;