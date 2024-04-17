let email1 = '';
let password1 = '';
let name1 = '';
function Submit1(){
    email1 = document.getElementById("email1").value;
    password1 = document.getElementById("password1").value;
    name1 = document.getElementById("name1").value;
    let regex1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
    let regex2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if(email1 === '' || password1 === '' || name1 === ''){
        alert('fields empty');
        return;
    }
    // regex : email ---
    else if(!regex1.test(email1)){
        alert('Check Email');
        return;
    }
    // regex : password ---
    else if(!regex2.test(password1)){
        alert('Check Password')
        return;
    }
    else{
        alert("okie");
        alert(email1 + "\n" + password1 + "\n" + name1);
        localStorage.setItem("email1",email1);
        localStorage.setItem("password1",password1);
        localStorage.setItem("name1",name1);

        window.location.href = "Login.html";
    }
}

function Submit2(){
    email1 = localStorage.getItem("email1");
    password1  = localStorage.getItem("password1");
    name1 = localStorage.getItem("name1");
    let email2 = '';
    let password2 = '';
    email2 = document.getElementById("email2").value;
    password2 = document.getElementById("password2").value;

    if(email1 === email2 && password1 === password2){
        alert('Welcome : ' + name1);
        window.location.href = "http://www.example.com";
    }else{
        alert('Check the Fields!');
        return;
    }

}
