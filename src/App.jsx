
//It's the code which is commented ( not good in css)
// and below this code you get the better css having code (uncommented).

// import { useState, useCallback  } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { useEffect } from 'react'
// // import { useCallback } from 'react'

// function App() {
//   const [count, setCount] = useState(0)
//   const [password, setPassword]= useState("hello");
//   const [numberCheck, setNumberCheck]= useState(false);
//   const [charCheck, setCharCheck]= useState(false);
//   const [sliderLength, setSliderLength] = useState(10);

//   const passwordGeneratorusingCallback=useCallback(()=>{
//     let material="abcdefghijklmnpqrstuvwxyz";
//     if(numberCheck) material+="123456789";
//     if(charCheck) material+="!@#$%^&*()_+=-";
//     let pass="";
//     for(let i=0;i<sliderLength;i++){
//       let random= Math.floor(Math.random()* material.length)
//       pass+=material[random];
//     }
//     setPassword(pass);
//   },[sliderLength, numberCheck, charCheck])
//   useEffect(()=>{
//     passwordGeneratorusingCallback();
//   },[sliderLength, numberCheck, charCheck, passwordGeneratorusingCallback]);

  
//   // const copytoclipboard=useCallback(()=>{
//   //   window.navigator.clipboard.writeText(password);
//   // },[password])
//   return (

//     <>

//       <div className='h-screen w-full bg-gray-900 text-white flex justify-center items-center'>
//         <div className='bg-gray-600 bg-opacity-50 py-5 px-9 rounded-2xl w-[600px]'>
//           <div className='w-[400px]'>
//             <input
//             type='text' className='py-2  w-full'
//             placeholder={password}
//             readOnly
            
//             />
//             {/* <button className='' onClick={copytoclipboard}>
//               copy
//             </button> */}
//           </div>
//           <div>
//             <input type='range' max={40} min={5} value={sliderLength}  onChange={(e)=>{setSliderLength(e.target.value)}}/>
//             <label>{sliderLength}</label>
         
//           </div>
//           <div>
//             <input type='checkbox' onChange={(e)=>{setNumberCheck(e.target.checked)}} />
//             <label> Numbers</label>
//           </div>
//           <div>
//             <input type='checkbox'  onChange={(e)=>{setCharCheck(e.target.checked)}}/>
//             <label> Special Character</label>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default App
 

// now here comes the better css having code which improved the css a lot
import { useState, useCallback, useEffect } from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState('YourPassword');
  const [numberCheck, setNumberCheck] = useState(false);
  const [charCheck, setCharCheck] = useState(false);
  const [sliderLength, setSliderLength] = useState(10);

  const passwordGenerator = useCallback(() => {
    let material = 'abcdefghijklmnpqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (numberCheck) material += '123456789';
    if (charCheck) material += '!@#$%^&*()_+=-';
    let pass = '';
    for (let i = 0; i < sliderLength; i++) {
      let random = Math.floor(Math.random() * material.length);
      pass += material[random];
    }
    setPassword(pass);
  }, [sliderLength, numberCheck, charCheck]);

  useEffect(() => {
    passwordGenerator();
  }, [sliderLength, numberCheck, charCheck, passwordGenerator]);

  return (
    <div className="h-screen w-full bg-gray-900 flex justify-center items-center text-white">
      <div className="bg-gray-800 bg-opacity-60 shadow-xl py-8 px-10 rounded-3xl w-[450px] backdrop-blur-md">
        <h1 className="text-2xl font-semibold text-center mb-4">Password Generator</h1>
        
        {/* Password Display */}
        <div className="relative mb-4">
          <input
            type="text"
            className="w-full py-3 px-4 bg-gray-700 text-lg rounded-md border-none focus:ring-2 focus:ring-yellow-500 outline-none"
            value={password}
            readOnly
          />
        </div>

        {/* Slider Control */}
        <div className="flex items-center justify-between mb-4">
          <label className="text-lg">Length: {sliderLength}</label>
          <input
            type="range"
            max={40}
            min={5}
            value={sliderLength}
            onChange={(e) => setSliderLength(e.target.value)}
            className="w-2/3 accent-yellow-500"
          />
        </div>

        {/* Checkboxes */}
        <div className="flex flex-col gap-3 mb-6">
          <label className="flex items-center gap-2">
            <input type="checkbox" onChange={(e) => setNumberCheck(e.target.checked)} className="accent-yellow-500" />
            Include Numbers
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" onChange={(e) => setCharCheck(e.target.checked)} className="accent-yellow-500" />
            Include Special Characters
          </label>
        </div>

        {/* Generate Button */}
        <button
          onClick={passwordGenerator}
          className="w-full bg-yellow-500 text-gray-900 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition duration-300"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;

