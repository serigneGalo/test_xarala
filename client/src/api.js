import axios from 'axios';

const url= "http://localhost:8080/api"

export const getUsers = async ()=>{
    return await axios.get(`${url}/users`)
}

export const addUser = async(user)=>{
    return await axios.post(`${url}/user`, user)
}

export const deleteUser = async(id)=>{
    return await axios.delete(`${url}/user/${id}`)
}

 export const getUser = async(id)=>{
    return await axios.get(`${url}/user/${id}`)
}

export const editUser = async(id,user)=>{
    return await axios.put(`${url}/user/${id}`,user)
}