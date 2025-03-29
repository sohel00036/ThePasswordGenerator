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
//   const [charCheck, setCharCheck]= useState(true);
//   const [sliderLength, setSliderLength] = useState(10);
//   // const passwordGenerator=()=>{
//   //   let material="abcdefghijklmnpqrstuvwxyz";
//   //   if(numberCheck) material+="123456789";
//   //   if(charCheck) material+="!@#$%^&*()_+=-";
//   //   let pass="";
//   //   for(let i=0;i<sliderLength;i++){
//   //     let random= Math.floor(Math.random()* material.length)
//   //     pass+=material[random];
//   //   }
//   //   setPassword(pass);
//   // }
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
//   },[sliderLength, numberCheck, charCheck, setPassword])
//   useEffect(()=>{
//     passwordGeneratorusingCallback();
//   },[sliderLength, numberCheck, charCheck, passwordGeneratorusingCallback]);
//   const numberChangefun=(e)=>{
//     setNumberCheck(e.target.checked)
//     // passwordGenerator();
//     // passwordGeneratorusingCallback();
//   }
//   const charChangefun=(e)=>{
//     setCharCheck(e.target.checked)
//     // passwordGeneratorusingCallback();
//     // passwordGenerator();
//   }
//   const handlesliderfun=(e)=>{
//     setSliderLength(e.target.value);
//     // passwordGenerator();
//     // passwordGeneratorusingCallback();

//   }
//   // function copytoclipboard(){
//   //   window.navigator.clipboard.writeText(password);
//   // }
//   const copytoclipboard=useCallback(()=>{
//     window.navigator.clipboard.writeText(password);
//   },[password])
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
//             <button className='' onClick={copytoclipboard}>
//               copy
//             </button>
//           </div>
//           <div>
//             <input type='range' max={40} min={5} value={sliderLength}  onChange={(e)=>{setSliderLength(e.target.value)}}/>
//             <label>{sliderLength}</label>
         
//           </div>
//           <div>
//             <input type='checkbox' onChange={numberChangefun} checked={(numberCheck)} />
//             <label> Numbers</label>
//           </div>
//           <div>
//             <input type='checkbox' onChange={charChangefun} checked={charCheck}/>
//             <label> Special Character</label>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default App
import { useState, useCallback  } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
// import { useCallback } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [password, setPassword]= useState("hello");
  const [numberCheck, setNumberCheck]= useState(false);
  const [charCheck, setCharCheck]= useState(false);
  const [sliderLength, setSliderLength] = useState(10);

  const passwordGeneratorusingCallback=useCallback(()=>{
    let material="abcdefghijklmnpqrstuvwxyz";
    if(numberCheck) material+="123456789";
    if(charCheck) material+="!@#$%^&*()_+=-";
    let pass="";
    for(let i=0;i<sliderLength;i++){
      let random= Math.floor(Math.random()* material.length)
      pass+=material[random];
    }
    setPassword(pass);
  },[sliderLength, numberCheck, charCheck])
  useEffect(()=>{
    passwordGeneratorusingCallback();
  },[sliderLength, numberCheck, charCheck, passwordGeneratorusingCallback]);

  
  // const copytoclipboard=useCallback(()=>{
  //   window.navigator.clipboard.writeText(password);
  // },[password])
  return (

    <>

      <div className='h-screen w-full bg-gray-900 text-white flex justify-center items-center'>
        <div className='bg-gray-600 bg-opacity-50 py-5 px-9 rounded-2xl w-[600px]'>
          <div className='w-[400px]'>
            <input
            type='text' className='py-2  w-full'
            placeholder={password}
            readOnly
            
            />
            {/* <button className='' onClick={copytoclipboard}>
              copy
            </button> */}
          </div>
          <div>
            <input type='range' max={40} min={5} value={sliderLength}  onChange={(e)=>{setSliderLength(e.target.value)}}/>
            <label>{sliderLength}</label>
         
          </div>
          <div>
            <input type='checkbox' onChange={(e)=>{setNumberCheck(e.target.checked)}} />
            <label> Numbers</label>
          </div>
          <div>
            <input type='checkbox'  onChange={(e)=>{setCharCheck(e.target.checked)}}/>
            <label> Special Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
