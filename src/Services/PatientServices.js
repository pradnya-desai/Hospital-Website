import http from '../http-common'

const addPatientQuery=(postQuery)=>{
    return http.post("/savePatientQuery",postQuery)
} 

export default {addPatientQuery}