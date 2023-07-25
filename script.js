// بسم الله الرحمن الرحیم

let lines = document.getElementById('lines');
let pages = document.getElementById("pages");
let pagesDuration = document.getElementById("pages__duration")
let linesDuration = document.getElementById("lines__duration")


const allPages = 604;
const allLines = 602 * 15 + 8 * 2;

function linesToDays(hafezLines) {
  if (hafezLines === undefined|| 0) {
return "(لطفا در وارد کردن تعداد سطر ها دقت فرمایید)"
  }
  let allDays = allLines / hafezLines;
  let years = Math.floor(allDays/365)
  let extraDays = allDays%365
  let monthes = Math.floor(extraDays/30)
  let days = Math.floor(extraDays%3) + 1
  return `${years!==0 ? `${years} سال`:true} و
  ${monthes!==0 ? `${monthes} ماه`:true} و 
  ${days!==0 ? `${days} روز`:true}`;
}
function pagesToDays(hafezPages) {
  if (hafezPages === undefined|| 0) {
    return "(لطفا در وارد کردن تعداد صفحات دقت فرمایید)"
      }
  let allDays = allPages / hafezPages;
  let years = Math.floor(allDays/365)
  let extraDays = allDays%365
  let monthes = Math.floor(extraDays%30)
  let days = Math.floor(extraDays%3) + 1
  return `${years!==0 ? `${years} سال`:true} و
  ${monthes!==0 ? `${monthes} ماه`:true} و 
  ${days!==0 ? `${days} روز`:true}`;
}


lines.addEventListener("keyup", ()=>{
linesDuration.innerHTML = linesToDays(lines.value)}
)
pages.addEventListener("keyup", ()=>{
pagesDuration.innerHTML = pagesToDays(pages.value)}
)
console.log(Math.floor(800%365));