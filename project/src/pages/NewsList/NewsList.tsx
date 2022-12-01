import NewsContainer from "./NewsContainer";

//@ts-ignore
const NewsList = (props) => {
    return (
        <>
            <NewsContainer news={props.news} />
        </>
    )
}


export default NewsList;