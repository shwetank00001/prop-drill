import React, {useContext} from 'react'
import { GlobalContextData } from '../GlobalContextData'

const Abc = () => {
  const {nameData} = useContext(GlobalContextData)
  console.log(nameData)
  return (
    <div>Abc</div>
  )
}

export default Abc