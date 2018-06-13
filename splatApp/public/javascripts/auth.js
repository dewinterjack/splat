window.onload = function(){
    const authButton = document.getElementById("authButton");
    authButton.addEventListener('click', function(e){
        console.log("Auth!");
        fetch('/auth', {method: 'POST'})
        .then(function(response){
            if(response.ok){
                console.log("Auth started...");
                return;
            }
            throw new Error('Request failed.');
        })
        .catch(function(error){
            console.log(error)
        });
    })
}

