/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import NewPost from "./NewPost"
import TextCard from "./textCard"
import Modal from "./Modal";
import { useState } from "react"

function ListCard({isPosting, onStopPosting}) {
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
        {isPosting && (
            <Modal onClose={onStopPosting}>
                <NewPost 
                    onNameChange={changeNameHandler} 
                    onTextChange={changeTextHandler}
                /> 
            </Modal>
        )}
        <ul className='grid grid-cols-3'>
            <TextCard author={nameHandler} body={textHandler}/>
        </ul>
    </div>
  )
}

export default ListCard