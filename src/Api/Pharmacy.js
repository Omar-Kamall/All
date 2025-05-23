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
);

export const pharmacy_Get_Data = async () => {
    try{
        const res = await Api.get("/pharmacy");
        return res.data;
    }catch(error){
        console.error(error);
    }
};

export const pharmacy_Post_Data = async ({
    id , medicinename , category , price , quantity ,
    manufacturer , description , expiredate}) => {
    try{
        const res = await Api.post("/pharmacy/addpharmacy" , {
        id , medicinename , category , price , quantity ,
        manufacturer , description , expiredate });
        return res.data;
    }catch(error){
        console.error(error);
    }
};

export const pharmacy_Update_Data = async ({
    props , medicinename , category , price , quantity ,
    manufacturer , description , expiredate}) => {
    try{
        const res = await Api.put(`/pharmacy/updatepharmacy/${props.id}`,{
        medicinename , category , price , quantity ,
        manufacturer , description , expiredate});
        return res.data;
    }catch(error){
        console.error(error);
    }
};

export const pharmacy_Delete_Data = async (props) => {
    try{
        const res = await Api.delete(`/pharmacy/deletepharmacy/${props.id}`);
        return res.data;
    }catch(error){
        console.error(error);
    }
};