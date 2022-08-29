import React from "react";

import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate()

    const onClick = () => {
        navigate('/users')
    }
    return (
        <div>
            Dashboard
            <button onClick={() =>{onClick()}}>Users</button>
        </div>
    )
}
export default Dashboard;