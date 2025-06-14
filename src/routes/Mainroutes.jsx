import { Route, Routes } from 'react-router-dom'
import AddContact from "../pages/AddContact"
import ContactList from "../pages/ContactList"


const Mainroutes = () => {
  return (
    <>

      <Routes>
        <Route path='/' element={<AddContact />} />
        <Route path='contactlist' element={<ContactList />} />
      </Routes>



    </>
  )
}

export default Mainroutes