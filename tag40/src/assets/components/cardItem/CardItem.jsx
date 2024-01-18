const CardItem = ({ marke, farbe, modell, produktionsJahr, ps }) => {
    return (
        <>
            <h4>Marke:{marke}</h4>
            <p>Farbe:{farbe}</p>
            <p>Modell:{modell}</p>
            <p>PJ:{produktionsJahr}</p>
            <p>PS:{ps}</p>
        </>
    );
}

export default CardItem;