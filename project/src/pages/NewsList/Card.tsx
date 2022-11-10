import styles from '../../styles/Card.module.css';
//@ts-ignore
const Card = (props) => {
    return (
        <div className={styles.card}>
            <img className={styles.image} src={props.image} alt="" />
            <div className={styles.title}>{props.title}</div>
            <div className={styles.description}>{props.description}</div>
            <div className={styles.bottomBlock}>
                <div className={styles.date}>{props.date}</div>
                <button className={styles.button}>Читать</button>
            </div>
        </div>
    )
}

export default Card;