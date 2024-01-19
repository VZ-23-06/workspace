import { useState } from 'react'
import './App.css'
import Form from './assets/components/form/Form'
import TodoList from './assets/components/todoList/TodoList'
import Header from './assets/components/header/Header'

function App() {

  //                            object
  const [obj, setObj] = useState({
    firstName: "",
    lastName: "",
    age: "",
    hobbies: [],
    happy: false
  })

  const [darkMode, setDarkMode] = useState(false)

  // ! Das macht kein Sinn in einem Array sowas zu machen
  // const [carList, setCarList] = useState([
  //   ["title"], [""],
  // ])


  const [todoObj, setTodoObj] = useState({
    title: "",
    done: false,
    description: "",

  })




  console.log(todoObj);

  console.log(todoObj.title);


  return (
    <>

      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      
      <Form
        setObj={setObj}
        obj={obj}
      />
      <TodoList
        todoObj={todoObj}
        setTodoObj={setTodoObj}
      />
    </>
  )
}

export default App
