import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="flex  items-center  bg-gray-900 h-20 w-[80%] mx-35 my-5 rounded-2xl  shadow-amber-400">
        <h1 className=" text-cyan-300 text-2xl ml-5 font-extrabold font-sans text-center  tracking-widest">Contact Book..📒✨</h1>
        <div className=' ml-50 flex gap-50 text-2xl text-white font-serif' >

          <NavLink className={(e) => e.isActive ? "text-pink-400" : ""} to="/">New Contact</NavLink>
          <NavLink className={(e) => e.isActive ? "text-pink-400" : ""} to="/ContactList">Contacts List</NavLink>
        </div>
      </div>
    </>
  )
}

export default Navbar