import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { 
        decrement,
        increment,
        reset,
        incrementByAmount
      } from '../redux/features/counterSlice'


export default function Counter() {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

  const [incrementAmount, setIncrementAmount] = useState(0)

  const addValue = Number(incrementAmount) || 0

  const resetAll = () => {
    setIncrementAmount(0)
    dispatch(reset())
  }

  return (
    <div className='flex flex-col'>
      <div >
        <div>
        <button
        className='bg-green-100 rounded-md
         m-5 px-2 py-1'
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span className='text-3xl fone-bold'>{count}</span>
        <button
        className='bg-red-100 rounded-md
         m-5 px-2 py-1'
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      </div>
      <div>
        <input
         className='border mx-4 p-2'
         type="text"
         value={incrementAmount}
                onChange={(e) => setIncrementAmount(e.target.value)}
          />
          <div>
            <button
            onClick={() => dispatch(incrementByAmount(addValue))}
            className='bg-green-100 rounded-md
         m-5 px-2 py-1'
            >Add Amount</button>
            <button
            onClick={resetAll}
            className='bg-blue-100 rounded-md
         m-5 px-2 py-1'
            >Reset</button>
          </div>
      </div>
    </div>
  )
}