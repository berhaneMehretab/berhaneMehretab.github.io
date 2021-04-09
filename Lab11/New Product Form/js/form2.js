"use strict"
var count = 3;
$(document).ready(function(){
   $("#main-form").on("submit", function(e) {
 e.preventDefault();
 
 const prdctNumber = $('#inputprodNber4').val();
 const qqt = $('#inputqqt4').val();
 const name = $('#inputname4').val();
 const supplier = $('#select').val();
 const unitPrce = $('#inputprice4').val();
 const sppldate = $('#inputdate4').val();

 const table = $('#main-table');
 const newRecord = $('#main-table').find('tbody')
      .append(`<tr><td>${++count}</td><td>${prdctNumber}</td><td>${qqt}</td><td>${name}</td><td>${supplier}</td>
      <td>${unitPrce}</td><td>${sppldate}</td></tr>`);
      table.show().append(newRecord);
   })
})
