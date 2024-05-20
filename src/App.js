import './App.css';
import HoneyCombController from './Components/HoneyCombController';
import React,{ useEffect, useState } from 'react';
import WordList from './Components/WordList';
import MainScreen from './Components/MainScreen';
function App() {
  const [isTurkish, setIsTurkish] = useState(false)
  const [foundedWords, setFoundedWords] = useState([])
  const [finished, setFinished] = useState(false)
  const [started, setStarted] = useState(false)
  return (
    <>
      <div className='main flex relative'>
        {finished ? <div className='absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2'><p className='font-semibold text-3xl'>asdqwe</p></div> : started ? <div className=' self-center mx-[25%] w-full max-xl:mx-[10%] max-lg:mx-3'> <div className='grid grid-cols-2 max-lg:flex max-lg:flex-col-reverse'>
          <HoneyCombController isTurkish={isTurkish} foundedWords={foundedWords} setFoundedWords={setFoundedWords} setFinished={setFinished}></HoneyCombController>
          <WordList foundedWords={foundedWords}></WordList>
        </div> </div> : <MainScreen isTurkish={isTurkish} setIsTurkish={setIsTurkish} setStarted={setStarted}></MainScreen>}
      </div>
    </>
  );
}

export default App;
