import styles from '../../styles/NewsList/Card.module.css';
import { Link, useParams } from "react-router-dom";

//@ts-ignore
const Card = (props) => {
    return (
        <div className={styles.card}>
            <img className={styles.image} src={props.image} alt="" />
            <div className={styles.title}>{props.title}</div>
            <div className={styles.description}>{props.descriptionShort}</div>
            <div className={styles.bottomBlock}>
                <div className={styles.date}>{props.date}</div>
                <Link
                    to={`${props.id}`} className={styles.button} >Читать</Link>
            </div>


        </div >
    )
}

export default Card;