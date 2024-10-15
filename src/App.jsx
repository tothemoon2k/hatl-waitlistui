import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Footer from './footer';
import questionIcon from "../public/assets/bxs_user-circle.png";
import winkIcon from "../public/assets/ph_smiley-wink-fill.png";
import hattlLogo from "../public/assets/LOGO MAIN 1.png";
import phoness from "../public/assets/Frame 34427.png";
import laptopss from "../public/assets/Macbook Air (2022).png";
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const screenWidth = screen.width;

  return (
    <div className='w-full h-fit bg-[#121114] pb-10 px-5'>
      <nav className='flex justify-between items-center pt-7'>
        <img className='h-10' src={hattlLogo} alt="" />

        <div className='flex items-center gap-4'>
          <img className='h-10' src={questionIcon} alt="Question Icon" />

          <button className='bg-white flex py-2.5 px-4 rounded-full gap-2.5 font-light'>
            <img className='h-6' src={winkIcon} alt="" />
            Join beta
          </button>
        </div>
      </nav>

      <div className='flex flex-wrap h-fit'>
        <div className='md:w-1/2 md:pt-10 md:pl-8'>
          <h1 className='text-white mt-12 text-4xl md:text-5xl font-semibold'>
            6 free months<br /> <span className='text-gray-400'>for our first users</span>
          </h1>

          <p className='md:text-lg mt-6 text-gray-400'>
            We’ll launch a platform with a huge number of features that you will definitely like.
            <span className='block pt-5 md:pt-2'>
              And now you can become the very first user and get a god mode absolutely free.
            </span>
          </p>

          {screenWidth > 1024 ? (
            <div className=''>
              <div className='mt-8 h-14 flex items-center w-full border-b-4 border-gray-400'>
                <input className='bg-transparent h-full grow text-lg text-white' type="text" placeholder='Your email' name="" id="" />
                <img className='h-10' src="https://img.icons8.com/ios-filled/100/ffffff/long-arrow-right.png" alt="" />
              </div>

              <p className='mt-7 text-gray-400'>
                We’re really honest guys and promise not to send you ads. We will write only once when our platform is ready.
              </p>
            </div>
          ) : (
            <p></p>
          )}
        </div>
        
        {screenWidth > 1024 ? (
          <div className='w-1/2 flex justify-end'>
            <img className='mt-8 w-4/5' src={laptopss} alt="" />
          </div>
        ) : (
          <img className='mt-8 w-full md:w-1/2' src={phoness} alt="" />
        )}

          {screenWidth > 1024 ? (
            <p></p>
          ) : (
            <div className='md:w-[37%] md:relative md:-top-40 md:pl-8'>
            <div className='mt-8 h-14 flex items-center w-full border-b-4 border-gray-400'>
              <input className='bg-transparent h-full grow text-lg text-white' type="text" placeholder='Your email' name="" id="" />

              <img className='h-10' src="https://img.icons8.com/ios-filled/100/ffffff/long-arrow-right.png" alt="" />
            </div>

            <p className='mt-7 text-gray-400'>
              We’re really honest guys and promise not to send you ads. We will write only once when our platform is ready.
            </p>
          </div>
          )}
      </div>

      <h2 className='mt-8 md:mt-0 text-white text-2xl md:text-3xl font-medium md:pl-8'>Why it's cool?</h2>

      <div className='mt-6 flex flex-col md:flex-row gap-10 md:px-8'>
        <div className=''>
          <h3 className='mb-3 text-white text-xl md:text-2xl font-medium'>Games</h3>

          <p className='text-white text-sm md:text-base'>
            Love Spotify? Now imagine that we can just as well match games to fit your taste. We are already doing it.
          </p>

          <button className='mt-5 bg-[#f1753d] text-white text-xl font-medium px-9 py-2 rounded-full'>gameplay-based engine</button>
        </div>

        <div className=''>
          <h3 className='mb-3 text-white text-xl md:text-2xl font-medium'>Community</h3>

          <p className='text-white text-sm md:text-base'>
            Hattl also shows how similar your game tastes are with your friends. And hattl helps find new teammates.
          </p>

          <button className='mt-5 bg-[#5253f1] text-white text-xl font-medium px-9 py-2 rounded-full'>teammates and friends</button>
        </div>
      </div>

      <h1 className='text-white mt-12 text-4xl md:text-5xl font-semibold pl-8'>
        6 free months<br /> <span className='text-gray-400'>for our first users</span>
      </h1>

      <div className='mt-8 h-14 flex items-center w-full border-b-4 border-gray-400 w-3/5 ml-8'>
        <input className='bg-transparent h-full grow text-lg text-white' type="text" placeholder='Your email' name="" id="" />

        <img className='h-10' src="https://img.icons8.com/ios-filled/100/ffffff/long-arrow-right.png" alt="" />
      </div>

      <p className='mt-7 text-gray-400 pl-8'>
        We’re really honest guys and promise not to send you ads. <br className='hidden md:block'/>We will write only once when our platform is ready.
      </p>

      <p className='mt-16 text-white text-center font-medium px-8'>
        We are just starting our journey, but we promise that it will be cool!
      </p>

      <Footer/>
    </div>
  )
}

export default App
