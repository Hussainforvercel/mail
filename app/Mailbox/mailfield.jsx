import React from 'react'

function Mailbox() {
  return (
    <div className='p-5'>
    <div className=' w-full border-2 h-80 rounded'> 
       <div className='bg-[#E9EBF0] p-2 '>
       <h1>Your Email Mailbox</h1>
       </div>


       <div class="mt-4 p-2">
    <p class=" text-sm text-gray-600">
      Forward, CC, or BCC emails to the following address to add them to Quomeda:
    </p>
    </div>
    <div class="p-2">
    <a href="mailto.test@gmail.com" className='text-[#5707E4]'>anna.cox@.com</a>
    </div>


    </div>

  
    
      <button 
        type="submit"
        class=" float-right px-8 py-2 border-2 border-[#5707E4] mt-2 rounded-md  text-black   "
      > Save </button>
    
  </div>
 
      
  )
}

export default Mailbox