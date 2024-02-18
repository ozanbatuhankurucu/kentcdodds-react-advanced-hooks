// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

const CountContext = React.createContext()

export const useCountContext = () => {
  const context = React.useContext(CountContext)

  if (!context) {
    throw new Error(
      'useCountContext must be used within a CountContextProvider',
    )
  }

  return context
}

const CountContextProvider = ({children}) => {
  const [count, setCount] = React.useState(0)
  return (
    <CountContext.Provider
      value={{
        count,
        setCount,
      }}
    >
      {children}
    </CountContext.Provider>
  )
}

function CountDisplay() {
  const {count} = useCountContext()
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const {setCount} = useCountContext()

  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <CountContextProvider>
      <div>
        <CountDisplay />
        <Counter />
      </div>
    </CountContextProvider>
  )
}

export default App
