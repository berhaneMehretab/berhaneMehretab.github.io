"use strict"
$(document).ready(function(){
    $("#main-form").on("submit", function(e){
        e.preventDefault();

        const mail = $("#email").val();
        const pssd = $("#password").val();
        const url = $("#url").val();

        console.log(mail, pssd, url);
         

    })
    

})