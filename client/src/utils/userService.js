import axios from 'axios';

export default {

    // get all users
    // create a user 
    createUser: function(userData) {
        return axios.post("/api/users", userData)
    }

}