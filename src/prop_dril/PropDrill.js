import React from 'react'

const PropDrill = () => {

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
    <div>
        <h2>Prop drilling</h2>
        <List names ={name} removeItem = {removeItem}  />
    </div>
  )
}


const List = ({names, removeItem}) =>{
    return(
        <div>
            {names.map((item) =>{
                return(
                    <Single key={item.id} {...item} removeItem ={removeItem}  />
                )
            })}
        </div>
    )
}

function Single({id,value, removeItem}){
    return(
        <div>
            {value}
            <button onClick={() => removeItem(id)}>Remove</button>
        </div>
    )

}

export default PropDrill