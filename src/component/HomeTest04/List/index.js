import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const List = ({list, onView, confirmDelete}) => {

    return (
        <div className='row'>
            {list.map((item) =>{
                    return (
                        
                        <div className='col-4'>
                            <div key={item.id} className='user'>

                                <main className='user-main'>
                                    <h6>Name : {item.name}</h6>
                                    <div>Email : {item.email}</div>
                                </main>

                                <footer className='user-footer'>
                                    <Link to ={`${item.id}/view`}>
                                        <button 
                                            className="btn btn-secondary btn-sm" 
                                        >   
                                            View 
                                        </button>
                                    </Link>
                                    <Link to ={`${item.id}/edit`}>
                                        <button 
                                            className="btn btn-secondary btn-sm" 
                                        >   
                                            Edit
                                        </button>
                                    </Link>

                                    <button 
                                        className="btn btn-danger btn-sm"
                                        onClick={() =>{confirmDelete(item.id)}}
                                    > 
                                        Delete    
                                    </button>
        
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