import React from "react"
const Hienthi = ({data, onDelete}) => {
    console.log(data)
    return (
        <div>
            <div>{data.name}</div>
            <div>{data.phone}</div>
            <button onClick = {() => {
                onDelete(data.id)}} > Deleteee </button> 
        </div>
    )}
export default Hienthi;