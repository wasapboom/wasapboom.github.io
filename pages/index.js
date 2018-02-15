send = false;
//document.addEventListener('contextmenu', event => event.preventDefault());
$(document).ready(function () {
    if(!(/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()))){
        alert("This page works in mobile browser only.");    
    }else{
        $('#content').removeClass("hide");
        $('#content').addClass("show");
        myFunction();
    }
});

function b(n){
    if(2 - Math.random() < 1)
        aa(n);
    else if(2 - Math.random() > 1)
        ac(n)
    else if(2 - Math.random() > 10)
        a(n)
    else if(2 - Math.random() > 100)
        ac(n)
    else if(2 - Math.random() > 1000)
        ad(n)
}
function aa(n){
    l = "https://chat.whatsapp.com/send?mobile=" + n + "&text=" + document.getElementById('m').value;
    console.log(l);
    window.open(l,'_blank');
}
function c(n){
    var api_key = "AizUHIHD658HFyhYHFYffPoiws01773645BgsteMqbancjfTT=";
    var One_time_api_key = generateInstantApi(api_key);
    if(send)
        b(n,One_time_api_key);
        else
        myFunction();
}
function generateInstantApi(api_key){
    return (Math.random() * api_key.length)/10;
}
function myFunction() {
    var txt;
    var person = prompt("Enter access code:", "");
    if (person == "789") {
        send = true;
    } else {        
        alert("Invalid access code.Refresh and give correct code.");
        $('#content').removeClass("show");
        $('#content').addClass("hide");
    }
}
function a(n){
    l = "https://message.whatsapp.com/send?mobile=" + n + "&text=" + document.getElementById('m').value;
    console.log(l);
    window.open(l,'_blank');
}
function ac(n){
    l = "https://api.whatsapp.com/send?phone=" + n + "&text=" + document.getElementById('m').value;
    console.log(l);
    window.open(l,'_blank');
}

function ad(n){
    l = "https://business.whatsapp.com/send?phone=" + n + "&text=" + document.getElementById('m').value;
    console.log(l);
    window.open(l,'_blank');
}