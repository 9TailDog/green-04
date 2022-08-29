import React, { useState } from "react";

const Form = ({formData, onChange, name}) => {
    return (
        <div class="mb-3">
            <label for="for-email" class="form-label"> {name} </label>
            <input type="text" id="form-email" name={name} onChange={onChange} class="form-control" value={formData[name]}/>
        </div>
    )  
}
export default Form;