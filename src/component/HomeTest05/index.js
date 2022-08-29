import React, { useEffect, useMemo, useState } from "react"
import Form from './Form'
import List from './List'
import './style.css'
import {getOraganizations, createOraganization, editOraganization, deleteOraganization} from '../apiOrganization'
import ModalView from './ModalView'

const DEFAULT_FORM_Oraganization = {organization : '', location : ''}

const validate = (list, formData) => {
    if (!formData.organization || !formData.location) {
        return false
    }
    
    //Create
    if (!formData.id) {
        const item = list.find((item) => {
            return  item.location === formData.location && item.organization === formData.organization
        })
        return item ? false : true //Neu find ra item trung thi tra ve false
    }

    //Edit
    if (formData.id) {
        const item = list.find((item) => {
            return item.id !== formData.id && item.location === formData.location && item.organization === formData.organization
        })
        return item ? false : true 
    }
}

const HomeTest05 = () => {
    const [selectedId, setSelectedId] = useState()
    const [list, setList] = useState([])
    const [formData, setFormData] = useState({organization : '', location : ''})
    const [search, setSearch] = useState ('')
    const onChange = (ev) => {
        const organization = ev.target.organization
        const value = ev.target.value

        setFormData ({
            ...formData,
            [organization] : value     
        })         
    }
    
    const resultList = useMemo( () => { // search
        if(search) {
            const newResultList = list.filter((item) => {
                return item.organization.includes(search) || item.location.includes(search)
            })
            return newResultList
        }

        return list
        
    }, [search, list])
    
    const fetchData = () => { //get data from mockapi
        getOraganizations().then(response => {
            setList(response.data)
        })
        .catch(error =>{
            console.log(error)
        })
    }

    useEffect (() => { //get data from mockapi
        fetchData()
    }, [])

    // getOraganizations >> return arr Oraganizations
    // createOraganization >> tao them 1 Oraganization
    // doi tao xong getOraganizations de tao du lieu
    const onSubmit = () => {

        const isValidate = validate(list, formData)
        
        if(isValidate) {
            //Create
            if (!formData.id) {
                console.log(formData)
                createOraganization(formData)
                .then((response) => {
                    fetchData()
                    setFormData({organization : '', location : ''})
                })
                .catch(error => {
                    console.log(error)
                })
            }
            // Edit
            if (formData.id) {
                editOraganization(formData.id, formData)
                .then((response) => {
                    fetchData()
                    setFormData({organization : '', location : ''})
                })
            }
        
        const element = document.querySelector('#modal-form-oraganization')
        const modal = window.bootstrap.Modal.getOrCreateInstance(element)
        modal.hide()
    }}

    const onCreate = () => {
        setFormData(DEFAULT_FORM_Oraganization)

        const element = document.querySelector('#modal-form-oraganization')
        const modal = window.bootstrap.Modal.getOrCreateInstance(element)
        modal.show()
    }

    const onDelete = id => {
        deleteOraganization(id).then((response) => {fetchData()}).catch((error) => {console.log(error)})

        const element = document.querySelector('#modal-delete-oraganization')
        const modal = window.bootstrap.Modal.getOrCreateInstance(element)
        modal.hide()
    }

    const onSearch = (e) => {
        const value = e.target.value
        
        setSearch(value)
    }
    
    const onEdit = (data) => {
        setFormData(data)
        const element = document.querySelector('#modal-form-oraganization')
        const modal = window.bootstrap.Modal.getOrCreateInstance(element)
        modal.show()
    }

    const onView = id => {
        setSelectedId(id)
        const element = document.querySelector('#modal-view-oraganization')
        const modal = window.bootstrap.Modal.getOrCreateInstance(element)
        console.log(id, element)
        modal.show()
    }
    
    return (
        
        <div>
            <header classname="header row">
                
                <h4 classname="col-7"> Oraganization </h4>

                <div classname="col-3">
                    <input class="form-control" value={search} onChange={onSearch} placeholder=" Type to search : " />
                </div>

                <div classname="col-2">
                    <button classname="btn btn-secondary" onClick={onCreate}>Create Organizations</button>
                </div>
                
            </header>

            <Form list={list} formData={formData} onChange={onChange} onSubmit={onSubmit} onView={onView} />

            { 
                resultList.length === 0 && (
                <div> No data found </div>
            )}

            <List list={resultList} onEdit={onEdit} onDelete={onDelete} formData={formData} onChange={onChange} onView={onView} />

            <ModalView id={selectedId}/>
        </div>
    )
    
} 
export default HomeTest05