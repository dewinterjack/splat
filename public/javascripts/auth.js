window.onload = function(){
    const authButton = document.getElementById("authButton");
    authButton.addEventListener('click', function(e){
        console.log("Auth!");
        window.location.href = '/auth';
    })
}

