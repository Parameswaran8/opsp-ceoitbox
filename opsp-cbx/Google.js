// This code goes in Google Apps Script connected to your Google Sheet

function doPost(e) {
  try {
    // Parse the JSON data received from the form
    const data = JSON.parse(e.postData.contents);

    // Get the active spreadsheet and the first sheet
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheets()[0];

    // Add timestamp to the data
    const timestamp = new Date();

    // Append the data to the sheet
    sheet.appendRow([
      timestamp,
      data.companyName,
      data.companyUrl
    ]);

    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// This function handles OPTIONS requests for CORS
function doGet(e) {
  return HtmlService.createHtmlOutput("The web app is running correctly.");
}