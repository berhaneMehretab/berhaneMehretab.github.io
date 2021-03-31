function clockDisplay(){
    const nowDate = new Date();
    document.getElementById("clockticker").innerText=nowDate;
}
setInterval(clockDisplay,1000);
