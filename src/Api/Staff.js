import axios from "axios";

const Api = axios.create({
    baseURL: "http://localhost:8070/api/v1",
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
        const res = await Api.get("/staff")
        return res.data
    }catch(error){
        return console.error(error);
    }
}

export const Staff_Post_Data = async ({
    props , firstname , lastname , gender ,
    role , mobilnumber , email , adress ,
    national_identity_card , rebort , password , age}) => {
    try{
        const res = await Api.post(`/staff/addStaff/${props.id}`,{
        firstname , lastname , gender ,
        role , mobilnumber , email , adress ,
        national_identity_card , rebort , password , age})
        return res.data
    }catch(error){
        return console.error(error);
    }
}

export const Staff_Update_Data = async ({
    props , firstname , lastname , gender ,
    role , mobilnumber , email , adress ,
    national_identity_card , rebort , password , age}) => {
    try{
        const res = await Api.put(`/staff/${props.staffId}` , {
        firstname , lastname , gender ,
        role , mobilnumber , email , adress ,
        national_identity_card , rebort , password , age})
        return res.data
    }catch(error){
        return console.error(error);
    }
}

export const Staff_Delete_Data = async (props) => {
    try{
        const res = await Api.delete(`/staff/${props.staffId}`)
        return res.data
    }catch(error){
        return console.error(error);
    }
}