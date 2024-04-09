import axios from "axios";

const axiospublic = axios.create({
    baseURL : 'https://d-gray-server-uzc1-kbxhuxkdq-mahadimhs787gmailcoms-projects.vercel.app/'
})

const useAxios = () => {
    return axiospublic;
}

export default useAxios;