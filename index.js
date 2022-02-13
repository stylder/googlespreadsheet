const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()

const {
    getAuthToken,
    getSpreadSheet,
    getSpreadSheetValues,
    appendSpreadSheetValues
} = require('./googleService.js');

// create a express application
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// to Allow CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});


//GLOBAL SETTINGS

const spreadsheetId = process.env.GOOGLE_SPREAD_SHEET_ID
const sheetName = process.env.GOOGLE_SHEET_NAME

/**
 * 
 */
app.get('/spread-sheet', async (req, res) => {

    try {
        const auth = await getAuthToken();
        const { data } = await getSpreadSheet({
            spreadsheetId,
            auth
        })

        res.json({ 'status': 200, data });

    } catch (error) {
        res.json({ 'status': 500, error: error.message });
    }

});

/**
 * 
 */
app.get('/spread-sheet-values', async (req, res) => {

    try {
        const auth = await getAuthToken();
        const { data } = await getSpreadSheetValues({
            spreadsheetId,
            sheetName,
            auth
        })

        res.json({ 'status': 200, data });

    } catch (error) {
        res.json({ 'status': 500, error: error.message });
    }

});


/**
 * 
 */
app.post('/append-spread-sheet-values', async (req, res) => {

    try {
        const auth = await getAuthToken();
        
        const { A, B, C } = req.query

        const resource = {
            values: [[A, B, C]]
        }

        const { data } = await appendSpreadSheetValues({
            spreadsheetId,
            sheetName,
            auth,
            resource
        })

        res.json({ 'status': 200, data });

    } catch (error) {
        res.json({ 'status': 500, error: error.message });
    }
});

let PORT = process.env.PORT_SERVER || 8888;

app.listen(PORT);

console.log('Server running on: ', PORT);
