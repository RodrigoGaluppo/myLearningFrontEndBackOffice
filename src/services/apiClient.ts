import axios from "axios"


const api = axios.create({
    baseURL:"http://172.171.202.88/employee/" ,
})

export default api