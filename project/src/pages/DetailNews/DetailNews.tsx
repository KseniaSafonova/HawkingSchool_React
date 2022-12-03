import styles from '../../styles/DetailNews/DetailNews.module.css';
import home from '../../images/home.svg';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { SlSocialVkontakte } from 'react-icons/sl';
import { ImFacebook } from 'react-icons/im';
import { FaViber } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import { ImWhatsapp } from 'react-icons/im';
import Card from '../NewsList/Card';

//@ts-ignore
const DetailNews = ({ news }) => {
    let { id } = useParams();
    const [date, setDate] = useState('');
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState([]);

    useEffect(() => {
        const currentCard = news.filter((n: any) => n.id == id);
        setDate(currentCard[0].date)
        setTitle(currentCard[0].title)
        setImage(currentCard[0].bigImage)
        setDescription(currentCard[0].description)
    }, [id])


    let cards = news.slice(0, 3);
    return (
        <>
            <div className={styles.titleBlock}></div>
            <div className={styles.titleBlockContent}>
                <div className={styles.link}>
                    <img src={home} alt="" />
                    <div>Новости</div>
                    <div className={styles.ellipse}></div>
                    <div>{title}</div>
                </div>
                <div className={styles.title}>{title}</div>
                <div className={styles.bottomBlock}>
                    <div className={styles.date}>{date}</div>
                    <div className={styles.socialNetworks}>
                        Поделиться
                        <div className={styles.iconBlock}><SlSocialVkontakte className={styles.icon} /></div>
                        <div className={styles.iconBlock}><ImFacebook className={styles.icon} /></div>
                        <div className={styles.iconBlock}><FaViber className={styles.icon} /></div>
                        <div className={styles.iconBlock}><FaTelegramPlane className={styles.icon} /></div>
                        <div className={styles.iconBlock}><ImWhatsapp className={styles.icon} /></div>
                    </div>
                </div>
            </div>
            <div className={styles.mainBlock}>
                <div style={{
                    height: '563px',
                    width: '844px'
                }}>
                    {/* <img src={require('../../images' + image)} className={styles.img} alt="" /> */}
                </div>
                <div className={styles.description}>
                    {
                        description.map((div: any) => <p>{div}</p>)
                    }
                </div>
            </div>
            <div className={styles.cardContainer}>
                <div className={styles.background}></div>
                <div className={styles.readMore}>Читайте также</div>
                <div className={styles.cards}>
                    {
                        cards.map((card: any) =>
                            <Card
                                image={require('../../images' + card.image)}
                                id={card.id}
                                title={card.title}
                                descriptionShort={card.descriptionShort}
                                date={card.date} />
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default DetailNews;