import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {getUser} from '../../component/apisUser/users'

const DEFAULT_FORM_USER = {name : '', email : ''}
 const UserView = () => {
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
    }, [id]);

    return (
        <div>
            User Infomation, ID : {id}
            <div class='mb-3'> Name: {formData.name} </div>
            <div class='mb-3'> Email: {formData.email} </div>
            <div class='mb-3'> Phone: {formData.Phone} </div>
            <Link to = '/users'>
                <button className="btn btn-primary">Back to list</button>
            </Link>
        </div>
    )
 }

 export default UserView