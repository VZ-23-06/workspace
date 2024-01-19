const TodoList = ({ todoObj, setTodoObj }) => {
    return (
        <>
            <form>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    value={todoObj.title}
                    // ! todoObj sollte auf jeden fall einmal kopiert werden, ansonsten wird mit dem title das ganze Obj überschrieben
                    onChange={(event) => setTodoObj({ ...todoObj, title: event.target.value })}
                />
            </form>


            <main>
                <h1>{todoObj.title}</h1>
            </main>

        </>
    );
}

export default TodoList;