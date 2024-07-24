import axios from "axios"

//export const API_BASE_URL = "http://localhost:5454"
export const API_BASE_URL = "https://ecommerce-server-production-cb9d.up.railway.app/"

const jwt=localStorage.getItem("jwt")

export const api=axios.create({
    baseURL:API_BASE_URL,
    headers:{
        "Authorization":`Bearer ${jwt}`,
        'Content-Type':"application/json"
    }
})