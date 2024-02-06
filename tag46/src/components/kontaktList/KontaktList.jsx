import React, { useContext } from 'react'
import { mainContext } from '../../context/MainProvider'
import KontaktCard from '../kontaktCard/KontaktCard';
import Nav from '../nav/Nav';

const KontaktList = () => {

    const { kontakte, setKontakte } = useContext(mainContext)

    // console.log(kontakte);

    return (
        <>
            <header>
                <Nav />
            </header>
            <main>
                {kontakte.map((kontakt, index) => {
                    // ! BITTE IMMER RETURN SCHREIBEN
                    return (
                        <div key={index}>
                            <KontaktCard kontakt={kontakt} />
                        </div>
                    )
                })}

            </main>
        </>
    )
}

export default KontaktList