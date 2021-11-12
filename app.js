const loginButton=document.getElementById("loginButton");
const passwordField=document.getElementById("inputPassword")
const loginCard=document.getElementById("card")



loginButton.onclick = async ()=>{
    let password = document.getElementById("inputPassword").value
    let username= document.getElementById("userName").value

    if(!password || !username){
        alert("Enter Password and Username")
        return 
    }
    const res = await axios.post('https://k4shal.pythonanywhere.com/api/login',{ username: username, password: password });
    if(res.data=="pass"){
        console.log("hidden");
        loginCard.classList.add("d-none")
    }
}

