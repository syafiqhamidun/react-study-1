/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from "react"


export default function NewPost({onCancel, onAddPost}) {

    const [nameHandler, setNameHandler] = useState('');
    const [textHandler, setTextHandler] = useState('');

    function changeNameHandler (event) {
        setNameHandler(event.target.value)
    }

    function changeTextHandler (event) {
        setTextHandler(event.target.value)
    }

    function submitHandler(event){
        /* React is front-end library running in browser, not in server side. To prevent browser generating &
            sending HTTP request, we can use preventDefault() function. */
        event.preventDefault();
        const postData = {
            body: textHandler,
            author: nameHandler,
        };
        onAddPost(postData)
        onCancel();
    }

  return (
    <form className="bg-red-900 h-72 w-72 mx-auto mb-10 py-4 rounded-lg" onSubmit={submitHandler}>
        <p>
            <label 
                htmlFor="body"
                className="ml-6 text-white uppercase"
            >
                name
            </label>
            <textarea 
                id="body"
                required
                className=" h-10 w-64 ml-4 rounded-2xl"
                style={{ paddingLeft: '16px', paddingTop: '8px' }}
                placeholder="Enter text..."
                onChange={changeNameHandler}
                
            />
        </p>
        <p className="mt-4">
            <label 
                htmlFor=""
                className="ml-6 text-white uppercase"
            >
                Text
            </label>
            <textarea 
                className=" h-10 w-64 ml-4 rounded-2xl"
                required
                style={{ paddingLeft: '16px', paddingTop: '8px' }}
                placeholder="Enter text..."
                onChange={changeTextHandler}
            />
        </p>
        <div className="flex justify-evenly mt-16">
            <button type="button" onClick={onCancel} className="bg-white w-28 h-8 rounded-2xl">Cancel</button>
            <button className="bg-white w-28 h-8 rounded-2xl">Add</button>
        </div>
    </form>
  )
}
