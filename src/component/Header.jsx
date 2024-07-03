/* eslint-disable react/prop-types */

function Header({onCreate}) {
  return (
    <div className=" bg-amber-900 w-full h-12 flex justify-between px-6">
        <p className="uppercase text-white mt-3 ml-6">Syafiq Simple Project</p>
        <button onClick={onCreate} className="bg-slate-50 h-6 w-32 rounded-xl mt-3 shadow-sm shadow-black" >
            Create Post
        </button>
    </div>
  )
}

export default Header