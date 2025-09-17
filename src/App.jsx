import React, { useEffect } from 'react'
import { useState } from 'react'

const App = () => {  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // ✅ Verifications
  const [emailVerify, setEmailVerify] = useState(true);
  const [passwordVerify, setPasswordVerify] = useState(true);
  const [confirmPasswordVerify, setConfirmPasswordVerify] = useState(true);

  // ✅ Classes
  const [emailClass, setEmailClass] = useState("border-[1.4px] rounded-sm w-full pl-1 h-8");
  const [passwordClass, setPasswordClass] = useState("border-[1.4px] rounded-sm w-full pl-1 h-8");
  const [confirmPasswordClass, setConfirmPasswordClass] = useState("border-[1.4px] rounded-sm w-full pl-1 h-8");

  useEffect(() => {
    // --- Email ---
    if (email.includes("@gmail.com") && email.length > 0) {
      setEmailVerify(true);
      setEmailClass("border-[1.4px] rounded-sm w-full pl-1 h-8 border-green-500");
    } else {
      setEmailVerify(false);
      setEmailClass("border-[1.4px] rounded-sm w-full pl-1 h-8 border-red-500");
    }

    // --- Password ---
    if (password.length >= 8) {
      setPasswordVerify(true);
      setPasswordClass("border-[1.4px] rounded-sm w-full pl-1 h-8 border-green-500");
    } else {
      setPasswordVerify(false);
      setPasswordClass("border-[1.4px] rounded-sm w-full pl-1 h-8 border-red-500");
    }

    // --- Confirm Password ---
    if (confirmPassword === password && confirmPassword.length > 0) {
      setConfirmPasswordVerify(true);
      setConfirmPasswordClass("border-[1.4px] rounded-sm w-full pl-1 h-8 border-green-500");
    } else {
      setConfirmPasswordVerify(false);
      setConfirmPasswordClass("border-[1.4px] rounded-sm w-full pl-1 h-8 border-red-500");
    }
  }, [email, password, confirmPassword]);
  
  const submitForm =(e)=>{
    e.preventDefault()
     if(emailVerify && passwordVerify && confirmPasswordVerify){
              alert("Form submitted successfully")
            }else{
              alert("Can't submit the form")
            }
  }
  return (
    <div className='flex justify-center items-center bg-[#181818] h-screen w-full overflow-hidden'>
      <form action="" className='flex items-center flex-col shadow-sm bg-white shadow-white h-120 md:h-100 w-[90%] sm:w-80 border-1 border-white rounded-sm'>
      <h1 className='text-4xl font-bold md:mt-2 mt-10'>Login </h1>
     <div className='w-full px-4 h-70 flex justify-center items-center flex-col gap-y-2'>
       <label htmlFor="" className='w-full'>Email <br />
        <input onChange={(e)=>{setEmail(e.target.value)}} type="email" className={emailClass} placeholder='example@gmail.com' /> <br />
        {!emailVerify && <p className='text-red-500 text-[0.75rem]'>Invalid email format</p>}
      </label>
      <label htmlFor="" className='w-full'>Password <br />
        <input onChange={(e)=>{setPassword(e.target.value)}} type="password" className={passwordClass} placeholder='*********'/> <br />
        {!passwordVerify && <p className='text-red-500 text-[0.75rem]'>Password must be at least 8 characters</p>}
      </label>
      <label htmlFor="" className='w-full'>Confirm-Password <br />
        <input onChange={(e)=>{setConfirmPassword(e.target.value)}} type="password" className={confirmPasswordClass} placeholder='*********' /> <br />
        {!confirmPasswordVerify && <p className='text-red-500 text-[0.75rem]'>Password do not match</p>}
      </label>
     </div>
          <button onClick={(e)=>{submitForm(e)}}
      className="relative group bg-black text-white h-12 w-36 hover:h-14 hover:w-40 duration-300 cursor-pointer rounded-sm border border-gray-800 overflow-hidden"
      type="button"
    >
      <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-100 group-hover:opacity-0 pointer-events-none">
        Submit
      </span>

      <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100 pointer-events-none">
        Click to Submit
      </span>
    </button>
      </form>
    </div>
  )
}

export default App
