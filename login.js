const username = document.getElementById('username');
const password = document.getElementById('password');
const loginForm = document.getElementById('logon');

//Event Handlers  
loginForm.addEventListener('submit', (e)=>{
  
    e.preventDefault();
    //variables 
    
    if(username.value === password.value === '' || password.value === '' || username.value === ''){
       
        alert('Username or Password not entered');
    }
    else {
    var user = username.value;
    var pass = password.value; 
    //
   //AJAX
     var xhr = new XMLHttpRequest();
     xhr.open('GET', 'login.php?'+ 'username=' + user + '&password=' + pass, true);
     xhr.onload = ()=>{
         console.log(xhr.responseText);
         alert(xhr.responseText);
     }
   
    xhr.send();
    }
    
   //End
});