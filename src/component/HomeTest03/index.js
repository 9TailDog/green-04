import React, { useState } from "react";
const HomeTest03 = () => {
    const [name, setName] = useState('')
    const [list, setList] = useState([])
    const onChange = (ev) => {
        setName(ev.target.value)
    }

    const onCreate = () => {
        if(name !== '') {
            const uniqueList = list.filter((item) => {
                return item === name
            })

            if (uniqueList.length === 0 ) {
                setList([
                    ...list,
                    name
                ])
                setName('')
            }  
        }
    }

    const onDelete = (str) => {
        const newList = list.filter((item) => {
            return item !== str
        })
        setList(newList)
    }

    return (
        <div className='App'>
            <input value={name} onChange={onChange}/>
            <button onClick={onCreate}> Add to list below</button>  
            {
                list.map((item) => {
                    return (
                        <div key={item}>
                            <div>{item}</div>
                            <button onClick={() => {onDelete(item)}}>Deleteeee</button>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default HomeTest03;