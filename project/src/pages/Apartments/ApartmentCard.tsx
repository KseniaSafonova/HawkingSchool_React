import styles from '../../styles/Apartments/ApartmentCard.module.css';
import { Link, useParams } from "react-router-dom";

//@ts-ignore
const ApartmentCard = (props) => {
    return (
        <div className={styles.card}>
            <img className={styles.image} src={props.image} alt="" />
            <div className={styles.price}>{props.price}</div>
            <div className={styles.persons}>{props.persons}</div>
            <div className={styles.rooms}>{props.rooms}</div>
            <div className={styles.city}>{props.city}</div>
            <div className={styles.address}>{props.address}</div>
            <div className={styles.subway}>{props.subway}</div>
            <div className={styles.location}>{props.location}</div>
            <div className={styles.description}>{props.description}</div>
            <div className={styles.bottomBlock}>
                like контакты подробнее
            </div>


        </div >
    )
}

export default ApartmentCard;