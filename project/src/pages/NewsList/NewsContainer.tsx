import Card from "./Card";
import styles from '../../styles/NewsList/NewsContainer.module.css';
import home from '../../images/home.svg';
import search from '../../images/search.svg';
import { useState } from "react";

//@ts-ignore
const NewsContainer = ({ cards }) => {

    const [inputValue, setInputValue] = useState('')

    return (
        <div className={styles.container}>
            <div className={styles.topBlock}>
                <div>
                    <div className={styles.link}>
                        <img src={home} alt="" />
                        <div className={styles.ellipse}></div>
                        <div>Новости</div>
                    </div>
                    <div className={styles.title}>Новости</div>
                </div>
                <div className={styles.search}>
                    <input type="text" onChange={(input) => setInputValue(input.target.value)} placeholder='Поиск по статьям' />
                    <button>
                        <img src={search} alt="" />
                    </button>
                </div>
            </div>
            <div className={styles.background}></div>
            <div className={styles.cardContainer}>
                {
                    cards.map((card: any) =>
                        <Card
                            image={require('../../images' + card.image)}
                            id={card.id}
                            title={card.title}
                            descriptionShort={card.descriptionShort}
                            date={card.date}>
                        </Card>)
                }
            </div >
        </div>
    )
}

export default NewsContainer;