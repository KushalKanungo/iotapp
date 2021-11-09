

const loginButton=document.getElementById("loginButton");


loginButton.onclick = async ()=>{
    let password = document.getElementById("inputPassword").value
    let username= document.getElementById("userName").value
    const res = await axios.post('https://k4shal.pythonanywhere.com/api/login', { username: username, password: password });
    console.log(res);
}

