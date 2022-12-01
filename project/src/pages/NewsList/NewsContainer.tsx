import Card from "./Card";
import styles from '../../styles/NewsList/NewsContainer.module.css';
import home from '../../images/home.svg';
import search from '../../images/search.svg';
import { useState } from "react";

//@ts-ignore
const NewsContainer = ({ news }) => {

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
                    news.map((n: any) =>
                        <Card
                            image={require('../../images' + n.image)}
                            bigImage={n.bigImage}
                            id={n.id}
                            title={n.title}
                            descriptionShort={n.descriptionShort}
                            date={n.date}>
                        </Card>)
                }
            </div >
        </div>
    )
}

export default NewsContainer;