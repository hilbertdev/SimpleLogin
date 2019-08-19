const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const userName = document.getElementById('userName');
const passWord = document.getElementById('passWord');
const conFirm = document.getElementById('conFirm');
const form = document.getElementById('getForm');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    var name = firstName.value;
    var surName = lastName.value;
    var confirm = conFirm.value;
    var password = passWord.value;
    var usrName = userName.value;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'process.php?'+ 'username='+usrName + '&last-name=' +surName +'&first-name='+name+'&password='+ password, true); 
    xhr.onload = () => {
       
       console.log(xhr.responseText);
    }
    if(password !== confirm)
        {
            alert('passwords do not match!');
        }
        else{
            xhr.send();
        } 
  
       
});