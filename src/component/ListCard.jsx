import NewPost from "./NewPost"
import TextCard from "./textCard"
import Modal from "./Modal";
import { useState } from "react"


function ListCard() {

    const [modalIsVisible, setModalIsVisible] = useState(true);
    const [nameHandler, setNameHandler] = useState('');
    const [textHandler, setTextHandler] = useState('');

    function hideModalHandler () {
        setModalIsVisible(false);
    }

    function changeNameHandler (event) {
        setNameHandler(event.target.value)
    }

    function changeTextHandler (event) {
        setTextHandler(event.target.value)
    }

  return (
    <div>
        {modalIsVisible && (
            <Modal onClose={hideModalHandler}>
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