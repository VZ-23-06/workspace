const Card = ({ marke, farbe, modell, Produktionsjahr, ps, wurst }) => {
    // console.log(props);
    console.log(wurst);
    return (
        <>
            <h1>Das ist ein CarItem Component</h1>
            <h3>wurst:{wurst}</h3>
            <h2>Farbe:{farbe}</h2>
            <h2>Marke:{marke}</h2>
            <p>Model:{modell}</p>
            <p>Produktionsjahr:{Produktionsjahr}</p>
            <p>PS: {ps}</p>
        </>
    );
}

export default Card;