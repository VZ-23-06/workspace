import { useState } from "react";

const Form = () => {
    //                                             String
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState("")
    const [happy, setHappy] = useState(false)

    console.log(firstName);

    return (
        <>
            <h1>Form</h1>
            <form>
                <input
                    type="text"
                    placeholder="Firstname"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                />
                <input
                    type="text"
                    placeholder="Lastname"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                />
                <input
                    type="text"
                    placeholder="Age"
                    value={age}
                    onChange={(event) => setAge(event.target.value)}
                />
                <input
                    type="checkbox"
                    name=""
                    id=""
                    value={happy}
                    onChange={(event) => setHappy(event.target.checked)}
                />
            </form>

            <p>FirstName:{firstName}</p>
            <p>
                LastName:{lastName}
            </p>
            <p>Age: {age}</p>
            <p>Bist du Happy? {happy ? "😄" : "😔"}</p>
        </>
    );
}

export default Form;