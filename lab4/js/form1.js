/**
 * form1.js
 */
"use strict"
$(document).ready(function(){

    $("#myForm").on("submit",function (event) {
        event.preventDefault();
        
        const name=$('.in').val();
        const password=$("#password").val();
        const url =$("#url").val();

        console.log(name , password , url );

    })
})