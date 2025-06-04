import axios from "axios";

const Api = axios.create({
    baseURL: "http://localhost:8070/api/v1/staff",
    headers: {
        "Content-Type": "application/json",
    }
})

Api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if(token)
        config.headers.Authorization = token;
    return config;
},
    (error) => {
        return Promise.reject(error);
    }
)

export const Staff_Get_Data = async () => {
    try{
        const res = await Api.get("/getdata")
        return res.data
    }catch(error){
        console.error(error);
        throw error;
    }
}

export const Staff_Post_Data = async ({
    firstname , lastname , gender ,
    role , mobilnumber , email , adress ,
    national_identity_card , date_of_birth , password }) => {
    try{
        const res = await Api.post(`/addStaff`,{
        firstname , lastname , gender ,
        role , mobilnumber , email , adress ,
        national_identity_card , date_of_birth , password})
        return res.data
    }catch(error){
        console.error(error);
        throw error;
    }
}

export const Staff_Update_Data = async ({
    id , firstname , lastname , gender ,
    role , mobilnumber , email , adress ,
    national_identity_card , rebort , password}) => {
    try{
        const res = await Api.put(`/${id}` , {
        id , firstname , lastname , gender ,
        role , mobilnumber , email , adress ,
        national_identity_card , rebort , password})
        return res.data
    }catch(error){
        console.error(error);
        throw error;
    }
}

export const Staff_Delete_Data = async (id) => {
    try{
        const res = await Api.delete(`/${id}`)
        return res.data
    }catch(error){
        console.error(error);
        throw error;
    }
}