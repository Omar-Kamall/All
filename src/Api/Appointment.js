import axios from "axios";

const Api = axios.create({
    baseURL: "http://localhost:8070/api/v1/appointment",
    headers: {
        "Content-Type" : "application/json",
    }
})

Api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
    }return config},
    (error) => {
        return Promise.reject(error);
    }
)

export const Appointment_Post_Data = async ({
    firstname , lastname , email ,
    mobilnumber , adress , national_identity_card , date_of_birth ,
    gender , appointment_date , department_name , doctor_name }) => {
        try{
            const res = await Api.post("/addappointment" , {
                firstname , lastname , email ,
                mobilnumber , adress , national_identity_card , date_of_birth ,
                gender , appointment_date , department_name , doctor_name
            })
            return res.data;
        }catch(error){
            console.log(error);
            throw error;
        }
}

export const Appointment_Get_Data = async () => {
    try{
        const res = await Api.get("/getdata");
        return res.data
    }catch(error){
        console.log(error);
        throw error;
    }
}