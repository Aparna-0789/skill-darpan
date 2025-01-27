

let password=prompt("Enter your password:");

if(password.length<8){
   alert("Password must be of atleast 8 characters");

}
if(!/[A-Z]/.test(password)) {
alert("Password must contain atleast one uppercase letter.");
}
if(!/[0-9]/.test(password)) {
    alert("Password must contain at least one number.");

}

else{
    alert("Password is valid");
}

