import React from 'react'

const BackButton = (props) => {
  return (
    <button {...props} className='flex py-1 px-3 rounded-3xl font-bold border border-black gap-3 bg-[#ab885b] hover:bg-[#997950] opacity-70'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
        </svg>
        <span>Back</span>
    </button>
  )
}

export default BackButton
