import styles from '../../styles/Apartments/ApartmentCard_list.module.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BiHeart } from 'react-icons/bi';
import { MdPhoneIphone } from 'react-icons/md';
import subwayList from '../../images/apartments/subwayList.svg';
import { RiUser3Fill } from 'react-icons/ri';

//@ts-ignore
const ApartmentCard_list = (props) => {
    return (
        <div className={styles.card}>
            <img className={styles.image} src={props.image} alt="" />
            <div className={styles.descriptionBlock}>
                <div className={styles.topBlock}>
                    <div className={styles.leftBlock}>
                        <div className={styles.title}>{props.title}</div>
                        <div className={styles.address}>
                            <FaMapMarkerAlt className={styles.point} />
                            <p>{props.city}, {props.address}</p>
                        </div>
                    </div>
                    <div className={styles.rightBlock}>
                        <div className={styles.price}>{props.price} BYN
                            <div>за сутки</div>
                        </div>
                    </div>
                </div>
                <div className={styles.middleBlock}>
                    <div className={styles.persons}>
                        <RiUser3Fill />
                        <p>{props.persons}</p>
                    </div>
                    <div className={styles.rooms}>{props.rooms} комн.</div>
                    <div className={styles.subway}>
                        <img src={subwayList} alt="" className={styles.subwayImg} />
                        <p>{props.subway}</p>
                    </div>
                    <div className={styles.location}>
                        <span>район:</span>
                        <span>{props.location}</span>
                    </div>
                </div>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.bottomBlock}>

                    <button className={styles.contactsBlock}>
                        <MdPhoneIphone className={styles.phone} />
                        <span>Контакты</span>
                    </button>
                    <button className={styles.likeBlock}>
                        <span>В закладки</span>
                        <BiHeart className={styles.like} />
                    </button>
                    <button className={styles.moreBlock}>Подробнее</button>
                </div>
            </div>
        </div >
    )
}

export default ApartmentCard_list;