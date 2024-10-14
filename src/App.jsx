import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import questionIcon from "../public/assets/bxs_user-circle.png";
import winkIcon from "../public/assets/ph_smiley-wink-fill.png";
import hattlLogo from "../public/assets/LOGO MAIN 1.png";
import phoness from "../public/assets/Frame 34427.png"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-screen bg-[#121114]'>
      <nav className='flex justify-between items-center pt-7 px-5'>
        <img className='h-10' src={hattlLogo} alt="" />

        <div className='flex items-center gap-4'>
          <img className='h-10' src={questionIcon} alt="Question Icon" />

          <button className='bg-white flex py-2.5 px-4 rounded-full gap-2.5 font-light'>
            <img className='h-6' src={winkIcon} alt="" />
            Join beta
          </button>
        </div>
      </nav>

      <h1 className='text-white mt-12 px-5 text-4xl font-medium'>
        6 free months <br /> <span className='text-gray-400'>for our first users</span>
      </h1>

      <p className='mt-6 px-5 text-gray-400'>
        We’ll launch a platform with a huge number of features that you will definitely like.
        <br />
        <br />
        And now you can become the very first user and get a god mode absolutely free.
      </p>

      <img className='mt-8' src={phoness} alt="" />
    </div>
  )
}

export default App
