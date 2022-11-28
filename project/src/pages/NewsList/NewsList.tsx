import NewsContainer from "./NewsContainer";

//@ts-ignore
const NewsList = (props) => {
    return (
        <>
            <NewsContainer cards={props.cards} />
        </>
    )
}


export default NewsList;