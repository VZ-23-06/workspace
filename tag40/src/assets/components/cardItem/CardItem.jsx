
// !              diese Parameter sollen in einem geschweifte klammer geschreiben werden,
// !              es sei denn wird man mit Props arbeiten und dann weil Props ursprünglich ein Obj ist
// !              wird ohne geschweifte klammer geschrieben
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