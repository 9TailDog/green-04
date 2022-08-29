import axios  from "axios";

export const getOraganizations = () => {
    return axios.get('https://6305e06cdde73c0f844d7ac9.mockapi.io/Organizations/')
}

export const getOraganization = (id) => {
    return axios.get(`https://6305e06cdde73c0f844d7ac9.mockapi.io/Organizations/${id}`)
}

export const createOraganization = (formData) => {
    return axios.post('https://6305e06cdde73c0f844d7ac9.mockapi.io/Organizations/', formData)
}

export const editOraganization = (id, formData) => {
    return axios.put(`https://6305e06cdde73c0f844d7ac9.mockapi.io/Organizations/${id}`, formData)
}

export const deleteOraganization = (id) => {
    return axios.delete(`https://6305e06cdde73c0f844d7ac9.mockapi.io/Organizations/${id}`)
}

