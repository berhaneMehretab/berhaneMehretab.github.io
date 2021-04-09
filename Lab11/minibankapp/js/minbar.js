"use strict"
var count = 2;
$(document).ready(function(){
   $("#formNewAccount").on("submit", function(e) {
 e.preventDefault();
 


 const acctNo = $('#txtAccountNo').val();
 const cstmName = $('#txtCustomerName').val();
 const acctType = $('#ddlAccountType').val();
 //const countss = $('#nmbers').val()
 //const table = $('#tblAccounts');
 //const newRecord = $('#tblAccounts').find('tbody')
 //const rowID = `${++countss}`
 const newRecord = $('#tblAccounts').find('tbody');
 newRecord.append(`<tr><td>${++count}</td><td>${acctNo}</td><td>${cstmName}</td><td>${acctType}</td></tr>`);
      //table.show().append(newRecord);

      $('#txtAccountNo').val("");
      $('#txtCustomerName').val("");
      $('#ddlAccountType').val("");

      //  for(let i=0; i<tr.length; i++){
      //    let td = tr[i].$(`#td`)[2];
      //     if(this.checked&&td.textContet==="saving"){
      //        tr[i].style.display="none";
      //     }
      //     else{
      //        tr[i].style.display="";
      //     }
      //  }
   })
})
