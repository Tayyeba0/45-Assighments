// loop through the new-users list to see if each new user name has already been used
let currentUser: string[] = ['TaHa','DaNiyal','SalMan','Hamzah','John'];

let newUsers: string[] = ['Bilal','TaHa','Dawood','Jameel','Hamzah'];

newUsers.forEach(newUsersname => {
    let lowerCase: string = newUsersname.toLowerCase();
    if(currentUser.map(c_user => c_user.toLowerCase()).includes(lowerCase)
    ){
console.log(`The username ${newUsersname} is not available .please write different username`);
}
else{
    console.log(` The username ${newUsersname} is available.`)
}
});