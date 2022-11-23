import styles from '../../styles/NewsList/Card.module.css';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

//@ts-ignore
const Card = (props) => {
    return (
        <div className={styles.card}>
            <img className={styles.image} src={props.image} alt="" />
            <div className={styles.title}>{props.title}</div>
            <div className={styles.description}>{props.description}</div>
            <div className={styles.bottomBlock}>
                <div className={styles.date}>{props.date}</div>
                {/* <Link to='/detailNews' className={styles.button}>Читать</Link> */}
            </div>


        </div>
    )
}

export default Card;