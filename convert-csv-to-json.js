/*
Node script to convert .csv crash data to json.
*/

const csvToJson = require('convert-csv-to-json');

const input = './crash-data.csv';
const output = './public/crashdata.json';

csvToJson.fieldDelimiter(',').formatValueByType().generateJsonFileFromCsv(input, output);