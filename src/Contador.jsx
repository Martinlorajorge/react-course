import { useState } from 'react'

export function Counter () {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => {
        setCounter(counter + 10)
      }}
      >Sumar
      </button>
      <button onClick={() => {
        if (counter !== 0) {
          setCounter(counter - 10)
        }
      }}
      >Restar
      </button>
    </div>
  )
}
