import { useState, useContext } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Button from "../Button/Button"
import { TaskContext } from "../../context/TaskContext"
import { Input, InputContainer } from './InputBox.styles'

const InputBox = () => {
  const [task, setTask] = useState("");
  const { addCardToBacklog } = useContext(TaskContext)

  const changeHandler = (event) => {
    setTask(event.target.value);
  }

  const addCard = () => {
    task === "" ?
      toast.error("Please enter task!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }) :
      addCardToBacklog(task)
    setTask("")
  }

  return (
    <>
      <InputContainer>
        <Input type="text" value={task} placeholder="Enter task" onChange={changeHandler} />
        <Button onClick={addCard} />
      </InputContainer>

      <ToastContainer />
    </>
  )
}

export default InputBox