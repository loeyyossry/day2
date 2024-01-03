var arr =[{username:"loey" , password : "password@#1"}]
console.log(arr)
function validlogin() {
    var username = document.getElementById('username').value;
    var pass = document.getElementById('password').value;

    var data = [{
        username: arr.user,
        password: arr.pass
    }]
   data.forEach(function (element) {
    if(username === element.username && pass === element.password){
      alert('no no no this app is m7tarm ')
     
    }
    else {
      alert('login successful!!!!')
      location.href="loey_quz.html";
    
    }
   });
}

function validform() {
    var username = document.getElementById('username');
    var pass = document.getElementById('password').value;
    var confirmpass = document.getElementById('confirmpassword').value;
    var Phone = document.getElementById('Phone');
    var male_radio = document.getElementById('male_radio');
    var female_radio = document.getElementById('female_radio');
    var city_select = document.getElementById('city_select');
    var age =document.getElementById('age');
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_]).{8,16}$/;

    if (!regex.test(pass)) {
        alert('The password is missing some requirements');
        return;
    }
    if (18>age <60)
    {
      return
    } 
    else{
      alert('the age is invlid ')
    }
    if (pass !== confirmpass) {
        alert('Password is not matching');
        return;
    }
    if(male_radio.checked){
        female_radio =""
    }
    else{
        male_radio = ""
    }

    var data = {
        user: username.value,
        pass: pass,
        confirmpass: confirmpass,
         Phone_number: Email.value,
        male_radio: male_radio.value,
        female_radio: female_radio.value,
        city: city_select.value
    };

    arr.push(data);
    alert('Sign up successfully');
    console.log(arr);
    

}
  function resetPassword() {
 
    var lusr = document.getElementById('lusr').value;
    var lpass= document.getElementById('lpass').value;
    for (var i=0; arr.length;i++)
    {
      if (arr[i].username==lusr)
      {
        arr[i].password=lpass;
        alert("sus")
      }
    }
  }