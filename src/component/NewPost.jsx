/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from "react"


export default function NewPost({onTextChange, onNameChange}) {

  return (
    <form className="bg-red-900 h-72 w-72 mx-auto mb-10 py-4 rounded-lg">
        <p>
            <label 
                htmlFor="body"
                className="ml-6 text-white uppercase"
            >
                name
            </label>
            <textarea 
                id="body" 
                className=" h-10 w-64 ml-4 rounded-2xl"
                style={{ paddingLeft: '16px', paddingTop: '8px' }}
                placeholder="Enter text..."
                onChange={onNameChange}
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
                style={{ paddingLeft: '16px', paddingTop: '8px' }}
                placeholder="Enter text..."
                onChange={onTextChange}
            />
        </p>
    </form>
  )
}
