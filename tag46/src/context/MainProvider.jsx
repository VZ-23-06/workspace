import React, { useState , useEffect} from 'react'
import { createContext } from 'react'

export const mainContext = createContext()

const MainProvider = ({ children }) => {

    const Data = [
        {
            "id": 1,
            "Vorname": "Max",
            "Nachname": "Mustermann",
            "Telefonnummer": "+49 123 456789",
            "eMail": "max.mustermann@example.com",
            "Alter": 30,
            "Hobbies": ["Fußball", "Lesen"],
            "BildURL": "https://via.placeholder.com/150?text=Max"
        },
        {
            "id": 2,
            "Vorname": "Anna",
            "Nachname": "Schmidt",
            "Telefonnummer": "+49 987 654321",
            "eMail": "anna.schmidt@example.com",
            "Alter": 25,
            "Hobbies": ["Malen", "Reisen"],
            "BildURL": "https://via.placeholder.com/150?text=Anna"
        },
        {
            "id": 3,
            "Vorname": "Michael",
            "Nachname": "Müller",
            "Telefonnummer": "+49 555 123456",
            "eMail": "michael.mueller@example.com",
            "Alter": 40,
            "Hobbies": ["Wandern", "Kochen"],
            "BildURL": "https://via.placeholder.com/150?text=Michael"
        },
        {
            "id": 4,
            "Vorname": "Julia",
            "Nachname": "Wagner",
            "Telefonnummer": "+49 333 987654",
            "eMail": "julia.wagner@example.com",
            "Alter": 35,
            "Hobbies": ["Tanzen", "Yoga"],
            "BildURL": "https://via.placeholder.com/150?text=Julia"
        },
        {
            "id": 5,
            "Vorname": "Tobias",
            "Nachname": "Becker",
            "Telefonnummer": "+49 777 456123",
            "eMail": "tobias.becker@example.com",
            "Alter": 28,
            "Hobbies": ["Fotografie", "Musik"],
            "BildURL": "https://via.placeholder.com/150?text=Tobias"
        },
        {
            "id": 6,
            "Vorname": "Sarah",
            "Nachname": "Fischer",
            "Telefonnummer": "+49 111 789654",
            "eMail": "sarah.fischer@example.com",
            "Alter": 32,
            "Hobbies": ["Schwimmen", "Theater"],
            "BildURL": "https://via.placeholder.com/150?text=Sarah"
        },
        {
            "id": 7,
            "Vorname": "Kevin",
            "Nachname": "Schulz",
            "Telefonnummer": "+49 222 654987",
            "eMail": "kevin.schulz@example.com",
            "Alter": 27,
            "Hobbies": ["Videospiele", "Fitness"],
            "BildURL": "https://via.placeholder.com/150?text=Kevin"
        },
        {
            "id": 8,
            "Vorname": "Laura",
            "Nachname": "Hoffmann",
            "Telefonnummer": "+49 444 321789",
            "eMail": "laura.hoffmann@example.com",
            "Alter": 22,
            "Hobbies": ["Lesen", "Reiten"],
            "BildURL": "https://via.placeholder.com/150?text=Laura"
        },
        {
            "id": 9,
            "Vorname": "David",
            "Nachname": "Klein",
            "Telefonnummer": "+49 888 987123",
            "eMail": "david.klein@example.com",
            "Alter": 31,
            "Hobbies": ["Basketball", "Kochen"],
            "BildURL": "https://via.placeholder.com/150?text=David"
        },
        {
            "id": 10,
            "Vorname": "Lisa",
            "Nachname": "Richter",
            "Telefonnummer": "+49 666 123987",
            "eMail": "lisa.richter@example.com",
            "Alter": 29,
            "Hobbies": ["Yoga", "Fotografie"],
            "BildURL": "https://via.placeholder.com/150?text=Lisa"
        },
        {
            "id": 11,
            "Vorname": "Patrick",
            "Nachname": "Neumann",
            "Telefonnummer": "+49 999 456789",
            "eMail": "patrick.neumann@example.com",
            "Alter": 33,
            "Hobbies": ["Wandern", "Gitarre spielen"],
            "BildURL": "https://via.placeholder.com/150?text=Patrick"
        },
        {
            "id": 12,
            "Vorname": "Melanie",
            "Nachname": "Koch",
            "Telefonnummer": "+49 333 987654",
            "eMail": "melanie.koch@example.com",
            "Alter": 26,
            "Hobbies": ["Schwimmen", "Malen"],
            "BildURL": "https://via.placeholder.com/150?text=Melanie"
        },
        {
            "id": 13,
            "Vorname": "Simon",
            "Nachname": "Lehmann",
            "Telefonnummer": "+49 111 789654",
            "eMail": "simon.lehmann@example.com",
            "Alter": 34,
            "Hobbies": ["Tennis", "Fotografie"],
            "BildURL": "https://via.placeholder.com/150?text=Simon"
        },
        {
            "id": 14,
            "Vorname": "Julia",
            "Nachname": "Vogel",
            "Telefonnummer": "+49 555 321987",
            "eMail": "julia.vogel@example.com",
            "Alter": 23,
            "Hobbies": ["Lesen", "Tanzen"],
            "BildURL": "https://via.placeholder.com/150?text=Julia"
        },
        {
            "id": 15,
            "Vorname": "Lukas",
            "Nachname": "Fuchs",
            "Telefonnummer": "+49 777 987654",
            "eMail": "lukas.fuchs@example.com",
            "Alter": 36,
            "Hobbies": ["Kochen", "Fotografie"],
            "BildURL": "https://via.placeholder.com/150?text=Lukas"
        },
        {
            "id": 16,
            "Vorname": "Carina",
            "Nachname": "Weber",
            "Telefonnummer": "+49 888 654321",
            "eMail": "carina.weber@example.com",
            "Alter": 24,
            "Hobbies": ["Reisen", "Lesen"],
            "BildURL": "https://via.placeholder.com/150?text=Carina"
        },
        {
            "id": 17,
            "Vorname": "Markus",
            "Nachname": "Schneider",
            "Telefonnummer": "+49 999 123456",
            "eMail": "markus.schneider@example.com",
            "Alter": 39,
            "Hobbies": ["Fußball", "Musik"],
            "BildURL": "https://via.placeholder.com/150?text=Markus"
        },
        {
            "id": 18,
            "Vorname": "Sabrina",
            "Nachname": "Wolf",
            "Telefonnummer": "+49 222 456789",
            "eMail": "sabrina.wolf@example.com",
            "Alter": 26,
            "Hobbies": ["Malen", "Tanzen"],
            "BildURL": "https://via.placeholder.com/150?text=Sabrina"
        },
        {
            "id": 19,
            "Vorname": "Philipp",
            "Nachname": "Bauer",
            "Telefonnummer": "+49 111 987654",
            "eMail": "philipp.bauer@example.com",
            "Alter": 32,
            "Hobbies": ["Gitarre spielen", "Videospiele"],
            "BildURL": "https://via.placeholder.com/150?text=Philipp"
        },
        {
            "id": 20,
            "Vorname": "Christina",
            "Nachname": "Huber",
            "Telefonnummer": "+49 666 654321",
            "eMail": "christina.huber@example.com",
            "Alter": 28,
            "Hobbies": ["Fitness", "Schwimmen"],
            "BildURL": "https://via.placeholder.com/150?text=Christina"
        }
    ]



    const [kontakte, setKontakte] = useState(() => {
        const storedKontakte = JSON.parse(localStorage.getItem('kontakte'));
        return storedKontakte ? storedKontakte : Data;
    });



    useEffect(() => {
        localStorage.setItem('kontakte', JSON.stringify(kontakte));
    }, [kontakte]);




    return (
        <mainContext.Provider value={{ kontakte, setKontakte }}>
            {children}
        </mainContext.Provider>
    )
}

export default MainProvider