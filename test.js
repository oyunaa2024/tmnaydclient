const dayjs = require("dayjs");


let now = dayjs();
let d1 = dayjs(now.format("YYYY-MM-DD"));

console.log(now.format("YYYY-MM-DD HH:mm"))
console.log(d1.format("YYYY-MM-DD HH:mm"))

let df1 = now.diff(d1, "minute");
// let df2 = now.diff(d1, "minutes");

console.log(Math.floor(df1 / 30) + 1)
// console.log(df2)