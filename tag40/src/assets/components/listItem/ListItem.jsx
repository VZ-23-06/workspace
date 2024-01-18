import CardItem from "../cardItem/CardItem";
import "./listItem.css"


const ListItem = ({ übergebendeData }) => {
    console.log(übergebendeData);


    return (
        <>
            <main>
                {übergebendeData.map((car, index) => {
                    // console.log(index);
                    return (
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