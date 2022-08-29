import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {getUser, editUser} from '../../component/apisUser/users'
import FormUser from "../../component/FormUser";

const DEFAULT_FORM_USER = {name : '', email : ''}

const UserEdit = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [formData, setFormData] = useState(DEFAULT_FORM_USER)

        useEffect (() => {
            getUser(id)
            .then(response => {
                setFormData(response.data)
            })
            .catch(error =>{
                console.log(error)
            })
        }, [id])

        const onChange = (ev) => {
            const name = ev.target.name
            const value = ev.target.value
    
            setFormData ({
                ...formData,
                [name] : value     
            });     
        };

        const onSubmit = () => {
            editUser(formData.id, formData)
            .then((response) => {
                navigate('/users')
            })
            .catch(error =>{
                console.log(error)
            })
        }

        return (
            <div>
                <h5>User Edit {id}</h5>
                <FormUser formData={formData} onChange={onChange} onSubmit={onSubmit}/>
            </div>
        )
        
    }  

export default UserEdit;