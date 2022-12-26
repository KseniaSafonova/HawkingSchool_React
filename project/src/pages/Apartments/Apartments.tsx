import ApartmentCard_cell from "./ApartmentCard_cell";
import ApartmentCard_list from "./ApartmentCard_list";
import styles from '../../styles/Apartments/Apartments.module.css';
import { useState } from "react";

//@ts-ignore
const Apartments = ({ apartments }) => {

    const [list, setList] = useState(false);

    const ChangeStyles = () => {
        setList(!list);
    }

    return (
        <div className={styles.container}>
            <button onClick={ChangeStyles}>Список</button>
            <button>Плитки</button>
            Apartments
            <div className={list ? styles.listContainer : styles.cellContainer}>

                {
                    list ?
                        <>
                            {
                                apartments.map((a: any) =>
                                    <ApartmentCard_list
                                        image={require('../../images/apartments' + a.images[0])}
                                        title={a.title}
                                        price={a.price}
                                        persons={a.persons}
                                        rooms={a.rooms}
                                        city={a.city}
                                        address={a.address}
                                        subway={a.subway}
                                        location={a.location}
                                        description={a.description}
                                    />)
                            }</>
                        :
                        <>
                            {
                                apartments.map((a: any) =>
                                    <ApartmentCard_cell
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
                            }</>
                }
            </div>
        </div>
    )
}

export default Apartments;