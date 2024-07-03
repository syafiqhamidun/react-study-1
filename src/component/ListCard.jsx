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
        <ul className='grid grid-cols-3'>
            {posts.map((post) => (
                <TextCard key={post} author={post.author} body={post.body}/>
            ))}
        </ul>
    </div>
  )
}

export default ListCard