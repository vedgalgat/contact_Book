import { useContext, useState } from "react";
import { contactData } from "../context/ContactContext";
import { toast } from "react-toastify";

const ContactList = () => {
  // ✅ Fix: Use context correctly
  const { data, setData } = useContext(contactData);
  const [selectedContact, setSelectedContact] = useState(null);

  // ✅ Delete handler (no stale data)
  const handleDelete = (contactToDelete) => {
    setData(prevData =>
      prevData.filter(contact => contact.email !== contactToDelete.email)
    );
    toast.success("Contact deleted successfully",{
      autoClose: 1000 ,
      direction:left
    });
  };

  // ✅ Edit handler
const handleEdit = (contactToEdit) => {
  const updatedName = prompt("Enter new name", contactToEdit.name);
  const updatedEmail = prompt("Enter new email", contactToEdit.email);
  const updatedMobile = prompt("Enter new mobile", contactToEdit.mobile);

  if (updatedName && updatedEmail && updatedMobile) {
    const updatedContact = {
      ...contactToEdit,
      name: updatedName,
      email: updatedEmail,
      mobile: updatedMobile,
    };

    setData((prevData) =>
      prevData.map((contact) =>
        contact.email === contactToEdit.email ? updatedContact : contact
      )
    );

    toast.success("Contact updated successfully");
  } else {
    toast.error("All fields are required to update contact");
  }
};


  const handleClose = () => setSelectedContact(null);


  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      handleClose();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      handleSubmit(submit);
    }
  });

  return (
    <div className="p-8 sm:p-10 lg:p-16 bg-gradient-to-br from-pink-950 via-gray-800 to-white/30 min-h-screen">
      <h1 className="text-6xl font-bold mb-12 text-center text-white tracking-widest drop-shadow-md ">
        📖 My Contacts
      </h1>

      {/* Contact Detail View */}
      {selectedContact && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/96 flex items-center justify-center z-50">
          <div className="bg-balck rounded-3xl p-30 relative w-[90%] max-w-2xl shadow-[0_0_30px_rgba(0,255,255,0.4)] border-2 border-cyan-400">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-3xl hover:text-red-600 hover:bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center transition"
            >
              ✖
            </button>
            <h2 className="text-5xl font-bold text-center text-white mb-6 tracking-wide">
              👤 {selectedContact.name}
            </h2>
            <p className="text-2xl text-white mb-4 border-b border-gray-300 pb-2">
              <strong>📧 Email:</strong> {selectedContact.email}
            </p>
            <p className="text-2xl text-white border-b border-gray-300 pb-2">
              <strong>📱 Mobile:</strong> {selectedContact.mobile}
            </p>
          </div>
        </div>
      )}

      {/* Contact Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5  gap-y-10 w-full">
        {data.length === 0 ? (
          <p className="col-span-full text-center text-red-800 text-2xl animate-bounce">
            No contacts added yet.
          </p>
        ) : (
          data.map((contact, index) => (
            <div
              key={index}
              className="bg-white/3 backdrop-blur border border-gray-700 rounded-2xl p-8 shadow-2xl transform hover:scale-[1.02] transition-all duration-300 ease-in-out hover:shadow-cyan-100 hover:border-red-800 cursor-pointer"
              onClick={(e) => {
                if (e.target.tagName.toLowerCase()!== "button") {
                  setSelectedContact(contact)
                }
              }}
            >
              {/* Avatar */}
              <div className="flex items-center mb-4">
                <div className="h-11 w-11 rounded-full bg-cyan-500 flex items-center justify-center text-red-500 text-3xl font-bold mr-4 shadow-md">
                  {contact.name?.charAt(0).toUpperCase()}
                </div>
                <h2 className="text-2xl font-bold text-yellow-300">{contact.name}</h2>
              </div>

              {/* Email */}
              <div className="flex items-center mb-2">
                <span className="h-11 w-11 rounded-full bg-cyan-800 flex items-center justify-center text-red-500 text-2xl font-bold mr-3 shadow-md">📨</span>
                <p className="text-white text-[22px] truncate">{contact.email}</p>
              </div>

              {/* Mobile */}
              <div className="flex items-center mb-4">
                <span className="h-11 w-11 rounded-full bg-cyan-800 flex items-center justify-center text-red-500 text-2xl font-bold mr-3 shadow-md">📞</span>
                <p className="text-yellow-300 text-2xl">{contact.mobile}</p>
              </div>

              {/* Buttons */}
              <div className="flex justify-between mt-4 px-2">
                <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-md" onClick={() => handleEdit(contact)}>✏️ Edit</button>
                <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-md" onClick={() => handleDelete(contact)}>🗑️ Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ContactList;
