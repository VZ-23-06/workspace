
import { v4 as uuidv4 } from 'uuid';
import Card from '../card/Card';

const CarList = ({ cars }) => {
    // props ist auch eine Möglichkeit, mit dem Obj ist aber besser 
    // console.log("cars", cars);
    {/* !!!startet immer erst mit der manuellen eingabe!!! */ }
    // ! DAS MACHEN WIR ABER NICHT weil wir map() verwenden können :D
    {/* <CarItem
                marke={props.carArr[0].marke}
                model={props.carArr[0].modell}
                color={props.carArr[0].farbe}
                year={props.carArr[0].produktionsjahr}
                engine={props.carArr[0].ps}
            /> */}
    return (
        <>
            {cars.map((car, index) => {
                console.log(uuidv4());
                return (
                    <div key={index}>
                        <Card
                            wurst={uuidv4()}
                            marke={car.marke}
                            farbe={car.farbe}
                            modell={car.modell}
                            Produktionsjahr={car.produktionsjahr}
                            ps={car.ps}
                        />
                    </div>
                )
            }
            )}
        </>
    );
}

export default CarList;