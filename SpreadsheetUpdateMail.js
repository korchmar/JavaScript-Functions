function myOnEdit(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var sname = sheet.getName();
  var cellNumber = ss.getActiveCell().getColumn();
  if (sname == "SomeSheetName"){
  if (cellNumber==7) {
    var cellValue = ss.getActiveCell().getValue();
  var emailAddress = "email@gmail.com";  
     
  var subject = "subject: " + cellValue;
  MailApp.sendEmail(emailAddress, subject, cellValue);
  }
}
}
