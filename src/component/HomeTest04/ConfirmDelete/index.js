import React from "react";
const Delete = ({onDelete, id}) => {
    return (
            <div className='modal' id='confirmDelete'>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title"> Delete User?</h5>
                        </div>
                        
                        <div className="modal-footer">
                        <button
                                className="btn btn-danger btn-sm" 
                                onClick={() => {onDelete(id)}}
                            >
                                Delete
                            </button>
                            <button className="btn btn-secondary" data-bs-dismiss="modal"> Cancel </button>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Delete;