import Card from "./Card";
import styles from './../styles/NewsContainer.module.css';
//@ts-ignore
const NewsContainer = ({ cards }) => {
    return (
        <div className={styles.container}>
            {
                cards.map((card: any) =>
                    <Card image={require('./../images' + card.image)} title={card.title} description={card.description} date={card.date} />)
            }
        </div >
    )
}

export default NewsContainer;