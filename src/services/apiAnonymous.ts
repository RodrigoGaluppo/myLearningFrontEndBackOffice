import axios from "axios"


const api = axios.create({
    //https://my--menu.herokuapp.com/
    baseURL:"http://172.171.202.88/anonymous/" ,
})

export default api