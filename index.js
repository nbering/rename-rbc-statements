#!/usr/bin/env node

var fs = require("fs");
var moment = require("moment");

var statementRegex = /^.(.*)-([0-9]{4}(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[0-9]{2})-([0-9]{4}(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[0-9]{2})\.pdf$/;

var oldDateFormat = "YYYYMMMDD"; // "2016Jan29"

var newDateFormat = "YYYY-MM-DD"; // "2016-01-29"

function formatNew(start, end, account){
    var out = start.format(newDateFormat);
    out += " to ";
    out += end.format(newDateFormat);
    out += " ";
    out += account;
    out += ".pdf";
    return out;
}

var files = fs.readdirSync(process.cwd());
var counter = 0;
files.forEach(filename => {
    console.log("---");
    console.log("");
    console.log("Current Name:" + filename);
    console.log("Matches Format: " + statementRegex.test(filename));
    var match = statementRegex.exec(filename);
    if (match){
        counter++;
        var startDate = moment(match[2], oldDateFormat),
            endDate = moment(match[3], oldDateFormat),
            account = match[1],
            newName = formatNew(startDate, endDate, account);
        console.log("");
        console.log("Account: " + account);
        console.log("Start Date:" + startDate.format());
        console.log("End Date: " + endDate.format());
        console.log("");
        console.log("New Filename: " + newName);
        fs.renameSync(filename, newName);
    }
    console.log("");
    console.log("---");
});
console.log("");
console.log("Renamed " + counter + " files.");