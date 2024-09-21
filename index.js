function display(){
    var a = document.getElementById('email').value;
    var b = document.getElementById('password').value;

    if(a=='srikhar' && b=='1234'){
        window.location.assign('./newpage.html');
    }
    else{
        alert("wrong details");
    }
}


function signin(){
    var a = document.getElementById('email').value;
    var b = document.getElementById('password').value;
    var c = document.getElementById('re-password').value;

    if(a=='srikhar' && b=='1234' && c=='1234'){
        window.location.assign('./newpage.html')
    }
    else{
        alert("wrong details,please enter again.")
    }
}