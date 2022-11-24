import styles from '../../styles/DetailNews/DetailNews.module.css';
import home from '../../images/home.svg';
//@ts-ignore
const DetailNews = (props) => {
    return (
        <>
            <div className={styles.titleBlock}>
                <div className={styles.link}>
                    <img src={home} alt="" />
                    <div className={styles.ellipse}></div>
                    <div>Новости</div>
                    {props.title}
                    Детальная новость
                </div>
            </div>
        </>
    )
}

export default DetailNews;