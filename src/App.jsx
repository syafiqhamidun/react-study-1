/* eslint-disable no-unused-vars */
import { useState } from "react";
import Header from "./component/Header"
import ListCard from "./component/ListCard"

function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false);
  
  function hideModalHandler(){
    setModalIsVisible(false)
  }

  function showModalHandler(){
    setModalIsVisible(true)
  }

  return (
    <div className="bg-yellow-50 h-screen overflow-hidden">
      <Header onCreate={showModalHandler}/>
      <main className="relative top-10 left-10">
        <ListCard isPosting={modalIsVisible} onStopPosting={hideModalHandler}/>
      </main>
    </div>
  )
}

export default App
