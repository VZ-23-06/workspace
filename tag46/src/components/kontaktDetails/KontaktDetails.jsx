import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { mainContext } from '../../context/MainProvider'

const KontaktDetails = () => {

    const unserLieblingsObj = useParams()

    const { kontakte } = useContext(mainContext)

    // console.log(kontakte);

    // console.log(unserLieblingsObj);

    const filteredKontakt = kontakte.filter((kontakt) => kontakt.Vorname == unserLieblingsObj.myKey)


    console.log(filteredKontakt);

    return (
        <>
            <div>KontaktDetails</div>
            {filteredKontakt ?
                (
                    <div>
                        <h2>{filteredKontakt[0]?.Vorname}</h2>
                        <h2>{filteredKontakt[0]?.Nachname}</h2>
                        <h3>{filteredKontakt[0]?.Alter}</h3>
                        <h4>{filteredKontakt[0]?.Telefonnumer}</h4>
                        <h5>{filteredKontakt[0]?.eMail}</h5>
                        <img src={filteredKontakt[0]?.BildURL} alt="" />
                        {filteredKontakt[0]?.Hobbies.map((hobby, index) => {
                            return (
                                <ul key={index}>
                                    <li>{hobby}</li>
                                </ul>
                            )
                        })}
                    </div>)
                :
                (
                    <p>
                        Loading...
                    </p>
                )}

        </>
    )
}

export default KontaktDetails