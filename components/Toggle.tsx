import { useState } from 'react'

const Toggle = () => {
  const [isActive, setIsActive] = useState(false)
  const toggleClass = ' transform translate-x-5'

  return (
    <div className="flex flex-col justify-center items-center ">
      <div
        className={`w-12 h-5 flex items-center rounded-full p-1 cursor-pointer ${
          isActive ? 'bg-primary' : 'bg-gray-300'
        }`}
        onClick={() => {
          setIsActive(!isActive)
        }}
      >
        <div
          className={
            'bg-white h-4 w-4 rounded-full shadow-md transform duration-300 ease-in-out' +
            (isActive ? toggleClass : null )
          }
        ></div>
      </div>
    </div>
  )
}

export default Toggle
