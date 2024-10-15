import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Footer from './footer';
import questionIcon from "../public/assets/bxs_user-circle.png";
import winkIcon from "../public/assets/ph_smiley-wink-fill.png";
import hattlLogo from "../public/assets/LOGO MAIN 1.png";
import phoness from "../public/assets/Frame 34427.png";
import laptopss from "../public/assets/Macbook Air (2022).png";
import backgroundblobs from "../public/assets/Group 49.png";
import { firestore } from "./firebase.js";
import { addDoc, collection } from '@firebase/firestore';
import './App.css';

function App() {
  const screenWidth = screen.width;
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input1Success, setInput1Success] = useState(false);
  const [input2Success, setInput2Success] = useState(false);
  const [input1Failure, setInput1Failure] = useState(false);
  const [input2Failure, setInput2Failure] = useState(false);

  const handleInput1Change = (event) => {
    setInput1(event.target.value);
  };

  const handleInput2Change = (event) => {
    setInput2(event.target.value);
  };

  const ref = collection(firestore, "signups");

  const handleInput1Submit = async() => {
    try {
      await addDoc(ref, {
        email: input1
      })
      setInput1("");
      setInput1Success(true);
      setTimeout(()=>{
        setInput1Success(false);
      }, 2000)
    } catch (error) {
      console.log(error);
      setInput1("");
      setInput1Failure(true);
      setTimeout(()=>{
        setInput1Failure(false);
      }, 2000)
    }
  }

  const handleInput2Submit = async() => {
    try {
      await addDoc(ref, {
        email: input2
      })
      setInput2("");
      setInput2Success(true);
      setTimeout(()=>{
        setInput2Success(false);
      }, 2000)
    } catch (error) {
      console.log(error);
      setInput2("");
      setInput2Failure(true);
      setTimeout(()=>{
        setInput2Failure(false);
      }, 2000)
    }
  }

  return (
    <div className='bg-[#121114] h-fit relative overflow-hidden'>
      <img className='absolute z-10 w-full object-cover opacity-70' src={backgroundblobs} alt="" />
      <div className='w-full h-fit pb-6 px-5 z-20 relative'>
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

            {screenWidth > 768 ? (
              <div className=''>
                <div className={input1Failure ? 'transition-all duration-500 mt-8 h-14 flex items-center w-full border-b-4 border-red-600' : !input1Success ? 'transition-all duration-500 mt-8 h-14 flex items-center w-full border-b-4 border-gray-400' : 'transition-all duration-500 mt-8 h-14 flex items-center w-full border-b-4 border-green-600 text-green-600'}>
                  <input className={input1Failure ? 'transition-all duration-500 bg-transparent h-full grow text-lg text-white placeholder:text-red-600' : !input1Success ? 'placeholder:transition-all placeholder:duration-500 bg-transparent h-full grow text-lg text-white' : 'transition-all duration-500 bg-transparent h-full grow text-lg text-white placeholder:text-green-600'} type="text" placeholder={input1Failure ? 'error! please try again' : !input1Success ? 'Your email' : "success! check your email"} name="" id="" value={input1}
                  onChange={handleInput1Change} />
                  <img className='h-8 hover:brightness-125 hover:scale-90 cursor-pointer transition-all duration-300' onClick={handleInput1Submit} src={input1Failure ? 'https://img.icons8.com/ios-filled/100/DC2626/delete-sign--v1.png' : !input1Success ? "https://img.icons8.com/ios-filled/100/ffffff/long-arrow-right.png" : "https://img.icons8.com/material-outlined/100/16A34A/checkmark--v1.png"} alt="" />
                </div>

                <p className='mt-7 text-gray-400'>
                  We’re really honest guys and promise not to send you ads. We will write only once when our platform is ready.
                </p>
              </div>
            ) : (
              <p></p>
            )}
          </div>
          
          {screenWidth > 768 ? (
            <div className='w-1/2 flex justify-end'>
              <img className='mt-8 w-4/5' src={laptopss} alt="" />
            </div>
          ) : (
            <img className='mt-8 w-full md:w-1/2' src={phoness} alt="" />
          )}

            {screenWidth > 768 ? (
              <p></p>
            ) : (
              <div className=''>
                <div className={input1Failure ? 'mt-10 md:mt-8 h-14 flex items-center w-full border-b-4 border-red-600 text-red-600' : !input1Success ? 'mt-10 md:mt-8 h-14 flex items-center w-full border-b-4 border-gray-400' : 'mt-10 md:mt-8 h-14 flex items-center w-full border-b-4 border-green-600 text-green-600'}>
                  <input className={input1Failure ? 'bg-transparent h-full grow text-lg text-white placeholder:text-red-600' : !input1Success ? 'bg-transparent h-full grow text-lg text-white' : 'bg-transparent h-full grow text-lg text-white placeholder:text-green-600'} type="text" placeholder={input1Failure ? 'error! please try again' : !input1Success ? 'Your email' : "success! check your email"} name="" id="" value={input1}
                  onChange={handleInput1Change}/>

                  <img className='h-8 hover:brightness-90 cursor-pointer' onClick={handleInput1Submit} src={input1Failure ? 'https://img.icons8.com/ios-filled/100/DC2626/delete-sign--v1.png' : !input1Success ? "https://img.icons8.com/ios-filled/100/ffffff/long-arrow-right.png" : "https://img.icons8.com/material-outlined/100/16A34A/checkmark--v1.png"} alt="" />
                </div>

                <p className='mt-7 text-gray-400'>
                  We’re really honest guys and promise not to send you ads. We will write only once when our platform is ready.
                </p>
              </div>
            )}
        </div>

        <h2 className='mt-14 md:mt-11 text-white text-2xl md:text-3xl font-medium md:pl-8'>Why it's cool?</h2>

        <div className='mt-7 md:mt-8 flex flex-col md:flex-row gap-10 md:px-8'>
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

        <h1 className='text-white mt-20 md:mt-32 text-4xl md:text-5xl font-semibold md:pl-8'>
          6 free months<br /> <span className='text-gray-400'>for our first users</span>
        </h1>

        <div className=''>
          <div className=''>
            <div className={input2Failure ? 'transition-all duration-500 mt-7 h-14 flex items-center w-full border-b-4 border-red-600 md:w-3/5 md:ml-8' : !input2Success ? 'transition-all duration-500 mt-8 h-14 flex items-center w-full border-b-4 border-gray-400 md:w-3/5 md:ml-8' : 'transition-all duration-500 mt-8 h-14 flex items-center w-full border-b-4 border-green-600 text-green-600 md:w-3/5 md:ml-8'}>
              <input className={input2Failure ? 'transition-all duration-500 bg-transparent h-full grow text-lg text-white placeholder:text-red-600' : !input2Success ? 'placeholder:transition-all placeholder:duration-500 bg-transparent h-full grow text-lg text-white' : 'transition-all duration-500 bg-transparent h-full grow text-lg text-white placeholder:text-green-600'} type="text" placeholder={input2Failure ? 'error! please try again' : !input2Success ? 'Your email' : "success! check your email"} name="" id="" value={input2}
                onChange={handleInput2Change} />
              <img className='h-8 hover:brightness-125 hover:scale-90 cursor-pointer transition-all duration-300' onClick={handleInput2Submit} src={input2Failure ? 'https://img.icons8.com/ios-filled/100/DC2626/delete-sign--v1.png' : !input2Success ? "https://img.icons8.com/ios-filled/100/ffffff/long-arrow-right.png" : "https://img.icons8.com/material-outlined/100/16A34A/checkmark--v1.png"} alt="" />
            </div>

            <p className='mt-7 text-gray-400 md:pl-8'>
              We’re really honest guys and promise not to send you ads. <br className='hidden md:block'/>We will write only once when our platform is ready.
            </p>
          </div>
        </div>

        <p className='mt-16 md:mt-20 mb-6 md:mb-14 text-white text-center font-medium px-8'>
          We are just starting our journey, but we promise that it will be cool!
        </p>

        <Footer/>
      </div>
    </div>
  )
}

export default App
