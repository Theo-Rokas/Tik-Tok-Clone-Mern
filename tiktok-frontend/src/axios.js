import axios from "axios";

const instance = axios.create({
    baseURL: "https://tr-tiktok-mern-backend.herokuapp.com/",
})

export default instance