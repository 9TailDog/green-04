import React, { useState } from "react";
import FormUser from "../../component/FormUser";
import {createUser} from '../../component/apisUser/users'

const DEFAULT_FORM_USER = {name : '', email : ''}

const UserCreate = () => {
    const [formData, setFormData] = useState(DEFAULT_FORM_USER)

    const onChange = (ev) => {
        const name = ev.target.name
        const value = ev.target.value

        setFormData ({
            ...formData,
            [name] : value     
        })         
    }

    const onSubmit = () => {
        createUser(formData)
        .then((response) => {
            setFormData({name : '', email : ''})
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div>
            <h5>UserCreate</h5>
            <FormUser formData={formData} onChange={onChange} onSubmit={onSubmit}/>
        </div>
    )
} 
export default UserCreate;