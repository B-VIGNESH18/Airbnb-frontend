import React from 'react'

const HeaderCenter = () => {
  return (
    <div className="flex justify-center m-2">
  <div className='flex gap-2 border border-gray-300 rounded-full px-8 py-3 shadow-md shadow-gray-300 justify-center' style={{ width: "70%" }}>
    <div className='flex-1 text-center flex items-center justify-center'>AnyWhere</div>
    <div className='border-l border-gray-300 h-full'></div>
    <div className='flex-1 text-center flex items-center justify-center'>AnyWeek</div>
    <div className='border-l border-gray-300 h-full'></div>
    <div className='flex-1 text-center flex items-center justify-center'>Add Guest</div>
    <button className='bg-primary text-white p-1 rounded-full flex items-center justify-center'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    </button>
  </div>

</div>

  )  
}

export default HeaderCenter
