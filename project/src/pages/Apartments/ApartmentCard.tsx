import styles from '../../styles/Apartments/ApartmentCard.module.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoEllipse } from 'react-icons/io5';
import { BiHeart } from 'react-icons/bi';
import { MdPhoneIphone } from 'react-icons/md';
import subway from '../../images/apartments/subway.svg';

//@ts-ignore
const ApartmentCard = (props) => {
    return (
        <div className={styles.card}>
            <img className={styles.image} src={props.image} alt="" />
            <div className={styles.topBlock}>
                <div className={styles.price}>{props.price} BYN
                    <div>за сутки</div>
                </div>
                <div className={styles.persons}>{props.persons}</div>
                <div className={styles.rooms}>{props.rooms} комн.</div>
            </div>
            <div className={styles.address}>
                <FaMapMarkerAlt className={styles.point} />
                <span>{props.city}, {props.address}</span>
            </div>
            <div className={styles.subway}>
                <img src={subway} alt="" />
                <span>{props.subway}</span>
                <IoEllipse size='0.5em' className={styles.ellips} />
                <span>{props.location}</span>
            </div>
            <div className={styles.description}>{props.description}</div>
            <div className={styles.bottomBlock}>
                <button className={styles.likeBlock}>
                    <BiHeart className={styles.like} />
                </button>
                <button className={styles.contactsBlock}>
                    <MdPhoneIphone className={styles.phone} />
                    <span>Контакты</span>
                </button>
                <button className={styles.moreBlock}>Подробнее</button>
            </div>
        </div >
    )
}

export default ApartmentCard;