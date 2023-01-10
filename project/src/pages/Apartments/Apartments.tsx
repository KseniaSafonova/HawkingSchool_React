import ApartmentCard_cell from "./ApartmentCard_cell";
import ApartmentCard_list from "./ApartmentCard_list";
import styles from '../../styles/Apartments/Apartments.module.css';
import home from '../../images/home.svg';
import { useState } from "react";
import { IoOptionsOutline } from 'react-icons/io5';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';

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
        <div className={styles.container}>
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
        </div>
    )
}

export default Apartments;