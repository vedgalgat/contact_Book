import { useState, useEffect } from "react"
import { set, useForm } from "react-hook-form"
import { useContext } from "react"
import { contactData } from "../context/ContactContext"
import { toast } from "react-toastify"



const AddContact = () => {
  const { data, setData } = useContext(contactData)
  const { register, handleSubmit, reset,setValue, formState: erros } = useForm()

  const [mobile, setmobile] = useState("+91")

  useEffect(()=>{
    // console.log("welcome")
    setValue("mobile",mobile)
  },[mobile])

  const submit = (ved) => {
    console.log(data)
    reset()
    setmobile("+91 ")
    setData([...data, ved])
    toast.success("Contact Save Successfully",{
      style:{
        background:"#272727",
        color:"white"  
      }
    })
  


  }

    return (
      <>

        <div className="mx-auto my-20 px-10 py-10 w-[90%] sm:w-[60%] md:w-[40%] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-red-700 shadow-2xl rounded-2xl">
          <form
            onSubmit={handleSubmit(submit)}
            onFocus={(e) => {
              if (e.target.tagName === "INPUT") {
                e.target.setAttribute("autocomplete", "off");
              }
            }}
            className="flex flex-col gap-6"
          >
            {/* Name */}
            <div>
              <label className="text-white text-xl font-semibold block mb-1">Name 👤</label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Enter Name"
                className="w-full p-3 text-lg text-red-700 font-bold rounded-md bg-white focus:ring-4 focus:ring-red-300 transition duration-300 outline-none"
                />
               

            </div>

            {/* Email */}
            <div>
              <label className="text-white text-xl font-semibold block mb-1">Email 📩</label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Enter Email"
                className="w-full p-3 text-lg text-red-700 font-bold rounded-md bg-white focus:ring-4 focus:ring-red-300 transition duration-300 outline-none"
                />
              
            </div> 

            {/* Mobile*/}

            <div>
              <label className="text-white text-xl font-semibold block mb-1">Mobile 📞</label>
              <input
                {...register("mobile", { required: true })}
                value={mobile}
                onChange={(e) => {
                  let inputvalue = e.target.value;
                  let value = inputvalue.replace(/[^0-9+]/g, '');
                  if (!value.startsWith("+91")) {
                    value = "+91"
                  }
                  const final = value.slice(0, 13)
                  setmobile(final)
                }}
                type="text"
                placeholder="Enter Mobile"
                className="w-full p-3 text-lg text-red-700 font-bold rounded-md bg-white focus:ring-4 focus:ring-red-300 transition duration-300 outline-none"
              />
              
            </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl"
          >
            Save 💾
          </button>
        </form>
      </div>

    </>


  )
}
export default AddContact