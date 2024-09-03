

// import React, { useState} from 'react'
// // import Card from './components/Card.jsx'

// const App = () => {
//   const [count, setCount] = useState(0)
//   const [color, setColor] = useState('olive')

//   return (
//     <>
//      {/* PROJECT-1 */}
//       {/* <div className='mt-4'>
//         <h1>CLICKER</h1>
//         <button onClick={() => setCount(pre => pre + 1)}>+</button>
//         <p>Count :{count} </p>
//         <button onClick={() => setCount(pre => pre - 1)}>-</button>
//       </div> */}

//       {/* [project-2] */}
//       {/* <div className='mb-10 flex gap-5 ml-7'>
//         <Card username='raviranajn' btnText='click me' />
//         <Card username='raju' btnText='view me' />
//       </div> */}


//       {/* BACKGROUND-COLOR-CHANGER */}
//       {/* <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
//         <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
//           <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl '>
//             <button onClick={() => setColor('red')} className='outline-none px-4 py-1 rounded-full text-white ' style={{ backgroundColor: 'red' }}>Red</button>
//             <button onClick={() => setColor('green')} className='outline-none px-4 py-1 rounded-full text-white ' style={{ backgroundColor: 'green' }}>Green</button>
//             <button onClick={() => setColor('blue')} className='outline-none px-4 py-1 rounded-full text-white ' style={{ backgroundColor: 'blue' }}>Blue</button>
//             <button onClick={() => setColor('grey')} className='outline-none px-4 py-1 rounded-full text-white ' style={{ backgroundColor: 'grey' }}>Grey</button>
//             <button onClick={() => setColor('black')} className='outline-none px-4 py-1 rounded-full text-white ' style={{ backgroundColor: 'black' }}>Black</button>
//             <button onClick={() => setColor('brown')} className='outline-none px-4 py-1 rounded-full text-white ' style={{ backgroundColor: 'brown' }}>Brown</button>

//           </div>
//         </div>
//       </div> */}

//     </>
//   );



// }

// // export default App





// *****************************************************



// import React, { useState, useCallback, useEffect, useRef } from 'react';

// const App = () => {
//   const [length, setLength] = useState(8);
//   const [includeNumbers, setIncludeNumbers] = useState(false);
//   const [includeCharacters, setIncludeCharacters] = useState(false);
//   const [password, setPassword] = useState('');

//   const passwordRef = useRef(null)

//   const generatePassword = useCallback(() => {
//     let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     if (includeNumbers) charset += '0123456789';
//     if (includeCharacters) charset += '!@#$%^&*()_+~`|}{[]:;?><,./-=';

//     let generatedPassword = '';
//     for (let i = 0; i < length; i++) {
//       const randomIndex = Math.floor(Math.random() * charset.length);
//       generatedPassword += charset[randomIndex];
//     }
//     setPassword(generatedPassword);
//   }, [length, includeNumbers, includeCharacters]);

//   useEffect(() => {
//     generatePassword();
//   }, [generatePassword]);

//   const copyToClipboard = () => {
//     passwordRef.current?.select()
//     window.navigator.clipboard.writeText(password);
//     alert('Password copied to clipboard!');
//   };

//   return (
//     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 text-orange-500 bg-gray-700">
//       <div className="flex flex-col shadow rounded-lg overflow-hidden mb-4 p-4">
//         <h1 className="text-4xl text-center m-4 text-white">Password Generator</h1>
//         <div className="relative mb-4">
//           <input
//             type="text"
//             value={password}
//             placeholder="password"
//             readOnly
//             className="outline-none w-full py-2 px-3 bg-gray-800 text-white rounded"
//             ref={passwordRef}
//           />
//           <button
//             onClick={copyToClipboard}
//             className="absolute right-2 top-2 bg-orange-500 text-white py-1 px-3 rounded hover:bg-orange-600"
//           >
//             Copy
//           </button>
//         </div>
//         <div className="mb-4">
//           <label htmlFor="length" className="block text-white mb-2">Password Length</label>
//           <input
//             id="length"
//             type="range"
//             min="4"
//             max="20"
//             value={length}
//             onChange={(e) => setLength(e.target.value)}
//             className="w-full"
//           />
//           <span className="block text-white mt-2">{length}</span>
//         </div>
//         <div className="mb-4">
//           <label className="inline-flex items-center text-white">
//             <input
//               type="checkbox"
//               checked={includeNumbers}
//               onChange={(e) => setIncludeNumbers(e.target.checked)}
//               className="form-checkbox h-5 w-5 text-orange-500"
//             />
//             <span className="ml-2">Include Numbers</span>
//           </label>
//         </div>
//         <div className="mb-4">
//           <label className="inline-flex items-center text-white">
//             <input
//               type="checkbox"
//               checked={includeCharacters}
//               onChange={(e) => setIncludeCharacters(e.target.checked)}
//               className="form-checkbox h-5 w-5 text-orange-500"
//             />
//             <span className="ml-2">Include Special Characters</span>
//           </label>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;





// *************************************************************
// CURRENCY CONVERTOR


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('INR');
  const [toCurrency, setToCurrency] = useState('USD');
  const [amount, setAmount] = useState(1);  // Default to 1 to avoid zero initial conversion
  const [exchangeRate, setExchangeRate] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(1);

  // Fetch available currencies and set initial exchange rate
  useEffect(() => {
    const getCurrencies = async () => {
      try {
        const response = await axios.get('https://open.er-api.com/v6/latest/INR');
        setCurrencies(Object.keys(response.data.rates));
        setExchangeRate(response.data.rates[toCurrency]); // Initial exchange rate
      } catch (error) {
        console.error('Error fetching currency data', error);
      }
    };
    getCurrencies();
  }, []);

  // Fetch the exchange rate whenever fromCurrency or toCurrency changes
  useEffect(() => {
    const fetchExchangeRate = async () => {
      if (fromCurrency !== toCurrency) {
        try {
          const response = await axios.get(`https://open.er-api.com/v6/latest/${fromCurrency}`);
          setExchangeRate(response.data.rates[toCurrency]);
        } catch (error) {
          console.error('Error fetching exchange rate', error);
        }
      } else {
        setExchangeRate(1);
      }
    };

    fetchExchangeRate();
  }, [fromCurrency, toCurrency]);

  // Update converted amount whenever amount or exchange rate changes
  useEffect(() => {
    const calculateConversion = () => {
      setConvertedAmount((amount * exchangeRate).toFixed(2));
    };
    calculateConversion();
  }, [amount, exchangeRate]);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  return (
    <div className="max-w-md mx-auto p-4 mt-10 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Currency Converter</h1>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">From</label>
        <select
          value={fromCurrency}
          onChange={handleFromCurrencyChange}
          className="w-full px-3 py-2 border rounded"
        >
          {currencies.map(currency => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">To</label>
        <select
          value={toCurrency}
          onChange={handleToCurrencyChange}
          className="w-full px-3 py-2 border rounded"
        >
          {currencies.map(currency => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold text-center">
          {amount} {fromCurrency} = {convertedAmount} {toCurrency}
        </h2>
      </div>
    </div>
  );
};

export default App;
