/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { useEffect, useState } from "react"
import NewPost from "./NewPost"
import TextCard from "./textCard"
import Modal from "./Modal";

function ListCard({isPosting, onStopPosting}) {

    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch('http://localhost:8080/posts');
            const resData = await response.json();
            setPosts(resData.posts);
            setIsFetching(true);
        }

        fetchPosts();
    }, [])

    function addPostHandler(postData){ //This line defines a function named addPostHandler which takes one parameter, postData. This parameter represents the data for the new post that needs to be added.
        fetch('http://localhost:8080/posts' , {   //fetch data from local dummy server 
            method: 'POST', //Specifies that the request method is POST, which is typically used for sending data to create a new resource.
            body: JSON.stringify(postData), //Converts the postData object into a JSON string, which is the format required for sending data in a POST request.
            headers: {
                'Content-Type' : 'application/json' //This sets the Content-Type header to application/json, indicating that the body of the request is in JSON format.
            }
        });
        setPosts((existingPost) => [postData, ...existingPost]); //
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
        { isFetching && posts.length > 0 && (
        <ul className='grid grid-cols-3'>
            {posts.map((post) => (
                <TextCard key={post} author={post.author} body={post.body}/>
            ))}
        </ul>
        )}
        { isFetching && posts.length === 0 && (
        <div className="flex justify-center items-center h-screen">
            <h1 className="text-center text-gray-600 text-xl font-semibold">
                There are no Posts
            </h1>
        </div>
        )}
        {!isFetching && (
            <div className="flex justify-center items-center h-screen">
                <p className="text-center text-gray-600 text-xl font-semibold">Loading Post ...</p>
            </div>
        )}

    </div>
  )
}

export default ListCard