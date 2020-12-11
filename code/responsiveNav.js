
function myfuntion(){
    var x = document.getElementById("topnav");
    if(x.className === "sidebar_nav-container"){
        x.className += " responsive change ";
    } else{
        x.className = "sidebar_nav-container"
    }
   
}
