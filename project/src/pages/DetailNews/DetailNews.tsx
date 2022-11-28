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

    useEffect(() => {
        const currentCard = cards.filter((card: any) => card.id == id);
        setDate(currentCard[0].date)
        setTitle(currentCard[0].title)
        setImage(currentCard[0].image)
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
                        <div className={styles.icon}><SlSocialVkontakte /></div>
                        <div className={styles.icon}><ImFacebook /></div>
                        <div className={styles.icon}><FaViber /></div>
                        <div className={styles.icon}><FaTelegramPlane /></div>
                        <div className={styles.icon}><ImWhatsapp /></div>
                    </div>
                </div>
            </div>
            <div className={styles.mainBlock}>
                {/* <div ><img src={`../../images${image}`} alt="" /></div> */}
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