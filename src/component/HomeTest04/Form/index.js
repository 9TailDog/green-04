import React from 'react'
import Input from '../Input'
import { useMemo } from 'react'

const Form = ({ list, formData, onSubmit, onChange}) => {

    const disabled = useMemo(() => {
        return !formData.name || !formData.email
    }, [formData])

    return (
        <div>
            <div id="modal-form-user" className="modal" >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title"> { formData.id ? 'Edit' : 'Create'} Users</h5>
                            <button 
                                className="btn-close" 
                                data-bs-dismiss="modal" 
                                aria-label="Close" 
                            />
                        </div>

                        <div className="modal-body">
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
                        
                        <div className="modal-footer">
                            <button disabled={disabled} onClick={onSubmit}> Submit </button>
                            <button className="btn btn-secondary" data-bs-dismiss="modal"> Cancel </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )  
}
export default Form;