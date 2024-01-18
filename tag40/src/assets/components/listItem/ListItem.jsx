import CardItem from "../cardItem/CardItem";
import "./listItem.css"

// ! hier hab ich mit Absicht mit props gearbeitet damit ihr den Unterschied zwischen props und direkte Parameter sieht
const ListItem = (props) => {
    console.log(props.übergebendeData);
    return (
        <>
            <main>
                {/* Daoben wird props als Parameter geschrieben und deshalb sollen wir an dieser Stelle mit Punkt "." arbeiten, weil props ein Object ist */}
                {props.übergebendeData.map((car, index) => {
                    // console.log(index);
                    return (
                        // jedes Mal wird durch map() ein neues Div mit einem Index generiert
                        <div key={index}>
                            <CardItem
                                marke={car.marke}
                                farbe={car.farbe}
                                modell={car.modell}
                                produktionsJahr={car.produktionsjahr}
                                ps={car.ps}
                            />
                        </div>
                    )
                })}
            </main>
        </>
    );
}

export default ListItem;