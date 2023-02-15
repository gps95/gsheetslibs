function newday() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('2:2').activate();
  spreadsheet.getActiveSheet().insertRowsBefore(spreadsheet.getActiveRange().getRow(), 1);
  spreadsheet.getActiveRange().offset(0, 0, 1, spreadsheet.getActiveRange().getNumColumns()).activate();
  spreadsheet.getRange('A3:A4').activate();
  spreadsheet.setCurrentCell(spreadsheet.getRange('A4'));
  spreadsheet.getActiveRange().autoFill(spreadsheet.getRange('A2:A4'), SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES);
  spreadsheet.getRange('B2').activate();
};