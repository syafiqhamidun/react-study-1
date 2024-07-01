/* eslint-disable react/prop-types */

function TextCard({author, body}) {
  return (
    <div className='bg-yellow-800 max-h-32 max-w-72 w-64 h-28 rounded-xl text-center flex flex-col justify-center items-center gap-4'>
        <h1 
            className='text-white font-bold uppercase'
            
        >
            {author}
        </h1>
        <p 
            className='text-yellow-50'
        >
            {body}
        </p>
    </div>
  )
}

export default TextCard;