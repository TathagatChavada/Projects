import { useState } from 'react';
import './index.css';

const Clock = () =>{


    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const[time, setTime] = useState();

    setInterval(() =>{
        const newDate = new Date();
        const currentHrs = newDate.getHours();
        const currentMin = newDate.getMinutes();
        const currentSec = newDate.getSeconds();

        const currentTime = `${currentHrs} : ${currentMin} : ${currentSec}`;
        setTime(currentTime);
    }, 1000);

    const Calculate = (value) => {

        if (value === '=')  {

            try {
                const answer = eval(input);

                if (Number.isFinite(answer)) {
                    setInput(answer);
                  } 
                  
                  else {
                    setResult('Invalid Expression!!!');
                  }
    
            } catch (error) {
                setInput("Invalid Expression!!!");
                
            }

        }

        else if (value === 'AC'){
            setInput('');
            setResult('');
        }

        else if (value === 'x^2'){
            setInput((previousInput) => previousInput * previousInput);
        }
        else if (value === '+/-'){
            setInput((previousInput) => previousInput * (-1));
        }


        else {
            setInput((previousInput) => previousInput + value);
        }
    }

    return (
        <>
        <h1>Time: {time} </h1>

        <div className='grid-container'>
            <div className='calculator'>
                <input type="text" placeholder='0' 
                 value={input} readOnly/>

            <button className='round-button item-1 gray' 
            onClick={() => Calculate('AC')}>AC</button>

            <button className='round-button item-2 gray'
            onClick={() => Calculate('+/-')}>+/-</button>

            <button className='round-button item-3 gray'
            onClick={() => Calculate('%')}>%</button>

            <button className='round-button item-4 orange'
            onClick={() => Calculate('/')}>/</button>

            <button className='round-button item-5' 
            onClick={() => Calculate('7')}>7</button>

            <button className='round-button item-6'
            onClick={() => Calculate('8')}>8</button>

            <button className='round-button item-7'
            onClick={() => Calculate('9')}>9</button>

            <button className='round-button item-8 orange'
            onClick={() => Calculate('*')}>X</button>

            <button className='round-button item-9'
            onClick={() => Calculate('4')}>4</button>

            <button className='round-button item-10'
            onClick={() => Calculate('5')}>5</button>

            <button className='round-button item-11'
            onClick={() => Calculate('6')}>6</button>

            <button className='round-button item-12 orange'
            onClick={() => Calculate('-')}>-</button>

            <button className='round-button item-13'
            onClick={() => Calculate('1')}>1</button>

            <button className='round-button item-14'
            onClick={() => Calculate('2')}>2</button>

            <button className='round-button item-15'
            onClick={() => Calculate('3')}>3</button>

            <button className='round-button item-16 orange'
            onClick={() => Calculate('+')}>+</button>

            <button className='round-button item-17'
            onClick={() => Calculate('0')}>0</button>

            <button className='round-button item-18'
            onClick={() => Calculate('x^2')}>x<sup>2</sup></button>

            <button className='round-button item-19'
            onClick={() => Calculate('.')}>.</button>

            <button className='round-button item-20 orange'
            onClick={() => Calculate('=')}> = </button>
            </div>

        </div>


        </>
    )

}

export {Clock}