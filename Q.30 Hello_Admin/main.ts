// array of users

const userNames: string[] = ['Admin','Asad','Umar','Muhammad'];

userNames.forEach(userNames => {
    if(userNames === 'Admin'){
        console.log('Hello Admin,would you like to see a status report?');
    }
    else{
        console.log(`Hello ${userNames}, thank you for logging in again.`);
    }
})