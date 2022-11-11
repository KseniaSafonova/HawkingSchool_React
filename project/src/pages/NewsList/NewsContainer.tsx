import Card from "./Card";
import styles from '../../styles/NewsList/NewsContainer.module.css';
//@ts-ignore
const NewsContainer = ({ cards }) => {
    return (
        <div className={styles.container}>
            <div className={styles.topBlock}>
                <div>Новости</div>
                <div><input type="text" /><button>search</button></div>
            </div>
            <div className={styles.background}></div>
            <div className={styles.cardContainer}>
                {
                    cards.map((card: any) =>
                        <Card image={require('../../images' + card.image)} title={card.title} description={card.description} date={card.date} />)
                }
            </div >
        </div>
    )
}

export default NewsContainer;