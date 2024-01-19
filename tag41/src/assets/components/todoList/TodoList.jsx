const TodoList = ({ todoObj, setTodoObj }) => {
    return (
        <>
            <form>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    value={todoObj.title}
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