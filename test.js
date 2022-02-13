require('dotenv').config()

const {
    getAuthToken,
    getSpreadSheet,
    getSpreadSheetValues,
    appendSpreadSheetValues
  } = require('./googleService.js');
  
  const spreadsheetId = process.env.GOOGLE_SPREAD_SHEET_ID
  const sheetName = process.env.GOOGLE_SHEET_NAME
  
  async function testGetSpreadSheet() {
    try {
      const auth = await getAuthToken();
      const response = await getSpreadSheet({
        spreadsheetId,
        auth
      })
      console.log('output for getSpreadSheet', JSON.stringify(response.data, null, 2));
    } catch(error) {
      console.log(error.message, error.stack);
    }
  }
  
  async function testGetSpreadSheetValues() {
    try {
      const auth = await getAuthToken();
      const response = await getSpreadSheetValues({
        spreadsheetId,
        sheetName,
        auth
      })
      console.log('output for getSpreadSheetValues', JSON.stringify(response.data, null, 2));
    } catch(error) {
      console.log(error.message, error.stack);
    }
  }
  

  async function testAppendSpreadSheetValues() {
    try {
      const auth = await getAuthToken();

      const resource = {
        values: [["2022-02-13 05:24:25", "867553057962847", "New value 3003:;3004:;"]],
    }
      
      const response = await appendSpreadSheetValues({
        spreadsheetId,
        sheetName,
        auth,
        resource
      })
      console.log('output for getSpreadSheetValues', JSON.stringify(response.data, null, 2));
    } catch(error) {
      console.log(error.message, error.stack);
    }
  }
  function main() {
    testGetSpreadSheet();
    testGetSpreadSheetValues();
    testAppendSpreadSheetValues()
  }
  
  main()