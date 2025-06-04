import axios from "axios";

const Api = axios.create({
    baseURL: "http://localhost:8070/api/v1/user",
    headers: {
        "Content-Type" : "application/json",
    }
});

export const SignUp = async ({
    firstname , lastname , email , mobilnumber ,
    national_identity_card , date_of_birth , adress , gender , password
}) => {
    try{
        const res = await Api.post("/SignUp", {
            firstname , lastname , email , mobilnumber ,
            national_identity_card , date_of_birth , adress , gender , password,
        });
        return res.data;
    }catch(error){
        console.log(error);
        throw error;
    }
}

export const SignIn = async ({role , email , password}) => {
    try{
        const res = await Api.post(((role === "STAFF" ? `/SignIn/staff` : `/SignIn/user`) || (role === "ADMIN" && "/SignIn/staff" )) , {role , email , password})
        return res.data;
    }catch(error){
        console.log(error);
        throw error;
    }
}