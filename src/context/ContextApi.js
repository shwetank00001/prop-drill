import React, { useContext } from 'react'


const person = React.createContext()
//two components - A provider and consumer


const ContextApi = () => {
    const [name, setName] = React.useState([
        {id: 1, value:"Thing 1"},
        {id: 2, value:"Thing 2"},
        {id: 3, value:"Thing 3"}
    ])

    function removeItem(id){
        setName((item) =>{
            return(
                item.filter((name) => name.id !== id)
            )
        })
    }

  return (
    <person.Provider value={removeItem}>
        <div>
            <h2>Context API / useContecxt() </h2>
            <List names ={name}  />
        </div>
    </person.Provider>
  )
}


const List = ({names}) =>{
    return(
        <div>
            {names.map((item) =>{
                return(
                    <Single key={item.id} {...item}   />
                )
            })}
        </div>
    )
}

function Single({id,value}){

    const removeItem = useContext(person)
    return(
        <div>
            {value}
            <button onClick={() => removeItem(id)}>Remove</button>
        </div>
    )

}

export default ContextApi