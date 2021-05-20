import axios from 'axios'

export default axios.create({
  baseURL: "https://node-scrumlogger-api.herokuapp.com/api/",
  headers: {
    "Content-type": "application/json"
  }
})