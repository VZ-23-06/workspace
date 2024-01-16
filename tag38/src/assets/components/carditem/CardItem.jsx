import "./carditem.css"

const CardItem = (props) => {
    return (
        // hier lassen uns unsere properties (eigenschaft), die wir in ListItem übergeben haben ausgeben
        <>
            <h2>title:{props.title}</h2>
            <img src={props.img} alt="" />
            <p>{props.price}</p>
        </>
    );
}

export default CardItem;