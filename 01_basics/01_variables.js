const AccountId = 221919
var AccountPass = 95925 
let AccountEmail = "shivamkamal3379@gmail.com"
AccountCity = "rajpura "
let account_state 
//AccountId = 6  cant be changes - not allowed 
console.log(AccountId);
console.table([AccountId , AccountEmail,AccountPass, AccountCity , account_state]) // used for multiple output in a tabled structured in console
// account state as not assigned yet will be shown as undefined in the console 
   /*
    never use var beacuse of issue in block scope and  functional scope 
   */
  AccountPass = 94787
  AccountEmail = "shivamkamal221919@gmail.com"
AccountCity = "chandigarh "
console.table([AccountId , AccountEmail,AccountPass, AccountCity])
