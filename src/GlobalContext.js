import React from 'react'
import { GlobalContextData } from './GlobalContextData'
import App from './App'
import { names } from './data'

const GlobalContext = () => {

    const [nameData, setName ] = React.useState(names)

  return (
    <>
    <GlobalContextData.Provider value={{nameData}} >
        <h3>GlobalContext</h3>
        <App />
    </GlobalContextData.Provider>
    </>
  )
}

export default GlobalContext
