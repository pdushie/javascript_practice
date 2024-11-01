// userService will be responsible for handling our users  or customers
const users = [];
let userId = 0;

function createUser(userName, age) {
    userId += 1;
    
    userDetails = {
        userId,
        userName,
        age
    }

    // push user details into array (this will be replaced with a database in next version)
    users.push(userDetails);
    
    // return the newly created user's ID after creating the user
    // each time a user is created we will get the user ID to associate it with user's order
    return userDetails.userId;
}

function showUsers(){
    return users;
}
module.exports = {
    createUser,
    showUsers
}


