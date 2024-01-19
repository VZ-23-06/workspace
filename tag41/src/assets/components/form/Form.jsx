const Form = ({ obj, setObj }) => {

    console.log(typeof obj);
    console.log(typeof setObj);


    return (
        <>
            <form>
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Schreib mal deinen Name"
                    value={obj.firstName}
                    onChange={(event) => setObj({ ...obj, firstName: event.target.value })}
                />
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Schreib mal deinen Nachname"
                    value={obj.lastName}
                    onChange={(event) => setObj({ ...obj, lastName: event.target.value })}
                />
                <input
                    type="text"
                    name="age"
                    id="age"
                    placeholder="Schreib mal deinen Nachname"
                    value={obj.age}
                    onChange={(event) => setObj({ ...obj, age: event.target.value })}
                />
                <input
                    type="checkbox"
                    name="happiness"
                    id="happiness"
                    value={obj.happy}
                    onChange={(event) => setObj({ ...obj, happy: event.target.checked })}
                />
            </form>

            <div>
                <p>Name: {obj.firstName}</p>
                <p>LastName: {obj.lastName}</p>
                <p>Age: {obj.age}</p>
                <p>Bist du Happy? {obj.happy ? "😄" : "😔"}</p>
            </div>
        </>
    );
}

export default Form;