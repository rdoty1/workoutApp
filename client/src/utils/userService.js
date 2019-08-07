import axios from 'axios';

export default {

    // get all users

    findUser: function(userData) {
        return axios.get("/api/users", userData)
    },






    // create a user 
    createUser: function(userData) {
        return axios.post("/api/users", userData)
    }

}