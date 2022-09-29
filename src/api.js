import axios from "axios"

export function healthCareData(){
   return axios.get(`https://pharmeasy-clone.herokuapp.com/HealthcareDevices`)
}