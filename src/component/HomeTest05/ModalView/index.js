import React, { useState, useEffect } from 'react';
import { getOraganization } from '../../apiOrganization';

const ModalView = ({id}) => {
    const[data, setData]= useState({})

    useEffect(() => {
        if (id) {
            getOraganization(id)
            .then(response => {
                setData(response.data)
            })
            .catch((error) => {
                 console.log(error)
            })
        }
    }, [id])
    
    return (
            <div id='modal-view-oraganization' className='modal fade' >
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title'> View Oraganization </h5>
                            <button className='btn-close' data-bs-dismiss='modal' />
                        </div>

                        <div className='modal-body'>
                            <div class='mb-3'>
                                Organization: {data.organization}
                            </div>

                            <div class='mb-3'>
                                Location: {data.location}
                            </div>

                            <div class='mb-3'>
                                Join Date: {data.joindate}
                            </div>
                            
                        </div>
                        
                        <div className='modal-footer'>
                            <button className='btn btn-secondary' data-bs-dismiss='modal'> Cancel </button>
                        </div>
                    </div>
                </div>
            </div>
    )  
}
export default ModalView