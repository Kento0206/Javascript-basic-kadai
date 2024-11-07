const today = new Date();
const year = today.getFullYear();
let month = today.getMonth();
let day = today.getDate()
month = month + 1;
console.log(year + "年" + month + "月" + day + "日");