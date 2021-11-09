const loginButton=document.getElementById("loginButton");
const passwordField=document.getElementById("inputPassword")



loginButton.onclick = async ()=>{
    let password = document.getElementById("inputPassword").value
    let username= document.getElementById("userName").value

    if(!password || !username){
        alert("Enter Password and Username")
        return 
    }
    const res = await axios.post('https://k4shal.pythonanywhere.com/api/login',{ username: username, password: password });
    alert(res.data)
}

