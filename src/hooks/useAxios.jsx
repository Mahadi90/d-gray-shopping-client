import axios from "axios";

const axiospublic = axios.create({
    baseURL : 'http://localhost:5000'
})

const useAxios = () => {
    return axiospublic;
}

export default useAxios;