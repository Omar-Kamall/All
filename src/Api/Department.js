import axios from "axios";

const Api = axios.create({
    baseURL: "http://localhost:8070/api/v1/department",
    headers: {
        "Content-Type": "application/json",
    }
})

export const Department_Data = async () => {
    try {
        const res = await Api.get("/department");
        return res.data;
    } catch(error) {
        console.error(error);
    }
}