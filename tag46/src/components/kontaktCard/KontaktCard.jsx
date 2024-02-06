import React from 'react'
import { Link } from 'react-router-dom';

const KontaktCard = ({ kontakt }) => {

    // console.log(kontakt);





    return (

        <div style={{ display: 'flex', flexDirection: "column", border: "1px solid white" }}>
            <h3>{kontakt.Vorname}</h3>
            <h3>{kontakt.Nachname}</h3>
            <Link to={`/kontaktlist/${kontakt.Vorname}`}>Details</Link>
        </div>

    )
}

export default KontaktCard