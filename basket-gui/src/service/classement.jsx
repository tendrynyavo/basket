import axios from "axios"; // uimport axios

export const getClassement = () => {
    return axios.get(
        "https://jsonplaceholder.typicode.com/users"
    );
}