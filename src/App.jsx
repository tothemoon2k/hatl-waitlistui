import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import questionIcon from "../public/assets/bxs_user-circle.png";
import winkIcon from "../public/assets/ph_smiley-wink-fill.png";
import hattlLogo from "../public/assets/LOGO MAIN 1.png";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-screen bg-[#121114]'>
      <nav className='flex justify-between items-center pt-7 px-4'>
        <img className='h-10' src={hattlLogo} alt="" />

        <div className='flex items-center gap-4'>
          <img className='h-10' src={questionIcon} alt="Question Icon" />

          <button className='bg-white flex py-2.5 px-4 rounded-full gap-2.5 font-light'>
            <img className='h-6' src={winkIcon} alt="" />
            Join beta
          </button>
        </div>
      </nav>
    </div>
  )
}

export default App
