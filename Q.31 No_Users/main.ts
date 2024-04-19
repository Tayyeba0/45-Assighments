// add an if test to Exercise 28 to make sure the list is not empty

let userName : string[] = ['admin','umar','asad','muhammad'];

if(userName.length === 0){
    console.log('we need to find some users!');
}
else{
    userName = [];
    console.log('All user names have been removed. '+ userName.length);
}