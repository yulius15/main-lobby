
onRegister =()=>{

const username = document.getElementById('username').value;
var password = document.getElementById('password').value;
var confirmPassword = document.getElementById('confirmPassword').value;

localStorage.setItem('username', username);
localStorage.setItem('password', password);
localStorage.setItem('confirmPassword1', confirmPassword);

if(username =="" && password =="" && confirmPassword =="") {
    swal("Opps..!", "Input field has no value!", "error");
} else {
    if(password !== confirmPassword){
        swal("Opps..!", "password not matching!", "error");
    } else {
        swal("Good job!", "register successful!", "success");
        
    }
}


}

function login() {
    

    const username1 = document.getElementById('username').value;
    const password1 = document.getElementById('password').value;

    const username =localStorage.getItem("username");
    const password =localStorage.getItem("password");

    if(username1 =="" && password1 =="") {
        swal("Opps..!", "Input field has no value!", "error");
    }else{
        if(username1 == username && password1 == password){
            swal("Good job!", "register successful!", "success");
            localStorage.clear();
        }else{
            swal("Opps..!", "Something is wrong!", "error");
        } 
    }

}


