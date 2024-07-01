/* eslint-disable no-unused-vars */
import NewPost from "./NewPost"
import TextCard from "./textCard"
import { useState } from "react"


function ListCard() {

    const [nameHandler, setNameHandler] = useState('');
    const [textHandler, setTextHandler] = useState('');

    function changeNameHandler (event) {
        setNameHandler(event.target.value)
    }

    function changeTextHandler (event) {
        setTextHandler(event.target.value)
    }

  return (
    <div>
        {/*  */}
        <NewPost onNameChange={changeNameHandler} onTextChange={changeTextHandler}/> 
        <ul className='grid grid-cols-3'>
            <TextCard author={nameHandler} body={textHandler}/>
        </ul>
    </div>
  )
}

export default ListCard