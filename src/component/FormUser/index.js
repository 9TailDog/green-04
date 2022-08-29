import React from 'react'
import Input from '../HomeTest04/Input'
import { useMemo } from 'react'

const FormUser = ({ list, formData, onSubmit, onChange}) => {
    const disabled = useMemo(() => {
        return !formData.name || !formData.email
    }, [formData])

    return (
        <div>
            <div>
                <div class="mb-3">
                    <Input
                        list={list}
                        name='name'
                        formData={formData}
                        onChange={onChange}
                    />
                </div>

                <div class="mb-3">
                <Input
                        list={list}
                        name='email'
                        formData={formData}
                        onChange={onChange}
                    />
                </div>
            </div>
            
            <div>
                <button onClick={onSubmit} disabled={disabled}> Submit </button>
                <button className="btn btn-secondary"> Back </button>
            </div>      
        </div>
        
    )  
}
export default FormUser;