const moment = require('moment-timezone');
moment.tz.setDefault('America/Los_Angeles');

let targetedtimezone;
if(process.argv.length != 3)
{
    console.log("Usage: node <script-file> <timezone>");
    process.exit(1);
}
else{
 targetedtimezone = process.argv[2];
}
console.log(targetedtimezone)
console.log(`The time at the ${targetedtimezone} timezone is ${moment().tz(targetedtimezone).format()}`);