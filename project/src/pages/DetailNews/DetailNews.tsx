import styles from '../../styles/DetailNews/DetailNews.module.css';
import home from '../../images/home.svg';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { SlSocialVkontakte } from 'react-icons/sl';
import { ImFacebook } from 'react-icons/im';
import { FaViber } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import { ImWhatsapp } from 'react-icons/im';

//@ts-ignore
const DetailNews = ({ cards }) => {
    let { id } = useParams();
    const [date, setDate] = useState('');
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState([]);
    // let img = require('../../images' + image)

    useEffect(() => {
        const currentCard = cards.filter((card: any) => card.id == id);
        setDate(currentCard[0].date)
        setTitle(currentCard[0].title)
        setImage(currentCard[0].image)
        console.log(currentCard[0].image)
        setDescription(currentCard[0].description)
    }, [id])

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
                {/* <div><img src={img} alt="" /></div> */}
                <div className={styles.description}>
                    {
                        description.map((div: any) => <p>{div}</p>)
                    }
                </div>
            </div>
            <div className={styles.readMore}></div>
        </>
    )
}

export default DetailNews;