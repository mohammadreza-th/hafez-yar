// بسم الله الرحمن الرحیم


const allPages = 604;
const allLines = 602 * 15 + 8 * 2;
let lines = document.getElementById("lines");
let pages = document.getElementById("pages");
let pagesDuration = document.getElementById("pages__duration");
let linesDuration = document.getElementById("lines__duration");
linesDuration.innerHTML = linesToDays(lines.value);
pagesDuration.innerHTML = pagesToDays(pages.value);


function linesToDays(hafezLines) {
  if (hafezLines == 0 || undefined) {
    return "(لطفا در وارد کردن تعداد صفحات دقت فرمایید)";
  } else {
    let allDays = allLines / hafezLines;
    let years = Math.floor(allDays / 365);
    let extraDays = allDays % 365;
    let monthes = Math.floor(extraDays / 30);
    let days = Math.floor(extraDays % 3) + 1;
    return `${years !== 0 ? `${years} سال و` : ""} 
    ${monthes !== 0 ? `${monthes} ماه و` : ""} 
    ${days !== 0 ? `${days} روز` : ""}`;
  }
}
function pagesToDays(hafezPages) {
  if (hafezPages == 0 || undefined) {
    return "(لطفا در وارد کردن تعداد صفحات دقت فرمایید)";
  } else {
    let allDays = allPages / hafezPages;
    let years = Math.floor(allDays / 365);
    let extraDays = allDays % 365;
    let monthes = Math.floor(extraDays / 30);
    let days = Math.floor(extraDays % 3) + 1;
    return `${years !== 0 ? `${years} سال و` : ""} 
    ${monthes !== 0 ? `${monthes} ماه و` : ""} 
    ${days !== 0 ? `${days} روز` : ""}`;
  }
}

lines.addEventListener("keyup", () => {
  linesDuration.innerHTML = linesToDays(lines.value);
});
pages.addEventListener("keyup", () => {
  pagesDuration.innerHTML = pagesToDays(pages.value);
});
