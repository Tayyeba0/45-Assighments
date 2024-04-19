"use strict";
// loop through the new-users list to see if each new user name has already been used
let currentUser = ['TaHa', 'DaNiyal', 'SalMan', 'Hamzah', 'John'];
let newUsers = ['Bilal', 'TaHa', 'Dawood', 'Jameel', 'Hamzah'];
newUsers.forEach(newUsersname => {
    let lowerCase = newUsersname.toLowerCase();
    if (currentUser.map(c_user => c_user.toLowerCase()).includes(lowerCase)) {
        console.log(`The username ${newUsersname} is not available .please write different username`);
    }
    else {
        console.log(` The username ${newUsersname} is available.`);
    }
});
