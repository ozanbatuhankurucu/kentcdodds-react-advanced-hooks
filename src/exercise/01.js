// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const countReducer = (currentCount, obj) => {
  return {
    count: currentCount.count + obj.count,
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, setCount] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state

  const increment = () =>
    setCount({
      count: step,
    })
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
