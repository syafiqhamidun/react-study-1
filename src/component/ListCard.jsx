/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { useState } from "react"
import NewPost from "./NewPost"
import TextCard from "./textCard"
import Modal from "./Modal";

function ListCard({isPosting, onStopPosting}) {

    const [posts, setPosts] = useState([]);

    function addPostHandler(postData){
        setPosts((existingPost) => [postData, ...existingPost]);
    }

  return (
    <div>
        {isPosting && (
            <Modal onClose={onStopPosting}>
                <NewPost 
                    onCancel={onStopPosting}
                    onAddPost={addPostHandler}
                /> 
            </Modal>
        )}
        {posts.length > 0 && (
        <ul className='grid grid-cols-3'>
            {posts.map((post) => (
                <TextCard key={post} author={post.author} body={post.body}/>
            ))}
        </ul>
        )}
        {posts.length === 0 && (
        <div className="flex justify-center items-center h-screen">
            <h1 className="text-center text-gray-600 text-xl font-semibold">
                There are no Posts
            </h1>
        </div>
        )}

    </div>
  )
}

export default ListCard