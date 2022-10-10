import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/counterSlice'

export default function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
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
  )
}