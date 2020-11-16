let myname= localStorage.getItem('username');
let mynumber= localStorage.getItem('usernumber');
let myemail= localStorage.getItem('useremail');

let result_name= document.getElementById('result-name');
let result_number= document.getElementById('result-number');
let result_email= document.getElementById('result-email');


result_name.innerHTML= myname;
result_number.innerHTML= mynumber;
result_email.innerHTML= myemail;