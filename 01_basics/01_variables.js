const accountid = 123456
let accountemail = "suresh@gmail.com"
var accountpassword = "1234567"
accountcity = "jaipur"
let accountstate;



// accountid = 258369  //not allowed
accountemail = "suresh87@gmail.com"
accountpassword = "258741"
accountcity = "pune"

// prefer not to use var because of issue in block scop and functional scop************************************ 


console.table([accountemail,accountid,accountpassword,accountcity,accountstate]);
console.log(accountid);