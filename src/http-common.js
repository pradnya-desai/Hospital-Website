import axios from 'axios'
export default axios.create({
baseURL:"http://localhost:8282/Hospital",
headers:{
"Content-type":"application/json"
}
})