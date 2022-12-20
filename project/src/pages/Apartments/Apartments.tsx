import ApartmentCard from "./ApartmentCard";
import styles from '../../styles/Apartments/Apartments.module.css';

//@ts-ignore
const Apartments = ({ apartments }) => {

    return (
        <div className={styles.container}>
            Apartments
            <div className={styles.cardContainer}>
                {
                    apartments.map((a: any) =>
                        <ApartmentCard
                            image={require('../../images/apartments' + a.images[0])}
                            price={a.price}
                            persons={a.persons}
                            rooms={a.rooms}
                            city={a.city}
                            address={a.address}
                            subway={a.subway}
                            location={a.location}
                            description={a.description}
                        />)
                }
            </div >
        </div>
    )
}

export default Apartments;