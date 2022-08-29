import React from 'react'
import './style.css'

const List = ({list, onView, onEdit, onDelete, onChange}) => {

    return (
        <div className='row'>
            {
                list.map((item) =>{
                    return (
                        
                        <div className='col-4'>
                            <div key={item.id} className='oraganization'>

                                <main className='oraganization-main'>
                                    <h6>Oraganization : {item.organization}</h6>
                                    <div>Location : {item.location}</div>
                                </main>

                                <footer className='oraganization-footer'>
                                    <button 
                                        className="btn btn-secondary btn-sm" 
                                        onClick = {() => {onView(item.id)}}
                                    >   
                                        View 
                                    </button>
                                    <button 
                                        className="btn btn-secondary btn-sm" 
                                        onClick = {() => {onEdit(item)}}
                                    >   
                                        Edit
                                    </button>

                                    <button className="btn btn-secondary btn-sm"
                                            data-bs-toggle='modal'
                                            data-bs-target='#modal-delete-oraganization'
                                    > 
                                        Delete    
                                    </button>
                                    <div className='modal' id='modal-delete-oraganization'>
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title"> Delete Oraganization?</h5>
                                                    </div>
                                                    
                                                    <div className="modal-footer">
                                                    <button
                                                            className="btn btn-danger btn-sm" 
                                                            onClick = {() => {onDelete(item.id)}}
                                                        >
                                                            Delete {item.organization}
                                                        </button>
                                                        <button className="btn btn-secondary" data-bs-dismiss="modal"> Cancle </button>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                </footer>
                                    
                            </div>
                        </div>
                    )
                })
            }         
        </div>
    )
}
export default List;