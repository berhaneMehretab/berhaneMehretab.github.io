"use strict"
$(document).ready(function(){
   $("#formNewAccount").on("submit", function(e) {
 e.preventDefault();
 const acctNo = $('#txtAccountNo').val();
 const cstmName = $('#txtCustomerName').val();
 const acctType = $('#ddlAccountType').val();
 console.log(acctNo, cstmName, acctType);

   })
})
