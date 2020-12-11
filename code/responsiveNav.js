function myfuntion(){
    var x = document.getElementById("topnav");
    if(x.className === "sidebar_nav-container"){
        x.className += " responsive";
    } else{
        x.className = "sidebar_nav-container"
    }
}

function margin(){
    var x = document.getElementById("topnav");
    if(x.className === "movies_container"){
        x.className += " responsive2";
    } else{
        x.className = "movies_container";
    }
}